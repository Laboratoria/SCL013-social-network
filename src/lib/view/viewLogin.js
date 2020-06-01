
document.getElementById('root').innerHTML = `
<div id='viewLogin'>
<div >
<img src="./img/SoloLogo.png">
  </div>
  <div>
  <img src="./img/welcome.png">
  </div>
    <div id="formLogin" class="formLogin">
      <form  >
      <input type="email" id="correoelectronico" name="correoelectronico" placeholder="Ingresa E-mail"/>
      <input type="password" placeholder="Ingresa Contraseña" minlength="6">
      <button class="btn login-btn" id="btnIniciar" >Iniciar Sesión</button>
      </form>
    </div>
    </div>`;