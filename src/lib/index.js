export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider)
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
};


export const loginFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

const veriFyUser = () => {
  firebase.auth().currentUser.sendEmailVerification().then(() => {
    alert('Email sent!');
  })
    .catch('Email not sent!');
};


export const createAccount = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      veriFyUser();
      alert('User account created');
    })
    .catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      if (errorCode === 'auth/email-already-in-use') {
        alert('Email ya está registrado');
      } else {
        alert('Todos los campos son obligatorios');
      }
    });
};


// LOGIN CON EMAIL Y PWD
export const emailLogin = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      const user = firebase.auth().currentUser;
      if (user != null) {
        if (user.emailVerified === false) {
          alert('email no verificado');
        }
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/wrong-password') {
        alert('Contraseña Incorrecta');
      } else if (errorCode === 'auth/user-not-found') {
        alert('Usuario no encontrado');
      } else {
        alert('Problemas para iniciar sesión, verifique sus datos y vuelva a ingresar');
      }
    });
};


export const logout = () => {
  firebase.auth().signOut().then(() => {
    alert('sesión cerrada con éxito');
    window.location.reload();
  })
    .catch(() => {
      alert('Ocurrió un error inesperado');
    });
};
