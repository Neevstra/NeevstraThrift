// ADMIN NOTE: To mark an item as sold out, change "inStock: true" to "inStock: false"
const PRODUCTS_DATA = [
    {
        "id": 1,
        "name": "Vintage Camera",
        "description": "Classic 90s style with modern comfort. This vintage denim jacket features authentic distressing, a comfortable fit, and timeless style that pairs well with any outfit. Perfect for layering in any season. A perfect vintage camera for photography enthusiasts and collectors alike.",
        "price": "₹2,099.00",
        "priceValue": 2099,
        "image": "https://i.postimg.cc/XqjJsxsm/cam-3.avif",
        "images": [
            "https://i.postimg.cc/XqjJsxsm/cam-3.avif",
            "https://i.postimg.cc/QtLSKKfH/cam1.png",
            "https://i.postimg.cc/nVNVjFJN/cam-2.avif",
            "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        ],
        "material": "Metal & Plastic Body with Glass Lens",
        "era": "1990s",
        "inStock": true,
        "category": "electronics",
        "tags": [
            "vintage",
            "camera",
            "photography",
            "collectible"
        ]
    },
    {
        "id": 2,
        "name": "Acid Washed Bell Bottom",
        "description": "Trendy acid washed bell bottom jeans with a vintage-inspired flare. These stylish jeans feature a unique acid wash finish and classic bell bottom silhouette that's perfect for making a fashion statement. Comfortable fit with a retro vibe.",
        "price": "₹699.00",
        "priceValue": 699,
        "image": "https://i.ibb.co/21TXTYgF/girly-jeans.webp",
        "images": [
            "https://i.ibb.co/21TXTYgF/girly-jeans.webp",
            "https://i.ibb.co/21TXTYgF/girly-jeans.webp",
            "https://i.ibb.co/21TXTYgF/girly-jeans.webp"
        ],
        "material": "Cotton Denim",
        "era": "2019",
        "inStock": true,
        "category": "clothing",
        "tags": [
            "jeans",
            "bell bottom",
            "acid wash",
            "vintage",
            "fashion",
            "denim"
        ]
    },
    {
        "id": 3,
        "name": "Diesel Sweatshirt",
        "description": "Stylish Diesel sweatshirt with premium quality fabric and modern design. Features comfortable fit and iconic Diesel branding. Perfect for casual wear and layering.",
        "price": "₹849.00",
        "priceValue": 849,
        "image": "https://i.ibb.co/BKT6z0gs/diesel.webp",
        "images": [
            "https://i.ibb.co/BKT6z0gs/diesel.webp",
            "https://i.ibb.co/BKT6z0gs/diesel.webp",
            "https://i.ibb.co/BKT6z0gs/diesel.webp"
        ],
        "material": "Cotton Blend",
        "era": "2020",
        "inStock": false,
        "category": "clothing",
        "tags": [
            "sweatshirt",
            "diesel",
            "casual",
            "modern",
            "branded"
        ]
    },
    {
        "id": 4,
        "name": "GAP Trousers",
        "description": "Comfortable GAP trousers with modern fit and classic styling. Made from premium cotton fabric for all-day comfort. Perfect for casual and semi-formal occasions with timeless design.",
        "price": "₹699.00",
        "priceValue": 699,
        "image": "https://i.postimg.cc/sxX2phWY/loosar.png",
        "images": [
            "https://i.postimg.cc/sxX2phWY/loosar.png",
            "https://i.postimg.cc/bwqXGhjP/1000093731.avif",
            "https://i.postimg.cc/MpfBjh0s/1000093733.avif"
        ],
        "material": "Cotton",
        "era": "2022",
        "inStock": false,
        "category": "clothing",
        "tags": [
            "trousers",
            "gap",
            "casual",
            "modern",
            "branded",
            "cotton",
            "available"
        ]
    },
    {
        "id": 5,
        "name": "Wrangler Shirt",
        "description": "Classic Wrangler shirt with authentic styling and comfortable fit. This timeless piece features quality cotton construction and iconic Wrangler design elements. Perfect for casual wear with a vintage-inspired look.",
        "price": "₹499.00",
        "priceValue": 499,
        "image": "https://i.postimg.cc/63jrL70r/wrngler.avif",
        "images": [
            "https://i.postimg.cc/63jrL70r/wrngler.avif",
            "https://i.postimg.cc/KzwNhkMZ/wrngler2.avif",
            "https://i.postimg.cc/QCZTqp7W/wrngler3.avif"
        ],
        "material": "Cotton",
        "era": "2020",
        "inStock": true,
        "category": "clothing",
        "tags": [
            "shirt",
            "wrangler",
            "cotton",
            "casual",
            "branded",
            "new",
            "available"
        ]
    },
    {
        "id": 6,
        "name": "ONLY Y2K Inspired Bell Bottoms",
        "description": "Trendy Y2K inspired bell bottom jeans with a modern twist. These stylish bell bottoms feature authentic Y2K styling with a comfortable fit and quality denim construction. Perfect for creating that nostalgic early 2000s look.",
        "price": "₹699.00",
        "priceValue": 699,
        "image": "https://i.postimg.cc/SRVcNnX2/jesn1.avif",
        "images": [
            "https://i.postimg.cc/SRVcNnX2/jesn1.avif",
            "https://i.postimg.cc/J44bY5gb/jesn2.avif",
            "https://i.postimg.cc/TwzrHzz1/wrngler3.avif"
        ],
        "material": "Jean",
        "era": "2018",
        "inStock": false,
        "category": "clothing",
        "tags": [
            "jeans",
            "bell bottoms",
            "y2k",
            "denim",
            "trendy",
            "new",
            "available"
        ]
    },
    {
        "id": 7,
        "name": "Louis Phillippe Shirt",
        "description": "Classic Louis Phillippe shirt with premium quality fabric and elegant design. Features comfortable fit and sophisticated styling. Perfect for formal and semi-formal occasions with timeless appeal.",
        "price": "₹499.00",
        "priceValue": 499,
        "image": "https://i.postimg.cc/kMFh0w5G/lp1.jpg",
        "images": [
            "https://i.postimg.cc/kMFh0w5G/lp1.jpg",
            "https://i.postimg.cc/CxZ7x4wj/lp2.jpg"
        ],
        "material": "Cotton",
        "era": "2018",
        "inStock": true,
        "category": "clothing",
        "tags": [
            "shirt",
            "louis phillippe",
            "cotton",
            "formal",
            "branded",
            "new",
            "available"
        ]
    },
    {
        "id": 8,
        "name": "Adidas Track Pant",
        "description": "Comfortable Adidas track pants with modern fit and quality construction. Features the iconic Adidas branding and comfortable cotton material. Perfect for sports, casual wear, and everyday comfort.",
        "price": "₹549.00",
        "priceValue": 549,
        "image": "https://i.postimg.cc/G3VH1PS0/ad1.jpg",
        "images": [
            "https://i.postimg.cc/G3VH1PS0/ad1.jpg",
            "https://i.postimg.cc/NMVfBYD8/ad2.jpg"
        ],
        "material": "Cotton",
        "era": "2018",
        "inStock": true,
        "category": "clothing",
        "tags": [
            "track pants",
            "adidas",
            "cotton",
            "sports",
            "casual",
            "branded",
            "new"
        ]
    },
    {
        "id": 9,
        "name": "CLEF DE SOY JEANS",
        "description": "Stylish CLEF DE SOY jeans with premium denim construction and contemporary fit. These trendy jeans feature quality craftsmanship and modern styling that's perfect for casual wear. Comfortable fit with excellent durability and timeless appeal.",
        "price": "₹749.00",
        "priceValue": 749,
        "image": "https://i.postimg.cc/L8pDwkCk/soya1.jpg",
        "images": [
            "https://i.postimg.cc/L8pDwkCk/soya1.jpg",
            "https://i.postimg.cc/jjqXdxrL/soya2.jpg",
            "https://i.postimg.cc/fLJfm8ys/soya3.jpg"
        ],
        "material": "Jeans",
        "era": "2020",
        "inStock": true,
        "category": "clothing",
        "tags": [
            "jeans",
            "clef de soy",
            "denim",
            "casual",
            "modern",
            "branded"
        ]
    },
    {
        "id": 10,
        "name": "SUPERDRY Formal Pant",
        "description": "Premium SUPERDRY formal pants with sophisticated styling and comfortable fit. These elegant formal pants feature quality fabric construction and modern tailoring. Perfect for office wear, formal occasions, and professional settings with contemporary design.",
        "price": "₹749.00",
        "priceValue": 749,
        "image": "https://i.postimg.cc/KY9dmpCh/dry1.jpg",
        "images": [
            "https://i.postimg.cc/KY9dmpCh/dry1.jpg",
            "https://i.postimg.cc/fT41W9qy/dry2.jpg",
            "https://i.postimg.cc/ZKr2W5Xc/dry3.jpg"
        ],
        "material": "Cloth",
        "era": "2022",
        "inStock": false,
        "category": "clothing",
        "tags": [
            "formal pants",
            "superdry",
            "formal",
            "office wear",
            "branded",
            "professional"
        ]
    },
    {
        "id": 11,
        "name": "JACKRON Jeans",
        "description": "Classic JACKRON jeans with authentic denim styling and comfortable fit. These quality jeans feature durable construction and timeless design that's perfect for everyday wear. Versatile styling with excellent comfort and long-lasting durability.",
        "price": "₹699.00",
        "priceValue": 699,
        "image": "https://i.postimg.cc/tJ9PDDC7/jack1.jpg",
        "images": [
            "https://i.postimg.cc/tJ9PDDC7/jack1.jpg",
            "https://i.postimg.cc/tJr1kjMm/jack2.jpg",
            "https://i.postimg.cc/8kwrNRzB/jack3.jpg"
        ],
        "material": "Jean",
        "era": "2020",
        "inStock": true,
        "category": "clothing",
        "tags": [
            "jeans",
            "jackron",
            "denim",
            "casual",
            "everyday",
            "branded"
        ]
    },
    {
        "id": 12,
        "name": "Ralph Lauren Track Pants",
        "description": "Experience a blend of classic style and modern comfort with Ralph Lauren track pants. Crafted from premium, soft fabric, these track pants offer a relaxed fit that’s perfect for both casual wear and athletic activities. Featuring the iconic Ralph Lauren logo embroidered or printed subtly, they add a touch of timeless elegance to your sporty look. Designed with an elastic waistband and adjustable drawstring, they ensure a personalized fit, while ribbed cuffs provide a streamlined silhouette. Whether you’re hitting the gym, running errands, or lounging at home, Ralph Lauren track pants deliver effortless style and lasting comfort.",
        "price": "₹699.00",
        "priceValue": 699,
        "image": "https://i.postimg.cc/XYzpcnPn/IMG-20250809-135446-1.avif",
        "images": [
            "https://i.postimg.cc/XYzpcnPn/IMG-20250809-135446-1.avif",
            "https://i.postimg.cc/dVYKbpTG/IMG-20250809-153022-1.avif",
            "https://i.postimg.cc/dVYKbpTG/IMG-20250809-153022-1.avif"
        ],
        "material": "Cotton Blend",
        "era": "2019",
        "inStock": true,
        "category": "clothing",
        "tags": [
            "tracks",
            "cotton blend",
            "casual",
            "everyday",
            "branded"
        ]
    },
    {
        "id": 13,
        "name": "Flying Machine Jeans",
        "description": "Step into effortless style with Flying Machine jeans, designed for the modern, youthful wardrobe. Known for their comfortable fit and durable denim, these jeans combine classic craftsmanship with contemporary trends. Whether you prefer a slim, regular, or relaxed cut, Flying Machine jeans offer versatile options that suit any occasion—from casual outings to weekend adventures. Crafted with quality stitching and attention to detail, they provide lasting wear and a flattering silhouette. Perfect for those who want stylish, affordable denim that never goes out of fashion.",
        "price": "₹899.00",
        "priceValue": 899,
        "image": "https://i.postimg.cc/4y0xv58B/IMG-20250809-131710-1.avif",
        "images": [
            "https://i.postimg.cc/4y0xv58B/IMG-20250809-131710-1.avif",
            "https://i.postimg.cc/pLHps0W6/IMG-20250809-131718-1.avif",
            "https://i.postimg.cc/pLHps0W6/IMG-20250809-131718-1.avif"
        ],
        "material": "Jeans",
        "era": "2018",
        "inStock": true,
        "category": "clothing",
        "tags": [
            "jeans",
            "slimfit",
            "casual",
            "everyday",
            "branded"
        ]
    },
    {
        "id": 14,
        "name": "Netplay Formal Pants",
        "description": "Elevate your formal wardrobe with Netplay formal pants, tailored for a sharp and contemporary look. Crafted from high-quality, breathable fabric, these trousers offer all-day comfort without compromising on style. Designed with a modern slim or regular fit, they feature a flat front, clean lines, and minimal detailing—making them perfect for office wear, business meetings, or formal events. Pair them with a crisp shirt and blazer for a polished appearance. Netplay formal pants deliver sophistication, versatility, and value—ideal for today’s modern professional.",
        "price": "₹699.00",
        "priceValue": 699,
        "image": "https://i.postimg.cc/5tzKf2d0/IMG-20250809-131933-1.avif",
        "images": [
            "https://i.postimg.cc/5tzKf2d0/IMG-20250809-131933-1.avif",
            "https://i.postimg.cc/rmQ1kBms/IMG-20250809-132022-1.avif",
            "https://i.postimg.cc/rmQ1kBms/IMG-20250809-132022-1.avif"
        ],
        "material": "Cotton",
        "era": "2020",
        "inStock": true,
        "category": "clothing",
        "tags": [
            "cotton",
            "relaxfit",
            "casual",
            "everyday",
            "branded"
        ]
    },
    {
        "id": 15,
        "name": "Netplay Formal Pants",
        "description": "Elevate your formal wardrobe with Netplay formal pants, tailored for a sharp and contemporary look. Crafted from high-quality, breathable fabric, these trousers offer all-day comfort without compromising on style. Designed with a modern slim or regular fit, they feature a flat front, clean lines, and minimal detailing—making them perfect for office wear, business meetings, or formal events. Pair them with a crisp shirt and blazer for a polished appearance. Netplay formal pants deliver sophistication, versatility, and value—ideal for today’s modern professional.",
        "price": "₹699.00",
        "priceValue": 699,
        "image": "https://i.postimg.cc/1z0Tp3Wd/IMG-20250809-132512-1.avif",
        "images": [
            "https://i.postimg.cc/1z0Tp3Wd/IMG-20250809-132512-1.avif",
            "https://i.postimg.cc/d0WfWxYR/IMG-20250809-132333-1.avif",
            "https://i.postimg.cc/d0WfWxYR/IMG-20250809-132333-1.avif"
        ],
        "material": "Cotton",
        "era": "2020",
        "inStock": true,
        "category": "clothing",
        "tags": [
            "cotton",
            "relaxfit",
            "casual",
            "everyday",
            "branded"
        ]
    },
    {
        "id": 16,
        "name": "Tapout Track Pant",
        "description": "Push your limits in style with Tapout track pants, built for performance and comfort. Designed with athletes in mind, these track pants feature moisture-wicking fabric that keeps you dry during intense workouts or casual wear. With a modern athletic fit, elastic waistband, and adjustable drawstring, they ensure a secure and comfortable feel. Side pockets add functionality, while the bold Tapout branding brings an edge of attitude and confidence. Whether you're training, running, or just kicking back, Tapout track pants deliver the perfect mix of style, mobility, and durability.",
        "price": "₹699.00",
        "priceValue": 699,
        "image": "https://i.postimg.cc/J07G10gC/IMG-20250809-133955-1.avif",
        "images": [
            "https://i.postimg.cc/J07G10gC/IMG-20250809-133955-1.avif",
            "https://i.postimg.cc/sXT34cnb/IMG-20250809-134010-1.avif",
            "https://i.postimg.cc/sXT34cnb/IMG-20250809-134010-1.avif"
        ],
        "material": "Cotton",
        "era": "2020",
        "inStock": true,
        "category": "clothing",
        "tags": [
            "cotton",
            "relaxfit",
            "casual",
            "everyday",
            "branded"
        ]
    }
];

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

function getProductsByCategory(category) {
    return PRODUCTS_DATA.filter(product => product.category === category);
}

function categoryHasProducts(category) {
    return getProductsByCategory(category).length > 0;
}