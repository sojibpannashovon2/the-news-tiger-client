// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQJYfKd-e8BtY83-CDuRYIVWWE7zMbHNY",
    authDomain: "the-news-tiger-client.firebaseapp.com",
    projectId: "the-news-tiger-client",
    storageBucket: "the-news-tiger-client.appspot.com",
    messagingSenderId: "1028188508587",
    appId: "1:1028188508587:web:1c1a046c79f613dd8242ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;