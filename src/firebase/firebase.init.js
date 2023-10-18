// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtM5fPdj0TGaugmiLc_e0MBo9Kx8TqNmk",
  authDomain: "gadget-junction.firebaseapp.com",
  projectId: "gadget-junction",
  storageBucket: "gadget-junction.appspot.com",
  messagingSenderId: "278834656743",
  appId: "1:278834656743:web:69bb5d25b11c7cb203b942"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export default app