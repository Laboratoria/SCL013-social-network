import { logout } from '../index.js';
// import { subirImagen } from '../controladores/uploadimage.js';

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
        <div>
            <div>
                <label for="fileButton" id="image"></label>
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
    <div class="iconSend"> 
    </div>
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
    let username = user.displayName;
    const mail = user.email;
    const publication = document.getElementById('publication').value;
    const typePublication = document.getElementById('typePublication').value;

    if (username === undefined || username === null) {
      username = mail;
    }

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
        removeElement('div-' + doc.id);
        // if (id === doc.data().uid || doc.data().public === true) {
        arr.push({ data: doc.data(), idpost: doc.id });
        // }
      });
      const posts = document.getElementById('post');
      arr.forEach((post) => {
        const divID = 'div-' + post.idpost;
        const pnom = 'p' + post.idpost;
        const tArea = 'pub' + post.idpost;
        const btnDel = 'del' + post.idpost;
        const btnEdit = 'edit' + post.idpost;
        const divList = document.createElement('div');
        divList.id = divID;
        divList.classList = 'mystyle';
        posts.appendChild(divList);
        document.getElementById(divID).innerHTML = `

        <p id= "${pnom}" class="words">${post.data.author}</p>
        <div id = "onlyTextImg">

        <textarea id="${tArea}" class="textAreaContent" readonly="readonly">${post.data.publication} </textarea>
        <div id= "onlyButton">
        <img id="${btnDel}" src="icons/delete.png" class ="deleteEdit scaled"></img>
        <img id="${btnEdit}" src="icons/edit.png" class = "deleteEdit scaled"></img>
        </div>
        </div>
        <div id = "likeComment">
        <img class= "likeCommentButton scaled" src="./icons/like.png">
        <img class = "likeCommentButton scaled" src="icons/comment.png">
        </div>`;
        document.getElementById(btnEdit).addEventListener('click', (event) => {
          const idDoc = post.idpost;
          const text = document.getElementById(tArea).value;
          editTextPost(idDoc, text);
        });
        document.getElementById(btnDel).addEventListener('click', (event) => {
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
  /* const gettingInfo = await firebase.firestore().collection('posts').doc(`${uid}`).get();
  const postTextContent = gettingInfo.data().content;
  return postTextContent; */
};
export const deletePost = (uid) => {
  firebase.firestore().collection('posts').doc(`${uid}`).delete()
    .then(() => {
      let divId = 'div-' + uid;
      removeElement(divId);
    })
    .catch((error) => {

    });
};
function removeElement(elementId) {
  if (document.getElementById(elementId)) {
    let element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
  }
}

const btnLikeComment = (id) => {
  const likeCount = async () => {
    const gettingInfo = await firebase.firestore().collection('posts').doc(`${id}`).get();
    const likeCounter = gettingInfo.data().reactionlike;
    document.getElementById(`likes-count-${id}`).innerHTML = likeCounter;
  };
  // Añade like a un post
  const addLikes = async (uid) => {
    await firebase.firestore().collection('post').doc(`${uid}`).update({
      reactionlike: firebase.firestore.FieldValue.increment(1),
    });
    const gettingInfo = await firebase.firestore().collection('post').doc(`${uid}`).get();
    const likeCount = gettingInfo.data().btnLike;
    return likeCount;
  };
};
