# Neevstra Thrift Store Website Information

## Summary
Neevstra is a minimalist thrift store website focused on sustainable fashion. The project is a static website built with HTML, CSS, and JavaScript that showcases pre-loved clothing and accessories with a clean, modern design aesthetic.

## Structure
- **HTML Files**: Core website pages (index.html, product-detail.html, etc.)
- **CSS**: Single stylesheet (styles.css) for consistent design
- **JavaScript**: Client-side functionality in script.js
- **.github/workflows**: GitHub Actions for deployment to GitHub Pages

## Language & Runtime
**Language**: HTML5, CSS3, JavaScript (ES6+)
**Build System**: None (static website)
**Deployment**: GitHub Pages

## Main Features
- **Product Catalog**: Display of thrift items with images and descriptions
- **Shopping Cart**: Client-side cart functionality with localStorage persistence
- **Checkout Process**: Multi-step form for customer and shipping information
- **Order Management**: Order tracking and receipt generation
- **Responsive Design**: Mobile-friendly layout with adaptive navigation

## Dependencies
**External Libraries**:
- Font Awesome 6.4.0 (CDN): Icon library for UI elements
- Google Fonts (Poppins): Typography for consistent branding

## Client-Side Storage
**localStorage Implementation**:
- Cart items persistence between sessions
- Order history tracking
- Customer information temporary storage

## Deployment
**GitHub Pages Configuration**:
- Automated deployment via GitHub Actions workflow
- Static site hosting with custom domain support
- Deployment triggered on pushes to main branch

## Key Files
- **index.html**: Main landing page with featured products
- **catalog.html**: Complete product listing page
- **product-detail.html**: Individual product information
- **script.js**: Core functionality including cart and checkout
- **styles.css**: Comprehensive styling with CSS variables
- **static.yml**: GitHub Actions workflow for deployment

## Color Scheme
**Brand Colors**:
- Primary: rgb(211, 202, 171) - Logo beige/tan
- Secondary: #fffcf4 - Cream background
- Accent: #000000 - Black for accents
- Text: #333333 - Slightly softer black for text

## Responsive Design
**Breakpoints**:
- Mobile: Up to 768px
- Tablet: 768px to 1024px
- Desktop: 1024px and above

## User Experience Flow
1. Browse products on homepage or catalog
2. View product details
3. Add items to cart
4. Review cart contents
5. Complete checkout process
6. Receive order confirmation
7. View order history in account section