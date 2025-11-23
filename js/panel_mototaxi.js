// panel_mototaxi.js

function getCurrent(){ 
  return JSON.parse(localStorage.getItem('tm_current') || 'null'); 
}

function logout(){ 
  localStorage.removeItem('tm_current'); 
  location.href = 'index.html';  // ✔ CORREGIDO
}

window.addEventListener('DOMContentLoaded', ()=>{

  const u = getCurrent();

  if(!u || u.rol !== 'mototaxi'){ 
    alert('Acceso no autorizado. Inicia sesión como MotoTaxi.');
    location.href = 'login.html';  // ✔ CORRECTO
    return; 
  }

  document.getElementById('mototaxiName').textContent = u.nombre || '';
  document.getElementById('entAct').textContent = 0;
  document.getElementById('entHoy').textContent = 0;
});
