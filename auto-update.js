// Auto-update and Auto-delete script for Neevstra website
// This script automatically applies product updates and deletions from the admin panel

(function() {
    'use strict';
    
    // Function to apply all pending product updates and deletions
    function applyProductUpdates() {
        console.log('Checking for product updates and deletions...');
        
        // Get all auto-update and auto-delete data from localStorage
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            
            // Handle product updates
            if (key && key.startsWith('auto_update_product_')) {
                const productId = key.replace('auto_update_product_', '');
                const updateData = JSON.parse(localStorage.getItem(key));
                
                if (updateData) {
                    updateProductOnCurrentPage(updateData);
                }
            }
            
            // Handle product deletions
            if (key && key.startsWith('auto_delete_product_')) {
                const productId = key.replace('auto_delete_product_', '');
                const deleteData = JSON.parse(localStorage.getItem(key));
                
                if (deleteData) {
                    deleteProductFromCurrentPage(deleteData);
                }
            }
        }
    }
    
    // Function to update a specific product on the current page
    function updateProductOnCurrentPage(updateData) {
        const { id, name, description, price, image, formattedPrice } = updateData;
        
        // Find all elements with this product ID
        const productElements = document.querySelectorAll(`[data-id="${id}"]`);
        
        if (productElements.length === 0) {
            return; // Product not on this page
        }
        
        console.log(`Updating product ${id} on page:`, window.location.pathname);
        
        productElements.forEach(element => {
            const productCard = element.closest('.product-card');
            if (productCard) {
                // Update product name
                const nameElement = productCard.querySelector('h3');
                if (nameElement) {
                    nameElement.textContent = name;
                }
                
                // Update description
                const descElement = productCard.querySelector('p');
                if (descElement) {
                    descElement.textContent = description;
                }
                
                // Update price
                const priceElement = productCard.querySelector('.price');
                if (priceElement) {
                    priceElement.textContent = formattedPrice;
                }
                
                // Update image
                const imgElement = productCard.querySelector('img');
                if (imgElement) {
                    imgElement.src = image;
                    imgElement.alt = name;
                }
                
                // Update data attributes on the button
                element.setAttribute('data-name', name);
                element.setAttribute('data-price', price);
                element.setAttribute('data-image', image);
                
                // Add visual feedback that product was updated
                productCard.style.transition = 'all 0.3s ease';
                productCard.style.transform = 'scale(1.02)';
                productCard.style.boxShadow = '0 4px 20px rgba(102, 126, 234, 0.3)';
                
                setTimeout(() => {
                    productCard.style.transform = '';
                    productCard.style.boxShadow = '';
                }, 1000);
                
                console.log(`✅ Updated product ${id}: ${name}`);
            }
        });
    }
    
    // Function to delete a specific product from the current page
    function deleteProductFromCurrentPage(deleteData) {
        const { id, productName } = deleteData;
        
        // Find all elements with this product ID
        const productElements = document.querySelectorAll(`[data-id="${id}"]`);
        
        if (productElements.length === 0) {
            return; // Product not on this page
        }
        
        console.log(`Deleting product ${id} (${productName}) from page:`, window.location.pathname);
        
        productElements.forEach(element => {
            const productCard = element.closest('.product-card');
            if (productCard) {
                // Add visual indicator that product is being deleted
                productCard.style.position = 'relative';
                const deleteIndicator = document.createElement('div');
                deleteIndicator.innerHTML = '<i class="fas fa-trash"></i> Deleting...';
                deleteIndicator.style.cssText = `
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: rgba(231, 76, 60, 0.9);
                    color: white;
                    padding: 10px 15px;
                    border-radius: 5px;
                    font-weight: bold;
                    z-index: 1000;
                    font-size: 14px;
                `;
                productCard.appendChild(deleteIndicator);
                
                // Add fade-out animation before removal
                productCard.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
                productCard.style.opacity = '0';
                productCard.style.transform = 'scale(0.8)';
                
                // Remove the product card after animation
                setTimeout(() => {
                    productCard.remove();
                    console.log(`✅ Deleted product ${id} (${productName}) from page`);
                }, 500);
            } else {
                // If not in a product card, just remove the element
                element.remove();
                console.log(`✅ Deleted product element ${id} from page`);
            }
        });
        
        // Also remove any product detail page links
        const productLinks = document.querySelectorAll(`a[href*="product-detail.html?id=${id}"]`);
        productLinks.forEach(link => {
            const linkCard = link.closest('.product-card');
            if (linkCard && !linkCard.style.opacity) { // Don't double-process
                linkCard.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
                linkCard.style.opacity = '0';
                linkCard.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    linkCard.remove();
                }, 500);
            }
        });
        
        // Handle product detail page redirect
        handleDeletedProductDetailPage(id, productName);
    }
    
    // Function to handle product detail page for deleted products
    function handleDeletedProductDetailPage(deletedId, productName) {
        // Check if we're on the product detail page for this deleted product
        const urlParams = new URLSearchParams(window.location.search);
        const currentProductId = urlParams.get('id');
        
        if (currentProductId == deletedId && window.location.pathname.includes('product-detail.html')) {
            // Show message and redirect
            setTimeout(() => {
                alert(`The product "${productName}" is no longer available.`);
                window.location.href = 'catalog.html';
            }, 100);
        }
    }
    
    // Function to clean old updates and deletions (older than 24 hours)
    function cleanOldUpdates() {
        const oneDayAgo = Date.now() - (24 * 60 * 60 * 1000);
        
        for (let i = localStorage.length - 1; i >= 0; i--) {
            const key = localStorage.key(i);
            
            // Clean old updates
            if (key && key.startsWith('auto_update_product_')) {
                const updateData = JSON.parse(localStorage.getItem(key));
                if (updateData && updateData.timestamp < oneDayAgo) {
                    localStorage.removeItem(key);
                    console.log('Cleaned old update:', key);
                }
            }
            
            // Clean old deletions
            if (key && key.startsWith('auto_delete_product_')) {
                const deleteData = JSON.parse(localStorage.getItem(key));
                if (deleteData && deleteData.timestamp < oneDayAgo) {
                    localStorage.removeItem(key);
                    console.log('Cleaned old deletion:', key);
                }
            }
        }
    }
    
    // Apply updates when DOM is ready
    function initialize() {
        applyProductUpdates();
        cleanOldUpdates();
        
        // Also listen for storage changes (when admin panel updates/deletes products)
        window.addEventListener('storage', function(e) {
            if (e.key && e.key.startsWith('auto_update_product_')) {
                const updateData = JSON.parse(e.newValue);
                if (updateData) {
                    updateProductOnCurrentPage(updateData);
                }
            }
            
            if (e.key && e.key.startsWith('auto_delete_product_')) {
                const deleteData = JSON.parse(e.newValue);
                if (deleteData) {
                    deleteProductFromCurrentPage(deleteData);
                }
            }
        });
    }
    
    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize);
    } else {
        initialize();
    }
    
    // Also run immediately in case DOM is already loaded
    setTimeout(initialize, 100);
    
})();