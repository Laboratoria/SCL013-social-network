/*aqui iran las funciones de firebase*/

export const registrar = () => {
  console.log('diste clic en registrar')
  const email = document.querySelector('#emailRegistro').value;
  const pass = document.querySelector('#passRegistro').value;
  const usuario = document.querySelector('#usuarioRegistro').value;
  firebase.auth().createUserWithEmailAndPassword(email, pass).then(function (data) {
    enviarCorreo()
    guardarUsuario()
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    if (errorCode == 'auth/weak-password') {
      alert('La contraseña es muy débil.');
    } else {
      alert(errorMessage);
    }
  });
}

export const enviarCorreo = () => {
  firebase.auth().currentUser.sendEmailVerification().then(function () {
    alert('¡Verificación de correo enviada!');
  });
}


export const loginEmail = () => {
  const emailI = document.querySelector('#emailIngreso').value;
  const passI = document.querySelector('#passIngreso').value;
  firebase.auth().signInWithEmailAndPassword(emailI, passI)
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    })
  console.log(emailI)
  console.log(passI)
}

export const cerrarSesion = () => {
  const btnCerrar = document.querySelector('#btnCerrar')
  btnCerrar.addEventListener('click', () => {
    firebase.auth().signOut()
  })
}

export const iniciarSesion = () => {
  const btngoogle = document.querySelector('#btngoogle')
  btngoogle.addEventListener('click', async () => {

    try {
      const provider = new firebase.auth.GoogleAuthProvider()
      await firebase.auth().signInWithPopup(provider)
    } catch (error) {
      console.log(error)
    }
  })
}


export const restablecerContrasena = () => {
  var emailRecuperar = document.getElementById('emailRecuperar').value;
  // [START sendpasswordemail]
  firebase.auth().sendPasswordResetEmail(emailRecuperar).then(function () {
    // Password Reset Email Sent!
    alert('Correo electrónico de restablecimiento de contraseña enviado.');
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/invalid-email') {
      alert(errorMessage);
    } else if (errorCode == 'auth/user-not-found') {
      alert(errorMessage);
    }
    console.log(error);
  });
}

//leer data
var db = firebase.firestore();
//guardar Usuario
/*guardar usuarios nuevos en la base de datos*/
export const guardarUsuario = () => {
  const nombre = document.getElementById('usuarioRegistro').value;
  const correo = document.getElementById('emailRegistro').value;
  const password = document.getElementById('passRegistro').value;
  db.collection('usuarios').add({

    nombre: nombre,
    correo: correo,
    password: password
  }).then(function (docRef) {
    console.log("usuario registrado: ", docRef);
    console.log(nombre, correo, password)
  }).catch(function (error) {
    console.error("Errod al agregar user: ", error);
  })
}

export const guardar = () => {

  const post = document.getElementById("inputHome").value;
  const tipo = document.getElementById("opcionPublicar").value;
  const date = new Date();
  const user = firebase.auth().currentUser;
  db.collection("publicaciones").add({
      uid: user.uid,
      nombre: user.displayName,
      fotoperfil: user.photoURL,
      post: post,
      foto: '',
      tipo: tipo,
      likes: [],
      photo: '',
      date,

    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
      document.getElementById("opcionPublicar").value = '';
      document.getElementById("opcionPublicar").value = '';
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
  mostrarPublicacionHome();
}

//imprimir publicacion
export const mostrarPublicacionHome = () => {
  db.collection("publicaciones").orderBy('date', 'desc').onSnapshot((querySnapshot) => {

    //tabla.innerHTML = "";
    const idPublicacion = document.getElementById("contenedorMayor")
    idPublicacion.innerHTML = "";

    querySnapshot.forEach((doc) => {

      idPublicacion.innerHTML += /*html*/ ` 
      <div id="contenedorPublicacionEditar "data-publicacionEditar='${doc.id}'> 
    <div id="contenedorPublicacion "data-publicacion="${doc.id}" > 
      <div id="contenedorIdentidad"> 
        <img id="fotoParticipante" src="${doc.data().fotoperfil}"/>
        <p id="nombreUser"> ${doc.data().nombre}</p>
      </div>
      <div id="imagenPublicacion"> </div>
      
      <div id="contenedorPubli"> 
      <p id="textoPublicacion"> ${doc.data().post}</p>
  
      </div> 
       
        <p id="tipoPublicacion"> ${doc.data().tipo}</p>
       
        <div id="interacciones">
          <a id="btnCompartir"></a>
          <a id="btnRecomiendo"></a>
        </div>
        <div id="contenedorBtnEdicion" data-publicacionContenedor='${doc.id}'> 
         <button class="btnEliminar"  id="btnEliminarId"> </button> 
         <button class="btnEditar"  id="btnEditarId" ></button>
       
        </div>
      
      </div>
      </div>
`
      //borrar publicaciones
      let botonEliminar = document.querySelectorAll(".btnEliminar")
      botonEliminar.forEach(btn => {
        btn.addEventListener("click", (e) => {

          const eliminarConfirmado = () => {
            let idPublicacion = e.target.parentElement.parentElement.getAttribute("data-publicacion");
            eliminar(idPublicacion);

          }
          let texto;
          if (confirm("¿segura de eliminar?")) {
            texto = "eliminar!";
            eliminarConfirmado();
          } else {
            texto = "cancelar";

          }


        });
      })
      //editar publicacion

      const botonEditar = document.querySelectorAll('#btnEditarId');

      botonEditar.forEach(btn => {
        btn.addEventListener("click", (e) => {
          window.scrollTo(0, 0);
          let idPublicacion = e.target.parentElement.parentElement.getAttribute("data-publicacion");
          document.getElementById('botonGuardarEdicion').style.display = "block";
          document.getElementById('btnPublicar').style.display = "none";
          document.getElementById('btnEditarId').style.display = "none";
          document.getElementById('btnEliminarId').style.display = "none";
          editar(idPublicacion);

        })
      })
    })
  });
};

const eliminar = (id) => {

  db.collection("publicaciones").doc(id).delete().then(function () {
    console.log("Document successfully deleted!");

  }).catch(function (error) {

  });
}

//editar publicacion
export const editar = (id) => {
  //editado con lore
  db.collection("publicaciones").doc(id).get().then(doc => {
    document.querySelector('#inputHome').value = doc.data().post;
    document.getElementById("opcionPublicar").value = doc.data().tipo;
  })

  //const botonEditar = document.getElementById("btnEditar");

  //se trae el ID de contenedor de botones 
  //para crear el boton publicar edicion


  const botonPublicar = document.querySelector('#botonGuardarEdicion');

  botonPublicar.addEventListener("click", () => {
    const editando = db.collection("publicaciones").doc(id);
    const post = document.querySelector('#inputHome').value;
    const tipo = document.getElementById("opcionPublicar").value;

    return editando.update({
        post: post,
        tipo: tipo

      })
      .then(function () {

        console.log("Document successfully updated!");
        document.getElementById('botonGuardarEdicion').style.display = 'none';
        document.getElementById('btnPublicar').style.display = 'block';
        document.getElementById('btnEditarId').style.display = 'block';
        document.getElementById('btnEliminarId').style.display = 'block';

      })
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  })

}