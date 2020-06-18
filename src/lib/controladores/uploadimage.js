export const subirImagen = () => {
  const ref = firebase.storage().ref();
  const file = document.querySelector('#imagen').files[0];
  const name = new Date() + file.name;
  const metadata = { contentType: file.type };
  const task = ref.child(name).put(file, metadata);
  task
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then((url) => {
      const image = document.querySelector('#photo');
      image.src = url;
    });
};