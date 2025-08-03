// Emergency fix to restore products immediately
console.log('🚨 Emergency fix loading...');

// Wait for DOM and PRODUCTS_DATA to be ready
function emergencyLoadProducts() {
    if (typeof PRODUCTS_DATA === 'undefined') {
        console.log('⏳ Waiting for PRODUCTS_DATA...');
        setTimeout(emergencyLoadProducts, 100);
        return;
    }
    
    console.log(`🔄 Emergency loading ${PRODUCTS_DATA.length} products...`);
    
    // Load homepage products
    const featuredGrid = document.getElementById('featured');
    if (featuredGrid) {
        const featured = PRODUCTS_DATA.slice(0, 8);
        featuredGrid.innerHTML = featured.map(product => createEmergencyProductCard(product)).join('');
        console.log(`✅ Loaded ${featured.length} products on homepage`);
    }
    
    // Load catalog products
    const catalogGrid = document.querySelector('#catalog-section .product-grid');
    if (catalogGrid) {
        catalogGrid.innerHTML = PRODUCTS_DATA.map(product => createEmergencyProductCard(product)).join('');
        console.log(`✅ Loaded ${PRODUCTS_DATA.length} products in catalog`);
    }
    
    // Load new arrivals
    const newArrivalsGrid = document.querySelector('#new-arrivals-section .product-grid');
    if (newArrivalsGrid) {
        const newArrivals = [...PRODUCTS_DATA].sort((a, b) => b.id - a.id).slice(0, 8);
        newArrivalsGrid.innerHTML = newArrivals.map(product => createEmergencyProductCard(product)).join('');
        console.log(`✅ Loaded ${newArrivals.length} new arrivals`);
    }
    
    // Load best sellers
    const bestSellersGrid = document.querySelector('#best-sellers-section .product-grid');
    if (bestSellersGrid) {
        const bestSellers = PRODUCTS_DATA.slice(0, 8);
        bestSellersGrid.innerHTML = bestSellers.map(product => createEmergencyProductCard(product)).join('');
        console.log(`✅ Loaded ${bestSellers.length} best sellers`);
    }
}

function createEmergencyProductCard(product) {
    const stockStatus = product.inStock ? 'available' : 'sold-out';
    const stockText = product.inStock ? 'Available' : 'Sold Out';
    const buttonText = product.inStock ? 'Add to Cart' : 'Sold Out';
    const buttonDisabled = product.inStock ? '' : 'disabled';
    
    const shortDescription = product.description.length > 80 
        ? product.description.substring(0, 80) + '...' 
        : product.description;

    return `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy" decoding="async">
                <div class="stock-badge ${stockStatus}">${stockText}</div>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${shortDescription}</p>
                <span class="price">${product.price}</span>
                <div class="product-buttons">
                    <a href="product-detail.html?id=${product.id}" class="btn-small">View Details</a>
                    <button class="btn-small add-to-cart-btn" 
                            data-id="${product.id}" 
                            data-name="${product.name}" 
                            data-price="${product.priceValue}" 
                            data-image="${product.image}"
                            ${buttonDisabled}>${buttonText}</button>
                </div>
            </div>
        </div>
    `;
}

// Start the emergency fix
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', emergencyLoadProducts);
} else {
    emergencyLoadProducts();
}