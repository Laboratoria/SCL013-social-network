import{firebaseAuthentication} from '../controllers/firebase.js';

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
 
  // esta es una nueva coleccion para guardar los datos del post
  createPostSection.querySelector('#recipeToPost').addEventListener('click', () => { 

 const  db = firebase.firestore();{

  const namePost = document.querySelector('#nameUserPost').value;
  const recipePost = document.querySelector('#recipe').value;

db.collection("post").add({
  name: namePost,
  recipe: recipePost
  //born: 1815
})
.then((docRef) => {
  console.log("Document written with ID: ", docRef.id);
  //document.querySelector('#name').value="";
  //document.querySelector('#specialty').value="";
})
.catch((error) => {
  console.error("Error adding document: ", error);
});

  
  
db.collection("post").onSnapshot((querySnapshot) => {
  //createPostSection.innerHTML = '';
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().name} ${doc.data().recipe}`);
      createPostSection.innerHTML += `
      <div class="newPost">
      <th scope="row">
      <span id="userName" class="userName">${doc.data().name}</span>
      <span id="userRecipe" class="showRecipe">${doc.data().recipe}</span>
       <div class="likeComent">
       <a href="#"><img src="./img/orange.png" class="like"></a>
       <a href="#"><i class="fas fa-comment fa-2x" class="coment"></i></a>      
      </div>
      </th>
      </div>`;
  });
 });
};

});
return createPostSection;
};
firebaseAuthentication();




