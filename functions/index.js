const {onRequest} = require("firebase-functions/v2/https");
const {defineSecret} = require("firebase-functions/params");
const {logger} = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

// Initialize Firebase Admin
admin.initializeApp();

// Define secrets for email credentials
const emailUser = defineSecret("EMAIL_USER");
const emailPass = defineSecret("EMAIL_PASS");

// Create transporter for sending emails
const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: emailUser.value(),
      pass: emailPass.value(),
    },
  });
};

// Validate email format
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Sanitize input to prevent XSS
const sanitizeInput = (input) => {
  if (typeof input !== "string") return "";
  return input
    .replace(/[<>]/g, "") // Remove potential HTML tags
    .trim()
    .substring(0, 1000); // Limit length
};

// Main contact form handler
exports.contactFormSubmit = onRequest({
  region: "europe-west3",
  secrets: [emailUser, emailPass],
  cors: {
    origin: [
      "http://localhost:3000",
      "http://localhost:3001", 
      "https://henq-technologies.com",
      "https://henq-web.web.app",
      "https://henq-web.firebaseapp.com"
    ],
    methods: ["POST"],
  },
}, async (req, res) => {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      error: "Method not allowed. Use POST.",
    });
  }

  try {
    // Extract and validate form data
    const {name, email, message, consent, newsletter, language} = req.body;

    // Validation
    if (!name || !email || !message || !consent) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields: name, email, message, consent",
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        error: "Invalid email format",
      });
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      message: sanitizeInput(message),
      newsletter: Boolean(newsletter),
      language: sanitizeInput(language) || "de",
      timestamp: new Date().toISOString(),
    };

    let docRefId = "local_test_id"; // Default for local testing

    // Only attempt to save to Firestore if not running in emulator or if Firestore emulator is explicitly running
    // This prevents errors when Firestore emulator is not active locally
    if (process.env.FUNCTIONS_EMULATOR === "true" && !process.env.FIRESTORE_EMULATOR_HOST) {
      logger.warn("Skipping Firestore write: Running in Functions emulator without Firestore emulator.");
    } else {
      const docRef = await admin.firestore().collection("contacts").add(sanitizedData);
      docRefId = docRef.id;
      logger.info("Contact form submission saved to Firestore", {
        id: docRefId,
        email: sanitizedData.email,
        language: sanitizedData.language,
      });
    }

    // Send email notification
    try {
      const transporter = createTransporter();

      // Email to company
      const companyEmailOptions = {
        from: emailUser.value(),
        to: "kontakt@henq-technologies.de",
        subject: `Neue Kontaktanfrage von ${sanitizedData.name}`,
        html: `
          <h2>Neue Kontaktanfrage</h2>
          <p><strong>Name:</strong> ${sanitizedData.name}</p>
          <p><strong>E-Mail:</strong> ${sanitizedData.email}</p>
          <p><strong>Sprache:</strong> ${sanitizedData.language}</p>
          <p><strong>Newsletter:</strong> ${sanitizedData.newsletter ? "Ja" : "Nein"}</p>
          <p><strong>Nachricht:</strong></p>
          <p>${sanitizedData.message.replace(/\n/g, "<br>")}</p>
          <hr>
          <p><small>Gesendet am: ${new Date(sanitizedData.timestamp).toLocaleString("de-DE")}</small></p>
        `,
      };

      // Confirmation email to user
      const userEmailOptions = {
        from: emailUser.value(),
        to: sanitizedData.email,
        subject: sanitizedData.language === "en" ? 
          "Thank you for your inquiry - HENQ Technologies" : 
          "Vielen Dank für Ihre Anfrage - HENQ Technologies",
        html: sanitizedData.language === "en" ? `
          <h2>Thank you for your inquiry!</h2>
          <p>Dear ${sanitizedData.name},</p>
          <p>We have received your message and will get back to you as soon as possible.</p>
          <p><strong>Your message:</strong></p>
          <p>${sanitizedData.message.replace(/\n/g, "<br>")}</p>
          <hr>
          <p>Best regards,<br>HENQ Technologies GbR Team</p>
          <p><small>This is an automated confirmation email.</small></p>
        ` : `
          <h2>Vielen Dank für Ihre Anfrage!</h2>
          <p>Liebe/r ${sanitizedData.name},</p>
          <p>Wir haben Ihre Nachricht erhalten und werden uns schnellstmöglich bei Ihnen melden.</p>
          <p><strong>Ihre Nachricht:</strong></p>
          <p>${sanitizedData.message.replace(/\n/g, "<br>")}</p>
          <hr>
          <p>Mit freundlichen Grüßen,<br>HENQ Technologies GbR Team</p>
          <p><small>Dies ist eine automatische Bestätigungsmail.</small></p>
        `,
      };

      // Send emails
      await Promise.all([
        transporter.sendMail(companyEmailOptions),
        transporter.sendMail(userEmailOptions),
      ]);

      logger.info("Emails sent successfully", {id: docRefId});
    } catch (emailError) {
      logger.error("Failed to send emails", {
        error: emailError.message,
        id: docRefId,
      });
      // Don't fail the entire request if email fails
    }

    // Success response
    return res.status(200).json({
      success: true,
      message: sanitizedData.language === "en" ? 
        "Thank you for your message! We will get back to you soon." :
        "Vielen Dank für Ihre Nachricht! Wir melden uns bald bei Ihnen.",
      id: docRefId,
    });

  } catch (error) {
    logger.error("Contact form error", {
      error: error.message,
      stack: error.stack,
    });

    return res.status(500).json({
      success: false,
      error: "Internal server error. Please try again later.",
    });
  }
});

// Health check endpoint
exports.apiHealthCheck = onRequest({
  region: "europe-west3"
}, (req, res) => {
  res.status(200).json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    version: "1.0.0",
  });
});
