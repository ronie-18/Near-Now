const groceries = [
  {
    name: "Basmati Rice",
    image: "https://cdn-icons-png.flaticon.com/512/3174/3174880.png",
    description: "Premium long-grain basmati rice, 5kg pack. Perfect for biryanis and pulao.",
    price: "₹450",
    originalPrice: "₹500",
    category: "staples",
    rating: 4.5,
    reviews: 128,
    inStock: true,
    discount: 10,
  },
  {
    name: "Toor Dal",
    image: "https://cdn-icons-png.flaticon.com/512/2548/2548555.png",
    description: "Yellow split pigeon peas, 1kg pack. Rich in protein and essential nutrients.",
    price: "₹160",
    originalPrice: "₹180",
    category: "staples",
    rating: 4.3,
    reviews: 95,
    inStock: true,
    discount: 11,
  },
  {
    name: "Turmeric Powder",
    image: "https://cdn-icons-png.flaticon.com/512/5769/5769174.png",
    description: "Pure organic turmeric powder, 100g pack. Natural anti-inflammatory properties.",
    price: "₹45",
    originalPrice: "₹55",
    category: "spices",
    rating: 4.7,
    reviews: 203,
    inStock: true,
    discount: 18,
  },
  {
    name: "Garam Masala",
    image: "https://cdn-icons-png.flaticon.com/512/3082/3082004.png",
    description: "Authentic blend of ground spices, 100g pack. Perfect for Indian curries.",
    price: "₹85",
    originalPrice: "₹95",
    category: "spices",
    rating: 4.6,
    reviews: 156,
    inStock: true,
    discount: 11,
  },
  {
    name: "Fresh Paneer",
    image: "https://cdn-icons-png.flaticon.com/512/2372/2372241.png",
    description: "Fresh cottage cheese, 200g pack. Made daily with pure milk.",
    price: "₹80",
    originalPrice: "₹90",
    category: "dairy",
    rating: 4.4,
    reviews: 87,
    inStock: true,
    discount: 11,
  },
  {
    name: "Pure Cow Ghee",
    image: "https://cdn-icons-png.flaticon.com/512/2372/2372241.png",
    description: "Pure cow ghee, 500ml jar. Traditional churned for authentic taste.",
    price: "₹450",
    originalPrice: "₹520",
    category: "dairy",
    rating: 4.8,
    reviews: 234,
    inStock: true,
    discount: 13,
  },
  {
    name: "Whole Wheat Atta",
    image: "https://cdn-icons-png.flaticon.com/512/2548/2548555.png",
    description: "Whole wheat flour, 5kg pack. Stone ground for better nutrition.",
    price: "₹250",
    originalPrice: "₹280",
    category: "staples",
    rating: 4.2,
    reviews: 167,
    inStock: true,
    discount: 11,
  },
  {
    name: "Assam Tea Powder",
    image: "https://cdn-icons-png.flaticon.com/512/1864/1864001.png",
    description: "Premium Assam tea leaves, 250g pack. Strong and aromatic blend.",
    price: "₹120",
    originalPrice: "₹140",
    category: "beverages",
    rating: 4.5,
    reviews: 145,
    inStock: true,
    discount: 14,
  },
  {
    name: "Masala Papad",
    image: "https://cdn-icons-png.flaticon.com/512/2372/2372241.png",
    description: "Spicy lentil wafers, 200g pack. Crispy and flavorful snack.",
    price: "₹60",
    originalPrice: "₹70",
    category: "snacks",
    rating: 4.1,
    reviews: 76,
    inStock: true,
    discount: 14,
  },
  {
    name: "Chana Dal",
    image: "https://cdn-icons-png.flaticon.com/512/2548/2548555.png",
    description: "Split Bengal gram, 1kg pack. High protein content and great taste.",
    price: "₹130",
    originalPrice: "₹150",
    category: "staples",
    rating: 4.3,
    reviews: 112,
    inStock: true,
    discount: 13,
  },
  {
    name: "Red Chili Powder",
    image: "https://cdn-icons-png.flaticon.com/512/5769/5769174.png",
    description: "Premium quality red chili powder, 200g pack. Adds perfect heat to dishes.",
    price: "₹75",
    originalPrice: "₹85",
    category: "spices",
    rating: 4.4,
    reviews: 89,
    inStock: true,
    discount: 12,
  },
  {
    name: "Coconut Oil",
    image: "https://cdn-icons-png.flaticon.com/512/2372/2372241.png",
    description: "Pure coconut oil, 500ml bottle. Cold-pressed for maximum nutrition.",
    price: "₹180",
    originalPrice: "₹200",
    category: "dairy",
    rating: 4.6,
    reviews: 156,
    inStock: true,
    discount: 10,
  },
  {
    name: "Onions",
    image: "https://cdn-icons-png.flaticon.com/512/2909/2909761.png",
    description: "Fresh red onions, 1kg pack. Essential for Indian cooking.",
    price: "₹40",
    originalPrice: "₹50",
    category: "vegetables",
    rating: 4.2,
    reviews: 234,
    inStock: true,
    discount: 20,
  },
  {
    name: "Potatoes",
    image: "https://cdn-icons-png.flaticon.com/512/2909/2909761.png",
    description: "Fresh potatoes, 2kg pack. Versatile vegetable for various dishes.",
    price: "₹60",
    originalPrice: "₹70",
    category: "vegetables",
    rating: 4.1,
    reviews: 189,
    inStock: true,
    discount: 14,
  },
  {
    name: "Tomatoes",
    image: "https://cdn-icons-png.flaticon.com/512/2909/2909761.png",
    description: "Fresh ripe tomatoes, 1kg pack. Perfect for curries and salads.",
    price: "₹35",
    originalPrice: "₹45",
    category: "vegetables",
    rating: 4.3,
    reviews: 167,
    inStock: true,
    discount: 22,
  },
  {
    name: "Namkeen Mix",
    image: "https://cdn-icons-png.flaticon.com/512/2372/2372241.png",
    description: "Assorted namkeen mix, 250g pack. Perfect tea-time snack.",
    price: "₹95",
    originalPrice: "₹110",
    category: "snacks",
    rating: 4.0,
    reviews: 78,
    inStock: true,
    discount: 14,
  },
  {
    name: "Cardamom",
    image: "https://cdn-icons-png.flaticon.com/512/3082/3082004.png",
    description: "Premium green cardamom, 50g pack. Aromatic spice for desserts.",
    price: "₹320",
    originalPrice: "₹350",
    category: "spices",
    rating: 4.8,
    reviews: 145,
    inStock: true,
    discount: 9,
  },
  {
    name: "Masala Chai",
    image: "https://cdn-icons-png.flaticon.com/512/1864/1864001.png",
    description: "Spiced tea blend, 200g pack. Perfect for authentic Indian chai.",
    price: "₹140",
    originalPrice: "₹160",
    category: "beverages",
    rating: 4.5,
    reviews: 198,
    inStock: true,
    discount: 13,
  },
  {
    name: "Yogurt",
    image: "https://cdn-icons-png.flaticon.com/512/2372/2372241.png",
    description: "Fresh yogurt, 500g pack. Creamy and rich in probiotics.",
    price: "₹45",
    originalPrice: "₹55",
    category: "dairy",
    rating: 4.3,
    reviews: 123,
    inStock: true,
    discount: 18,
  },
  {
    name: "Biscuits Assorted",
    image: "https://cdn-icons-png.flaticon.com/512/2372/2372241.png",
    description: "Mixed biscuits pack, 400g. Variety of flavors for the whole family.",
    price: "₹85",
    originalPrice: "₹100",
    category: "snacks",
    rating: 4.2,
    reviews: 156,
    inStock: true,
    discount: 15,
  },
]

// Global variables
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let currentCategory = "all";
let currentSort = "default";
let isLoggedIn = false;
let currentUser = null;

// DOM elements
const groceryList = document.getElementById("grocery-list");
const cartIcon = document.getElementById("cart-icon");
const wishlistIcon = document.getElementById("wishlist-icon");
const cartSidebar = document.getElementById("cart-sidebar");
const wishlistSidebar = document.getElementById("wishlist-sidebar");
const cartItems = document.getElementById("cart-items");
const wishlistItems = document.getElementById("wishlist-items");
const cartCount = document.querySelector(".cart-count");
const wishlistCount = document.querySelector(".wishlist-count");
const cartTotal = document.getElementById("cart-total");
const closeCart = document.querySelector(".close-cart");
const closeWishlist = document.querySelector(".close-wishlist");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const overlay = document.getElementById("overlay");
const productCount = document.getElementById("product-count");
const sortSelect = document.getElementById("sort-select");
const backToTop = document.getElementById("back-to-top");
const loadingScreen = document.getElementById("loading-screen");
const currentYear = document.getElementById("current-year");
const loginBtn = document.getElementById("login-btn");
// const signupBtn = document.getElementById("signup-btn");
const loginModal = document.getElementById("login-modal");
const signupModal = document.getElementById("signup-modal");
const closeLoginModal = document.getElementById("close-login-modal");
const closeSignupModal = document.getElementById("close-signup-modal");
const switchToSignup = document.getElementById("switch-to-signup");
const switchToLogin = document.getElementById("switch-to-login");
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const filterTags = document.querySelectorAll('.filter-tag');

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  // Show loading screen
  setTimeout(() => {
    loadingScreen.classList.add("hidden");
    document.body.style.overflow = "auto";
  }, 1500);

  // Set current year in footer
  currentYear.textContent = new Date().getFullYear();

  displayGroceries(groceries);
  setupEventListeners();
  loadCartFromStorage();
  loadWishlistFromStorage();
  updateProductCount();
  checkLoginStatus();
});

// Setup event listeners
function setupEventListeners() {
  // Cart and wishlist toggles
  cartIcon.addEventListener("click", () => toggleSidebar("cart"));
  wishlistIcon.addEventListener("click", () => toggleSidebar("wishlist"));
  closeCart.addEventListener("click", () => closeSidebar("cart"));
  closeWishlist.addEventListener("click", () => closeSidebar("wishlist"));
  overlay.addEventListener("click", closeAllSidebars);

  // Search functionality
  searchBtn.addEventListener("click", searchGroceries);
  searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") searchGroceries();
  });
  searchInput.addEventListener("input", debounce(searchGroceries, 300));

  // Trending search tags
  document.querySelectorAll(".trending-item").forEach((tag) => {
    tag.addEventListener("click", (e) => {
      const searchTerm = e.target.getAttribute("data-search");
      searchInput.value = searchTerm;
      searchGroceries();
    });
  });

  // Navigation and filters
  document.querySelectorAll(".nav-link, .filter-tag").forEach((link) => {
    link.addEventListener("click", handleCategoryFilter);
  });

  // Sort functionality
  sortSelect.addEventListener("change", handleSort);

  // Back to top button
  window.addEventListener("scroll", handleScroll);
  backToTop.addEventListener("click", scrollToTop);

  // Auth modals
  if (loginBtn) loginBtn.addEventListener("click", () => openModal("login"));
  if (signupBtn) signupBtn.addEventListener("click", () => openModal("signup"));
  closeLoginModal.addEventListener("click", () => closeModal("login"));
  closeSignupModal.addEventListener("click", () => closeModal("signup"));
  switchToSignup.addEventListener("click", (e) => {
    e.preventDefault();
    closeModal("login");
    openModal("signup");
  });
  switchToLogin.addEventListener("click", (e) => {
    e.preventDefault();
    closeModal("signup");
    openModal("login");
  });

  // Auth forms
  loginForm.addEventListener("submit", handleLogin);
  signupForm.addEventListener("submit", handleSignup);

  // Keyboard shortcuts
  document.addEventListener("keydown", handleKeyboardShortcuts);

  // Product actions
  groceryList.addEventListener('click', handleProductActions);
  cartItems.addEventListener('click', handleCartActions);
}

// Display groceries with enhanced UI
function displayGroceries(items) {
  groceryList.innerHTML = "";
  groceryList.className = "products-grid";

  if (items.length === 0) {
    groceryList.innerHTML = `
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
    groceryList.appendChild(div);
  });

  updateProductCount(items.length);
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

// Filter groceries by category
function filterByCategory(category) {
  currentCategory = category;
  const filtered = category === "all" ? groceries : groceries.filter((item) => item.category === category);

  const sorted = sortGroceries(filtered, currentSort);
  displayGroceries(sorted);

  // Update active category
  document.querySelectorAll(".nav-link, .filter-tag").forEach((link) => {
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
}

// Search functionality with debouncing
function searchGroceries() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  let filtered = groceries;

  if (searchTerm) {
    filtered = groceries.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm),
    );
  }

  if (currentCategory !== "all") {
    filtered = filtered.filter((item) => item.category === currentCategory);
  }

  const sorted = sortGroceries(filtered, currentSort);
  displayGroceries(sorted);

  // Show search results message
  if (searchTerm && filtered.length === 0) {
    showNotification("No products found for your search.", "warning");
  }
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

// Sort groceries
function sortGroceries(items, sortType) {
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
  const sorted = sortGroceries(currentItems, currentSort);
  displayGroceries(sorted);
}

// Get current filtered items
function getCurrentItems() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  let filtered = groceries;

  if (searchTerm) {
    filtered = groceries.filter(
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
  const item = groceries.find((g) => g.name === itemName);
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

  cartTotal.textContent = `₹${total.toFixed(2)}`;
  cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

// Wishlist functions
function toggleWishlist(itemName) {
  const item = groceries.find((g) => g.name === itemName);
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

  wishlistCount.textContent = wishlist.length;
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

// Auth modal functions
function openModal(type) {
  closeAllSidebars();

  const modal = type === "login" ? loginModal : signupModal;
  modal.classList.add("open");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal(type) {
  const modal = type === "login" ? loginModal : signupModal;
  modal.classList.remove("open");
  overlay.classList.remove("active");
  document.body.style.overflow = "auto";
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
    currentUser = JSON.parse(savedUser);
    isLoggedIn = true;
    updateAuthUI();
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
  const item = groceries.find((g) => g.name === itemName);
  showNotification(`Quick view for ${item.name} - Feature coming soon!`, "info");
}

// Buy now function
function buyNow(itemName) {
  addToCart(itemName);
  toggleSidebar("cart");
}

// Notification system
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.innerHTML = `
    <i class="fas fa-${getNotificationIcon(type)}"></i>
    <span>${message}</span>
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add("show");
  }, 100);

  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

function getNotificationIcon(type) {
  switch (type) {
    case "success":
      return "check-circle";
    case "warning":
      return "exclamation-triangle";
    case "error":
      return "times-circle";
    default:
      return "info-circle";
  }
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
function updateProductCount(count = groceries.length) {
  productCount.textContent = `${count} product${count !== 1 ? "s" : ""}`;
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

// Product actions
function handleProductActions(e) {
  const target = e.target;
  const productId = target.closest('[data-product-id]')?.getAttribute('data-product-id');
  
  if (!productId) return;

  if (target.classList.contains('wishlist-btn')) {
    toggleWishlist(productId);
  } else if (target.classList.contains('add-to-cart-btn')) {
    addToCart(productId);
  } else if (target.classList.contains('quantity-btn')) {
    adjustQuantity(productId, target.classList.contains('plus'));
  }
}

// Cart actions
function handleCartActions(e) {
  const target = e.target;
  const productId = target.closest('[data-product-id]')?.getAttribute('data-product-id');
  
  if (!productId) return;

  if (target.classList.contains('remove-item')) {
    removeFromCart(productId);
  } else if (target.classList.contains('quantity-btn')) {
    adjustCartQuantity(productId, target.classList.contains('plus'));
  }
}

// Adjust quantity
function adjustQuantity(productId, increase) {
  const item = cart.find(item => item.id === productId);
  if (!item) return;

  const product = storeManager.getProduct(productId);
  if (!product) return;

  if (increase) {
    if (item.quantity < product.stock) {
      item.quantity++;
    } else {
      alert('Not enough stock available');
    }
  } else {
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      removeFromCart(productId);
      return;
    }
  }

  updateCart();
}

// Adjust cart quantity
function adjustCartQuantity(productId, increase) {
  const item = cart.find(item => item.id === productId);
  if (!item) return;

  const product = storeManager.getProduct(productId);
  if (!product) return;

  if (increase) {
    if (item.quantity < product.stock) {
      item.quantity++;
    } else {
      alert('Not enough stock available');
    }
  } else {
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      removeFromCart(productId);
      return;
    }
  }

  updateCart();
}
