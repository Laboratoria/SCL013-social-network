export const loginGoogle = () => {
 const provider = new firebase.auth.GoogleAuthProvider(); 
 firebase.auth().signInWithPopup(provider)
  .then(result => {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {

  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
 
}

export const createAccount = (email, password) => {

//alert(email); alert(password);
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;



if(errorCode == 'auth/email-already-in-use'){
alert('Email ya está registrado');

}

  // ...
});


};


// LOGIN CON EMAIL Y PWD
export const emailLogin = (email, password) => {
  
  event.preventDefault();
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error) => {
      const errorCode = error.code;
      alert(errorCode);
      const errorMessage = error.message;
      alert(errorCode);
      if (errorCode === 'auth/wrong-password') {
        alert('Contraseña Incorrecta');
      } else if (errorCode === 'auth/user-not-found') {
        alert('Usuario no encontrado');
      }else{
        alert('Problemas para iniciar sesión, verifique sus datos y vuelva a ingresar');
      }
     
    });
  
};

export const logout = () => {

  firebase.auth().signOut().then(function() {
    alert('sesión cerrada con éxito');
  }).catch(function(error) {
    // An error happened.
    alert('Ocurrió un error inesperado');
  });
};