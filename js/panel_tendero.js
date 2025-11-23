// panel_tendero.js

function getCurrent(){ 
  return JSON.parse(localStorage.getItem('tm_current') || 'null'); 
}

function logout(){ 
  localStorage.removeItem('tm_current'); 
  location.href = 'index.html';  // ✔ RUTA CORRECTA
}

window.addEventListener('DOMContentLoaded', ()=>{
  const u = getCurrent();

  if(!u || u.rol !== 'tendero'){ 
    alert('Acceso no autorizado. Inicia sesión como Tendero.');
    location.href = 'login.html'; // ✔ TAMBIÉN CORRECTO
    return; 
  }

  document.getElementById('tenderoName').textContent = u.nombre || '';

  document.getElementById('pedidosPend').textContent = 0;
  document.getElementById('enCamino').textContent = 0;
  document.getElementById('completados').textContent = 0;
});


