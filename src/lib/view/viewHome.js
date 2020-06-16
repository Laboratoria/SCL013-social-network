import { logout } from '../index.js';
import {subirImagen} from '../controladores/uploadimage.js';

export const home = () => {
  window.location.hash = '/home';
  document.getElementById('root').innerHTML = `
    <header>
    <div id= "logoLadoHome">
    </div>
    </header>
    <body>
    <div id="bodyHome">
    <div class= 'profileBar'>
    <button img id= "profile">
    <button img id= "friends">
    <button img id= "notification">
    <button img id="btnOut">
    </div>
    <div id="form-save">
    <form id="form-publication" class="padding" maxlength=50 required>
        <textarea placeholder="¿Que quieres compartir?" id="publication" class="textarea-post"></textarea>
        <div class="flex-bottom-form">
            <div>
                <label for="fileButton" id="image"><i class="fa fa-picture-o btn-picture"
                        aria-hidden="true"></i></label>
                <input type="file" class="hide" name="file" value="upload" id="imagen" />
            </div>
            <select id="typePublication" class="btn-select" name="select">
                <option value="public" selected>Público</option>
                <option value="private">Privado</option>
            </select>
            <input type="button" id="sharePost" class="btn-share" value="Compartir">
        </div>
    </form>
 </div>     
 <div id="post"></div>
  <br>
  <section>
    <ul id="notes-list" class="ul-parent">
    </ul>
  </section>
    <div class="iconSend"> 
    </div>
   <!--<div id= "editDelete">
    <img src="icons/delete.png">
    <img src="icons/edit.png">
    </div>
    <div id="likeComment">
    <img src="./icons/like.png">
    <img src="icons/comment.png">
    </div>-->
     </div>
     </body>`;
  buildListPost();
  // BOTON QUE CREA CUENTA PARA NUEVO USUARIO
  document.getElementById('btnOut').addEventListener('click', () => {
    logout();
  });
    // BOTÓN PARA POSTEAR
    document.getElementById('sharePost').addEventListener('click', () => {
      const user = firebase.auth().currentUser;
      const uid = user.uid;
      const username = user.displayName;
      const publication = document.getElementById('publication').value;
      const typePublication = document.getElementById('typePublication').value;
      document.getElementById('publication').value = '';
      const get = firebase.firestore().collection('posts').add({
        uid,
        date: new Date(),
        publication: publication,
        typePublication: typePublication,
        author: username,
      });
      return get;
      buildListPost();

  });
};
const buildListPost = () => {
 const id = firebase.auth().currentUser.uid;
  firebase.firestore().collection('posts').orderBy('date', 'desc')
    .onSnapshot((querySnapshot) => {
      const arr = [];
      querySnapshot.forEach((doc) => {
        removeElement("div-"+doc.id);
        //if (id === doc.data().uid || doc.data().public === true) {
          arr.push({ data: doc.data(), idpost: doc.id });
        //}
      });
      const posts = document.getElementById('post');
      arr.forEach((post) => {
        console.log(post);
        let divID = 'div-'+post.idpost;
        let pnom = 'p'+post.idpost;
        let tArea = 'pub'+post.idpost;
        let btnDel = 'del'+post.idpost;
        let btnEdit = 'edit'+post.idpost;
        let divList = document.createElement('div'); 
        divList.id = divID;
        divList.classList = 'mystyle';
        posts.appendChild(divList);
        document.getElementById(divID).innerHTML = `
        <p id= "${pnom}"></p>
        <textarea id="${tArea}" class="textAreaContent">${post.data.publication} </textarea>
        <button id="${btnDel}">Eliminar</button>
        <button id="${btnEdit}">Editar</button>
        `
        
        
               /*
       ` <div class="post-footer">
       <button id="likes-${id}" class="buttons btn-likes">
       </button>
       <span class="post-counter" id="likes-count-${id}"></span>
       <span class="post-date">${date} - ${hour}</span>
       </div>`
*/
        document.getElementById(btnEdit).addEventListener('click', function(event) {
          let idDoc = post.idpost;
          let text = document.getElementById(tArea).value;
          editTextPost(idDoc,text);
        });
      document.getElementById(btnDel).addEventListener('click', function(event) {
        let id = post.idpost;
        deletePost(id);
       });
      });
     
    });
};
// Cambia el contenido de un post
const editTextPost = (uid, text) => {
  firebase.firestore().collection('posts').doc(`${uid}`).update({
    publication: text,
  });
  /*const gettingInfo = await firebase.firestore().collection('posts').doc(`${uid}`).get();
  const postTextContent = gettingInfo.data().content;
  return postTextContent;*/
};
export const deletePost = (uid) => {
  firebase.firestore().collection('posts').doc(`${uid}`).delete()
    .then(() => {
      let divId = 'div-'+uid;
      removeElement(divId);
    }).catch((error) => {
    });
};
function removeElement(elementId) {
  if (document.getElementById(elementId)) { 
    let element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
  }
}
