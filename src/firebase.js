// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: 'AIzaSyCo-cBiuxP8b51DfUrnZ6nhh5GnEmTTfOU',
    authDomain: 'recipe-flavors.firebaseapp.com',
    databaseURL: 'https://recipe-flavors.firebaseio.com',
    projectId: 'recipe-flavors',
    storageBucket: 'recipe-flavors.appspot.com',
    messagingSenderId: '189830846641',
    appId: '1:189830846641:web:9fa159586edcb08eb5aa90',
    measurementId: 'G-GZN3FXHXLG',
};

// Sign in User
export const signIn = (emailA, passwordA) => {
    firebase.auth().signInWithEmailAndPassword(emailA, passwordA)
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
            const displayName = user.displayName;
            const email = user.email;
            const emailVerified = user.emailVerified;
            const photoURL = user.photoURL;
            const isAnonymous = user.isAnonymous;
            const uid = user.uid;
            const providerData = user.providerData;
        } else {
            //document.getElementById('userLogin').innerHTML=`<div><p>No estas regístrado</p>
            //<p>¿No tienes cuenta? Regístrate</p> <a href='#userRegisterPage' id="newAccount">Aquí</a>
            //</div>`
        }
    });
};

// Create user with firebase
export const createUserWithFirebase = (email, pass) => {
    firebase.auth().createUserWithEmailAndPassword(email, pass).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode);
    });
};