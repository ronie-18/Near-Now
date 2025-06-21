const PRODUCTS_PER_PAGE = 12;
let allProducts = [];
let currentPage = 1;
let filteredCategory = null;

function renderSidebarCategories() {
  const sidebar = document.getElementById('sidebar-categories');
  if (!sidebar || typeof productsByCategory === 'undefined') return;
  sidebar.innerHTML = '';
  Object.keys(productsByCategory).forEach(category => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    a.href = '#';
    a.className = filteredCategory === category ? 'active' : '';
    a.addEventListener('click', (e) => {
      e.preventDefault();
      filteredCategory = category;
      renderSidebarCategories();
      renderProductsPage(1);
    });
    li.appendChild(a);
    sidebar.appendChild(li);
  });
  // Add 'All' option
  const allLi = document.createElement('li');
  const allA = document.createElement('a');
  allA.textContent = 'All';
  allA.href = '#';
  allA.className = !filteredCategory ? 'active' : '';
  allA.addEventListener('click', (e) => {
    e.preventDefault();
    filteredCategory = null;
    renderSidebarCategories();
    renderProductsPage(1);
  });
  sidebar.insertBefore(allLi, sidebar.firstChild);
  allLi.appendChild(allA);
}

function getAllProductsFlat() {
  if (typeof productsByCategory === 'undefined') return [];
  const arr = [];
  Object.entries(productsByCategory).forEach(([category, items]) => {
    items.forEach(item => arr.push({ ...item, category }));
  });
  if (filteredCategory) {
    return arr.filter(p => p.category === filteredCategory);
  }
  return arr;
}

function renderProductsPage(page = 1) {
  const grid = document.getElementById('all-products-grid');
  if (!grid) return;
  grid.innerHTML = '';
  allProducts = getAllProductsFlat();
  const start = (page - 1) * PRODUCTS_PER_PAGE;
  const end = start + PRODUCTS_PER_PAGE;
  const productsToShow = allProducts.slice(start, end);
  productsToShow.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      ${product.discount ? `<div class="discount-badge">-${product.discount}%</div>` : ''}
      <button class="quick-view-btn" title="Quick View"><i class="fas fa-eye"></i></button>
      <img src="${product.image}" alt="${product.name}">
      <div class="product-title">${product.name}</div>
      <div class="product-rating">${generateStars(product.rating)} <span>${product.rating}</span></div>
      <div>
        <span class="product-price">${product.price}</span>
        ${product.originalPrice ? `<span class="original-price">${product.originalPrice}</span>` : ''}
      </div>
      <button class="add-to-cart-btn" onclick="addToCart('${product.name}')">
        <i class="fas fa-shopping-cart"></i> Add to Cart
      </button>
    `;
    grid.appendChild(card);
  });
  renderPagination(page);
  updateProductsCount();
}

function renderPagination(page) {
  const pagination = document.getElementById('pagination');
  if (!pagination) return;
  pagination.innerHTML = '';
  const totalPages = Math.ceil(allProducts.length / PRODUCTS_PER_PAGE);
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.className = 'pagination-btn' + (i === page ? ' active' : '');
    btn.textContent = i;
    btn.addEventListener('click', () => {
      currentPage = i;
      renderProductsPage(currentPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    pagination.appendChild(btn);
  }
}

function updateProductsCount() {
  const countDiv = document.getElementById('products-count');
  if (!countDiv) return;
  const count = allProducts.length;
  countDiv.textContent = `${count} Product${count !== 1 ? 's' : ''}`;
}

// Helper for stars
function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  let stars = '';
  for (let i = 0; i < fullStars; i++) stars += '<i class="fas fa-star"></i>';
  if (halfStar) stars += '<i class="fas fa-star-half-alt"></i>';
  for (let i = fullStars + halfStar; i < 5; i++) stars += '<i class="far fa-star"></i>';
  return stars;
}

// On DOMContentLoaded, render products
window.addEventListener('DOMContentLoaded', () => {
  renderSidebarCategories();
  allProducts = getAllProductsFlat();
  renderProductsPage(currentPage);
});