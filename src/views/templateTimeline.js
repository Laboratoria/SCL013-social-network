import { createPost } from './templateCreatePost.js';
// import { recipeList } from './recipeList.js';


export const timeline = () => {
  const divTimeline = document.createElement('div');
  divTimeline.innerHTML = ``;

  divTimeline.appendChild(createPost());
  

  return divTimeline;
};
