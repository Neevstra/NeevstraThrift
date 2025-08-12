# Neevstra - Sustainable Thrift Store

![Neevstra Logo](NEEVSTRA.png)

## About

**Neevstra** is a minimalist e-commerce website for a sustainable thrift store that promotes eco-friendly fashion by giving pre-loved clothing a second life. The platform focuses on curating high-quality vintage and second-hand items while maintaining a clean, modern aesthetic.

### Mission
To promote sustainable fashion choices by connecting conscious shoppers with unique, quality pre-owned clothing that doesn't compromise on style or environmental responsibility.

## Features

### E-commerce Functionality
- **Product Catalog**: Browse through curated collections of vintage and thrift items
- **Smart Cart System**: Persistent shopping cart using localStorage
- **Order Management**: Complete checkout process with order tracking
- **Payment Integration**: Razorpay payment gateway integration
- **Email Notifications**: Automated order confirmations via EmailJS
- **Product Management**: Command-line tool for adding, updating, and managing products

### User Experience
- **Responsive Design**: Fully responsive across all devices
- **Intuitive Navigation**: Clean, minimalist interface
- **Product Filtering**: Filter by categories, price, and availability
- **Mobile-First**: Optimized for mobile shopping experience

### Email System
- **Customer Confirmations**: Automated order confirmation emails
- **Admin Notifications**: Real-time order alerts for store managers
- **Professional Templates**: Branded email templates with order details

### Content Pages
- **About Us**: Company story and values
- **Sustainability**: Environmental impact and initiatives
- **FAQ**: Frequently asked questions
- **Shipping & Returns**: Policy information
- **Contact**: Customer support information

## Technology Stack

### Frontend
- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with custom properties and grid layouts
- **JavaScript (ES6+)**: Interactive functionality and API integrations
- **Font Awesome**: Icon library for UI elements
- **Google Fonts**: Poppins font family for typography

### Backend Tools
- **Node.js**: Product management command-line tool
- **npm**: Package management for dependencies

### External Services
- **EmailJS**: Email service for order notifications
- **Razorpay**: Payment processing gateway
- **GitHub Pages**: Static site hosting

### Development Tools
- **GitHub Actions**: Automated deployment pipeline
- **VS Code**: Development environment configuration

## Quick Start

### Prerequisites
- A modern web browser
- Internet connection for CDN resources
- EmailJS account (for email functionality)
- Razorpay account (for payment processing)
- Node.js (for product management tool)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/NeevstraThrift.git
   cd NeevstraThrift
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Serve locally**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   
   # Using PHP
   php -S localhost:8000
   ```

4. **Access the website**
   ```
   http://localhost:8000
   ```

## Configuration

### EmailJS Setup
1. Create an account at [EmailJS.com](https://www.emailjs.com/)
2. Set up email service and templates
3. Follow the detailed guide in [`emailjs-setup-guide.md`](emailjs-setup-guide.md)
4. Update configuration in `payment.html`

### Razorpay Integration
1. Create a Razorpay account
2. Get your API keys from the dashboard
3. Update payment configuration in `payment.html`

### Product Management Tool
1. Use the command-line tool to manage products
2. Run `npm start` for interactive mode
3. Use specific commands like `npm run add` to add products

## Project Structure

```
NeevstraThrift/
├── index.html              # Homepage
├── products.html           # Product catalog
├── product-detail.html     # Individual product pages
├── payment.html            # Checkout and payment
├── about-us.html           # Company information
├── index.html#contact      # Contact form (integrated in homepage)
├── sustainability.html     # Sustainability page
├── faq.html               # FAQ page
├── my-orders.html         # Order tracking
├── privacy-policy.html    # Privacy policy
├── shipping-returns.html  # Shipping information
├── receipt.html           # Order confirmation
├── styles.css             # Main stylesheet
├── script.js              # Core JavaScript functionality
├── products-script.js     # Product-specific functionality
├── products-data.js       # Product data (managed by product-manager.js)
├── product-manager.js     # Product management tool
├── package.json           # Node.js configuration
├── Email Templates/
│   ├── customer-email-template.html
│   ├── admin-email-template.html
│   ├── emailjs-setup-guide.md
│   └── email-config-template.js
├── .github/workflows/
│   └── static.yml            # GitHub Actions deployment
├── NEEVSTRA.png          # Brand logo
└── LICENSE                # MIT License
```

## Design Philosophy

### Color Palette
- **Primary**: Earthy, sustainable tones
- **Secondary**: Warm neutrals
- **Accent**: Minimalist highlights

### Typography
- **Primary Font**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Focus**: Clean, readable typography

### Layout Principles
- **Mobile-First**: Responsive design approach
- **Minimalism**: Clean, uncluttered interfaces
- **Sustainability**: Green design choices reflecting brand values

## Deployment

### GitHub Pages (Recommended)
The project is configured for automatic deployment to GitHub Pages:

1. **Push to main branch**
   ```bash
   git push origin main
   ```

2. **GitHub Actions** automatically deploys the site
3. **Access at**: `https://your-username.github.io/NeevstraThrift`

### Alternative Hosting
- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployment
- **Traditional Web Hosting**: Upload files via FTP

## Customization

### Managing Products
The website now includes a powerful product management tool:

1. **Interactive Mode**:
   ```bash
   npm start
   ```

2. **Command Line Operations**:
   ```bash
   # List all products
   npm run list
   
   # Add a new product
   npm run add
   
   # Update an existing product
   npm run update [product-id]
   
   # Delete a product
   npm run delete [product-id]
   
   # Find a specific product
   npm run find [product-id]
   ```

3. **Product Data Structure**:
   - Products are stored in `products-data.js`
   - Changes are immediately reflected on the website
   - No server restart required for static site

### Adding Bags and Shoes
The website includes empty category messages for bags and shoes until you add products:
- When users select "Bags" or "Shoes" category, they see a "No products yet" message
- Once you add products with `category: "bags"` or `category: "shoes"`, they will automatically appear
- Follow the examples in `products-data.js` for the correct format

### Styling Changes
1. Modify CSS custom properties in `styles.css`
2. Update color schemes and typography
3. Customize responsive breakpoints

### Email Templates
1. Edit templates in the email template files
2. Update EmailJS template configurations
3. Test email functionality

## Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

## Support

- **Documentation**: Check the [`emailjs-setup-guide.md`](emailjs-setup-guide.md)
- **Issues**: Create an issue on GitHub
- **Email**: Contact through the website's contact form

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **Font Awesome** for beautiful icons
- **Google Fonts** for typography
- **EmailJS** for email services
- **Razorpay** for payment processing
- **GitHub Pages** for hosting

## Future Enhancements

- [ ] User authentication system
- [ ] Wishlist functionality
- [ ] Product reviews and ratings
- [ ] Advanced search and filtering
- [ ] Inventory management system
- [ ] Multi-language support
- [ ] Progressive Web App (PWA) features
- [ ] Integration with social media platforms

---

**Made with care for sustainable fashion**

*Neevstra - Where sustainability meets style*