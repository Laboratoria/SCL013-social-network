
export const menuToggle = () => {
    const divToggle = document.createElement("div");
  
    const viewMenuToggle = `<div id="sidebar">
    <div class="toggle-btn">
      <span>&#9776</span>
    </div>
    <ul>
      <li>
        <img src="img/logo.png" alt="flavors" class="logoToggle">
      </li>
      <li class="listMenu"><a href="#/profile">Mi Perfil</a></li>
      <li class="listMenu"><a href="#/home">Recetario</a></li>
      <li class="listMenu"><a href="#/sweet">Recetas Dulces</a></li>
      <li class="listMenu"><a href="#/salty">Recetas Saladas</a></li>
      <li class="listMenu"><a href="#/close">Cerrar Sesión</a></li>
    </ul>
  </div>`;
  
  divToggle.innerHTML = viewMenuToggle;
  const btnToggle = divToggle.querySelector('.toggle-btn');
  
  btnToggle.addEventListener('click', () => {
    //console.log('click')
    document.getElementById('sidebar').classList.toggle('active');
    //console.log(divToggle.getElementById('sidebar'))
  });
    return divToggle;
  };
  