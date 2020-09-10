import {
    home
} from "./view/templateHome.js";
import {
    muroPersonal
} from "./view/templatePersonal.js";
import {
    menu
} from "./view/templateMenu.js";
import {
    login
} from "./view/templateLogin.js";
import {
    registro
} from "./view/templateRegistro.js"

// se crea un objeto con llave y valor , el cual tiene guardado los template con su #/(llave) y entrega el template(valor)
const routes = {
    '': {
        //  requireAuth: false, //cuando el usuario no esta registrado
        template: login,
    },
    '#/muroPersonal': {
        //   requireAuth: true,
        template: muroPersonal,
    },
    '#/home': {
        // requireAuth: true, //si el usuario esta registrado puede ingresar al mmenu 
        template: home,
    },
    '#/menu': {
        // requireAuth: true, //si el usuario esta registrado puede ingresar al mmenu 
        template: menu,
    },
    '#/registro': {
        // requireAuth: true, //si el usuario esta registrado puede ingresar al mmenu 
        template: registro,
    },
}

//esta funcion recibe el hash
export const changeRoute = (hash) => {
    //  routes[hash] ? showTemplate(routes[hash]) : showTemplate(() => `<p>Esta página no existe</p>`);    // condicion ? sicumple : nocumpleeee;
    if (routes[hash]) {
        // if (routes[hash].requireAuth ) {
        showTemplate(routes[hash].template);
        console.log(routes[hash]);
        // } else {
        //     showTemplate(routes['#/login'].template)
        // }
    } else {
        showTemplate(() => `<p>Esta página no existe</p>`)
    }
}

//aqui ya recibe la pagina que tiene que mostrar (template)
const showTemplate = (template) => {
    const containerRoot = document.getElementById("root")
    containerRoot.innerHTML = template();
    //  containerRoot.appendChild(template());
}

/*
    switch (hash) {
        case '#/':
            //   containerRoot.innerHTML = "";
            containerRoot.appendChild(home());
            break;  if (hash === `#/`) {
                return showTemplate(hash)
            } else if (hash === `#/muroPersonal`) {
                return showTemplate(hash)
            } else {
                return showTemplate(hash)
            }
        
        
        case '#/muroPersonal':
            //   containerRoot.innerHTML = "";

            containerRoot.appendChild(muroPersonal());
            break;
        default:
            containerRoot.innerHTML = `<h2>No existee pag </h2>`
    }
    */