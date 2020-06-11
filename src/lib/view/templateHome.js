export const home = () => {
    window.location.hash = '/home';
    document.getElementById('root').innerHTML = /*html*/ `
    <header>
    <img id="logoMenu" src="./image/logo.jpg">
    <div id="contenedorBotonesMenu">
        <div class="colorUno">Ruta</div> 
        <div class="colorDos">Hospedaje</div>
        <div class="colorUno">Comida</div>
        <div class="colorDos">Clima</div>
        <div class="colorUno">Transporte</div>
        <div class="colorDos">Tour</div>
    </div>
    </header>
    <div id="contenedorEscribir">
        <input id="inputHome" type="text" placeholder="¿Cual es tu pica'?">
        <input type="file"> 
        <select id="opcionPublicar">

        <option>Ruta </option>
        <option> Hospedaje</option>
        <option>Comida </option>
        <option>Clima </option>
        <option>Transporte </option>
        <option> Tour</option>

         </select>
 
   
    <button id="btnPublicar"> Publicar</button>
     </div>

<div id="contenedorPublicacion">
<div id="contenedorIdentidad"> 
<img id="fotoParticipante" scr="./image/Ellipse.png">
<p id="nombreParticipante">Maria Jose</p>
</div>
<div id="imagenPublicacion"> </div>


<p id="textoPublicacion"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
<div id="interacciones">
<a id="btnCompartir"></a>
<a id="btnRecomiendo"></a>
</div>
</div>

<div id="contenedorPublicacion">
<div id="contenedorIdentidad"> 
<img id="fotoParticipante" scr="./image/Ellipse.png">
<p id="nombreParticipante">Maria Jose</p>
</div>
<div id="imagenPublicacion"> </div>


<p id="textoPublicacion"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
<div id="interacciones">
<a id="btnCompartir"></a>
<a id="btnRecomiendo"></a>
</div>
</div>

<div class="contenedorSalida"> 
    <a id="btnHome" href='#/home'></a>
    <a id="btnMuroPersonal" href="#/muroPersonal"></a>
    <a  id="btnCerrar"></a>
       

</div>
    `


}