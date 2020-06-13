import { postRecipe } from '../controllers/firebase.js';
import { recipeList } from './templateRecipeList.js';

export const createPost = () => {
  const createPostSection = document.createElement("section");
  createPostSection.className = "create-post";

  const createPostView = `
                          <div class="create-post-div">
                              <div class="textarea-div">
                              <input type="text" placeholder="Nombre" id="nameUserPost" class="userName"/>
                              <input type="text" placeholder="Escribe tu receta aqui" id="recipe" class="writeRecipe"/>
                              </div>
                              <div class="create-post-options">
                              <div class="upload-btn">
                              <button class="btnPost">Sube una foto</button>
                              <input type="file" name="myfile" />
                              </div>
                                  <select name="recipe-option" id="button" class="selectRecipe">
                                      <option value="typeRecipe" selected>Tu receta es</option>
                                      <option value="sweet">Receta dulce</option>
                                      <option value="salad">Receta salada</option>
                                  </select>
                                  <button class="recipePost" type="submit" id="recipeToPost">Publicar</button>
                                  </div>
                          </div>`;

  createPostSection.innerHTML = createPostView;

  // Se muestras en pantalla la lista de recetas almacenadas en firebase
  createPostSection.appendChild(recipeList());

  // esta es una nueva coleccion para guardar los datos del post
  createPostSection.querySelector('#recipeToPost').addEventListener('click', () => { 

    const namePost = document.querySelector('#nameUserPost').value;
    const recipePost = document.querySelector('#recipe').value;
    const photoURL = '';

    const onSuccess = (docRef) => {
      document.querySelector('#nameUserPost').value = '';
      document.querySelector('#recipe').value = '';

      // Limpiar la lista
      document.getElementsByClassName('recipe-list').value = '';

      // Cargar lista con nuevo post
      createPostSection.appendChild(recipeList());

    }
    
    const onError = (error) => {
      console.error("Error adding document: ", error);
    }

    // Crea la nueva coleccion, donde se agrega la nueva receta
    postRecipe(namePost, recipePost, photoURL, onSuccess, onError);

  });
  
  return createPostSection;
};