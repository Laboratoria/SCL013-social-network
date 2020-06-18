import { btnLikeComment } "../view/viewHome.js";

export default async () => { 
    post.addEventListener('click', async (event) => {
      const key = (event.target.id);
      if (key.includes('del')) {
        const uidPost = key.slice(4, 24);
        await deletePost(uidPost);
      } else if (key.includes('likes')) {
        const uidPost = key.slice(6, 26);
        const likeCount = await addLikes(uidPost);
        document.getElementById(`likes-count-${uidPost}`).innerHTML = likeCount;
      } else if (key.includes('edit')) {
        const uidPost = key.slice(5, 26);
        const postText = document.getElementById(`text-${uidPost}`);
        postText.removeAttribute('disabled');
        postText.focus();

        postText.addEventListener('keydown', async (evnt) => {
          if (evnt.keyCode === 13) {
            await editTextPost(uidPost, postText.value);
            postText.setAttribute('disabled', '');
          }
        });
      }
    });
}