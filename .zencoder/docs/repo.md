# Neevstra Thrift Store Information

## Summary
Neevstra is a minimalist thrift store website focused on sustainable fashion. The project is a static website built with HTML, CSS, and JavaScript that showcases pre-loved clothing and accessories. It features a clean, modern design with product listings, shopping cart functionality, and contact information.

## Structure
- **HTML Files**: Core website pages (index.html, catalog.html, product-detail.html, etc.)
- **CSS**: Styling in styles.css with a minimalist aesthetic using custom variables
- **JavaScript**: Client-side functionality in script.js for cart management and UI interactions
- **Content**: Product listings with images, descriptions, and pricing information

## Language & Runtime
**Language**: HTML5, CSS3, JavaScript (ES6+)
**Build System**: None (static website)
**Deployment**: Direct deployment of static files

## Main Features
- **Product Catalog**: Display of thrift items with images, descriptions, and prices
- **Shopping Cart**: Client-side cart functionality with localStorage persistence
- **Responsive Design**: Mobile-friendly layout with responsive navigation
- **Animations**: Scroll-based animations and interactive UI elements
- **Contact Form**: User inquiry form with client-side validation

## Client-Side Implementation
**Cart Management**:
- Products stored in browser's localStorage
- Add/remove functionality with quantity management
- Subtotal and total calculation with shipping costs

**UI Interactions**:
- Smooth scrolling navigation
- Mobile menu toggle
- Intersection Observer API for scroll animations
- Form validation and submission handling

## External Dependencies
**CSS Libraries**:
- Font Awesome 6.4.0 (CDN)
- Google Fonts - Poppins family

**JavaScript**:
- No external JavaScript libraries (vanilla JS implementation)

## Deployment
The website can be deployed to any static web hosting service by uploading all HTML, CSS, and JavaScript files while maintaining the directory structure.

## Browser Compatibility
The website uses modern JavaScript features including:
- ES6 arrow functions
- Template literals
- localStorage API
- Intersection Observer API
- Modern CSS variables and animations

These features are supported in all modern browsers (Chrome, Firefox, Safari, Edge) but may require polyfills for older browser support.