// firebase y archivos


export const uploadImagePost = (file, uid) => {
    const refStorage = firebase.storage().ref(`ColeccionImg/${uid}/${file.name}`);
    return refStorage.put(file).then(snapshot => snapshot.ref.getDownloadURL());
};

export const uploadPhotoProfile = (file, uid) => {
    const refStoragePhoto = firebase.storage().ref(`imagePhotoProfile/${uid}/${file.name}`);
    return refStoragePhoto.put(file).then(snapshot => snapshot.ref.getDownloadURL());
};