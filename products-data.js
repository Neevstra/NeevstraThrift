// Centralized product data for Neevstra Thrift Store
// ADMIN NOTE: To mark an item as sold out, change "inStock: true" to "inStock: false"
// This will automatically disable the add to cart button and show "Sold Out" status across all pages

const PRODUCTS_DATA = [
    {
        id: 1,
        name: "Vintage Camera",
        description: "Classic 90s style with modern comfort. This vintage denim jacket features authentic distressing, a comfortable fit, and timeless style that pairs well with any outfit. Perfect for layering in any season. A perfect vintage camera for photography enthusiasts and collectors alike.",
        price: "₹2,099.00",
        priceValue: 2099,
        image: "https://res.cloudinary.com/dtjjgiitl/image/upload/q_auto:good,f_auto,fl_progressive/v1752731144/lwmft8wheslz3ugqyrhm.jpg",
        material: "Metal & Plastic Body with Glass Lens",
        era: "1990s",
        inStock: true,
        category: "electronics",
        tags: ["vintage", "camera", "photography", "collectible"]
    },
    {
        id: 2,
        name: "Retro Sunglasses",
        description: "Timeless design with UV protection. These vintage-inspired sunglasses combine classic styling with modern UV protection technology. The durable frame and premium lenses ensure both style and functionality.",
        price: "₹1,999.00",
        priceValue: 1999,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        material: "Acetate Frame, Glass Lenses",
        era: "1970s Inspired",
        inStock: true,
        category: "accessories",
        tags: ["vintage", "sunglasses", "retro", "fashion", "accessories"]
    },
    {
        id: 3,
        name: "Leather Messenger Bag",
        description: "Handcrafted vintage leather with modern functionality. This messenger bag features premium aged leather, multiple compartments including a padded laptop sleeve, and adjustable straps for comfort.",
        price: "₹4,999.00",
        priceValue: 4999,
        image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        material: "Genuine Leather, Brass Hardware",
        era: "Vintage Inspired",
        inStock: true,
        category: "bags",
        tags: ["leather", "bag", "messenger", "vintage", "handcrafted"]
    },
    {
        id: 4,
        name: "Floral Vintage Dress",
        description: "70s inspired pattern with modern cut. This beautiful floral dress features a timeless pattern with an updated silhouette. The lightweight fabric is perfect for warm weather, while the versatile design can be dressed up or down.",
        price: "₹2,799.00",
        priceValue: 2799,
        image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        material: "Viscose Blend",
        era: "1970s Inspired",
        inStock: true,
        category: "clothing",
        tags: ["dress", "floral", "vintage", "70s", "fashion"]
    },
    {
        id: 5,
        name: "Vintage Wool Coat",
        description: "Premium wool blend with classic tailoring. This elegant coat features a timeless design with modern comfort. The high-quality wool blend provides warmth while maintaining a sophisticated silhouette. Perfect for formal occasions or everyday elegance.",
        price: "₹5,999.00",
        priceValue: 5999,
        image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        material: "Premium Wool Blend",
        era: "1960s Inspired",
        inStock: false, // Example of sold out item
        category: "clothing",
        tags: ["coat", "wool", "vintage", "formal", "winter"]
    },
    {
        id: 6,
        name: "Handcrafted Leather Wallet",
        description: "Genuine leather with artisanal stitching. This handcrafted wallet features premium leather construction with meticulous attention to detail. Multiple card slots and compartments provide functionality while maintaining a slim profile.",
        price: "₹1,499.00",
        priceValue: 1499,
        image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        material: "Genuine Leather",
        era: "Timeless Classic",
        inStock: true,
        category: "accessories",
        tags: ["wallet", "leather", "handcrafted", "accessories", "vintage"]
    },
    {
        id: 7,
        name: "Vintage Silk Scarf",
        description: "Pure silk with hand-rolled edges. This luxurious scarf features beautiful patterns and colors that complement any outfit. The pure silk material provides a soft, elegant drape while the hand-rolled edges showcase traditional craftsmanship.",
        price: "₹1,299.00",
        priceValue: 1299,
        image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        material: "100% Pure Silk",
        era: "1950s Inspired",
        inStock: true,
        category: "accessories",
        tags: ["scarf", "silk", "vintage", "luxury", "accessories"]
    },
    {
        id: 8,
        name: "Vintage Leather Boots",
        description: "Handcrafted with premium leather. These vintage-style boots combine classic design with modern comfort. The premium leather construction ensures durability while the timeless design makes them perfect for any occasion.",
        price: "₹4,299.00",
        priceValue: 4299,
        image: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        material: "Premium Leather",
        era: "1940s Inspired",
        inStock: false, // Another example of sold out item
        category: "footwear",
        tags: ["boots", "leather", "vintage", "footwear", "handcrafted"]
    },
    {
        id: 9,
        name: "Vintage Watch",
        description: "Restored mechanical timepiece with leather strap. This beautiful vintage watch has been carefully restored to working condition. The mechanical movement and classic design make it a perfect accessory for any vintage enthusiast.",
        price: "₹6,999.00",
        priceValue: 6999,
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        material: "Stainless Steel, Leather Strap",
        era: "1960s",
        inStock: true,
        category: "accessories",
        tags: ["watch", "vintage", "mechanical", "timepiece", "accessories"]
    }
];

// Helper functions for stock management
function getProductById(id) {
    return PRODUCTS_DATA.find(product => product.id === parseInt(id));
}

function isProductInStock(id) {
    const product = getProductById(id);
    return product ? product.inStock : false;
}

function getStockStatus(inStock) {
    return inStock ? 'Available' : 'Sold Out';
}

function getStockClass(inStock) {
    return inStock ? 'in-stock' : 'sold-out';
}