// Variables
const root = document.getElementById("root");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCo-cBiuxP8b51DfUrnZ6nhh5GnEmTTfOU',
  authDomain: 'recipe-flavors.firebaseapp.com',
  databaseURL: 'https://recipe-flavors.firebaseio.com',
  projectId: 'recipe-flavors',
  storageBucket: 'recipe-flavors.appspot.com',
  messagingSenderId: '189830846641',
  appId: '1:189830846641:web:9fa159586edcb08eb5aa90',
  measurementId: 'G-GZN3FXHXLG',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


// LOGIN
const loginPage = () => {
  root.innerHTML = '';
  root.innerHTML = `<div id="login">
                    <input type="email" placeholder="Correo electronico" id="email" class="loginInput"/> 
                    <input type="password" placeholder="Contrasena" id="pass" class="loginInput"/>
                    <button id="loginBtn" class="button">Iniciar sesion</button>
                    </div>`;
};

loginPage();

document.getElementById('loginBtn').addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const pass = document.getElementById('pass').value;

  firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode);
  });
});