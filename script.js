// Product data
const products = [{
        id: 1,
        name: 'Fresh Cow Milk',
        price: 65,
        image: 'https://dairy.anantkrushna.com/wp-content/uploads/2025/06/farm-fresh-cow-milk-in-nigdi.jpg',
        unit: '1L'
    },
    {
        id: 2,
        name: 'Pure Butter',
        price: 350,
        image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSlfMDS00YmbcCAiK-Cgx8nNcK83umXTQex9mzEn93EaeWvwqNQ29jEriNyYq3Oo13tiIBE4i6KYOfAFN8XrYuo1CUvK5lxGg',
        unit: '500g'
    },
    {
        id: 3,
        name: 'Desi Ghee',
        price: 600,
        image: 'data:image/webp;base64,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',
        unit: '500g'
    },
    {
        id: 4,
        name: 'Fresh Paneer',
        price: 250,
        image: 'https://www.fleshkart.com/uploads/product/1752218325-WhatsApp%20Image%202025-07-11%20at%2011.57.19%20AM.jpeg',
        unit: '500g'
    },
    {
        id: 5,
        name: 'Creamy Curd',
        price: 100,
        image: 'https://vaya.in/recipes/wp-content/uploads/2019/08/thick-curd.jpg',
        unit: '1Kg'
    },
    {
        id: 6,
        name: 'buffalo Milk',
        price: 80,
        image: "data:image/jpeg;base64,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",
        unit: '1L'
    },
  {
  id: 7,
  name: "Kalakand",
  price:1200,
  image: "https://res.cloudinary.com/dptxuxhbm/image/upload/v1776693437/ChatGPT_Image_Apr_20_2026_07_26_27_PM_uftgsr.png",
  unit: "1KG"
  }
];

// WhatsApp number (update with actual number)
const whatsappNumber = '918886289691';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    initNavbar();
    initSlider();
});

// Load products
function loadProducts() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    products.forEach(product => {
        const card = createProductCard(product);
        grid.appendChild(card);
    });
}

// Create product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <div class="product-price">₹${product.price} / ${product.unit}</div>
            <div class="quantity-selector">
                <button class="quantity-btn" onclick="changeQty(this, -1)">-</button>
                <span class="quantity">1</span>
                <button class="quantity-btn" onclick="changeQty(this, 1)">+</button>
            </div>
            <button class="whatsapp-btn" onclick="orderOnWhatsApp(${product.id})">
                <i class="fab fa-whatsapp"></i> Order on WhatsApp
            </button>
        </div>
    `;
    return card;
}

// Quantity change
function changeQty(button, delta) {
    const qtySpan = button.parentElement.querySelector('.quantity');
    let qty = parseInt(qtySpan.textContent);
    qty = Math.max(1, qty + delta);
    qtySpan.textContent = qty;
}

// WhatsApp order
function orderOnWhatsApp(productId) {
    const product = products.find(p => p.id === productId);
    const card = event.target.closest('.product-card');
    const qtySpan = card.querySelector('.quantity');
    const qty = parseInt(qtySpan.textContent);

    const message = `Hello, I want to order:%0A%0A` +
        `Product: ${product.name}%0A` +
        `Quantity: ${qty} ${product.unit}%0A` +
        `Price: ₹${product.price * qty}%0A%0A` +
        `Name: %0A` +
        `Address: %0A` +
        `Phone: %0A%0A🚚 Home Delivery`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

// Navbar mobile toggle
function initNavbar() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Simple slider (2 slides for demo)
function initSlider() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 5000);
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});
window.addEventListener('popstate', function() {
    // Redirect to home page
    window.location.href = "index.html"; // change if your home page is different
});
