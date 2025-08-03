# 🛍️ Neevstra Thrift - Product Manager Quick Reference

## 🚀 Quick Commands

### List All Products
```bash
node product-manager.js list
# or
npm run list
```

### Find Product by ID
```bash
node product-manager.js find [ID]
# Example:
node product-manager.js find 12
```

### Add New Product (Interactive)
```bash
node product-manager.js add
# or
npm run add
```

### Update Product (Interactive)
```bash
node product-manager.js update [ID]
# Example:
node product-manager.js update 12
```

### Delete Product
```bash
node product-manager.js delete [ID]
# Example:
node product-manager.js delete 12
```

### Toggle Stock Status (In Stock ↔ Sold Out)
```bash
node product-manager.js toggle [ID]
# Example:
node product-manager.js toggle 12
```

### Interactive Menu
```bash
node product-manager.js
# or
npm start
```

## 🎯 Current Status

✅ **12 Products** currently in database
✅ **System Working** - Changes reflect immediately on website
✅ **All Dependencies** installed and configured

## 🔥 Quick Test Commands

```bash
# See all products
npm run list

# View the new leather jacket
node product-manager.js find 12

# Mark a product as sold out
node product-manager.js toggle 5

# Mark it back as in stock
node product-manager.js toggle 5
```

## 📁 Key Files

- `products-data.js` - Your product database (auto-updated)
- `product-manager.js` - Management script
- `package.json` - Node.js configuration
- `PRODUCT-MANAGER-README.md` - Full documentation

## 🌐 Website Integration

Your changes are **immediately live** on:
- `index.html` - Homepage
- `products.html` - Products page  
- `product-detail.html` - Product details page

No server restart needed! 🎉