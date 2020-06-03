import { firebaseConfig, signIn, firebaseAuthentication, createUserWithFirebase, googleLogin} from './firebase.js';

import { loginView, userRegisterPage } from './htmlcreator.js';



// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Initialize login page
loginView();

// Click login users
document.getElementById('loginBtn').addEventListener('click', () => {
  const emailA = document.getElementById('emailA').value;
  const passwordA = document.getElementById('passwordA').value;
  signIn(emailA, passwordA);
});

// Create users with firebase
const registerBtn = () => {
  document.getElementById('userRegisterBtn').addEventListener('click', () => {

    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    createUserWithFirebase(email, pass);
  });
};

document.getElementById('newAccount').addEventListener('click', () => {
  userRegisterPage();
  registerBtn();
});

document.getElementById('loginGoogleBtn').addEventListener('click',() => {
  googleLogin();
});
