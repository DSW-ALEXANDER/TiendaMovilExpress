// login.js
function getUsers(){
  const raw = localStorage.getItem('tm_users');
  return raw ? JSON.parse(raw) : [];
}

function login(){
  const email = document.getElementById('login-email').value.trim().toLowerCase();
  const pass  = document.getElementById('login-pass').value;
  const rol   = document.getElementById('login-rol').value;

  if(!email || !pass){
    alert('Completa los campos');
    return;
  }

  const users = getUsers();
  const user = users.find(u => u.email === email && u.pass === pass && u.rol === rol);

  if(!user){
    alert('Credenciales inválidas para ese rol. Verifica correo/contraseña o el rol seleccionado.');
    return;
  }

  // GUARDAR USUARIO ACTUAL
  localStorage.setItem('tm_current', JSON.stringify(user));

  // REDIRECCIONES CORRECTAS PARA /pages/
  if(rol === 'tendero')       location.href = 'panel_tendero.html';
  else if(rol === 'mototaxi') location.href = 'panel_mototaxi.html';
  else                        location.href = 'panel_cliente.html';
}
