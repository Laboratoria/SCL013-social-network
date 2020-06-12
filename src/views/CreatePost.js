export const createPost = () => {
    const createPostSection = document.createElement("section");
    createPostSection.className = "create-post";

    const createPostView = `
                            <div class="create-post-div">
                                <div class="textarea-div">
                                <input type="text" placeholder="Nombre" id="nameUserPost" class="userName"/>
                                <input type="text" placeholder="Receta" id="recipe" class="textarea"/>
                                </div>
                                <div class="create-post-options">
                                <div class="upload-btn">
                                <button class="btnPost">Sube una foto</button>
                                <input type="file" name="myfile" />
                                </div>
                                   
                                    <select name="recipe-option" id="button">
                                        <option value="sweet">Receta dulce</option>
                                        <option value="salad">Receta salada</option>
                                    </select>
                                    <button class="btnPost" type="submit" id="out">Publicar</button>
                                </div>`;
  
   createPostSection.innerHTML = createPostView;
   
    // esta es una nueva coleccion para guardar los datos del post
    createPostSection.querySelector('#out').addEventListener('click', () => { 

  const  db = firebase.firestore();{

    const namePost = document.querySelector('#nameUserPost').value;
    const recipePost = document.querySelector('#recipe').value;

  db.collection("post").add({
    name: namePost,
    recipe: recipePost
    //born: 1815
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    //document.querySelector('#name').value="";
    //document.querySelector('#specialty').value="";
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });
 
    
    
db.collection("post").onSnapshot((querySnapshot) => {
    //createPostSection.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().name} ${doc.data().recipe}`);
        createPostSection.innerHTML += `
        <div class="newPost">
        <span id="userName">${doc.data().name}</span>
        <span id="userRecipe">${doc.data().recipe}</span>
        </div>`;
    });
  });
 };

 });
 return createPostSection;
};


