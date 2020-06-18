export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider)

    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
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
      const errorMessage = error.message;
      if (errorCode === 'auth/email-already-in-use') {
        alert('Email ya está registrado');
      } else {
        alert('Todos los campos son obligatorios');
      }
      else {
        alert('Todos los campos son obligatorios');
      }
    });
};


// LOGIN CON EMAIL Y PWD
export const emailLogin = (email, password) => {
  event.preventDefault();
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function onSuccess() {
      const user = firebase.auth().currentUser;
      if (user != null) {
        if (user.emailVerified === false) {
          alert('email no verificado');
        }
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      // const errorMessage = error.message;

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
    location.reload();
  })
    .catch((error) => {
    // An error happened.
      alert('Ocurrió un error inesperado');
    });
};
