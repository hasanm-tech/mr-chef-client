// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.API_KEY='AIzaSyC80gA9ag1DHflqCac8jtTA6iK8K95m0rM',
  authDomain: import.meta.env.AUTH_DOMAIN='mr-chef-b5914.firebaseapp.com',
  projectId: import.meta.env.PROJECT_ID='mr-chef-b5914',
  storageBucket:import.meta.env.STORAGE_BUCKET='mr-chef-b5914.appspot.com',
  messagingSenderId:import.meta.env.MESSAGING_SENDER_ID='562719480853',
  appId: import.meta.env.APP_ID='1:562719480853:web:f1c4dee067f0816703421c'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;