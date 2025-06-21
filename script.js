// Global variables - products will be loaded from products-data.js

// Initialize products - no need to load from JSON anymore
function loadProducts() {
  displayProducts(products);
  updateProductCount();
}

// Utility function to add a new product to a specific category
function addProductToCategory(categoryName, productData) {
  if (typeof productsByCategory !== 'undefined' && productsByCategory[categoryName]) {
    // Remove category property if it exists (since it's now implicit)
    const { category, ...cleanProductData } = productData;

    productsByCategory[categoryName].push(cleanProductData);

    // Refresh the global products array
    if (typeof getAllProducts !== 'undefined') {
      // Update the global products array
      products.length = 0; // Clear existing array
      products.push(...getAllProducts()); // Repopulate with new data

      // Refresh the display if needed
      if (currentCategory === "all" || currentCategory === categoryName) {
        filterByCategory(currentCategory);
      }
    }
    return true;
  }
  console.error(`Category "${categoryName}" not found or productsByCategory not available`);
  return false;
}

// Utility function to get category statistics
function getCategoryStats() {
  if (typeof productsByCategory !== 'undefined') {
    const stats = {};
    for (const [category, items] of Object.entries(productsByCategory)) {
      stats[category] = {
        count: items.length,
        inStock: items.filter(item => item.inStock).length,
        avgRating: items.reduce((sum, item) => sum + item.rating, 0) / items.length
      };
    }
    return stats;
  }
  return null;
}

// Global variables
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let currentCategory = "all";
let currentSort = "default";
let isLoggedIn = false;
let currentUser = null;

// Phone and OTP Login System
let currentOTP = null;
let phoneNumber = null;

// DOM elements
const productList = document.getElementById("grocery-list");
const cartIcon = document.getElementById("cart-icon");
const wishlistIcon = document.getElementById("wishlist-icon");
const cartSidebar = document.getElementById("cart-sidebar");
const wishlistSidebar = document.getElementById("wishlist-sidebar");
const cartItems = document.getElementById("cart-items");
const wishlistItems = document.getElementById("wishlist-items");
const cartCount = document.querySelector(".cart-badge");
// Wishlist count removed from header
const cartTotal = document.getElementById("cart-total");
const closeCart = document.querySelector(".close-cart");
const closeWishlist = document.querySelector(".close-wishlist");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const categorySelect = document.getElementById("category-select");
const overlay = document.getElementById("overlay");
const sortSelect = document.getElementById("sort-select");
const backToTop = document.getElementById("back-to-top");
const loadingScreen = document.getElementById("loading-screen");
const currentYear = document.getElementById("current-year");
const loginBtn = document.getElementById("login-btn");
// const signupBtn = document.getElementById("signup-btn"); // Commented out in HTML
const loginModal = document.getElementById("login-modal");
// const signupModal = document.getElementById("signup-modal"); // Commented out in HTML
const closeLoginModal = document.getElementById("close-login-modal");
// const closeSignupModal = document.getElementById("close-signup-modal"); // Commented out in HTML
const switchToSignup = document.getElementById("switch-to-signup");
// const switchToLogin = document.getElementById("switch-to-login"); // Commented out in HTML
const loginForm = document.getElementById("login-form");
// const signupForm = document.getElementById("signup-form"); // Commented out in HTML

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  console.log('DOM loaded, initializing app...');

  // Set current year in footer
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // Initialize category dropdown to "All Categories"
  if (categorySelect) {
    categorySelect.value = "all";
  }

  // Load products
  loadProducts();

  // Setup all event listeners
  setupEventListeners();
  loadCartFromStorage();
  loadWishlistFromStorage();
  checkLoginStatus();

  // Initialize cart display
  updateCart();

  // Update login button
  updateLoginButton();

  // Hide loading screen after everything is loaded
  setTimeout(() => {
    if (loadingScreen) {
      loadingScreen.classList.add("hidden");
    }
    document.body.style.overflow = "auto";
  }, 1500);

  // Render Shop by Category section
  renderCategoryGrid();

  console.log('App initialization complete');
});

// Setup event listeners
function setupEventListeners() {
  // Cart and wishlist toggles
  if (cartIcon) cartIcon.addEventListener("click", () => toggleSidebar("cart"));
  if (wishlistIcon) wishlistIcon.addEventListener("click", () => toggleSidebar("wishlist"));
  if (closeCart) closeCart.addEventListener("click", () => closeSidebar("cart"));
  if (closeWishlist) closeWishlist.addEventListener("click", () => closeSidebar("wishlist"));
  if (overlay) overlay.addEventListener("click", closeAllSidebars);

  // Search functionality
  if (searchBtn) searchBtn.addEventListener("click", searchProducts);
  if (searchInput) {
    searchInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") searchProducts();
    });
    searchInput.addEventListener("input", debounce(searchProducts, 300));
  }

  // Category dropdown functionality
  if (categorySelect) categorySelect.addEventListener("change", handleCategoryChange);

  // Navigation and filters
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", handleCategoryFilter);
  });

  // Sort functionality
  if (sortSelect) sortSelect.addEventListener("change", handleSort);

  // Back to top button
  window.addEventListener("scroll", handleScroll);
  if (backToTop) backToTop.addEventListener("click", scrollToTop);

  // Auth modals
  if (loginBtn) {
    loginBtn.addEventListener("click", () => openModal("login"));
  }
  if (closeLoginModal) {
    closeLoginModal.addEventListener("click", () => closeModal("login"));
  }

  // Product actions
  if (productList) productList.addEventListener('click', handleProductActions);
  if (cartItems) cartItems.addEventListener('click', handleCartActions);

  // Phone form submission
  const phoneForm = document.getElementById('phone-form');
  if (phoneForm) {
    phoneForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const phoneInput = document.getElementById('phone-number');
      if (!phoneInput) return;

      const phone = phoneInput.value.trim();

      if (phone.length !== 10 || !/^\d+$/.test(phone)) {
        showNotification('Please enter a valid 10-digit phone number', 'error');
        return;
      }

      phoneNumber = phone;
      generateAndSendOTP(phone);
    });
  }

  // OTP form submission
  const otpForm = document.getElementById('otp-form');
  if (otpForm) {
    otpForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const otpInput = document.getElementById('otp-input');
      if (!otpInput) return;

      const enteredOTP = otpInput.value.trim();

      if (enteredOTP.length !== 6 || !/^\d+$/.test(enteredOTP)) {
        showNotification('Please enter a valid 6-digit OTP', 'error');
        return;
      }

      verifyOTP(enteredOTP);
    });
  }

  // Resend OTP
  const resendOtpBtn = document.getElementById('resend-otp');
  if (resendOtpBtn) {
    resendOtpBtn.addEventListener('click', function() {
      if (phoneNumber) {
        generateAndSendOTP(phoneNumber);
      } else {
        showNotification('Please enter a phone number first', 'error');
      }
    });
  }

  // Close modal when clicking outside
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal') || e.target.classList.contains('close-modal')) {
      const modals = document.querySelectorAll('.modal');
      modals.forEach(modal => {
        modal.style.display = 'none';
      });
      document.body.style.overflow = 'auto';
    }
  });

  // Prevent modal from closing when clicking inside the modal content
  document.addEventListener('click', function(e) {
    if (e.target.closest('.modal') && !e.target.classList.contains('close-modal')) {
      e.stopPropagation();
    }
  });
}

// Display products with enhanced UI
function displayProducts(items) {
  productList.innerHTML = "";
  productList.className = "products-grid";

  if (items.length === 0) {
    productList.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-box-open"></i>
        <p>No products found</p>
        <small>Try adjusting your search or filters</small>
      </div>
    `;
    return;
  }

  items.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "product-card fade-in";
    div.style.animationDelay = `${index * 0.05}s`;

    const isInWishlist = wishlist.some((w) => w.name === item.name);
    const discountBadge = item.discount ? `<div class="discount-badge">-${item.discount}%</div>` : "";
    const originalPriceHTML = item.originalPrice ? `<span class="original-price">${item.originalPrice}</span>` : "";

    div.innerHTML = `
      ${discountBadge}
      <div class="product-header">
        <button class="product-action-btn wishlist-btn ${isInWishlist ? "active" : ""}" onclick="toggleWishlist('${item.name}')">
          <i class="fas fa-heart"></i>
        </button>
        <button class="product-action-btn quick-view-btn" onclick="quickView('${item.name}')">
          <i class="fas fa-eye"></i>
        </button>
      </div>
      <img src="${item.image}" alt="${item.name}" class="product-image" loading="lazy">
      <div class="product-info">
        <h3 class="product-title">${item.name}</h3>
        <p class="product-description">${item.description}</p>
        <div class="product-meta">
          <div class="price-section">
            <span class="product-price">${item.price}</span>
            ${originalPriceHTML}
          </div>
          <div class="product-rating">
            <span class="rating-stars">${generateStars(item.rating)}</span>
            <span class="rating-text">${item.rating} (${item.reviews})</span>
          </div>
        </div>
        <div class="product-actions">
          <button class="add-to-cart-btn" onclick="addToCart('${item.name}')">
            <i class="fas fa-shopping-cart"></i>
            Add to Cart
          </button>
          <button class="buy-now-btn" onclick="buyNow('${item.name}')">
            Buy Now
          </button>
        </div>
      </div>
    `;
    productList.appendChild(div);
  });
}

// Generate star rating
function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let stars = "";

  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fas fa-star"></i>';
  }

  if (hasHalfStar) {
    stars += '<i class="fas fa-star-half-alt"></i>';
  }

  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars += '<i class="far fa-star"></i>';
  }

  return stars;
}

// Filter products by category - now optimized to use categorized structure
function filterByCategory(category) {
  currentCategory = category;

  let filtered;
  if (category === "all") {
    filtered = products; // Use the flattened array for all products
  } else {
    // Use the optimized category-specific function when available
    filtered = typeof getProductsByCategory !== 'undefined' ?
      getProductsByCategory(category) :
      products.filter((item) => item.category === category);
  }

  const sorted = sortProducts(filtered, currentSort);
  displayProducts(sorted);

  // Update active category
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
  });

  document.querySelectorAll(`[data-category="${category}"]`).forEach((link) => {
    link.classList.add("active");
  });
}

// Handle category filter clicks
function handleCategoryFilter(e) {
  e.preventDefault();
  const category = e.target.getAttribute("data-category") || "all";
  filterByCategory(category);
  // Update dropdown to match
  categorySelect.value = category;
}

// Handle category dropdown change
function handleCategoryChange() {
  const selectedCategory = categorySelect.value;
  filterByCategory(selectedCategory);
}

// Search functionality with debouncing
function searchProducts() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  const selectedCategory = categorySelect.value;
  // Redirect to products.html with query params
  let url = 'products.html';
  const params = [];
  if (searchTerm) params.push(`q=${encodeURIComponent(searchTerm)}`);
  if (selectedCategory && selectedCategory !== 'all') params.push(`category=${encodeURIComponent(selectedCategory)}`);
  if (params.length) url += '?' + params.join('&');
  window.location.href = url;
}

// Debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Sort products
function sortProducts(items, sortType) {
  const sortedItems = [...items];

  switch (sortType) {
    case "price-low":
      return sortedItems.sort(
        (a, b) => Number.parseFloat(a.price.replace("₹", "")) - Number.parseFloat(b.price.replace("₹", "")),
      );
    case "price-high":
      return sortedItems.sort(
        (a, b) => Number.parseFloat(b.price.replace("₹", "")) - Number.parseFloat(a.price.replace("₹", "")),
      );
    case "name":
      return sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    case "rating":
      return sortedItems.sort((a, b) => b.rating - a.rating);
    case "discount":
      return sortedItems.sort((a, b) => (b.discount || 0) - (a.discount || 0));
    default:
      return sortedItems;
  }
}

// Handle sort change
function handleSort(e) {
  currentSort = e.target.value;
  const currentItems = getCurrentItems();
  const sorted = sortProducts(currentItems, currentSort);
  displayProducts(sorted);
}

// Get current filtered items
function getCurrentItems() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  let filtered = products;

  if (searchTerm) {
    filtered = products.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm),
    );
  }

  if (currentCategory !== "all") {
    filtered = filtered.filter((item) => item.category === currentCategory);
  }

  return filtered;
}

// Cart functions
function addToCart(itemName) {
  const item = products.find((g) => g.name === itemName);
  const existingItem = cart.find((i) => i.name === itemName);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  updateCart();
  saveCartToStorage();
  showNotification(`${item.name} added to cart!`, "success");
  animateCartIcon();
}

function removeFromCart(itemName) {
  cart = cart.filter((item) => item.name !== itemName);
  updateCart();
  saveCartToStorage();
  showNotification("Item removed from cart", "info");
}

function updateQuantity(itemName, delta) {
  const item = cart.find((i) => i.name === itemName);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(itemName);
    } else {
      updateCart();
      saveCartToStorage();
    }
  }
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <i class="fas fa-shopping-cart"></i>
        <p>Your cart is empty</p>
        <small>Add some delicious items to get started!</small>
      </div>
    `;
  } else {
    cart.forEach((item) => {
      const price = Number.parseFloat(item.price.replace("₹", ""));
      total += price * item.quantity;

      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-details">
          <h4>${item.name}</h4>
          <p>${item.price} × ${item.quantity} = ₹${(price * item.quantity).toFixed(2)}</p>
          <div class="quantity-controls">
            <button onclick="updateQuantity('${item.name}', -1)">
              <i class="fas fa-minus"></i>
            </button>
            <span>${item.quantity}</span>
            <button onclick="updateQuantity('${item.name}', 1)">
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>
        <button onclick="removeFromCart('${item.name}')" class="remove-item">
          <i class="fas fa-times"></i>
        </button>
      `;
      cartItems.appendChild(div);
    });
  }

  // Update cart total in sidebar
  cartTotal.textContent = `₹${total.toFixed(2)}`;

  // Update cart count and price in header with animation
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Animate cart badge update
  if (cartCount && cartCount.textContent !== totalItems.toString()) {
    cartCount.style.transform = 'scale(1.3)';
    cartCount.style.background = '#10b981';
    setTimeout(() => {
      cartCount.style.transform = 'scale(1)';
      cartCount.style.background = '#ef4444';
    }, 300);
  }
  if (cartCount) {
    cartCount.textContent = totalItems;
    // Hide badge when count is 0
    cartCount.style.display = totalItems > 0 ? 'block' : 'none';
  }

  // Update cart price in header with animation
  const cartPriceElement = document.querySelector('.cart-price');
  if (cartPriceElement) {
    const newPrice = `₹${total.toFixed(2)}`;
    if (cartPriceElement.textContent !== newPrice) {
      cartPriceElement.style.transform = 'scale(1.1)';
      cartPriceElement.style.color = '#fbbf24';
      setTimeout(() => {
        cartPriceElement.style.transform = 'scale(1)';
        cartPriceElement.style.color = '';
      }, 300);
    }
    cartPriceElement.textContent = newPrice;
  }
}

// Wishlist functions
function toggleWishlist(itemName) {
  const item = products.find((g) => g.name === itemName);
  const existingIndex = wishlist.findIndex((w) => w.name === itemName);

  if (existingIndex > -1) {
    wishlist.splice(existingIndex, 1);
    showNotification(`${item.name} removed from wishlist`, "info");
  } else {
    wishlist.push(item);
    showNotification(`${item.name} added to wishlist!`, "success");
  }

  updateWishlist();
  saveWishlistToStorage();
  updateWishlistButtons();
}

function updateWishlist() {
  wishlistItems.innerHTML = "";

  if (wishlist.length === 0) {
    wishlistItems.innerHTML = `
      <div class="empty-wishlist">
        <i class="fas fa-heart"></i>
        <p>Your wishlist is empty</p>
        <small>Save your favorite items here!</small>
      </div>
    `;
  } else {
    wishlist.forEach((item) => {
      const div = document.createElement("div");
      div.className = "wishlist-item";
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="wishlist-item-details">
          <h4>${item.name}</h4>
          <p>${item.price}</p>
          <button class="add-to-cart-btn" onclick="addToCart('${item.name}')">
            <i class="fas fa-shopping-cart"></i> Add to Cart
          </button>
        </div>
        <button onclick="toggleWishlist('${item.name}')" class="remove-item">
          <i class="fas fa-times"></i>
        </button>
      `;
      wishlistItems.appendChild(div);
    });
  }

  // No longer updating wishlist count in header since we removed it
}

function updateWishlistButtons() {
  document.querySelectorAll(".wishlist-btn").forEach((btn) => {
    const itemName = btn.getAttribute("onclick").match(/'([^']+)'/)[1];
    const isInWishlist = wishlist.some((w) => w.name === itemName);
    btn.classList.toggle("active", isInWishlist);
  });
}

// Sidebar functions
function toggleSidebar(type) {
  const sidebar = type === "cart" ? cartSidebar : wishlistSidebar;
  const isOpen = sidebar.classList.contains("open");

  closeAllSidebars();

  if (!isOpen) {
    sidebar.classList.add("open");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeSidebar(type) {
  const sidebar = type === "cart" ? cartSidebar : wishlistSidebar;
  sidebar.classList.remove("open");
  overlay.classList.remove("active");
  document.body.style.overflow = "auto";
}

function closeAllSidebars() {
  cartSidebar.classList.remove("open");
  wishlistSidebar.classList.remove("open");
  loginModal.classList.remove("open");
  signupModal.classList.remove("open");
  overlay.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Modal functions
function openModal(modalType) {
  console.log('Opening modal:', modalType);
  const modal = document.getElementById(`${modalType}-modal`);
  if (modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    // Focus on first input if it's the login modal
    if (modalType === 'login') {
      setTimeout(() => {
        const phoneInput = document.getElementById('phone-number');
        if (phoneInput) {
          phoneInput.focus();
          console.log('Focused on phone input');
        }
      }, 100);
    }
  } else {
    console.error('Modal not found:', modalType);
  }
}

function closeModal(modalType) {
  console.log('Closing modal:', modalType);
  const modal = document.getElementById(`${modalType}-modal`);
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    // Reset forms when closing
    if (modalType === 'login') {
      resetLoginForms();
    }
  }
}

// Auth functions
function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  // Simulate login (in a real app, this would be an API call)
  setTimeout(() => {
    isLoggedIn = true;
    currentUser = { email, name: email.split("@")[0] };
    saveUserToStorage();
    updateAuthUI();
    closeModal("login");
    showNotification("Login successful! Welcome back.", "success");
  }, 1000);
}

function handleSignup(e) {
  e.preventDefault();
  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  // Simulate signup (in a real app, this would be an API call)
  setTimeout(() => {
    isLoggedIn = true;
    currentUser = { email, name };
    saveUserToStorage();
    updateAuthUI();
    closeModal("signup");
    showNotification("Account created successfully! Welcome to Near & Now.", "success");
  }, 1000);
}

function handleLogout() {
  isLoggedIn = false;
  currentUser = null;
  localStorage.removeItem("nearAndNowUser");
  updateAuthUI();
  showNotification("You have been logged out.", "info");
}

function checkLoginStatus() {
  const savedUser = localStorage.getItem("nearAndNowUser");
  if (savedUser) {
    try {
      currentUser = JSON.parse(savedUser);
      isLoggedIn = true;
      updateAuthUI();
    } catch (e) {
      console.error('Error parsing saved user:', e);
      localStorage.removeItem('nearAndNowUser');
    }
  }
}

function updateAuthUI() {
  const authButtons = document.querySelector(".auth-buttons");

  if (isLoggedIn && currentUser) {
    authButtons.innerHTML = `
      <div class="user-welcome">
        <span>Welcome, ${currentUser.name}</span>
      </div>
      <button class="auth-btn logout-btn" onclick="handleLogout()">
        <i class="fas fa-sign-out-alt"></i>
        <span>Logout</span>
      </button>
    `;
  } else {
    authButtons.innerHTML = `
      <button class="auth-btn login-btn" id="login-btn">
        <i class="fas fa-user"></i>
        <span>Login</span>
      </button>
      // <button class="auth-btn signup-btn" id="signup-btn">
      //     <i class="fas fa-user-plus"></i>
      //     <span>Sign Up</span>
      // </button>
    `;

    // Re-attach event listeners
    const newLoginBtn = document.getElementById("login-btn");
    // const newSignupBtn = document.getElementById("signup-btn");
    if (newLoginBtn) newLoginBtn.addEventListener("click", () => openModal("login"));
    if (newSignupBtn) newSignupBtn.addEventListener("click", () => openModal("signup"));
  }
}

// Quick view function
function quickView(itemName) {
  const item = products.find((g) => g.name === itemName);
  showNotification(`Quick view for ${item.name} - Feature coming soon!`, "info");
}

// Buy now function
function buyNow(itemName) {
  addToCart(itemName);
  toggleSidebar("cart");
}

// Notification system
function showNotification(message, type = 'info') {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `fixed top-4 right-4 z-50 p-4 rounded-md shadow-lg max-w-sm transform transition-all duration-300 translate-x-full`;

  // Set colors based on type
  switch(type) {
    case 'success':
      notification.className += ' bg-green-500 text-white';
      break;
    case 'error':
      notification.className += ' bg-red-500 text-white';
      break;
    case 'warning':
      notification.className += ' bg-yellow-500 text-white';
      break;
    default:
      notification.className += ' bg-blue-500 text-white';
  }

  notification.textContent = message;
  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.classList.remove('translate-x-full');
  }, 100);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.classList.add('translate-x-full');
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// Animation functions
function animateCartIcon() {
  cartIcon.style.transform = "scale(1.1)";
  setTimeout(() => {
    cartIcon.style.transform = "scale(1)";
  }, 200);
}

// Storage functions
function saveCartToStorage() {
  localStorage.setItem("nearAndNowCart", JSON.stringify(cart));
}

function loadCartFromStorage() {
  const savedCart = localStorage.getItem("nearAndNowCart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCart();
  }
}

function saveWishlistToStorage() {
  localStorage.setItem("nearAndNowWishlist", JSON.stringify(wishlist));
}

function loadWishlistFromStorage() {
  const savedWishlist = localStorage.getItem("nearAndNowWishlist");
  if (savedWishlist) {
    wishlist = JSON.parse(savedWishlist);
    updateWishlist();
    updateWishlistButtons();
  }
}

function saveUserToStorage() {
  localStorage.setItem("nearAndNowUser", JSON.stringify(currentUser));
}

// Utility functions
function updateProductCount(count = products.length) {
  // Remove filterTags and productCount DOM references
  // const filterTags = document.querySelectorAll('.filter-tag');
  // const productCount = document.getElementById("product-count");
}

function handleScroll() {
  if (window.pageYOffset > 300) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function closePromoBanner() {
  const promoBanner = document.getElementById("promo-banner");
  promoBanner.style.display = "none";
}

// Keyboard shortcuts
function handleKeyboardShortcuts(e) {
  if (e.ctrlKey || e.metaKey) {
    switch (e.key) {
      case "k":
        e.preventDefault();
        searchInput.focus();
        break;
      case "b":
        e.preventDefault();
        toggleSidebar("cart");
        break;
      case "w":
        e.preventDefault();
        toggleSidebar("wishlist");
        break;
    }
  }

  if (e.key === "Escape") {
    closeAllSidebars();
  }
}

// Add notification styles
const notificationStyles = `
  .notification {
    position: fixed;
    top: 100px;
    right: 20px;
    background: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transform: translateX(400px);
    transition: transform 0.3s ease;
    z-index: 10000;
    max-width: 300px;
  }

  .notification.show {
    transform: translateX(0);
  }

  .notification.success {
    border-left: 4px solid var(--success-color);
    color: var(--success-color);
  }

  .notification.warning {
    border-left: 4px solid var(--warning-color);
    color: var(--warning-color);
  }

  .notification.error {
    border-left: 4px solid var(--error-color);
    color: var(--error-color);
  }

  .notification.info {
    border-left: 4px solid var(--primary-color);
    color: var(--primary-color);
  }

  .user-welcome {
    padding: 0.5rem 1rem;
    background: var(--light-bg);
    border-radius: var(--border-radius-small);
    font-weight: 500;
    color: var(--text-color);
    font-size: 0.875rem;
  }

  .logout-btn {
    background: var(--error-color);
    color: white;
  }

  .logout-btn:hover {
    background: #DC2626;
    transform: translateY(-1px);
  }
`;

// Inject notification styles
const styleSheet = document.createElement("style");
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);

// Initialize smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add intersection observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-up");
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll(".feature-card, .contact-item, .about-content");
  elementsToAnimate.forEach((el) => observer.observe(el));
});

// Product actions - these are handled by onclick attributes in the HTML
function handleProductActions(e) {
  // Product interactions are handled via onclick attributes
  // This function can be used for future event delegation if needed
}

// Cart actions - these are handled by onclick attributes in the HTML
function handleCartActions(e) {
  // Cart interactions are handled via onclick attributes
  // This function can be used for future event delegation if needed
}

// These functions are handled by the existing updateQuantity function above

function renderCategoryGrid() {
  const categoryGrid = document.getElementById("category-grid");
  if (!categoryGrid || typeof productsByCategory === 'undefined') return;
  categoryGrid.innerHTML = '';
  Object.entries(productsByCategory).forEach(([category, items]) => {
    if (!items.length) return;
    const card = document.createElement('div');
    card.className = 'category-card';
    card.setAttribute('data-category', category);
    card.innerHTML = `
      <img src="${items[0].image}" alt="${category}">
      <div class="category-name">${category}</div>
    `;
    card.addEventListener('click', () => {
      filterByCategory(category);
      document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });
    categoryGrid.appendChild(card);
  });
}

function generateAndSendOTP(phone) {
  console.log('Generating OTP for phone:', phone);

  // Generate a random 6-digit OTP
  currentOTP = Math.floor(100000 + Math.random() * 900000).toString();

  // In a real app, this would be sent via SMS
  console.log('OTP sent to', phone, ':', currentOTP);

  // Show success message
  showNotification(`OTP sent to +91 ${phone}`, 'success');

  // Switch to OTP form
  const phoneForm = document.getElementById('phone-form');
  const otpForm = document.getElementById('otp-form');
  const phoneDisplay = document.getElementById('phone-display');

  if (phoneForm && otpForm && phoneDisplay) {
    phoneForm.classList.add('hidden');
    otpForm.classList.remove('hidden');
    phoneDisplay.textContent = `+91 ${phone}`;

    // Focus on OTP input
    setTimeout(() => {
      const otpInput = document.getElementById('otp-input');
      if (otpInput) {
        otpInput.focus();
        console.log('Focused on OTP input');
      }
    }, 100);
  } else {
    console.error('Required form elements not found');
    showNotification('Error: Form elements not found', 'error');
  }
}

function verifyOTP(enteredOTP) {
  console.log('Verifying OTP:', enteredOTP, 'Expected:', currentOTP);

  if (enteredOTP === currentOTP) {
    // Login successful
    console.log('Login successful for user:', phoneNumber);
    showNotification('Login successful!', 'success');
    isLoggedIn = true;
    currentUser = {
      phone: phoneNumber,
      name: `User ${phoneNumber.slice(-4)}`
    };
    saveUserToStorage();
    updateLoginButton();
    closeModal('login');

    // Reset forms
    resetLoginForms();
  } else {
    console.log('Invalid OTP entered');
    showNotification('Invalid OTP. Please try again.', 'error');
    const otpInput = document.getElementById('otp-input');
    if (otpInput) {
      otpInput.value = '';
      otpInput.focus();
    }
  }
}

function resetLoginForms() {
  console.log('Resetting login forms');
  const phoneInput = document.getElementById('phone-number');
  const otpInput = document.getElementById('otp-input');
  const phoneForm = document.getElementById('phone-form');
  const otpForm = document.getElementById('otp-form');

  if (phoneInput) phoneInput.value = '';
  if (otpInput) otpInput.value = '';
  if (phoneForm) phoneForm.classList.remove('hidden');
  if (otpForm) otpForm.classList.add('hidden');

  currentOTP = null;
  phoneNumber = null;
}

// Update login button text when user is logged in
function updateLoginButton() {
  console.log('Updating login button, isLoggedIn:', isLoggedIn);
  const loginBtn = document.getElementById('login-btn');
  if (!loginBtn) {
    console.error('Login button not found');
    return;
  }

  if (isLoggedIn && currentUser) {
    loginBtn.innerHTML = `
      <i class="fas fa-user"></i>
      ${currentUser.name}
    `;
    loginBtn.onclick = () => {
      // Show user menu or logout option
      if (confirm('Do you want to logout?')) {
        logout();
      }
    };
    console.log('User logged in, button updated to show:', currentUser.name);
  } else {
    loginBtn.innerHTML = `
      <i class="fas fa-user"></i>
      Login
    `;
    loginBtn.onclick = () => openModal('login');
    console.log('User not logged in, button updated to show Login');
  }
}

function logout() {
  console.log('Logging out user');
  isLoggedIn = false;
  currentUser = null;
  localStorage.removeItem('nearAndNowUser');
  updateLoginButton();
  showNotification('Logged out successfully', 'success');
}
