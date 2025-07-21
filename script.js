// Mobile Navigation Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Cart Functionality
const cartIcon = document.getElementById('cart-icon');
const cartContainer = document.getElementById('cart-container');
const cartOverlay = document.getElementById('cart-overlay');
const closeCart = document.getElementById('close-cart');
const cartItems = document.getElementById('cart-items');
const emptyCart = document.getElementById('empty-cart');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.querySelector('.cart-count');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartTotalAmount = document.getElementById('cart-total-amount');
const startShopping = document.getElementById('start-shopping');
const goToCartNotification = document.getElementById('go-to-cart-notification');
const goToCartBtn = document.getElementById('go-to-cart-btn');

// Cart array to store items
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to refresh cart from localStorage (for cross-page synchronization)
function refreshCart() {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCart();
}

// Function to set up cart event listeners
function setupCartEventListeners() {
    const cartIcon = document.getElementById('cart-icon');
    const cartContainer = document.getElementById('cart-container');
    const cartOverlay = document.getElementById('cart-overlay');
    const closeCart = document.getElementById('close-cart');
    const startShopping = document.getElementById('start-shopping');
    const goToCartBtn = document.getElementById('go-to-cart-btn');
    const goToCartNotification = document.getElementById('go-to-cart-notification');
    
    // Open cart
    if (cartIcon && cartContainer && cartOverlay && !cartIcon.hasAttribute('data-listener-added')) {
        cartIcon.addEventListener('click', () => {
            console.log('Cart icon clicked - opening cart');
            refreshCart(); // Refresh cart from localStorage before showing
            cartContainer.classList.add('active');
            cartOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            console.log('Cart should now be visible');
        });
        cartIcon.setAttribute('data-listener-added', 'true');
        console.log('Cart icon event listener added successfully');
    } else {
        console.log('Cart setup failed:', {
            cartIcon: !!cartIcon,
            cartContainer: !!cartContainer,
            cartOverlay: !!cartOverlay,
            alreadyHasListener: cartIcon ? cartIcon.hasAttribute('data-listener-added') : 'N/A'
        });
    }
    
    // Close cart
    if (closeCart && cartContainer && cartOverlay && !closeCart.hasAttribute('data-listener-added')) {
        closeCart.addEventListener('click', () => {
            cartContainer.classList.remove('active');
            cartOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
        closeCart.setAttribute('data-listener-added', 'true');
    }
    
    if (cartOverlay && cartContainer && !cartOverlay.hasAttribute('data-listener-added')) {
        cartOverlay.addEventListener('click', () => {
            cartContainer.classList.remove('active');
            cartOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
        cartOverlay.setAttribute('data-listener-added', 'true');
    }
    
    // Start shopping button
    if (startShopping && !startShopping.hasAttribute('data-listener-added')) {
        startShopping.addEventListener('click', () => {
            cartContainer.classList.remove('active');
            cartOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
        startShopping.setAttribute('data-listener-added', 'true');
    }
    
    // Go to cart button
    if (goToCartBtn && !goToCartBtn.hasAttribute('data-listener-added')) {
        goToCartBtn.addEventListener('click', () => {
            refreshCart(); // Refresh cart from localStorage before showing
            cartContainer.classList.add('active');
            cartOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            if (goToCartNotification) {
                goToCartNotification.classList.remove('show');
            }
        });
        goToCartBtn.setAttribute('data-listener-added', 'true');
    }
}

// Set up cart event listeners immediately if DOM is ready, otherwise wait
if (document.readyState === 'loading') {
    console.log('DOM still loading, waiting for DOMContentLoaded');
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOMContentLoaded fired, setting up cart listeners');
        setupCartEventListeners();
    });
} else {
    console.log('DOM already ready, setting up cart listeners immediately');
    setupCartEventListeners();
}



// Buy Now button
const buyNowBtn = document.getElementById('buy-now-btn');
if (buyNowBtn) {
    buyNowBtn.addEventListener('click', () => {
        // Check if cart is empty
        if (cart.length === 0) {
            alert('Your cart is empty. Please add items to your cart before checking out.');
            return;
        }
        
        // Redirect to payment page
        window.location.href = 'payment.html';
    });
}

// Note: Modal payment functionality has been removed.
// All checkout processes now use the payment.html page for a consistent experience.

// Add to cart
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart-btn')) {
        const button = e.target;
        const id = button.dataset.id;
        const name = button.dataset.name;
        const price = parseFloat(button.dataset.price);
        const image = button.dataset.image;
        
        addToCart(id, name, price, image);
        
        // Animation effect
        button.innerHTML = 'Added!';
        button.style.backgroundColor = '#4CAF50';
        
        setTimeout(() => {
            button.innerHTML = 'Add to Cart';
            button.style.backgroundColor = '';
        }, 1500);
    }
});

// Add to cart function
function addToCart(id, name, price, image) {
    // Refresh cart from localStorage first
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if item already in cart
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id,
            name,
            price,
            image,
            quantity: 1
        });
    }
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart UI
    updateCart();
    
    // Show "Go to Cart" notification
    if (goToCartNotification) {
        goToCartNotification.classList.add('show');
        
        // Hide notification after 5 seconds
        setTimeout(() => {
            goToCartNotification.classList.remove('show');
        }, 5000);
    }
}

// Update cart UI
function updateCart() {
    // Get fresh references to cart elements (in case they weren't available during initial load)
    const currentCartItems = document.getElementById('cart-items');
    const currentEmptyCart = document.getElementById('empty-cart');
    const currentCartTotal = document.getElementById('cart-total');
    const currentCartCount = document.querySelector('.cart-count');
    
    // Only update if essential cart elements exist
    if (!currentCartItems || !currentEmptyCart || !currentCartTotal || !currentCartCount) {
        return;
    }
    
    // Clear cart items
    currentCartItems.innerHTML = '';
    
    // Check if cart is empty
    if (cart.length === 0) {
        currentEmptyCart.style.display = 'block';
        currentCartTotal.style.display = 'none';
        currentCartCount.textContent = '0';
        return;
    }
    
    // Hide empty cart message, show total
    currentEmptyCart.style.display = 'none';
    currentCartTotal.style.display = 'block';
    
    // Update cart count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    currentCartCount.textContent = totalItems;
    
    // Calculate subtotal
    const subtotal = cart.reduce((total, item) => {
        const itemPrice = parseFloat(item.price) || 0;
        const itemTotal = itemPrice * item.quantity;
        return total + itemTotal;
    }, 0);
    
    // Get fresh references for optional elements
    const currentCartSubtotal = document.getElementById('cart-subtotal');
    const currentCartTotalAmount = document.getElementById('cart-total-amount');
    
    if (currentCartSubtotal) {
        currentCartSubtotal.textContent = `₹${subtotal.toFixed(2)}`;
    }
    
    // Calculate total (no shipping or tax)
    const total = subtotal;
    
    // Debug: Log the calculation
    console.log('Cart calculation:', {
        subtotal: subtotal,
        total: total,
        shipping: 0,
        tax: 0
    });
    
    if (currentCartTotalAmount) {
        currentCartTotalAmount.textContent = `₹${total.toFixed(2)}`;
    }
    
    // Add items to cart
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.name}</h4>
                <div class="cart-item-price">₹${item.price.toFixed(2)}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn increase" data-id="${item.id}">+</button>
                    <div class="remove-item" data-id="${item.id}">
                        <i class="fas fa-trash"></i>
                    </div>
                </div>
            </div>
        `;
        currentCartItems.appendChild(cartItem);
    });
    
    // Add event listeners for quantity buttons and remove buttons
    document.querySelectorAll('.quantity-btn.decrease').forEach(button => {
        button.addEventListener('click', () => {
            decreaseQuantity(button.dataset.id);
        });
    });
    
    document.querySelectorAll('.quantity-btn.increase').forEach(button => {
        button.addEventListener('click', () => {
            increaseQuantity(button.dataset.id);
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', () => {
            removeItem(button.dataset.id);
        });
    });
}

// Decrease quantity
function decreaseQuantity(id) {
    // Refresh cart from localStorage first
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(item => item.id === id);
    
    if (item.quantity > 1) {
        item.quantity--;
    } else {
        removeItem(id);
        return;
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// Increase quantity
function increaseQuantity(id) {
    // Refresh cart from localStorage first
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(item => item.id === id);
    item.quantity++;
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// Remove item
function removeItem(id) {
    // Refresh cart from localStorage first
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== id);
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for fixed header
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        }
    });
});

// Scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements with animation classes
document.addEventListener('DOMContentLoaded', () => {
    // Initialize cart
    updateCart();
    
    // Update cart count on page load
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
    
    // Product cards animation
    document.querySelectorAll('.product-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    // About section animation
    const aboutImage = document.querySelector('.about-image');
    const aboutText = document.querySelector('.about-text');
    
    if (aboutImage) observer.observe(aboutImage);
    if (aboutText) observer.observe(aboutText);
    
    // Contact section animation
    const contactInfo = document.querySelector('.contact-info');
    const contactForm = document.querySelector('.contact-form');
    
    if (contactInfo) observer.observe(contactInfo);
    if (contactForm) observer.observe(contactForm);
    
    // Form submission handling
    const contactFormElement = document.querySelector('.contact-form form');
    if (contactFormElement) {
        contactFormElement.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // In a real application, you would send this data to a server
            console.log('Form submitted:', { name, email, subject, message });
            
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            this.reset();
        });
    }
});

// Add additional animation classes on scroll
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    // Add class to nav when scrolled
    const nav = document.querySelector('nav');
    if (scrollPosition > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    
    // Animate elements when they come into view
    document.querySelectorAll('.product-card, .about-image, .about-text, .contact-info, .contact-form').forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('animate');
        }
    });
});