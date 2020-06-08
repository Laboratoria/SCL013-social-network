export const createPost = () => {
    const createPostSection = document.createElement("section");
    createPostSection.className = "create-post";
    const createPostView = `<div class="create-post-div">
                            <textarea id="text-area-input" placeholder="Escribe tu receta aquí" class="textarea">
                            </textarea>
                            <button class="button">Subir foto</button>
                            <select name="recipe-option" id="button">
                                <option value="sweet">Receta dulce</option>
                                <option value="salad">Receta salada</option>
                            </select>
                            <button class="button" type="submit">Publicar</button>
                            </div>
                            `;
    createPostSection.innerHTML = createPostView;
    return createPostSection;
};