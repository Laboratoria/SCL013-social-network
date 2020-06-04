import { logout } from '../index.js';

export const home = () => {
  window.location.hash = '/home';
  document.getElementById('root').innerHTML = `
    <header>
    <button id="btnOut"> salir </button>
    <img src="./img/logoLadoFondoBlanco.jpg"> <!--Este se debe cambiar a png-->
    </header>

    <div id="form-save" class="div-post">
    <form id="form-publication" class="padding" maxlength=50 required>
        <textarea placeholder="¿Que quieres compartir?" id="publication" class="textarea-post"></textarea>
        <div class="flex-bottom-form">
            <div>
                <label for="fileButton" id="image"><i class="fa fa-picture-o btn-picture"
                        aria-hidden="true"></i></label>
                <input type="text" class="file-name" id="inputval" />
                <input type="file" class="hide" name="file" value="upload" id="fileButton" />
            </div>
            <select id="privacidad" class="btn-select" name="select">
                <option value="publico" selected>Público</option>
                <option value="privado">Privado</option>
            </select>
            <input type="button" id="compartir-post" class="btn-share" value="Compartir">
        </div>
    </form>
  </div>
  <section>
    <ul id="notes-list" class="ul-parent">
    </ul>
  </section>
    
    <div class="iconSend"> 
    </div>
    
    <div id= "editDelete">
    <img src="icons/delete.png">
    <img src="icons/edit.png">
    </div>

    <div id="likeComment">
    <img src="icons/like.png">
    <img src="icons/comment.png">
    </div>



      </div>
      
     
    <footer>
    <img src="icons/profile.png">
    <img src="icons/friends.png">
    <img src="icon/notification.png">
    <img src="icon/post.png">

    
    </footer>`;
  // BOTON QUE CREA CUENTA PARA NUEVO USUARIO
  document.getElementById('btnOut').addEventListener('click', () => {
    logout();
  });
};
