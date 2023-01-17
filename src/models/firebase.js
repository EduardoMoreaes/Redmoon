const { initializeApp }  =  require("firebase/app");


const firebaseConfig = {
  apiKey: "AIzaSyBCv8QMaa0SHtART18sBu1501x7UnT76Do",
  authDomain: "redmoon-b07d4.firebaseapp.com",
  projectId: "redmoon-b07d4",
  storageBucket: "redmoon-b07d4.appspot.com",
  messagingSenderId: "710099964275",
  appId: "1:710099964275:web:de0f00b3d870bce6c3b506",
  measurementId: "G-BXHG5TVSXE"
};

const dataBase = initializeApp(firebaseConfig);

module.exports = dataBase;