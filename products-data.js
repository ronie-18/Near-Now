// Products organized by categories for better management
const productsByCategory = {
  staples: [
    {
      "name": "Basmati Rice",
      "image": "https://img.freepik.com/free-photo/top-view-raw-rice-inside-plate-dark-desk_179666-27235.jpg?semt=ais_hybrid&w=740",
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
      "image": "https://familyemart.com/wp-content/uploads/2024/08/toor-dal-dry.png",
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
      "image": "https://w7.pngwing.com/pngs/521/890/png-transparent-atta-flour-maida-flour-bakery-bread-flour-food-bread-superfood-thumbnail.png",
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
      "image": "https://t3.ftcdn.net/jpg/08/70/25/74/360_F_870257492_9Sn0NTaLMyURnHmhknUN0KQ3DYG6lw5t.jpg",
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
      "image": "https://www.viralspices.com/wp-content/uploads/2024/11/Untitled-1-624x312.jpg",
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
      "image": "https://img.favpng.com/18/10/21/indian-cuisine-spice-mix-garam-masala-food-png-favpng-XQkNqYG2guqW8XfQze5n9Q2yw.jpg",
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
      "image": "https://t4.ftcdn.net/jpg/06/68/59/49/360_F_668594985_30FQV0Mhp8TDVpFQWHYG0QuGM99zChDp.jpg",
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
      "image": "https://www.pngplay.com/wp-content/uploads/7/Cardamom-PNG-Photos.png",
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
      "image": "https://img.freepik.com/premium-photo/paneer-isolated-white-background-generative-ai_21085-38553.jpg?semt=ais_hybrid&w=740",
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
      "image": "https://5.imimg.com/data5/SELLER/Default/2024/3/399027791/HJ/LK/FV/15095982/pure-cow-ghee-500x500.jpg",
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
      "image": "https://t3.ftcdn.net/jpg/06/38/49/08/360_F_638490855_Xc9sCWftHHJ5mYpjqKne7W4IxlWDUOqd.jpg",
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
      "image": "https://i.pinimg.com/736x/df/b2/8b/dfb28b96f1dc9cf2dce282cda2b57701.jpg",
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
      "image": "https://w7.pngwing.com/pngs/186/818/png-transparent-brown-potatoes-illustration-potato-potato-food-smoothie-gym.png",
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
      "image": "https://freepngimg.com/download/tomato/159306-fresh-photos-tomatoes-bunch-free-photo.png",
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
      "image": "https://5.imimg.com/data5/SELLER/Default/2025/3/494508142/NP/WE/CR/16142548/urad-masala-papad.png",
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
      "image": "https://png.pngtree.com/png-vector/20240812/ourlarge/pngtree-explore-the-flavors-of-indian-crunchy-mix-namkeen-png-image_13452116.png",
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
      "image": "https://img.favpng.com/10/5/0/assam-tea-tea-leaf-grading-green-tea-black-tea-png-favpng-PnS4rCcZ8HWXN43QWhHEjQHWf.jpg",
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