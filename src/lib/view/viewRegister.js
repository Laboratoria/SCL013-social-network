import { loginPage } from './viewLogin.js';
import { createAccount } from '../index.js';
export const loadRegister = () => {
        buildformRegister();
};
    
       //  FUNCIÓN INICIA BOTÓN DE LOGIN CUANDO ESTE EXISTA
    const buildformRegister = () => {

        // BOTÓN CREACIÓN DE CUENTA
       
        window.location.hash = '/register';
          document.getElementById('root').innerHTML = `
          <div id='viewRegistre' class="viewLoginRegistre"> 
            <div>
                <img src="./img/SoloLogo.png">
            </div>
            <div>
                <img src="./img/registro.png">
            </div>
            <div id="formRegister" class="formLoginRegistre">
              <div >
              
              <input type="email" id="eMailTwo"  name="eMailTwo" class="inputMailPassName" placeholder="Ingresa E-mail"/>
              <input type="password"  id="passTwo" name="passTwo" class="inputMailPassName" placeholder="Ingresa Contraseña" minlength="6">
              <button class="btnLoginRegister" id="btnRegister" >Registrar</button>
              <button id="loginBack">Volver</button>
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

    };
    