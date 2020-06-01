import { loadRegister } from './viewRegister.js';
import {home} from "./viewHome.js";
export const loginPage = () => {
window.location.hash = '/login';
document.getElementById('root').innerHTML = `
<div id='viewLogin'>
<div >
<img src="./img/logoLadoFondoBlanco.jpg"> <!--Este se debe cambiar a png-->
  </div>
  <div>
  <img src="./img/welcome.png">
  </div>
  <div class="formLoginRegistre">
      <form name="formlogin">
        <input type="email" id="eMailOne" name="eMailOne" class="inputMailPassName" placeholder="Ingresa E-mail"/>
        <input type="password" id="passOne" name="passOne"  class="inputMailPassName" placeholder="Ingresa Contraseña" minlength="6">
        <button class="btnLoginRegistre" id="btnIniciar" type="submit" >Iniciar Sesión</button>
      </form>
      <div class="fila">
        <div>
          <img src="./img/iniciacon.png">
        </div>
        <div>
          <a href="" id="btnGmail" ><img src="./img/google.png" class="small-icon" alt=""></a>
          <a href="" id="btnFace"><img src="./img/facebook.png" class="small-icon" alt=""></a>
        </div>
      <div>
        <img src="./img/notienescuenta.png">
        <button class="register" id="registro" type="button">Registrate Aqui</button>
      </div>
  </div>
</div>`;

    document.getElementById('registro').addEventListener('click', () => { 
      loadRegister();
     });
   // buildListenerForm();


   const buttonEnter = document.getElementById("btnIniciar");
  // BOTÓN PARA LOGUEAR CON EMAIL Y PASSWORD
  buttonEnter.addEventListener("click", function () {
    home();
    });


   };

   //  FUNCIÓN INICIA BOTÓN DE LOGIN CUANDO ESTE EXISTA
//const buildListenerForm = () => {

    // BOTÓN PARA LOGUEAR CON EMAIL Y PASSWORD
    /*document.getElementById('formlogin').addEventListener('', () => {
      const email = document.getElementById('eMailOne').value;
      const password = document.getElementById('passOne').value;
      emailLogin(email, password);submit
    });*/

    /*document.getElementById('formlogin').addEventListener('submit', function(evt){
      evt.preventDefault();

      const email = document.getElementById('eMailOne').value;
      const password = document.getElementById('passOne').value;
      emailLogin(email, password);

      
    });
  
};*/

