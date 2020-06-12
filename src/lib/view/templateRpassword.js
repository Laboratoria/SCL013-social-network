import {restablecerContrasena} from "../viewController.js";
export const Rpassword = () => {
    window.location.hash = '/recuperar'
    document.getElementById('root').innerHTML = /*html*/`
    
    <div class="contenedorRegistro" id="cont-recuperar">
    <p class="parrafoUno">Recuperar Contraseña</p>
    <img id="logo" src="./image/logo.jpg">
   
    <div class="contenedorIngreso" >
      <input class="emailR" id="emailRecuperar" placeholder="Correo electronico" type="email">
      <button  id="enviarR">Enviar</button>
    </div>
  </div>
    `
  const enviarR = document.getElementById('enviarR');
  enviarR.addEventListener("click", () => {
    restablecerContrasena(); 
  })

}