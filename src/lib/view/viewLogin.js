
document.getElementById('root').innerHTML = `
<div id='viewLogin'>
<div >
  <img src='/src/img/LogoLadoPink.jpg' />
  </div>
  <div>
  <img  src='/src/img/welcome.png'>
  </div>
    <div id="form-login" class="form-login">
      <form  >
      <input type="email" id="correoelectronico" name="correoelectronico" placeholder="Ingresa E-mail"/>
      <input type="password" placeholder="Ingresa Contraseña" minlength="6">
      <button class="btn login-btn" id="btn-iniciar-registrar" data-action ='login'>Iniciar Sesión</button>
      </form>
    </div>
    </div>`;