import { getRecipeList, currentUser } from "../controllers/firebase.js";

export const recipeList = () => {

    const allRecipeInList = document.createElement("section");
    allRecipeInList.innerHTML = '';
    allRecipeInList.className = "recipe-list";

    const onSuccess = (recipeList) => {
        console.log('voy a mostrar la', recipeList)
        recipeList.forEach(recipe => {
                const recipeHTML =
                 ` <div class="newPost">
                     <tr>
                        <th scope="row">
                            <span class="userName">${recipe.data().userName}</span>
                            <span class="dateNewPost">${recipe.data().date}</span>
                            <span class="userName">${recipe.data().recipeName}</span>
                            <label for="recipeIngredients" class="labelNewPost">Ingredientes</label>
                            <span class="showRecipe">${recipe.data().recipeIngredients}</span>
                            <br>
                            <label for="userRecipe" class="labelNewPost">Preparación</label>
                            <span id="userRecipe" class="showRecipe">${recipe.data().recipeContent}</span>
                            <div class="likeComent">
                            <button class = "btnDelete" data-id="${recipe.id}"><i class="fas fa-trash-alt fa-2x"></i></button>
                                <a href="#"><img src="./img/orange.png" class="like"></a>
                                <a href="#"><i class="fas fa-comment fa-2x" class="coment"></i></a>      
                            </div>
                        </th>
                    </div>`;
                
                allRecipeInList.innerHTML += recipeHTML;
                /*let clickDelete = allRecipeInList.getElementsByClassName("fas fa-trash-alt fa-2x");
                for(let i=0; i<clickDelete.length; i++){
                    allRecipeInList.innerHTML = '';
                    allRecipeInList.innerHTML += recipeHTML;
                    let btnDelete = clickDelete[i];
                    btnDelete.addEventListener('click', () => { //cambioooo
                        const onSuccess = () => {
                             console.log("Document successfully deleted!");
                         }
                         const onError = (error) => {
                             console.log(error)
                         }
                      console.log("1",recipe.id)
                         deletePost(recipe.id,onSuccess, onError);
    
                         });
                }*/

        });  
    }

    // Llamo a la funcion que obtiene la coleccion a traves de firebase
    getRecipeList(onSuccess);

    return allRecipeInList;
}

