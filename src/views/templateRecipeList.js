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
                            <span class="userName">${recipe.data().date}</span>
                            <span class="userName">${recipe.data().recipeName}</span>
                            <label for="recipeIngredients" class="labelNewPost">Ingredientes</label>
                            <span class="showRecipe">${recipe.data().recipeIngredients}</span>
                            <br>
                            <label for="userRecipe" class="labelNewPost">Preparación</label>
                            <span id="userRecipe" class="showRecipe">${recipe.data().recipeContent}</span>
                            <div class="likeComent">
                                <a href="#"><img src="./img/orange.png" class="like"></a>
                                <a href="#"><i class="fas fa-comment fa-2x" class="coment"></i></a>      
                            </div>
                        </th>
                    </div>`;
                
                allRecipeInList.innerHTML += recipeHTML;
                
        });  
    }

    // Llamo a la funcion que obtiene la coleccion a traves de firebase
    getRecipeList(onSuccess);

    return allRecipeInList;
}

