// Variables
const root = document.getElementById('root');

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
const container = () => {
  root.innerHTML = '';
  root.innerHTML = `<section id="loginPage">
                    <div class="containerLeft">
                    <img class="logo" src="./img/logo.png">
                    </div>
                    <div class="containerRight">
                    <div class="title">
                    <h1 class="firstTitle">¡Bienvenido!</h1>
                    <h2 class="subtitle">¡Comparte tu receta con nosotros!</h2>
                    </div>
                    <div class="form">
                    <input type="email" placeholder="Correo electrónico" id="emailA" class="loginInput"/> 
                    <input type="password" placeholder="Contraseña" id="passwordA" class="loginInput"/>
                    <button id="loginBtn" class="btnStart">Iniciar sesión</button>
                    <hr size="3px" />
                    </div>
                    <div>
                    <p class="titleRegister">¿No tienes cuenta? Regístrate<a href='#userRegisterPage' id="newAccount" class="signUp"> AQUÍ </a></p>
                    </div>
                    </div>
                    </section>`
                    
;
};

container();

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
    //document.getElementById('userLogin').innerHTML=`<div><p>Estas regístrado ${user.email}</p>
    //</div>`
    //console.log(user);
  } else {
    //document.getElementById('userLogin').innerHTML=`<div><p>No estas regístrado</p>
    //<p>¿No tienes cuenta? Regístrate</p> <a href='#userRegisterPage' id="newAccount">Aquí</a>
    //</div>`
  }
}); 

// REGISTRO

const userRegisterPage = () => {
  root.innerHTML = '';
  root.innerHTML = `<section id="userRegisterPage">
                    <h1>Registrate</h1>
                    <input type="text" placeholder="Nombre" id="name" class="loginInput"/> 
                    <input type="email" placeholder="Correo electrónico" id="email" class="loginInput"/> 
                    <input type="password" placeholder="Contraseña" id="pass" class="loginInput"/>
                    <button id="userRegisterBtn" class="button">Crear cuenta</button>
                    </section>`;
};
//userRegisterPage();

document.getElementById('newAccount').addEventListener('click', () => {
  userRegisterPage();
  registerBtn();
});

const registerBtn = () => { 
  
  document.getElementById('userRegisterBtn').addEventListener('click', () => {
  //const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const pass = document.getElementById('pass').value;

  firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode);
  });
});
};
