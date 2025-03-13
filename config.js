// config.js - Template file in your repository
// This file will be processed during GitHub Actions deployment

if (typeof window !== "undefined") {
  window.firebaseConfig = {
      apiKey: "__FIREBASE_API_KEY__",
      authDomain: "__FIREBASE_AUTH_DOMAIN__",
      databaseURL: "__FIREBASE_DATABASE_URL__",
      projectId: "__FIREBASE_PROJECT_ID__",
      storageBucket: "__FIREBASE_STORAGE_BUCKET__",
      messagingSenderId: "__FIREBASE_MESSAGING_SENDER_ID__",
      appId: "__FIREBASE_APP_ID__"
  };
  
  console.log("Firebase configuration loaded");
}