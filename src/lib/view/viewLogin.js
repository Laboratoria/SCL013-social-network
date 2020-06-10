import {
  loginGoogle, loginFacebook, emailLogin, createAccount,
} from '../index.js';
export const loginPage = () => {
  window.location.hash = '/login';
  document.getElementById('root').innerHTML = `
<div id='viewLogin' class="viewLoginRegistre" >
<div class="imgLogin" >
  </div>
  <div class="formLoginRegistre">
  <div class ="imgWel">
  </div>
      <div class="loginForm" name="formlogin">
        <input type="email" id="eMailOne" name="eMailOne" class="inputMailPassName" placeholder="Ingresa E-mail"/>
        <input type="password" id="passOne" name="passOne"  class="inputMailPassName" placeholder="Ingresa Contraseña" minlength="6">
        <button class="btnLoginRegister" id="btnIniciar" type="submit" >Iniciar Sesión</button>
        <p id="msj"></p>
      </div>
      <div class="fila">
        <div id="init" >
        </div>
        <div id="btnGoFa" >
         <img id="btnGoogle" src="./img/google.png" class="small-icon" alt="">
         <img  id="btnFace" src="./icons/facebook4.png" class="small-icon" alt="">
        </div>
      <div id="noAcc">
        <button class="btnLoginRegister"   id="registro" type="button">Registrate Aqui</button>
      </div>
  </div>
</div>`;
  buildformRegister();
};
const buildformRegister = () => {
  const buttonEnter = document.getElementById('btnIniciar');
  // BOTÓN PARA LOGUEAR CON EMAIL Y PASSWORD
  buttonEnter.addEventListener('click', () => {
    const email = document.getElementById('eMailOne').value;
    const password = document.getElementById('passOne').value;
    emailLogin(email, password);
  });
  const btnGoogle = document.getElementById('btnGoogle');
  btnGoogle.addEventListener('click', () => {
    loginGoogle();
  });
  const btnFacebook = document.getElementById('btnFace');
  btnFacebook.addEventListener('click', () => {
    loginFacebook();
  });
  // BOTÓN CREACIÓN DE CUENTA
  document.getElementById('registro').addEventListener('click', () => {
    window.location.hash = '/register';
    document.getElementById('root').innerHTML = `
            <div id='viewRegistre' class="viewLoginRegistre"> 
              <div class="imgLogin" >
              </div>
              <div id="formRegister" class="formLoginRegistre">
              <div id="imgRegister">
              </div>
                <div id="formTwo">
                <input type="email" id="eMailTwo"  name="eMailTwo" class="inputMailPassName" placeholder="Ingresa E-mail"/>
                <input type="password"  id="passTwo" name="passTwo" class="inputMailPassName" placeholder="Ingresa Contraseña" minlength="6">
                <button class="btnLoginRegister" id="btnRegister" >Registrar</button>
                <button class="btnLoginRegister" id="loginBack">Volver</button>
                </div>
              </div>
            </div>`;
    // BOTON QUE CREA CUENTA PARA NUEVO USUARIO
    document.getElementById('btnRegister').addEventListener('click', () => {
      const email = document.getElementById('eMailTwo').value;
      const password = document.getElementById('passTwo').value;
      createAccount(email, password);
    });
    // BÓTÓN DE REGRESO AL LOGIN
    document.getElementById('loginBack').addEventListener('click', () => {
      loginPage();
    });
  });
};
/*  export const msj = (msjT) => {
  document.getElementById("msj").innerHTML = msjT;
};  */