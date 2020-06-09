import { createPost } from './createPost.js';
import { menuToggle } from './templateToggle.js';

export const timeline = () => {
    const divTimeline = document.createElement("div");


     divTimeline.innerHTML = ``;

     divTimeline.appendChild(menuToggle());
     //divTimeline.appendChild(createPost());

    return divTimeline;
}