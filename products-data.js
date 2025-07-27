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
        image: "https://i.postimg.cc/XqjJsxsm/cam-3.avif",
        images: [
            "https://i.postimg.cc/XqjJsxsm/cam-3.avif",
            "https://i.postimg.cc/QtLSKKfH/cam1.png",
            "https://i.postimg.cc/nVNVjFJN/cam-2.avif",
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
        image: "https://i.postimg.cc/sxX2phWY/loosar.png",
        images: [
            "https://i.postimg.cc/sxX2phWY/loosar.png",
            "https://i.postimg.cc/bwqXGhjP/1000093731.avif",
            "https://i.postimg.cc/MpfBjh0s/1000093733.avif"
        ],
        material: "Cotton",
        era: "2022",
        inStock: true,
        category: "clothing",
        tags: ["trousers", "gap", "casual", "modern", "branded", "cotton", "available"]
    },
    {
        id: 5,
        name: "Wrangler Shirt",
        description: "Classic Wrangler shirt with authentic styling and comfortable fit. This timeless piece features quality cotton construction and iconic Wrangler design elements. Perfect for casual wear with a vintage-inspired look.",
        price: "₹499.00",
        priceValue: 499,
        image: "https://i.postimg.cc/63jrL70r/wrngler.avif",
        images: [
            "https://i.postimg.cc/63jrL70r/wrngler.avif",
            "https://i.postimg.cc/KzwNhkMZ/wrngler2.avif",
            "https://i.postimg.cc/QCZTqp7W/wrngler3.avif"
        ],
        material: "Cotton",
        era: "2020",
        inStock: true,
        category: "clothing",
        tags: ["shirt", "wrangler", "cotton", "casual", "branded", "new", "available"]
    },
    {
        id: 6,
        name: "ONLY Y2K Inspired Bell Bottoms",
        description: "Trendy Y2K inspired bell bottom jeans with a modern twist. These stylish bell bottoms feature authentic Y2K styling with a comfortable fit and quality denim construction. Perfect for creating that nostalgic early 2000s look.",
        price: "₹699.00",
        priceValue: 699,
        image: "https://i.postimg.cc/SRVcNnX2/jesn1.avif",
        images: [
            "https://i.postimg.cc/SRVcNnX2/jesn1.avif",
            "https://i.postimg.cc/J44bY5gb/jesn2.avif",
            "https://i.postimg.cc/TwzrHzz1/wrngler3.avif"
        ],
        material: "Jean",
        era: "2018",
        inStock: true,
        category: "clothing",
        tags: ["jeans", "bell bottoms", "y2k", "denim", "trendy", "new", "available"]
    },
    {
        id: 7,
        name: "Louis Phillippe Shirt",
        description: "Classic Louis Phillippe shirt with premium quality fabric and elegant design. Features comfortable fit and sophisticated styling. Perfect for formal and semi-formal occasions with timeless appeal.",
        price: "₹499.00",
        priceValue: 499,
        image: "https://i.postimg.cc/kMFh0w5G/lp1.jpg",
        images: [
            "https://i.postimg.cc/kMFh0w5G/lp1.jpg",
            "https://i.postimg.cc/CxZ7x4wj/lp2.jpg"
        ],
        material: "Cotton",
        era: "2018",
        inStock: true,
        category: "clothing",
        tags: ["shirt", "louis phillippe", "cotton", "formal", "branded", "new", "available"]
    },
    {
        id: 8,
        name: "Adidas Track Pant",
        description: "Comfortable Adidas track pants with modern fit and quality construction. Features the iconic Adidas branding and comfortable cotton material. Perfect for sports, casual wear, and everyday comfort.",
        price: "₹549.00",
        priceValue: 549,
        image: "https://i.postimg.cc/G3VH1PS0/ad1.jpg",
        images: [
            "https://i.postimg.cc/G3VH1PS0/ad1.jpg",
            "https://i.postimg.cc/NMVfBYD8/ad2.jpg"
        ],
        material: "Cotton",
        era: "2018",
        inStock: true,
        category: "clothing",
        tags: ["track pants", "adidas", "cotton", "sports", "casual", "branded", "new"]
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