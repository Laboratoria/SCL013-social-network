import {loginEmail} from "../viewController.js" ;
import {registro} from "./templateRegistro.js";
import {Rpassword} from "./templateRpassword.js";

export const login = () => {
window.location.hash = '/login';
document.getElementById('root').innerHTML =  /*html*/ `
  
<div id="contenedorGeneral">
    <img id="logo" src="./image/logo.jpg">
    <div class="carrusel">
      <div id="imagenUno">
        <div class="textoInicial">
          <p class="parrafoUno">¿Te gusta </p>
          <p class="parrafoUno">viajar por Chile ?</p>
        </div>

      </div>
    </div>

    <div class="carrusel">
      <div id="imagenDos">
        <div class="textoInicial">
          <p class="parrafoUno">Publica tus</p>
          <p class="parrafoUno">mejores picadas</p>
        </div>
      </div>
    </div>

    <div class="carrusel">
      <div id="imagenTres">
        <div class="textoInicial">
          <p class="parrafoUno">Conoce a otros </p>
          <p class="parrafoUno">viajeros</p>
        </div>
      </div>
    </div>


    <div class="carrusel">
      <div id="imagenCuatro">
        <div class="textoInicial">
          <p class="parrafoUno">Recorrer Chile </p>
          <p class="parrafoUno">ya no es </p>
          <p class="parrafoUno">una excusa </p>
        </div>
      </div>
    </div> 

    <br>
    <div style="text-align:center">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>

    </div>
  </div>
    <img id="usuario" src="image/usercian 1.png">
    <!--Formulario de logeo-->
    <div class="contenedorIngreso">
      <input class="email" id="emailIngreso" placeholder="Correo electronico" type="email">
      <input class="contraseña" id="passIngreso" placeholder="Contraseña" type="password">
      <button class="iniciar" id="iniciarSesion">Iniciar sesion</button>
      <button id="btngoogle"><img id="iconoGoogle"/> sesión con Google</button> 
      <a href="#"id="textoOlvido">Recuperar Contraseña </a>
      <p id="pTres">¿Aún no eres parte?</p>
      <button id="botonRegistrate"> Registrate</button>
    </div>
  </div>
    `;

 const botonIngreso = document.getElementById('iniciarSesion');
 botonIngreso.addEventListener("click", () => {
   loginEmail(); 
 }) 

 const botonRegistrate = document.getElementById('botonRegistrate');
 botonRegistrate.addEventListener("click", () => {
   registro();  
 }) 


 const passOlvido = document.getElementById('textoOlvido');
 passOlvido.addEventListener("click", () => {
  Rpassword(); 
 }) 
  var slideIndex = 0;


const showSlides = ()=> {
    let i;
    let slides = document.getElementsByClassName("carrusel");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";

    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 7000);
}  
showSlides();

}


