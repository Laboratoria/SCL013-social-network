import { loginPage } from './lib/view/viewLogin.js';
import { home } from './lib/view/viewHome.js';

// #Observador de autenticación


export const stateObserved = () => {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            home();
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // ...
        } else {
            loginPage();
          // ...
        }
      });
      
  };
  stateObserved();
