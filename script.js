// Mobile Navigation Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

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

// Open cart
cartIcon.addEventListener('click', () => {
    cartContainer.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Close cart
closeCart.addEventListener('click', () => {
    cartContainer.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
});

cartOverlay.addEventListener('click', () => {
    cartContainer.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
});

// Start shopping button
if (startShopping) {
    startShopping.addEventListener('click', () => {
        cartContainer.classList.remove('active');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
}

// Go to cart button
if (goToCartBtn) {
    goToCartBtn.addEventListener('click', () => {
        cartContainer.classList.add('active');
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        goToCartNotification.classList.remove('show');
    });
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
        
        // Show payment form modal
        showPaymentModal();
    });
}

// Function to show payment modal
function showPaymentModal() {
    // Create modal container
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    
    modalContent.innerHTML = `
        <div class="modal-header">
            <h2>Complete Your Purchase</h2>
            <span class="modal-close">&times;</span>
        </div>
        <div class="modal-body">
            <form id="payment-form">
                <div class="form-section">
                    <h3>Customer Information</h3>
                    <div class="form-group">
                        <label for="customer-name">Full Name</label>
                        <input type="text" id="customer-name" required>
                    </div>
                    <div class="form-group">
                        <label for="customer-email">Email</label>
                        <input type="email" id="customer-email" required>
                    </div>
                    <div class="form-group">
                        <label for="customer-phone">Phone</label>
                        <input type="tel" id="customer-phone" required>
                    </div>
                </div>
                
                <div class="form-section">
                    <h3>Shipping Information</h3>
                    <div class="form-group">
                        <label for="shipping-address">Address</label>
                        <input type="text" id="shipping-address" required>
                    </div>
                    <div class="form-group">
                        <label for="shipping-city">City, State</label>
                        <input type="text" id="shipping-city" required>
                    </div>
                    <div class="form-group">
                        <label for="shipping-zip">Postal Code</label>
                        <input type="text" id="shipping-zip" required>
                    </div>
                </div>
                
                <div class="form-section">
                    <h3>Payment Method</h3>
                    <div class="form-group">
                        <label>
                            <input type="radio" name="payment-method" value="Credit Card" checked>
                            Credit Card
                        </label>
                    </div>
                    <div class="form-group">
                        <label>
                            <input type="radio" name="payment-method" value="UPI">
                            UPI
                        </label>
                    </div>
                    <div class="form-group">
                        <label>
                            <input type="radio" name="payment-method" value="Cash on Delivery">
                            Cash on Delivery
                        </label>
                    </div>
                    
                    <p class="payment-note">Note: This is a demo. No actual payment will be processed.</p>
                </div>
                
                <div class="form-actions">
                    <button type="submit" class="btn">Complete Purchase</button>
                </div>
            </form>
        </div>
    `;
    
    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);
    
    // Close modal when clicking on X or outside the modal
    const closeModal = modalContent.querySelector('.modal-close');
    closeModal.addEventListener('click', () => {
        document.body.removeChild(modalOverlay);
    });
    
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            document.body.removeChild(modalOverlay);
        }
    });
    
    // Handle form submission
    const paymentForm = document.getElementById('payment-form');
    paymentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Process the order
        processOrder();
        
        // Remove modal
        document.body.removeChild(modalOverlay);
    });
}

// Function to process the order
function processOrder() {
    // Generate a unique order ID
    const orderId = 'NEV' + new Date().getFullYear() + Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    
    // Get customer information
    const customerName = document.getElementById('customer-name').value;
    const customerEmail = document.getElementById('customer-email').value;
    const customerPhone = document.getElementById('customer-phone').value;
    
    // Get shipping information
    const shippingAddress = document.getElementById('shipping-address').value;
    const shippingCity = document.getElementById('shipping-city').value;
    const shippingZip = document.getElementById('shipping-zip').value;
    
    // Get payment method
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
    
    // Create order object
    const order = {
        orderId: orderId,
        date: new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }),
        customer: {
            name: customerName,
            email: customerEmail,
            phone: customerPhone
        },
        shipping: {
            address: shippingAddress,
            city: shippingCity,
            zip: shippingZip
        },
        payment: {
            method: paymentMethod,
            status: 'Paid'
        },
        items: [...cart],
        status: 'Processing'
    };
    
    // Save order to localStorage
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    // Save last order for receipt
    localStorage.setItem('lastOrder', JSON.stringify(order));
    
    // Clear the cart
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
    
    // Close the cart
    cartContainer.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
    
    // Redirect to receipt page
    window.location.href = 'receipt.html';
}

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
    // Clear cart items
    cartItems.innerHTML = '';
    
    // Check if cart is empty
    if (cart.length === 0) {
        emptyCart.style.display = 'block';
        cartTotal.style.display = 'none';
        cartCount.textContent = '0';
        return;
    }
    
    // Hide empty cart message, show total
    emptyCart.style.display = 'none';
    cartTotal.style.display = 'block';
    
    // Update cart count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Calculate subtotal
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    cartSubtotal.textContent = `₹${subtotal.toFixed(2)}`;
    
    // Calculate total (subtotal + shipping)
    const total = subtotal + 99;
    cartTotalAmount.textContent = `₹${total.toFixed(2)}`;
    
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
        cartItems.appendChild(cartItem);
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
    const item = cart.find(item => item.id === id);
    item.quantity++;
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// Remove item
function removeItem(id) {
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