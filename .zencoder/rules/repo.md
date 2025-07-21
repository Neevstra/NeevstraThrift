---
description: Repository Information Overview
alwaysApply: true
---

# Neevstra Thrift Store Information

## Summary
Neevstra is a minimalist thrift store e-commerce website focused on sustainable fashion. The project is a static website that offers vintage and pre-loved items with a clean, modern interface. It features product browsing, shopping cart functionality, and order processing with email notifications.

## Structure
- **HTML Files**: Core website pages (index.html, products.html, etc.)
- **CSS Files**: Styling for the website (styles.css)
- **JavaScript Files**: Client-side functionality (script.js, products-script.js)
- **Email Templates**: Configuration and templates for order notifications
- **.github/workflows**: GitHub Actions for deployment to GitHub Pages

## Language & Runtime
**Language**: HTML, CSS, JavaScript
**Version**: Modern JavaScript (ES6+)
**Build System**: None (Static website)
**Package Manager**: None (No direct package dependencies)

## Dependencies
**Main Dependencies**:
- Font Awesome 6.4.0 (CDN)
- Google Fonts - Poppins (CDN)
- EmailJS (External service for email functionality)

## Build & Installation
This is a static website with no build process required. Files can be served directly from any web server.

```bash
# To serve locally with a simple HTTP server
python -m http.server
# or
npx serve
```

## Deployment
**Platform**: GitHub Pages
**Configuration**: `.github/workflows/static.yml`
**Process**: Automatic deployment on push to main branch

```bash
# Deployment happens automatically via GitHub Actions
git push origin main
```

## Main Files & Resources
**Entry Point**: `index.html` (Main landing page)
**Key JavaScript Files**:
- `script.js`: Core functionality including cart management
- `products-script.js`: Product listing and filtering

**Email Configuration**:
- `email-config-template.js`: Template for EmailJS integration
- `emailjs-setup-guide.md`: Documentation for email service setup

## Features
**Shopping Cart**:
- Client-side cart management using localStorage
- Add/remove items, update quantities
- Persistent across page navigation

**Order Processing**:
- Customer information collection
- Integration with EmailJS for order notifications
- Email templates for customer confirmation and admin alerts

**Product Management**:
- Product listing and filtering
- Product details view
- New arrivals and best sellers sections

## Integration Points
**Email Service**: 
- EmailJS integration for sending order confirmations
- Templates for customer and admin notifications

**Payment Processing**:
- Payment form in `payment.html`
- Razorpay mentioned in email templates (integration not fully visible in code)