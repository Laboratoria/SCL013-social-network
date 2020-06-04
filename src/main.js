import { loginPage } from './lib/view/viewLogin.js';
import { home } from './lib/view/viewHome.js';

// #Observador de autenticación


export const stateObserved = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      home();
      // User is signed in.
      const displayName = user.displayName;
      const email = user.email;
      const emailVerified = user.emailVerified;
      const photoURL = user.photoURL;
      const isAnonymous = user.isAnonymous;
      const uid = user.uid;
      const providerData = user.providerData;
    // ...
    } else {
      loginPage();
    }
  });
};
stateObserved();
