import { db, deletePost } from "../controllers/firebase.js";


export const recipeList = () => {
    const allRecipeInList = document.createElement("section");
    allRecipeInList.innerHTML = '';
    allRecipeInList.className = "recipe-list";

    db.collection("recipeList").orderBy('date','desc').onSnapshot((recipeList) => {
        allRecipeInList.innerHTML = '';

        recipeList.docs.forEach((recipe) => {
            
            const recipeHTML =
             ` <div class="newPost" data-id="${recipe.id}">
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
                            <i id="deleteBtn" class="fas fa-trash-alt fa-2x"></i>
                            <a href="#"><img src="./img/orange.png" class="like"></a>
                            <a href="#"><i class="fas fa-comment fa-2x" class="comment"></i></a>      
                        </div>
                    </th>
                </div>`;

             
                allRecipeInList.innerHTML += recipeHTML

        })

        
        let deleteButton = document.querySelectorAll('#deleteBtn')

        deleteButton.forEach((deleteBtn) => {
       
            deleteBtn.addEventListener('click', (e) => {

                e.preventDefault()
                
                // Target retorna el elemento que dispara el evento, en este caso el data-id
                let postId = e.target.parentElement.parentElement.getAttribute('data-id');

                deletePost(postId)
            })
        })

    
    })
    return allRecipeInList;
}



