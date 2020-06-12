/*aqui iran las funciones de firebase*/

export const registrar = () =>{
    console.log('diste clic en registrar')
    const email = document.querySelector('#emailRegistro').value;
    const pass = document.querySelector('#passRegistro').value;
    const usuario = document.querySelector('#usuarioRegistro').value;
    firebase.auth().createUserWithEmailAndPassword(email, pass).then(function (data) {
        enviarCorreo()
      }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
    
        if (errorCode == 'auth/weak-password') {
          alert('La contraseña es muy débil.');
        } else {
          alert(errorMessage);
        }
      });
}

export const enviarCorreo = () => {
    firebase.auth().currentUser.sendEmailVerification().then(function () {
      alert('¡Verificación de correo enviada!');
    });
  }
  

export const loginEmail = ()=>{
    const emailI = document.querySelector('#emailIngreso').value;
    const passI = document.querySelector('#passIngreso').value;
  firebase.auth().signInWithEmailAndPassword(emailI, passI)
    .catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
    }) 
    console.log(emailI)
    console.log(passI)
}

export const cerrarSesion = () => {
    const btnCerrar = document.querySelector('#btnCerrar')
    btnCerrar.addEventListener('click', () => {
        firebase.auth().signOut()
    })
}

export const iniciarSesion = () => {
    const btngoogle = document.querySelector('#btngoogle')
    btngoogle.addEventListener('click', async () => {
        console.log('me diste click google')
        try {
            const provider = new firebase.auth.GoogleAuthProvider()
            await firebase.auth().signInWithPopup(provider)
        } catch (error) {
            console.log(error)
        }
    })
<<<<<<< HEAD
}  


export const restablecerContrasena = () => {
    var emailRecuperar = document.getElementById('emailRecuperar').value;
    // [START sendpasswordemail]
    firebase.auth().sendPasswordResetEmail(emailRecuperar).then(function () {
      // Password Reset Email Sent!
      alert('Correo electrónico de restablecimiento de contraseña enviado.');
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/invalid-email') {
        alert(errorMessage);
      } else if (errorCode == 'auth/user-not-found') {
        alert(errorMessage);
      }
      console.log(error);
    });
  }
  
  
=======
}  
>>>>>>> 7287f08e229587e5e7f7b94b1d0c2dad33504903
