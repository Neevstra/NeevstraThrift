# 📦 Neevstra Inventory Management Guide

## 🎯 Overview
This guide explains how to manage your thrift store inventory since each item is unique and one-of-a-kind.

## 📍 How to Mark Items as Sold Out

### Step 1: Open the Product File
Navigate to `product-detail.html` and find the `products` array (around line 464).

### Step 2: Find Your Product
Each product has a unique ID and looks like this:
```javascript
{
    id: 1,
    name: "Vintage Camera",
    description: "...",
    price: "₹2,099.00",
    image: "...",
    material: "...",
    era: "...",
    inStock: true,  // ← This controls availability
    category: "electronics",
    tags: ["vintage", "camera", "photography", "collectible"]
}
```

### Step 3: Update Stock Status
To mark an item as **SOLD OUT**:
- Change `inStock: true` to `inStock: false`

To mark an item as **AVAILABLE**:
- Change `inStock: false` to `inStock: true`

### Step 4: Save and Deploy
1. Save the file
2. Commit changes to GitHub
3. GitHub Pages will automatically update your live site

## 🔄 What Happens When You Mark Items as Sold Out

### ✅ Available Items (`inStock: true`)
- Shows "Available" status in green
- Add to Cart button is enabled
- Shows "Available" badge on product cards

### ❌ Sold Out Items (`inStock: false`)
- Shows "Sold Out" status in red
- Add to Cart button is disabled and shows "Sold Out"
- Shows "Sold Out" badge on product cards
- Customers cannot add to cart

## 📝 Example: Marking Vintage Camera as Sold Out

**Before (Available):**
```javascript
{
    id: 1,
    name: "Vintage Camera",
    // ... other properties
    inStock: true,  // Available
}
```

**After (Sold Out):**
```javascript
{
    id: 1,
    name: "Vintage Camera",
    // ... other properties
    inStock: false,  // Sold Out
}
```

## 🎨 Current Stock Status Examples

In your current inventory:
- **Vintage Camera** - Available ✅
- **Retro Sunglasses** - Available ✅
- **Leather Messenger Bag** - Available ✅
- **Floral Vintage Dress** - Available ✅
- **Vintage Wool Coat** - Sold Out ❌ (example)
- **Handcrafted Leather Wallet** - Available ✅
- **Vintage Silk Scarf** - Available ✅
- **Vintage Leather Boots** - Sold Out ❌ (example)
- **Vintage Watch** - Available ✅

## 🚀 Quick Tips

1. **Regular Updates**: Check and update inventory after each sale
2. **GitHub Commits**: Use clear commit messages like "Mark Vintage Camera as sold out"
3. **Testing**: Always test on your live site after making changes
4. **Backup**: Keep a backup of your product data

## 🔧 Technical Notes

- Each item can only be added to cart once (prevents duplicate orders)
- Stock status automatically updates across all pages
- Related products algorithm still works with sold out items
- Sold out items still appear in search/browse but can't be purchased

## 📞 Need Help?

If you need to add new products or modify the system, you'll need to:
1. Add new product objects to the `products` array
2. Follow the same structure with unique IDs
3. Include proper images, descriptions, and categorization

---
*This system is designed for GitHub Pages deployment and requires no database or server-side management.*