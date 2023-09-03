const { initializeApp } = require("firebase/app");
const { getStorage } = require("firebase/storage");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrab1YvhZD_xsDqDL69VTQpnSfzdcluaM",
  authDomain: "image-store-32e17.firebaseapp.com",
  projectId: "image-store-32e17",
  storageBucket: "image-store-32e17.appspot.com",
  messagingSenderId: "94493848875",
  appId: "1:94493848875:web:8e19442f438ba93ba0816e",
  measurementId: "G-L4LD91WXY6"
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Export Firebase Storage instance
const storage = getStorage(firebaseApp);

module.exports = storage;
