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
            <select id="privacity" class="btn-select" name="select">
                <option value="public" selected>Público</option>
                <option value="private">Privado</option>
            </select>
            <input type="button" id="share-post" class="btn-share" value="Compartir">
        </div>
    </form>
  </div>
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
  // BOTON QUE CREA CUENTA PARA NUEVO USUARIO
  document.getElementById('btnOut').addEventListener('click', () => {
    logout();
  });

};
