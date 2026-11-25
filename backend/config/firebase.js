const admin = require('firebase-admin');
const path = require('path');

// Load service account key from environment variable
const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH || './config/serviceAccountKey.json';

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(require(path.resolve(serviceAccountPath)))
});

// Get Firestore instance
const db = admin.firestore();

module.exports = { db };

// const admin = require('firebase-admin');

// // Directly load JSON (no env, no path issues)
// const serviceAccount = require('./serviceAccountKey.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

// const db = admin.firestore();

// module.exports = { db };