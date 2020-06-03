import { loginView, userRegisterPage} from './htmlcreator';

const routes = {
    '/': loginView,
    '/register': userRegisterPage,
};

const root = document.getElementById('root');
root.innerHTML = routes[window.location.pathname];
