// Products page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get URL parameters to determine which section to show
    const urlParams = new URLSearchParams(window.location.search);
    const section = urlParams.get('section') || 'catalog';
    
    // Show the appropriate section on page load
    showSection(section);
    
    // Initialize filters
    initializeFilters();
});

// Function to show/hide sections
function showSection(sectionName) {
    // Hide all sections
    const sections = document.querySelectorAll('.product-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from nav links
    const navLinks = document.querySelectorAll('.nav-section-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Show selected section
    const targetSection = document.getElementById(sectionName + '-section');
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Add active class to corresponding tab
    const activeTab = document.querySelector(`[data-section="${sectionName}"]`);
    if (activeTab) {
        activeTab.classList.add('active');
    }
    
    // Add active class to corresponding nav link
    const activeNavLink = document.querySelector(`.nav-section-link[data-section="${sectionName}"]`);
    if (activeNavLink) {
        activeNavLink.classList.add('active');
    }
    
    // Update page title
    updatePageTitle(sectionName);
    
    // Update URL without page reload
    const newUrl = `${window.location.pathname}?section=${sectionName}`;
    window.history.pushState({section: sectionName}, '', newUrl);
}

// Function to update page title based on section
function updatePageTitle(sectionName) {
    const titles = {
        'catalog': 'All Products - Neevstra',
        'new-arrivals': 'New Arrivals - Neevstra',
        'best-sellers': 'Best Sellers - Neevstra'
    };
    
    document.title = titles[sectionName] || 'Products - Neevstra';
}

// Initialize filter functionality
function initializeFilters() {
    const categoryFilter = document.getElementById('category-filter');
    const sortFilter = document.getElementById('sort-filter');
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterProducts);
    }
    
    if (sortFilter) {
        sortFilter.addEventListener('change', sortProducts);
    }
}

// Filter products by category
function filterProducts() {
    const categoryFilter = document.getElementById('category-filter');
    const selectedCategory = categoryFilter.value;
    const productCards = document.querySelectorAll('#catalog-section .product-card');
    
    productCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (selectedCategory === 'all' || cardCategory === selectedCategory) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Sort products
function sortProducts() {
    const sortFilter = document.getElementById('sort-filter');
    const selectedSort = sortFilter.value;
    const productGrid = document.querySelector('#catalog-section .product-grid');
    const productCards = Array.from(document.querySelectorAll('#catalog-section .product-card'));
    
    let sortedCards;
    
    switch (selectedSort) {
        case 'price-low':
            sortedCards = productCards.sort((a, b) => {
                const priceA = parseInt(a.querySelector('.price').textContent.replace(/[₹,]/g, ''));
                const priceB = parseInt(b.querySelector('.price').textContent.replace(/[₹,]/g, ''));
                return priceA - priceB;
            });
            break;
            
        case 'price-high':
            sortedCards = productCards.sort((a, b) => {
                const priceA = parseInt(a.querySelector('.price').textContent.replace(/[₹,]/g, ''));
                const priceB = parseInt(b.querySelector('.price').textContent.replace(/[₹,]/g, ''));
                return priceB - priceA;
            });
            break;
            
        case 'newest':
            // For demo purposes, reverse the order to simulate newest first
            sortedCards = productCards.reverse();
            break;
            
        default: // featured
            // Reset to original order
            sortedCards = productCards.sort((a, b) => {
                const idA = parseInt(a.querySelector('.add-to-cart-btn').getAttribute('data-id'));
                const idB = parseInt(b.querySelector('.add-to-cart-btn').getAttribute('data-id'));
                return idA - idB;
            });
    }
    
    // Clear the grid and re-append sorted cards
    productGrid.innerHTML = '';
    sortedCards.forEach(card => {
        productGrid.appendChild(card);
    });
}

// Handle browser back/forward buttons
window.addEventListener('popstate', function(event) {
    if (event.state && event.state.section) {
        showSection(event.state.section);
    } else {
        showSection('catalog');
    }
});

// Update cart start shopping link
document.addEventListener('DOMContentLoaded', function() {
    const startShoppingBtn = document.getElementById('start-shopping');
    if (startShoppingBtn) {
        startShoppingBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showSection('catalog');
            // Close cart
            const cartContainer = document.getElementById('cart-container');
            const cartOverlay = document.getElementById('cart-overlay');
            if (cartContainer && cartOverlay) {
                cartContainer.classList.remove('active');
                cartOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});