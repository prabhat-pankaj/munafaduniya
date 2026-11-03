// Firebase web configuration.
//
// 1. Create a project at https://console.firebase.google.com
// 2. Add a Web app and copy the config values below.
// 3. Enable Authentication providers you want (Email/Password, Google, Phone).
// 4. Add your deployed domain and localhost under Authentication > Settings > Authorized domains.
//
// These values are public and safe to ship in a website. Never put a Firebase
// Admin SDK service-account key or other server secret in this file.

// Project: munafaduniya-68695
// Public Firebase web config. Never add a service-account key here.
export const firebaseConfig = {
  apiKey: "AIzaSyDIXAd5EkLy6j9jMIIYAYWOOgFYsUORNCU",
  authDomain: "munafaduniya-68695.firebaseapp.com",
  projectId: "munafaduniya-68695",
  storageBucket: "munafaduniya-68695.firebasestorage.app",
  messagingSenderId: "556355159585",
  appId: "1:556355159585:web:42e8c6d17555e6b4fd8560",
  measurementId: "G-NHS86CN671"
};

export const functionsRegion = "asia-south1";

export const firebaseReady = ["apiKey", "authDomain", "projectId", "appId"].every(
  function (key) {
    var value = String(firebaseConfig[key] || "");
    return value && value.indexOf("YOUR_") !== 0;
  }
);
