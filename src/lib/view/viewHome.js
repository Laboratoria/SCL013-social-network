import { logout } from '../index.js';

export const home = () => {
  window.location.hash = '/home';
  document.getElementById('root').innerHTML = `
    <header>
    <div id= "logoLadoHome">
    </div>
    </header>
    <body>
    <div id="bodyHome">
    <div id="form-save">
    <form id="form-publication" class="padding" maxlength=50 required>
        <textarea placeholder="¿Que quieres compartir?" id="publication" class="textarea-post"></textarea>
        <div class="flex-bottom-form">
            <div>
                <label for="fileButton" id="image"><i class="fa fa-picture-o btn-picture"
                        aria-hidden="true"></i></label>
                <input type="file" class="hide" name="file" value="upload" id="fileButton" />
            </div>
            <select id="typePublication" class="btn-select" name="select">
                <option value="public" selected>Público</option>
                <option value="private">Privado</option>
            </select>
            <input type="button" id="sharePost" class="btn-share" value="Compartir">
        </div>
    </form>
   
    <div id="post"></div>
  </div>
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
     </body>
    <footer class= 'footerOrder'>
    <button img id= "profile">
    <button img id= "friends">
    <button img id= "notification">
    <button img id="btnOut">

    </footer>`;
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
        publication:  publication,
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
      let cont=0;
      arr.forEach((post) => {
        console.log(post);
        cont++;

        let div = document.createElement('div');
        div.id = 'div-'+post.idpost; 
        let divID = 'div-'+post.idpost; 
        posts.appendChild(div);

       let pnom = document.createElement('p');
       pnom.id = 'p'+post.idpost;
       div.appendChild(pnom);
      

       let texto = document.createTextNode(post.data.author);
       pnom.appendChild(texto);
      
       let tArea = document.createElement('TEXTAREA');
       tArea.id = 'coment'+post.idpost;
       div.appendChild(tArea);
       const coment = document.getElementById('coment'+post.idpost);
       coment.value = post.data.publication;

       let btnDel = document.createElement('button');
       let idbtn = post.idpost;
       btnDel.id = idbtn;
       let btnDelEle = document.getElementById(idbtn);
       let textBtn = document.createTextNode('Eliminar');
       btnDel.appendChild(textBtn);
       div.appendChild(btnDel);

       document.getElementById(idbtn).addEventListener('click', function(event) {
        let id = event.target.id;
        deletePost(id);
       });

      });
    });
};

// Cambia el contenido de un post
const editTextPost = async (uid, text) => {
  await firebase.firestore().collection('posts').doc(`${uid}`).update({
    content: text,
  });

  const gettingInfo = await firebase.firestore().collection('posts').doc(`${uid}`).get();
  const postTextContent = gettingInfo.data().content;
  return postTextContent;
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