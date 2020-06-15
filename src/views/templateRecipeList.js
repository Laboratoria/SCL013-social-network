import { getRecipeList } from "../controllers/firebase.js";

export const recipeList = () => {

    const allRecipeInList = document.createElement("section");
    allRecipeInList.innerHTML = '';
    allRecipeInList.className = "recipe-list";

    const onSuccess = (recipeList) => {

        recipeList.forEach(recipe => {

            const recipeHTML = ` <div class="newPost">
                                    <th scope="row">
                                        <span id="userName" class="userName">${recipe.data().recipeName}</span>
                                        <label for="recipeIngredients" class="labelNewPost">Ingredientes</label>
                                        <span id="recipeIngredients" class="showRecipe">${recipe.data().recipeIngredients}</span>
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

    const onError = (error) => {
        console.log(error)
    }

    // Llamo a la funcion que obtiene la coleccion a traves de firebase
    getRecipeList(onSuccess, onError);

    return allRecipeInList;
}

