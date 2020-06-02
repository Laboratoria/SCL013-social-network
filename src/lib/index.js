export const loginGoogle = () => {

 const provider = new firebase.auth.GoogleAuthProvider(); 

 firebase.auth().signInWithPopup(provider).then(function(result) {
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
};

// CREAR CUENTA MAIL Y PWD
export const createAccount = (name, email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      return result.user.updateProfile({
        displayName: name,
      });
    })
    .then(() => {
      veriFyUser();
      alert('User account created');
    })
    .catch((error) => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      if (errorCode === 'auth/email en uso') {
        alert('Correo en uso');
      }
      if (errorCode === 'auth/email inválido') {
        alert('Email inválido');
      }
      if (errorCode === 'auth/password débil') {
        alert('Contraseña tiene que tener más de 8 caracteres y una mayúscula');
      }
      alert(`${errorCode}`);
    });
};*/

