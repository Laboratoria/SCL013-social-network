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
                                </div>
                            </div>
                            `;
    createPostSection.innerHTML = createPostView;
    
    
    return createPostSection;
};

            