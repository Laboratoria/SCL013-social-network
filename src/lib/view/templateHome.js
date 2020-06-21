import {
  guardar
} from "../viewController.js";
import {
  editar
} from "../viewController.js";
import {
  mostrarPublicacionHome
} from "../viewController.js";

import {
  mostrarFiltros
} from "./filtros/mostrarFiltros.js";



export const home = () => {

  window.location.hash = '/home';
  //leer documentos

  document.getElementById('root').innerHTML =
    /*html*/
    `
  <header>
  
  <img id="logoMenu" src="./image/logo.jpg">
  <div id="contenedorBotonesMenu">
  
      <div class="colorUno" id="ruta">Ruta</div> 
      <div class="colorDos" id="hospedaje">Hospedaje</div>
      <div class="colorUno" id="comida">Comida</div>
      <div class="colorDos" id="clima">Clima</div>
      <div class="colorUno" id="transporte">Transporte</div>
      <div class="colorDos" id="tour">Tour</div>
  </div>
  </header>
  <div id="contenedorEscribir">
      <input id="inputHome" type="text" placeholder="¿Cual es tu pica'?">
      <input type="file"> 
      <select id="opcionPublicar"  >
      <option value="" disabled selected >Categoria </option>
      <option >Ruta </option>
      <option> Hospedaje</option>
      <option>Comida </option>
      <option>Clima </option>
      <option>Transporte </option>
      <option> Tour</option>

      </select>
         <button id="btnPublicar" style="display: block" > Publicar</button>
         <button id="botonGuardarEdicion"  style="display: none" >Guardar edicion </button>

   </div>

<div id="contenedorMayor">

</div>
<div class="contenedorSalida"> 
  <a id="btnHome" href='#/home'></a>
  <a id="btnMuroPersonal" href="#/muroPersonal"></a>
  <a  id="btnCerrar"></a>
</div>
  `
  const alternLogoMenu = document.querySelector('#logoMenu');
  alternLogoMenu.addEventListener('click', () => {
    window.location.reload();
  });

  const botonPublicar = document.getElementById('btnPublicar');
  botonPublicar.addEventListener('click', () => {
    guardar();
  });
  mostrarPublicacionHome()

  const botonRuta = document.getElementById('ruta');
  botonRuta.addEventListener('click', () => {
    mostrarFiltros('Ruta');

  })

  const botonHospedaje = document.getElementById('hospedaje');
  botonHospedaje.addEventListener('click', () => {

    mostrarFiltros('Hospedaje');
  });

  const botonComida = document.getElementById('comida');
  botonComida.addEventListener('click', () => {

    mostrarFiltros('Comida');
  });

  const botonClima = document.getElementById('clima');
  botonClima.addEventListener('click', () => {
    mostrarFiltros('Clima');
  });

  const botonTransporte = document.getElementById('transporte');
  botonTransporte.addEventListener('click', () => {
    mostrarFiltros('Transporte');
  });

  const botonTour = document.getElementById('tour');
  botonTour.addEventListener('click', () => {
    mostrarFiltros('Tour');
  });

}