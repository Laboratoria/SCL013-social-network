import {registrar} from "../viewController.js" 
export const registro = () => {
  window.location.hash = '/registro';

 document.getElementById('root').innerHTML = /*html*/ `
    
  <div id="contenedorGeneralRegistro" class="contenedorRegistro">
    <img id="logo" src="./image/logo.jpg">
   
    <div class="contenedorIngreso" >
      <input class="email" id="emailRegistro" placeholder="Correo electronico" type="email">
      <input class="contraseña" id="passRegistro" placeholder="Contraseña" type="password">
      <input class="usuario" id="usuarioRegistro" placeholder="Nombre de usuario" type="text">
      <button class="iniciar" id="registrarse"> Registrarse</button>
    </div>
  </div>
    `

  const botonRegistro = document.getElementById('registrarse');
  botonRegistro.addEventListener("click", () => {
    console.log("FUNCIONOOOOOOOOOOO");
    registrar(); 
  })


}

