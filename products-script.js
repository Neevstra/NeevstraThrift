let originalProductOrder = [];

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const section = urlParams.get('section') || 'catalog';
    
    // Wait for dynamic products to load before storing order
    setTimeout(() => {
        storeOriginalOrder();
        showSection(section);
        initializeFilters();
    }, 500);
});

function storeOriginalOrder() {
    const productCards = document.querySelectorAll('#catalog-section .product-card');
    originalProductOrder = Array.from(productCards);
    console.log(`📋 Stored ${originalProductOrder.length} products for filtering`);
}

function showSection(sectionName) {
    const sections = document.querySelectorAll('.product-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    const navLinks = document.querySelectorAll('.nav-section-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    const targetSection = document.getElementById(sectionName + '-section');
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    const activeTab = document.querySelector(`[data-section="${sectionName}"]`);
    if (activeTab) {
        activeTab.classList.add('active');
    }
    
    const activeNavLink = document.querySelector(`.nav-section-link[data-section="${sectionName}"]`);
    if (activeNavLink) {
        activeNavLink.classList.add('active');
    }
    
    updatePageTitle(sectionName);
    
    const newUrl = `${window.location.pathname}?section=${sectionName}`;
    window.history.pushState({section: sectionName}, '', newUrl);
}

function updatePageTitle(sectionName) {
    const titles = {
        'catalog': 'All Products - Neevstra',
        'new-arrivals': 'New Arrivals - Neevstra',
        'best-sellers': 'Best Sellers - Neevstra'
    };
    
    document.title = titles[sectionName] || 'Products - Neevstra';
}

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

function filterProducts() {
    applyFiltersAndSort();
}

function sortProducts() {
    applyFiltersAndSort();
}

function applyFiltersAndSort() {
    const categoryFilter = document.getElementById('category-filter');
    const sortFilter = document.getElementById('sort-filter');
    const selectedCategory = categoryFilter ? categoryFilter.value : 'all';
    const selectedSort = sortFilter ? sortFilter.value : 'featured';
    
    const productGrid = document.querySelector('#catalog-section .product-grid');
    
    let workingCards = [...originalProductOrder];
    
    workingCards.forEach(card => {
        card.style.display = 'block';
    });
    
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
            sortedCards = [...workingCards].reverse();
            break;
            
        default:
            sortedCards = [...originalProductOrder];
    }
    
    productGrid.innerHTML = '';
    sortedCards.forEach(card => {
        productGrid.appendChild(card);
    });
    
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
    
    showEmptyCategoryMessage(selectedCategory, visibleProducts);
}

function showEmptyCategoryMessage(category, visibleProducts) {
    const productGrid = document.querySelector('#catalog-section .product-grid');
    let emptyMessage = document.getElementById('empty-category-message');
    
    if (visibleProducts === 0 && category !== 'all') {
        if (!emptyMessage) {
            emptyMessage = document.createElement('div');
            emptyMessage.id = 'empty-category-message';
            emptyMessage.className = 'empty-category-message';
            productGrid.appendChild(emptyMessage);
        }
        
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
        if (emptyMessage) {
            emptyMessage.style.display = 'none';
        }
    }
}

window.addEventListener('popstate', function(event) {
    if (event.state && event.state.section) {
        showSection(event.state.section);
    } else {
        showSection('catalog');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const startShoppingBtn = document.getElementById('start-shopping');
    if (startShoppingBtn) {
        startShoppingBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showSection('catalog');
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