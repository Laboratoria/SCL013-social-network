import { createPost } from './createPost.js';


export const timeline = () => {
  const divTimeline = document.createElement('div');
  divTimeline.innerHTML = ``;
     divTimeline.appendChild(createPost());
    return divTimeline;
};
