// Variables
const root = document.getElementById('root');
const login = document.getElementById('login');

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

// AREA DE LOGIN
const loginPage = () => {
  login.innerHTML = '';
  login.innerHTML = `<div id="loginPage">
                    <h1>¡Bienvenido!</h1>
                    <h2>¡Comparte tu receta con nosotros!</h2>
                    <input type="email" placeholder="Correo electrónico" id="emailA" class="loginInput"/> 
                    <input type="password" placeholder="Contraseña" id="passwordA" class="loginInput"/>
                    <button id="loginBtn" class="button">Iniciar sesión</button>
                    <p>¿No tienes cuenta? Regístrate</p> <a href='#userRegisterPage' id="newAccount">Aquí</a>
                    </div>`;
};

loginPage();

// CLICK LOGIN
document.getElementById('loginBtn').addEventListener('click', () => {
  const emailA = document.getElementById('emailA').value;
  const passwordA = document.getElementById('passwordA').value;

  firebase.auth().signInWithEmailAndPassword(emailA, passwordA)
    .catch(function(error){
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
       });
});

//AREA DE LOGIN
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    const displayName = user.displayName;
    const email = user.email;
    const emailVerified = user.emailVerified;
    const photoURL = user.photoURL;
    const isAnonymous = user.isAnonymous;
    const uid = user.uid;
    const providerData = user.providerData;
    //document.getElementById('login').innerHTML=`<div><p>Estas regístrado ${user.email}</p></div>`
    console.log(user);
  } else {
    //document.getElementById('login').innerHTML=`<div><p>No estas regístrado</p></div>`
  }
}); 

// REGISTRO

const userRegisterPage = () => {
  root.innerHTML = '';
  root.innerHTML = `<div id="userRegisterPage">
                    <h1>Registrate</h1>
                    <input type="text" placeholder="Nombre" id="name" class="loginInput"/> 
                    <input type="email" placeholder="Correo electrónico" id="email" class="loginInput"/> 
                    <input type="password" placeholder="Contraseña" id="pass" class="loginInput"/>
                    <button id="userRegisterBtn" class="button">Crear cuenta</button>
                    </div>`;
};


document.getElementById('newAccount').addEventListener('click', () => {
  userRegisterPage();
});

document.getElementById('userRegisterBtn').addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const pass = document.getElementById('pass').value;

  firebase.auth().createUserWithEmailAndPassword(name,email, pass).catch(function (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode);
  });
});

