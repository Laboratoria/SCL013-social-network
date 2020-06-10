// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCo-cBiuxP8b51DfUrnZ6nhh5GnEmTTfOU",
  authDomain: "recipe-flavors.firebaseapp.com",
  databaseURL: "https://recipe-flavors.firebaseio.com",
  projectId: "recipe-flavors",
  storageBucket: "recipe-flavors.appspot.com",
  messagingSenderId: "189830846641",
  appId: "1:189830846641:web:9fa159586edcb08eb5aa90",
  measurementId: "G-GZN3FXHXLG",
};

// Initialize Firebase
export const initializeFirebase = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebaseAuthentication();
};

// Sign in User
export const signIn = (emailA, passwordA, onSuccess, onErrorMessage) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(emailA, passwordA)
    .then((result) => {
        onSuccess(result);
    })
    .catch((error) => {
        onErrorMessage(error);
    });
};

// Observer
export const firebaseAuthentication = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      console.log("user", user);
      const displayName = user.displayName;
      const email = user.email;
      const emailVerified = user.emailVerified;
      const photoURL = user.photoURL;
      const isAnonymous = user.isAnonymous;
      const uid = user.uid;
      const providerData = user.providerData;
      const verifiedText = "";
      if (emailVerified === false) {
        verifiedText = "Email not verified"
      } else {
        verifiedText = "Email verified"
      }
    } else {
    }
  });
};

// Create user with firebase
export const createUserWithFirebase = (email, pass, onSuccess, onError) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, pass)
    .then((result) => {
      emailVerification();
      onSuccess(result)
    })
    .catch((error) => {
      onError(error);
    });
};

const emailVerification = () => {
  const user = firebase.auth().currentUser;
    user.sendEmailVerification()
  .then(() => {
    alert('hemos enviado un correo de confirmacion a su correo electronico');
  })
  .catch((error) => {
  alert('verifique su correo electronico para verificar el registro');  
  });
}
 

// Login with Google
export const googleLogin = (onSuccess, onError) => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log("user", user);
      // ...
      onSuccess(result)
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      console.log("error", errorMessage);
      // ...
      onError(error)
    });
};

// Sign Out

export const userSignOut = (callback) => {
  firebase.auth().signOut()
  .then((result) => {
    console.log('signOut success');
    callback(result)
  })
  .catch((error) => {
    console.log(error);
  })
};

initializeFirebase();

export const  db = firebase.firestore();{
}
