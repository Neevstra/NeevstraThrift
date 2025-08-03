# Neevstra Thrift - Product Manager

A Node.js command-line tool for managing products in the Neevstra Thrift Store. This tool allows you to add, update, delete, and manage products dynamically, with changes automatically reflected in your HTML pages.

## Prerequisites

### 1. Node.js and npm
- **Node.js**: Version 14 or higher (you have v22.18.0 ✅)
- **npm**: Comes with Node.js

### 2. PowerShell Execution Policy (Windows)
If you encounter PowerShell execution policy errors, run:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
```

### 3. Dependencies
Install required packages:
```bash
npm install
```

This installs:
- `readline-sync`: For interactive command-line input
- `fs`: File system operations (built-in)
- `path`: Path utilities (built-in)

## Installation

1. **Clone/Download** the repository
2. **Navigate** to the project directory
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Test the installation**:
   ```bash
   node product-manager.js list
   ```

## Usage

### Command Line Interface

#### List all products
```bash
node product-manager.js list
# or
npm run list
```

#### Find a specific product
```bash
node product-manager.js find [product-id]
# Example:
node product-manager.js find 1
```

#### Add a new product
```bash
node product-manager.js add
# or
npm run add
```

#### Update an existing product
```bash
node product-manager.js update [product-id]
# Example:
node product-manager.js update 5
```

#### Delete a product
```bash
node product-manager.js delete [product-id]
# Example:
node product-manager.js delete 3
```

#### Toggle stock status (In Stock ↔ Sold Out)
```bash
node product-manager.js toggle [product-id]
# Example:
node product-manager.js toggle 2
```

### Interactive Mode

Run without arguments for an interactive menu:
```bash
node product-manager.js
# or
npm start
```

This will show a menu with options:
```
🛍️  Neevstra Thrift - Product Manager
=====================================
1. List all products
2. Find product by ID
3. Add new product
4. Update product
5. Delete product
6. Toggle stock status
7. Reload products from file
0. Exit
```

## Product Data Structure

Each product has the following fields:

```javascript
{
    id: 1,                          // Auto-generated unique ID
    name: "Product Name",           // Product title
    description: "Product desc...", // Detailed description
    price: "₹999.00",              // Formatted price string
    priceValue: 999,               // Numeric price for calculations
    image: "https://...",          // Main product image URL
    images: ["url1", "url2", ...], // Array of image URLs
    material: "Cotton",            // Product material
    era: "2020",                   // Year/era of the product
    category: "clothing",          // Product category
    inStock: true,                 // Stock status (true/false)
    tags: ["tag1", "tag2", ...]   // Array of tags for filtering
}
```

### Categories
- `clothing` - Shirts, pants, jeans, etc.
- `electronics` - Cameras, gadgets, etc.
- `accessories` - Bags, jewelry, etc.

## How It Works

### Dynamic Updates
1. **Data Storage**: Products are stored in `products-data.js`
2. **HTML Integration**: All HTML pages load this file automatically
3. **Real-time Updates**: Changes made through the product manager are immediately reflected on your website
4. **No Server Restart**: Since it's a static site, changes are instant

### File Structure
```
NeevstraThrift/
├── products-data.js          # Product database (auto-updated)
├── product-manager.js        # Management script
├── package.json             # Node.js configuration
├── index.html              # Homepage (loads products-data.js)
├── products.html           # Products page (loads products-data.js)
├── product-detail.html     # Product details (loads products-data.js)
└── ...
```

## Examples

### Adding a New Product
```bash
node product-manager.js add
```
You'll be prompted for:
- Product Name
- Description
- Price (formatted, e.g., "₹999.00")
- Price Value (numeric, e.g., 999)
- Main Image URL
- Additional Image URLs (up to 5 total)
- Material
- Era/Year
- Category
- Stock Status
- Tags (comma-separated)

### Updating Stock Status
```bash
# Mark product as sold out
node product-manager.js toggle 5

# Mark it back as in stock
node product-manager.js toggle 5
```

### Bulk Operations
```bash
# List all products to see IDs
node product-manager.js list

# Update multiple products
node product-manager.js update 1
node product-manager.js update 2
node product-manager.js update 3
```

## Advanced Features

### Backup and Recovery
The system automatically maintains the original file structure. If something goes wrong:

1. **Reload from file**:
   ```bash
   node product-manager.js reload
   ```

2. **Manual backup**: Copy `products-data.js` before making changes

### Validation
- **Unique IDs**: Automatically generated and managed
- **Required Fields**: All essential fields are validated
- **Price Consistency**: Both formatted and numeric prices are maintained
- **Image Arrays**: Ensures at least one image is provided

### Integration with Website
- **Automatic Loading**: HTML pages automatically load updated product data
- **No Cache Issues**: Changes are reflected immediately
- **SEO Friendly**: Static files remain SEO-optimized
- **Performance**: No database queries needed

## Troubleshooting

### Common Issues

1. **"Cannot load products"**
   - Check if `products-data.js` exists
   - Verify file permissions
   - Run: `node product-manager.js reload`

2. **"PowerShell execution policy"**
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
   ```

3. **"Module not found"**
   ```bash
   npm install
   ```

4. **"Invalid product ID"**
   - Use `node product-manager.js list` to see valid IDs
   - IDs are numbers, not strings

### Getting Help
- Run `node product-manager.js` for interactive mode
- Check this README for command syntax
- Verify Node.js installation: `node --version`

## Best Practices

1. **Backup First**: Always backup `products-data.js` before major changes
2. **Test Changes**: Use `find` command to verify updates
3. **Consistent Naming**: Use clear, descriptive product names
4. **Image Quality**: Use high-quality, consistent image URLs
5. **Tag Strategy**: Use relevant, searchable tags
6. **Stock Management**: Regularly update stock status

## npm Scripts

Available in `package.json`:
```json
{
  "start": "node product-manager.js",           // Interactive mode
  "add": "node product-manager.js add",         // Add product
  "update": "node product-manager.js update",   // Update product
  "delete": "node product-manager.js delete",   // Delete product
  "list": "node product-manager.js list",       // List products
  "find": "node product-manager.js find"        // Find product
}
```

Use with: `npm run [script-name]`

---

## Quick Start

1. **Install**: `npm install`
2. **List products**: `npm run list`
3. **Add product**: `npm run add`
4. **View website**: Open `index.html` in browser
5. **Verify changes**: Check that new products appear on the website

Your changes will be immediately visible on your website! 🎉