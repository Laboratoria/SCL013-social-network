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
export const signIn = (emailA, passwordA) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(emailA, passwordA)
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
};

// Area de login
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
    } else {
    }
  });
};

// Create user with firebase
export const createUserWithFirebase = (email, pass) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, pass)
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode);
    });
};

// Login with Google
export const googleLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log("user", user);
      // ...
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log("error", errorMessage);
      // ...
    });
};
