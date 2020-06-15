import { loginPage } from './lib/view/viewLogin.js';
import { home } from './lib/view/viewHome.js';

export const stateObserved = () => {
  firebase.auth().onAuthStateChanged((user) => {
  
    if (user && user.emailVerified) {
      home();
    } else {
      loginPage();
    }
  });
};
stateObserved();