#!/bin/bash

# HENQ Technologies - Firebase Functions Deployment Script

echo "🚀 Deploying HENQ Technologies Firebase Functions..."

# Set environment variables (you can set these in Firebase Console instead)
# firebase functions:config:set email.user="your-email@gmail.com"
# firebase functions:config:set email.pass="your-app-password"

# Deploy functions
firebase deploy --only functions

echo "✅ Functions deployed successfully!"
echo ""
echo "📝 Don't forget to:"
echo "1. Set up email configuration in Firebase Console:"
echo "   firebase functions:config:set email.user=\"your-email@gmail.com\""
echo "   firebase functions:config:set email.pass=\"your-app-password\""
echo ""
echo "2. Update the function URL in ContactPage.tsx after first deployment"
echo ""
echo "3. Set up Firestore database and deploy rules:"
echo "   firebase deploy --only firestore"