// registro.js
function getUsers(){
  const raw = localStorage.getItem('tm_users');
  return raw ? JSON.parse(raw) : [];
}

function saveUsers(users){
  localStorage.setItem('tm_users', JSON.stringify(users));
}

function registrar(){
  const nombre = document.getElementById('reg-nombre').value.trim();
  const email  = document.getElementById('reg-email').value.trim().toLowerCase();
  const pass   = document.getElementById('reg-pass').value;
  const rol    = document.getElementById('reg-rol').value;

  if(!nombre || !email || !pass) { 
    alert('Completa todos los campos'); 
    return; 
  }

  const users = getUsers();
  if(users.find(u => u.email === email)){
    alert('Ya existe un usuario con ese correo');
    return;
  }

  const newUser = { id: Date.now(), nombre, email, pass, rol };
  users.push(newUser);
  saveUsers(users);

  localStorage.setItem('tm_current', JSON.stringify(newUser));

  // ====== RUTAS FIJAS PARA GITHUB PAGES ======
  if(rol === 'tendero') location.href = './panel_tendero.html';
  else if(rol === 'mototaxi') location.href = './panel_mototaxi.html';
  else location.href = './panel_cliente.html';
}
