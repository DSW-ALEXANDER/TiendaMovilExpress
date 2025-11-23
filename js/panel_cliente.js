// panel_cliente.js

const products = [
  { id: 1, title: 'Arroz Diana 500g', category: 'Granos', price: 2500, img: 'img/producto1.png' },
  { id: 2, title: 'Aceite Girasol 1L', category: 'Aceites', price: 8500, img: 'img/producto2.png' },
  { id: 3, title: 'Panela x 500g', category: 'Endulzantes', price: 3000, img: 'img/producto3.png' },
  { id: 4, title: 'Huevos TipoA 30 Und', category: 'Proteinas', price: 14000, img: 'img/producto4.png' },
  { id: 5, title: 'Leche Colanta MaxiLitro Und', category: 'Lacteos', price: 4500, img: 'img/producto5.png' },
  { id: 6, title: 'Queso 1Lb', category: 'Lacteos', price: 13000, img: 'img/producto6.png' },
  { id: 7, title: 'Pollo Entero', category: 'Proteinas', price: 18000, img: 'img/producto7.png' },
  { id: 8, title: 'Carne De Res 1Lb', category: 'Proteinas', price: 13500, img: 'img/producto8.png' },
  { id: 9, title: 'Gaseosa Postobon 1.5Lt Und', category: 'Bebidas', price: 4500, img: 'img/producto9.png' },
  { id: 10, title: 'Fideos Doria Und', category: 'Granos', price: 2500, img: 'img/producto10.png' },
  { id: 11, title: 'Tomate 1Lb', category: 'Granos', price: 2800, img: 'img/producto11.png' },
  { id: 12, title: 'Cebolla Roja 1Lb', category: 'Granos', price: 2500, img: 'img/producto12.png' }
];

function getCurrent(){
  return JSON.parse(localStorage.getItem('tm_current') || 'null');
}

function logout(){
  localStorage.removeItem('tm_current');
  location.href = 'index.html'; // ✔ CORREGIDO
}

function renderProducts(){
  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';

  products.forEach(p=>{
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <h3>${p.title}</h3>
      <div class="category">${p.category}</div>
      <div class="price">$${p.price.toLocaleString()}</div>
      <div class="qty">
        <button onclick="changeQty(this,-1)">-</button>
        <span>1</span>
        <button onclick="changeQty(this,1)">+</button>
      </div>
      <button class="addcart" onclick="addToCart(${p.id})">🛒 Agregar al Carrito</button>
    `;
    grid.appendChild(card);
  });
}

function changeQty(btn, delta){
  const span = btn.parentElement.querySelector('span');
  let n = parseInt(span.textContent);
  n = Math.max(1, n + delta);
  span.textContent = n;
}

function addToCart(id){
  const product = products.find(p => p.id === id);
  const card = event.target.closest('.product-card');
  const qty = parseInt(card.querySelector('span').textContent);

  const cart = JSON.parse(localStorage.getItem('tm_cart') || '[]');
  const existing = cart.find(i => i.id === id);

  if(existing) existing.qty += qty;
  else cart.push({ ...product, qty });

  localStorage.setItem('tm_cart', JSON.stringify(cart));

  event.target.textContent = '✓ Agregado';
  setTimeout(() => event.target.textContent = '🛒 Agregar al Carrito', 800);
}

window.addEventListener('DOMContentLoaded', ()=>{
  const user = getCurrent();

  if(!user || user.rol !== 'cliente'){
    alert('Acceso no autorizado. Inicia sesión como Cliente.');
    location.href = 'login.html';
    return;
  }

  document.getElementById('userName').textContent = user.nombre;
  renderProducts();
});
