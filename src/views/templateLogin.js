import { signIn, googleLogin } from "../controllers/firebase.js";
import { register } from './templateRegister.js'


export const login = () => {
  const divLogin = document.createElement("div");

  const viewLogin = `
                        <section id="loginPage" class="containerPage">
                        <div class="containerLeft">
                        <img class="logo" src="./img/logo.png">
                        </div>
                        <div class="containerRight">  
                        <div class="containerMobile">
                        <img class="logoMobile" src="./img/logo.png">
                        <div class="containerColor">
                        <div class="title">
                        <h1 class="firstTitle">¡Bienvenido!</h1>
                        <h2 class="subtitle">¡Comparte tu receta con nosotros!</h2>
                        </div>
                        <div class="form">
                        <input type="email" placeholder="Correo electrónico" id="emailA" class="loginInput" required /> 
                        <input type="password" placeholder="Contraseña" id="passwordA" class="loginInput"/>
                        <img src="./img/logoGoogle.png" id="loginGoogleBtn" class="btnGoogleMobile">
                        <button id="loginBtn" class="btnStart">Iniciar sesión</button>
                        <hr size="3px" />
                        </div>
                        <div>
                        <p class="titleRegister">¿No tienes cuenta? Regístrate<a href="#/register" id="newAccount" class="signUp"> AQUÍ </a></p>
                        </div>
                        </div>
                        </div>
                        </div>
                        </section>`;

  divLogin.innerHTML = viewLogin;
  divLogin.querySelector("#loginBtn").addEventListener("click", () => {
  
    const emailA = document.getElementById("emailA").value;
    const passwordA = document.getElementById("passwordA").value;
    signIn(emailA, passwordA, onSuccess, onError);

  });

  divLogin.querySelector("#loginGoogleBtn").addEventListener("click", () => {
    googleLogin(onSuccess, onError);
  });

  return divLogin;
};

const onError  = (error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
};

const onSuccess = (response) => {
    window.location.href = "./index.html#/home"
    console.log(response.user);
}