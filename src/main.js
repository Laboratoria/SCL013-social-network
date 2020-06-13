import { initializeFirebase } from './controllers/firebase.js';
import { login } from './views/templateLogin.js';
import { changeRoute } from './router.js';

const init = () => {

  document.getElementById('root').appendChild(login());

  window.addEventListener('hashchange', () => {
    changeRoute(window.location.hash);
  });
  
};

window.addEventListener('load', init);
