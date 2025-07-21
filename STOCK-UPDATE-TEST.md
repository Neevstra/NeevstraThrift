# 🧪 Stock Update Test Guide

## Test the Centralized Stock Management System

### 🎯 **Current Status (After Fix)**
- **Vintage Watch (ID: 9)** is currently set to `inStock: true` (Available)

### 🔧 **How to Test:**

#### **Step 1: Test Available Item**
1. Open your website
2. Go to Products page
3. Find "Vintage Watch" - should show "Available" badge
4. Click "View Details" 
5. Should show "Available" status and enabled "Add to Cart" button
6. Try adding to cart - should work

#### **Step 2: Mark as Sold Out**
1. Open `products-data.js`
2. Find the Vintage Watch entry (around line 119)
3. Change: `inStock: true,` to `inStock: false,`
4. Save the file

#### **Step 3: Test Sold Out Item**
1. Refresh your website
2. Go to Products page
3. Find "Vintage Watch" - should show "Sold Out" badge and be grayed out
4. Click "View Details"
5. Should show "Sold Out" status and disabled "Sold Out" button
6. Try clicking button - should show alert "Sorry, this item is currently sold out."

### 🎯 **What Should Happen:**

#### ✅ **Available Items** (`inStock: true`)
- **Products Page**: Green "Available" badge, normal colors
- **Product Detail**: "Available" status, enabled "Add to Cart" button
- **Cart**: Can be added successfully
- **Checkout**: Can proceed to payment

#### ❌ **Sold Out Items** (`inStock: false`)
- **Products Page**: Red "Sold Out" badge, grayed out appearance
- **Product Detail**: "Sold Out" status, disabled "Sold Out" button
- **Cart**: Cannot be added, shows alert
- **Checkout**: Cannot proceed

### 🔄 **Test Different Products:**

You can test with any product by changing their `inStock` status:

```javascript
// In products-data.js
{
    id: 1,
    name: "Vintage Camera",
    // ... other properties
    inStock: false,  // Change this to test
}
```

### 🚨 **If Something Doesn't Work:**

1. **Clear browser cache** (Ctrl+F5 or Cmd+Shift+R)
2. **Check browser console** for any JavaScript errors
3. **Verify products-data.js** is loaded correctly
4. **Make sure all HTML files** include the script properly

### 📋 **Current Stock Status:**
- **Available**: Vintage Camera, Retro Sunglasses, Leather Messenger Bag, Floral Vintage Dress, Handcrafted Leather Wallet, Vintage Silk Scarf, Vintage Watch
- **Sold Out**: Vintage Wool Coat, Vintage Leather Boots

---
**Note**: After testing, you can set the Vintage Watch back to `inStock: false` if you want it to be sold out.