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





// aqui exportaras las funciones que necesites

// LOGIN CON EMAIL Y PWD
/*export const emailLogin = (email, password) => {
 
  event.preventDefault();
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Contraseña Incorrecta');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
};*/
