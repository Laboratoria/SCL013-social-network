
export const home = () => {
window.location.hash = '/home';
document.getElementById('root').innerHTML = `
<div id='viewLogin' class="viewLoginRegistre">
  <div >
    <img src="./img/SoloLogo.png">
  </div>
  <div>
    <img src="./img/welcome.png">
  </div>
  <div class="formLoginRegistre">
      hola mundo
  </div>
</div>`;

    
   

   };
