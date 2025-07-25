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
        images: [
            "https://res.cloudinary.com/dtjjgiitl/image/upload/q_auto:good,f_auto,fl_progressive/v1752731144/lwmft8wheslz3ugqyrhm.jpg",
            "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        ],
        material: "Metal & Plastic Body with Glass Lens",
        era: "1990s",
        inStock: true,
        category: "electronics",
        tags: ["vintage", "camera", "photography", "collectible"]
    },
    {
        id: 2,
        name: "Acid Washed Bell Bottom",
        description: "Trendy acid washed bell bottom jeans with a vintage-inspired flare. These stylish jeans feature a unique acid wash finish and classic bell bottom silhouette that's perfect for making a fashion statement. Comfortable fit with a retro vibe.",
        price: "₹699.00",
        priceValue: 699,
        image: "https://i.ibb.co/21TXTYgF/girly-jeans.webp",
        images: [
            "https://i.ibb.co/21TXTYgF/girly-jeans.webp",
            "https://i.ibb.co/21TXTYgF/girly-jeans.webp",
            "https://i.ibb.co/21TXTYgF/girly-jeans.webp"
        ],
        material: "Cotton Denim",
        era: "2019",
        inStock: true,
        category: "clothing",
        tags: ["jeans", "bell bottom", "acid wash", "vintage", "fashion", "denim"]
    },
    {
        id: 3,
        name: "Diesel Sweatshirt",
        description: "Stylish Diesel sweatshirt with premium quality fabric and modern design. Features comfortable fit and iconic Diesel branding. Perfect for casual wear and layering.",
        price: "₹849.00",
        priceValue: 849,
        image: "https://i.ibb.co/BKT6z0gs/diesel.webp",
        images: [
            "https://i.ibb.co/BKT6z0gs/diesel.webp",
            "https://i.ibb.co/BKT6z0gs/diesel.webp",
            "https://i.ibb.co/BKT6z0gs/diesel.webp"
        ],
        material: "Cotton Blend",
        era: "2020",
        inStock: true,
        category: "clothing",
        tags: ["sweatshirt", "diesel", "casual", "modern", "branded"]
    },
    {
        id: 4,
        name: "GAP Trousers",
        description: "Comfortable GAP trousers with modern fit and classic styling. Made from premium cotton fabric for all-day comfort. Perfect for casual and semi-formal occasions with timeless design.",
        price: "₹699.00",
        priceValue: 699,
        image: "https://i.postimg.cc/R91Tv4JY/loosar.png",
        images: [
            "https://i.postimg.cc/R91Tv4JY/loosar.png",
            "https://i.postimg.cc/R91Tv4JY/loosar.png",
            "https://i.postimg.cc/R91Tv4JY/loosar.png"
        ],
        material: "Cotton",
        era: "2022",
        inStock: true,
        category: "clothing",
        tags: ["trousers", "gap", "casual", "modern", "branded", "cotton"]
    },
    {
        id: 5,
        name: "Vintage Wool Coat",
        description: "Premium wool blend with classic tailoring. This elegant coat features a timeless design with modern comfort. The high-quality wool blend provides warmth while maintaining a sophisticated silhouette. Perfect for formal occasions or everyday elegance.",
        price: "₹5,999.00",
        priceValue: 5999,
        image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        ],
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
        images: [
            "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        ],
        material: "Genuine Leather",
        era: "Timeless Classic",
        inStock: false,
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
        images: [
            "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        ],
        material: "100% Pure Silk",
        era: "1950s Inspired",
        inStock: false,
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
        images: [
            "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        ],
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
        images: [
            "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        ],
        material: "Stainless Steel, Leather Strap",
        era: "1960s",
        inStock: false,
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