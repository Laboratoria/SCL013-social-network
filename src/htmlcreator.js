const root = document.getElementById('root');

// Login page creator
export const loginView = () => {
    root.innerHTML = '';
    root.innerHTML = `<section id="loginPage" class="containerPage">
                      <div class="containerLeft">
                      <img class="logo" src="./img/logo.png">
                      </div>
                      <div class="containerRight">
                      <div class="containerMobile">
                      <img class="logoMobile" src="./img/logo.png">
                      <div class="containerColor">
                      <div class="title">
                      <h1 class="firstTitle">¡Bienvenido!</h1>
                      <h2 class="subtitle">¡Comparte tu receta con nosotros!</h2>
                      </div>
                      <div class="form">
                      <input type="email" placeholder="Correo electrónico" id="emailA" class="loginInput"/> 
                      <input type="password" placeholder="Contraseña" id="passwordA" class="loginInput"/>
                      <img src="./img/logoGoogle.png" id="loginGoogleBtn" class="btnGoogleMobile">
                      <button id="loginBtn" class="btnStart">Iniciar sesión</button>
                      <hr size="3px" />
                      </div>
                      <div>
                      <p class="titleRegister">¿No tienes cuenta? Regístrate<a href='#userRegisterPage' id="newAccount" class="signUp"> AQUÍ </a></p>
                      </div>
                      </div>
                      </div>
                      </div>
                      </section>`;
};

// Register view creator
export const userRegisterPage = () => {
    root.innerHTML = '';
    root.innerHTML = `<section id="userRegisterPage" class="containerPage">
                      <div class="containerLeft">
                      <img class="logo" src="./img/logo.png">
                      </div>
                      <div class="containerRight">
                      <img class="logoUserMobile" src="./img/logo.png">
                      <div class="userRegisterform">
                      <div class="title">
                      <h1 class="userRegisterTitle">¡Regístrate!</h1>
                      </div>
                      <i class="fas fa-user"><input type="text" placeholder="Nombre" id="name" class="userRegisterInput"/></i>
                      <i class="fas fa-envelope"><input type="email" placeholder="Correo electrónico" id="email" class="userRegisterInput"/></i> 
                      <i class="fas fa-unlock"><input type="password" placeholder="Contraseña" id="pass" class="userRegisterInput"/></i>
                      </div>
                      <div>
                      <button id="userRegisterBtn" class="Allbtn">Crear cuenta</button>
                      </div>
                      </div>
                      </section>`;
};
