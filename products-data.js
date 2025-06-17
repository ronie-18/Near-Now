// Products organized by categories for better management
const productsByCategory = {
  staples: [
    {
      "name": "Basmati Rice",
      "image": "https://cdn-icons-png.flaticon.com/512/3174/3174880.png",
      "description": "Premium long-grain basmati rice, 5kg pack. Perfect for biryanis and pulao.",
      "price": "₹450",
      "originalPrice": "₹500",
      "rating": 4.5,
      "reviews": 128,
      "inStock": true,
      "discount": 10
    },
    {
      "name": "Toor Dal",
      "image": "https://cdn-icons-png.flaticon.com/512/2548/2548555.png",
      "description": "Yellow split pigeon peas, 1kg pack. Rich in protein and essential nutrients.",
      "price": "₹160",
      "originalPrice": "₹180",
      "rating": 4.3,
      "reviews": 95,
      "inStock": true,
      "discount": 11
    },
    {
      "name": "Whole Wheat Atta",
      "image": "https://cdn-icons-png.flaticon.com/512/2515/2515274.png",
      "description": "Whole wheat flour, 5kg pack. Stone ground for better nutrition.",
      "price": "₹250",
      "originalPrice": "₹280",
      "rating": 4.2,
      "reviews": 167,
      "inStock": true,
      "discount": 11
    },
    {
      "name": "Chana Dal",
      "image": "https://cdn-icons-png.flaticon.com/512/2548/2548555.png",
      "description": "Split Bengal gram, 1kg pack. High protein content and great taste.",
      "price": "₹130",
      "originalPrice": "₹150",
      "rating": 4.3,
      "reviews": 112,
      "inStock": true,
      "discount": 13
    }
  ],
  
  spices: [
    {
      "name": "Turmeric Powder",
      "image": "https://cdn-icons-png.flaticon.com/512/5769/5769174.png",
      "description": "Pure organic turmeric powder, 100g pack. Natural anti-inflammatory properties.",
      "price": "₹45",
      "originalPrice": "₹55",
      "rating": 4.7,
      "reviews": 203,
      "inStock": true,
      "discount": 18
    },
    {
      "name": "Garam Masala",
      "image": "https://cdn-icons-png.flaticon.com/512/3081/3081986.png",
      "description": "Authentic blend of ground spices, 100g pack. Perfect for Indian curries.",
      "price": "₹85",
      "originalPrice": "₹95",
      "rating": 4.6,
      "reviews": 156,
      "inStock": true,
      "discount": 11
    },
    {
      "name": "Red Chili Powder",
      "image": "https://cdn-icons-png.flaticon.com/512/5769/5769174.png",
      "description": "Premium quality red chili powder, 200g pack. Adds perfect heat to dishes.",
      "price": "₹75",
      "originalPrice": "₹85",
      "rating": 4.4,
      "reviews": 89,
      "inStock": true,
      "discount": 12
    },
    {
      "name": "Cardamom",
      "image": "https://cdn-icons-png.flaticon.com/512/5769/5769174.png",
      "description": "Premium green cardamom, 50g pack. Aromatic spice for desserts.",
      "price": "₹320",
      "originalPrice": "₹350",
      "rating": 4.8,
      "reviews": 145,
      "inStock": true,
      "discount": 9
    }
  ],
  
  dairy: [
    {
      "name": "Fresh Paneer",
      "image": "https://cdn-icons-png.flaticon.com/512/2515/2515274.png",
      "description": "Fresh cottage cheese, 200g pack. Made daily with pure milk.",
      "price": "₹80",
      "originalPrice": "₹90",
      "rating": 4.4,
      "reviews": 87,
      "inStock": true,
      "discount": 11
    },
    {
      "name": "Pure Cow Ghee",
      "image": "https://cdn-icons-png.flaticon.com/512/2515/2515274.png",
      "description": "Pure cow ghee, 500ml jar. Traditional churned for authentic taste.",
      "price": "₹450",
      "originalPrice": "₹520",
      "rating": 4.8,
      "reviews": 234,
      "inStock": true,
      "discount": 13
    },
    {
      "name": "Coconut Oil",
      "image": "https://cdn-icons-png.flaticon.com/512/2515/2515274.png",
      "description": "Pure coconut oil, 500ml bottle. Cold-pressed for maximum nutrition.",
      "price": "₹180",
      "originalPrice": "₹200",
      "rating": 4.6,
      "reviews": 156,
      "inStock": true,
      "discount": 10
    }
  ],
  
  vegetables: [
    {
      "name": "Onions",
      "image": "https://cdn-icons-png.flaticon.com/512/765/765560.png",
      "description": "Fresh red onions, 1kg pack. Essential for Indian cooking.",
      "price": "₹40",
      "originalPrice": "₹50",
      "rating": 4.2,
      "reviews": 234,
      "inStock": true,
      "discount": 20
    },
    {
      "name": "Potatoes",
      "image": "https://cdn-icons-png.flaticon.com/512/590/590779.png",
      "description": "Fresh potatoes, 2kg pack. Versatile vegetable for various dishes.",
      "price": "₹60",
      "originalPrice": "₹70",
      "rating": 4.1,
      "reviews": 189,
      "inStock": true,
      "discount": 14
    },
    {
      "name": "Tomatoes",
      "image": "https://cdn-icons-png.flaticon.com/512/765/765557.png",
      "description": "Fresh ripe tomatoes, 1kg pack. Perfect for curries and salads.",
      "price": "₹35",
      "originalPrice": "₹45",
      "rating": 4.3,
      "reviews": 167,
      "inStock": true,
      "discount": 22
    }
  ],
  
  snacks: [
    {
      "name": "Masala Papad",
      "image": "https://cdn-icons-png.flaticon.com/512/3081/3081986.png",
      "description": "Spicy lentil wafers, 200g pack. Crispy and flavorful snack.",
      "price": "₹60",
      "originalPrice": "₹70",
      "rating": 4.1,
      "reviews": 76,
      "inStock": true,
      "discount": 14
    },
    {
      "name": "Namkeen Mix",
      "image": "https://cdn-icons-png.flaticon.com/512/3081/3081986.png",
      "description": "Assorted namkeen mix, 250g pack. Perfect tea-time snack.",
      "price": "₹95",
      "originalPrice": "₹110",
      "rating": 4.0,
      "reviews": 78,
      "inStock": true,
      "discount": 14
    }
  ],
  
  beverages: [
    {
      "name": "Assam Tea Powder",
      "image": "https://cdn-icons-png.flaticon.com/512/924/924915.png",
      "description": "Premium Assam tea leaves, 250g pack. Strong and aromatic blend.",
      "price": "₹120",
      "originalPrice": "₹140",
      "rating": 4.5,
      "reviews": 145,
      "inStock": true,
      "discount": 14
    }
  ]
};

// Helper function to get all products as a flat array (for backward compatibility)
function getAllProducts() {
  const allProducts = [];
  for (const [categoryName, products] of Object.entries(productsByCategory)) {
    // Add category information back to each product when flattening
    const productsWithCategory = products.map(product => ({
      ...product,
      category: categoryName
    }));
    allProducts.push(...productsWithCategory);
  }
  return allProducts;
}

// Helper function to get products by specific category
function getProductsByCategory(categoryName) {
  const categoryProducts = productsByCategory[categoryName] || [];
  // Add category information back to each product
  return categoryProducts.map(product => ({
    ...product,
    category: categoryName
  }));
}

// Helper function to get all available categories
function getAvailableCategories() {
  return Object.keys(productsByCategory);
}

// Main products array for backward compatibility
const products = getAllProducts(); 