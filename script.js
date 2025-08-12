const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
    
    menuToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('active') &&
            !navLinks.contains(e.target) &&
            !menuToggle.contains(e.target)) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
}

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

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateProductStockStatus() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    
    addToCartButtons.forEach(button => {
        const productId = button.dataset.id;
        const product = getProductById(productId);
        
        if (product) {
            const productCard = button.closest('.product-card') || button.closest('.product');
            
            if (!product.inStock) {
                if (productCard) {
                    productCard.classList.add('sold-out');
                    
                    let stockBadge = productCard.querySelector('.stock-badge');
                    if (!stockBadge) {
                        stockBadge = document.createElement('div');
                        stockBadge.className = 'stock-badge sold-out';
                        stockBadge.textContent = 'Sold Out';
                        
                        const imageContainer = productCard.querySelector('.product-image') || productCard.querySelector('img').parentElement;
                        if (imageContainer) {
                            imageContainer.style.position = 'relative';
                            imageContainer.appendChild(stockBadge);
                        }
                    }
                }
                
                button.classList.add('sold-out');
                button.textContent = 'Sold Out';
                button.disabled = true;
            } else {
                if (productCard) {
                    productCard.classList.remove('sold-out');
                    
                    let stockBadge = productCard.querySelector('.stock-badge');
                    if (!stockBadge) {
                        stockBadge = document.createElement('div');
                        stockBadge.className = 'stock-badge available';
                        stockBadge.textContent = 'Available';
                        
                        const imageContainer = productCard.querySelector('.product-image') || productCard.querySelector('img').parentElement;
                        if (imageContainer) {
                            imageContainer.style.position = 'relative';
                            imageContainer.appendChild(stockBadge);
                        }
                    } else {
                        stockBadge.className = 'stock-badge available';
                        stockBadge.textContent = 'Available';
                    }
                }
                
                button.classList.remove('sold-out');
                button.textContent = 'Add to Cart';
                button.disabled = false;
            }
        }
    });
}

function refreshCart() {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCart();
}

function initializePage() {
    updateProductStockStatus();
    setupCartEventListeners();
    refreshCart();
    setupImageErrorHandling();
}

function setupImageErrorHandling() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            console.warn('Failed to load image:', this.src);
            this.style.display = 'none';
            
            if (this.closest('.product-image')) {
                const placeholder = document.createElement('div');
                placeholder.className = 'image-placeholder';
                placeholder.innerHTML = '<i class="fas fa-image"></i><p>Image not available</p>';
                placeholder.style.cssText = `
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 250px;
                    background-color: #f8f9fa;
                    color: #6c757d;
                    border: 1px dashed #dee2e6;
                `;
                this.parentNode.appendChild(placeholder);
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', initializePage);

function setupCartEventListeners() {
    const cartIcon = document.getElementById('cart-icon');
    const cartContainer = document.getElementById('cart-container');
    const cartOverlay = document.getElementById('cart-overlay');
    const closeCart = document.getElementById('close-cart');
    const startShopping = document.getElementById('start-shopping');
    const goToCartBtn = document.getElementById('go-to-cart-btn');
    const goToCartNotification = document.getElementById('go-to-cart-notification');
    
    if (cartIcon && cartContainer && cartOverlay && !cartIcon.hasAttribute('data-listener-added')) {
        cartIcon.addEventListener('click', () => {
            console.log('Cart icon clicked - opening cart');
            refreshCart();
            cartContainer.classList.add('active');
            cartOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            console.log('Cart should now be visible');
        });
        
        cartIcon.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                console.log('Cart icon keyboard activated - opening cart');
                refreshCart();
                cartContainer.classList.add('active');
                cartOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
        
        cartIcon.setAttribute('data-listener-added', 'true');
        console.log('Cart icon event listeners added successfully');
    } else {
        console.log('Cart setup failed:', {
            cartIcon: !!cartIcon,
            cartContainer: !!cartContainer,
            cartOverlay: !!cartOverlay,
            alreadyHasListener: cartIcon ? cartIcon.hasAttribute('data-listener-added') : 'N/A'
        });
    }
    
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
    
    if (startShopping && !startShopping.hasAttribute('data-listener-added')) {
        startShopping.addEventListener('click', () => {
            cartContainer.classList.remove('active');
            cartOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
        startShopping.setAttribute('data-listener-added', 'true');
    }
    
    if (goToCartBtn && !goToCartBtn.hasAttribute('data-listener-added')) {
        goToCartBtn.addEventListener('click', () => {
            refreshCart();
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

const buyNowBtn = document.getElementById('buy-now-btn');
if (buyNowBtn) {
    buyNowBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty. Please add items to your cart before checking out.');
            return;
        }
        window.location.href = 'payment.html';
    });
}

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart-btn')) {
        const button = e.target;
        const id = button.dataset.id;
        const name = button.dataset.name;
        const price = parseFloat(button.dataset.price);
        const image = button.dataset.image;
        
        if (!isProductInStock(id)) {
            alert('Sorry, this item is currently sold out.');
            return;
        }
        
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cart.find(item => item.id === id);
        
        if (existingItem) {
            alert('This unique item is already in your cart!');
            return;
        }
        
        addToCart(id, name, price, image);
        
        button.innerHTML = 'Added!';
        button.style.backgroundColor = '#4CAF50';
        
        setTimeout(() => {
            button.innerHTML = 'Add to Cart';
            button.style.backgroundColor = '';
        }, 1500);
    }
    
    // Handle Buy Now button clicks
    if (e.target.classList.contains('buy-now-btn')) {
        e.preventDefault();
        e.stopPropagation();
        
        const button = e.target;
        const id = button.dataset.id;
        const name = button.dataset.name;
        const price = parseFloat(button.dataset.price);
        const image = button.dataset.image;
        
        // Add item to cart first
        if (!isProductInStock(id)) {
            alert('Sorry, this item is currently sold out.');
            return;
        }
        
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cart.find(item => item.id === id);
        
        if (!existingItem) {
            // Only add to cart if not already there
            cart.push({
                id: String(id),
                name: String(name),
                price: parseFloat(price),
                image: String(image),
                quantity: 1
            });
            
            try {
                localStorage.setItem('cart', JSON.stringify(cart));
            } catch (storageError) {
                console.error('Failed to save cart to localStorage:', storageError);
                alert('Error: Unable to save item to cart. Your storage may be full.');
                return;
            }
        }
        
        // Redirect to payment page
        window.location.href = 'payment.html';
    }
    
    // Handle product card clicks for viewing details
    if (e.target.closest('.product-card') && !e.target.classList.contains('add-to-cart-btn') && !e.target.classList.contains('buy-now-btn') && e.target.tagName !== 'BUTTON') {
        const productCard = e.target.closest('.product-card');
        const productId = productCard.dataset.id;
        
        if (productId) {
            window.location.href = `product-detail.html?id=${productId}`;
        }
    }
});

function addToCart(id, name, price, image) {
    try {
        // Validate inputs
        if (!id || !name || !image) {
            console.error('Invalid product data:', { id, name, price, image });
            alert('Error: Invalid product data. Please try again.');
            return;
        }
        
        // Ensure price is a valid number
        const numericPrice = parseFloat(price);
        if (isNaN(numericPrice)) {
            console.error('Invalid price value:', price);
            alert('Error: Invalid product price. Please try again.');
            return;
        }
        
        cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        cart.push({
            id: String(id),
            name: String(name),
            price: numericPrice,
            image: String(image),
            quantity: 1
        });
        
        try {
            localStorage.setItem('cart', JSON.stringify(cart));
        } catch (storageError) {
            console.error('Failed to save cart to localStorage:', storageError);
            alert('Error: Unable to save item to cart. Your storage may be full.');
            return;
        }
        
        updateCart();
        
        const goToCartNotification = document.getElementById('go-to-cart-notification');
        if (goToCartNotification) {
            goToCartNotification.classList.add('show');
            
            setTimeout(() => {
                goToCartNotification.classList.remove('show');
            }, 5000);
        }
    } catch (error) {
        console.error('Error adding item to cart:', error);
        alert('Error: Unable to add item to cart. Please try again.');
    }
}

function updateCart() {
    const currentCartItems = document.getElementById('cart-items');
    const currentEmptyCart = document.getElementById('empty-cart');
    const currentCartTotal = document.getElementById('cart-total');
    const currentCartCount = document.querySelector('.cart-count');
    
    if (!currentCartItems || !currentEmptyCart || !currentCartTotal || !currentCartCount) {
        return;
    }
    
    currentCartItems.innerHTML = '';
    
    if (cart.length === 0) {
        currentEmptyCart.style.display = 'block';
        currentCartTotal.style.display = 'none';
        currentCartCount.textContent = '0';
        return;
    }
    
    currentEmptyCart.style.display = 'none';
    currentCartTotal.style.display = 'block';
    
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    currentCartCount.textContent = totalItems;
    
    const subtotal = cart.reduce((total, item) => {
        const itemPrice = parseFloat(item.price) || 0;
        const itemTotal = itemPrice * item.quantity;
        return total + itemTotal;
    }, 0);
    
    const currentCartSubtotal = document.getElementById('cart-subtotal');
    const currentCartTotalAmount = document.getElementById('cart-total-amount');
    
    if (currentCartSubtotal) {
        currentCartSubtotal.textContent = `₹${subtotal.toFixed(2)}`;
    }
    
    const total = subtotal;
    
    console.log('Cart calculation:', {
        subtotal: subtotal,
        total: total,
        shipping: 0,
        tax: 0
    });
    
    if (currentCartTotalAmount) {
        currentCartTotalAmount.textContent = `₹${total.toFixed(2)}`;
    }
    
    cart.forEach(item => {
        // Ensure item price is a valid number
        const itemPrice = parseFloat(item.price);
        if (isNaN(itemPrice)) {
            console.error('Invalid price for item in cart:', item);
            // Skip items with invalid prices
            return;
        }
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.name}</h4>
                <div class="cart-item-price">₹${itemPrice.toFixed(2)}</div>
                <div class="cart-item-quantity">
                    <span class="unique-item-label">Unique Item - Qty: 1</span>
                    <div class="remove-item" data-id="${item.id}">
                        <i class="fas fa-trash"></i>
                    </div>
                </div>
            </div>
        `;
        currentCartItems.appendChild(cartItem);
    });
    
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', () => {
            removeItem(button.dataset.id);
        });
    });
}

function removeItem(id) {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== id);
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        }
    });
});

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

document.addEventListener('DOMContentLoaded', () => {
    updateCart();
    
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
    
    document.querySelectorAll('.product-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    const aboutImage = document.querySelector('.about-image');
    const aboutText = document.querySelector('.about-text');
    
    if (aboutImage) observer.observe(aboutImage);
    if (aboutText) observer.observe(aboutText);
    
    const contactInfo = document.querySelector('.contact-info');
    const contactForm = document.querySelector('.contact-form');
    
    if (contactInfo) observer.observe(contactInfo);
    if (contactForm) observer.observe(contactForm);
    
    // Contact form handling is now done inline in index.html
    // This prevents conflicts with the EmailJS implementation
});

let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }
    
    scrollTimeout = setTimeout(() => {
        const scrollPosition = window.scrollY;
        
        const nav = document.querySelector('nav');
        if (scrollPosition > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }, 10);
});