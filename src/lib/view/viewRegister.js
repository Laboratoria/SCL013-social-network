import { loginPage } from './viewLogin.js';
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
              <form >
              <input type="text" id="nameUser"class="inputMailPassName" name="nombre" placeholder="Ingresa Nombre Usuario">
              <input type="email" id="eMailTwo" class="inputMailPassName" name="correoelectronico" placeholder="Ingresa E-mail"/>
              <input type="password"  id="passTwo" class="inputMailPassName" placeholder="Ingresa Contraseña" minlength="6">
              <button class="btnLoginRegister" id="btnRegister" >Registrar</button>
              <button id="loginBack">Volver</button>
              </form>
            </div>
          </div>`;
    
          // BOTON QUE CREA CUENTA PARA NUEVO USUARIO
          document.getElementById('btnRegister').addEventListener('click', () => {
            const name = document.getElementById('nameUser').value;
            const email = document.getElementById('eMailTwo').value;
            const password = document.getElementById('passTwo').value;
            createAccount(name, email, password);
            alert("si funciona")
          });
          // BÓTÓN DE REGRESO AL LOGIN
          document.getElementById('loginBack').addEventListener('click', () => {
            loginPage();
          });

    };
    