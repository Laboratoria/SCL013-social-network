// importamos funciones 
import {
    myFunction
} from "./lib/index.js";
import {
    login
} from "./lib/view/templateLogin.js";
import {
    home
} from "./lib/view/templateHome.js";
import {
    cerrarSesion
} from "./lib/viewController.js";
import {
    iniciarSesion
} from "./lib/viewController.js";


myFunction();

//funcion que verifica si hay un usuario registrado
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('usar ok')
        home();
        cerrarSesion()
    } else {
        console.log('no existes')
        login();
        iniciarSesion()
    }
});

var db = firebase.firestore();
db.collection("users").add({
        first: "Ada",
        last: "Lovelace",
        born: 1900,
        hijos: 2,
    })
    .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
        console.error("Error adding document: ", error);
    });