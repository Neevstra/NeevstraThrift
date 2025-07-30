// Store original product order
let originalProductOrder = [];

// Products page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get URL parameters to determine which section to show
    const urlParams = new URLSearchParams(window.location.search);
    const section = urlParams.get('section') || 'catalog';
    
    // Store original product order for featured sorting
    storeOriginalOrder();
    
    // Show the appropriate section on page load
    showSection(section);
    
    // Initialize filters
    initializeFilters();
});

// Store the original order of products
function storeOriginalOrder() {
    const productCards = document.querySelectorAll('#catalog-section .product-card');
    originalProductOrder = Array.from(productCards);
}

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
    applyFiltersAndSort();
}

// Sort products
function sortProducts() {
    applyFiltersAndSort();
}

// Combined function to apply both filters and sorting
function applyFiltersAndSort() {
    const categoryFilter = document.getElementById('category-filter');
    const sortFilter = document.getElementById('sort-filter');
    const selectedCategory = categoryFilter ? categoryFilter.value : 'all';
    const selectedSort = sortFilter ? sortFilter.value : 'featured';
    
    const productGrid = document.querySelector('#catalog-section .product-grid');
    
    // Always work with the original product order to ensure consistency
    let workingCards = [...originalProductOrder];
    
    // First, reset all cards to be visible for sorting
    workingCards.forEach(card => {
        card.style.display = 'block';
    });
    
    // Sort the cards
    let sortedCards;
    switch (selectedSort) {
        case 'price-low':
            sortedCards = workingCards.sort((a, b) => {
                const priceA = parseInt(a.querySelector('.price').textContent.replace(/[₹,]/g, ''));
                const priceB = parseInt(b.querySelector('.price').textContent.replace(/[₹,]/g, ''));
                return priceA - priceB;
            });
            break;
            
        case 'price-high':
            sortedCards = workingCards.sort((a, b) => {
                const priceA = parseInt(a.querySelector('.price').textContent.replace(/[₹,]/g, ''));
                const priceB = parseInt(b.querySelector('.price').textContent.replace(/[₹,]/g, ''));
                return priceB - priceA;
            });
            break;
            
        case 'newest':
            // For demo purposes, reverse the order to simulate newest first
            sortedCards = [...workingCards].reverse();
            break;
            
        default: // featured
            // Reset to original order using stored reference
            sortedCards = [...originalProductOrder];
    }
    
    // Clear the grid and re-append sorted cards
    productGrid.innerHTML = '';
    sortedCards.forEach(card => {
        productGrid.appendChild(card);
    });
    
    // Apply category filter after sorting
    const updatedProductCards = document.querySelectorAll('#catalog-section .product-card');
    let visibleProducts = 0;
    
    updatedProductCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (selectedCategory === 'all' || cardCategory === selectedCategory) {
            card.style.display = 'block';
            visibleProducts++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Show/hide empty category message
    showEmptyCategoryMessage(selectedCategory, visibleProducts);
}

// Show empty category message when no products are found
function showEmptyCategoryMessage(category, visibleProducts) {
    const productGrid = document.querySelector('#catalog-section .product-grid');
    let emptyMessage = document.getElementById('empty-category-message');
    
    if (visibleProducts === 0 && category !== 'all') {
        // Create empty message if it doesn't exist
        if (!emptyMessage) {
            emptyMessage = document.createElement('div');
            emptyMessage.id = 'empty-category-message';
            emptyMessage.className = 'empty-category-message';
            productGrid.appendChild(emptyMessage);
        }
        
        // Set message content based on category
        const categoryMessages = {
            'bags': {
                icon: 'fas fa-shopping-bag',
                title: 'No Bags Yet',
                message: 'We\'re currently curating our collection of vintage and pre-loved bags. Check back soon for unique finds!',
                suggestion: 'In the meantime, explore our clothing and accessories collection.'
            },
            'shoes': {
                icon: 'fas fa-shoe-prints',
                title: 'No Shoes Yet',
                message: 'We\'re working on adding stylish vintage and pre-loved shoes to our collection. Stay tuned!',
                suggestion: 'Browse our other categories for amazing thrift finds.'
            },
            'default': {
                icon: 'fas fa-search',
                title: 'No Products Found',
                message: 'We don\'t have any products in this category yet.',
                suggestion: 'Try browsing other categories or check back later.'
            }
        };
        
        const messageData = categoryMessages[category] || categoryMessages['default'];
        
        emptyMessage.innerHTML = `
            <div class="empty-category-content">
                <i class="${messageData.icon}"></i>
                <h3>${messageData.title}</h3>
                <p>${messageData.message}</p>
                <p class="suggestion">${messageData.suggestion}</p>
                <button class="btn-small" onclick="document.getElementById('category-filter').value='all'; filterProducts();">
                    View All Products
                </button>
            </div>
        `;
        
        emptyMessage.style.display = 'block';
    } else {
        // Hide empty message if products are visible
        if (emptyMessage) {
            emptyMessage.style.display = 'none';
        }
    }
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