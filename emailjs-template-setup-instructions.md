# EmailJS Template Setup Instructions

## ✅ Configuration Complete
- **Service ID**: `service_tnoohc5` ✅
- **Public Key**: `yqz2oNi5Z6h2x1FoN` ✅
- **Admin Email**: `neevstra1o1@gmail.com` ✅

## 📧 Create Email Templates

### Template 1: Customer Confirmation Email

1. **Go to EmailJS Dashboard** → **Email Templates** → **Create New Template**

2. **Template Settings:**
   - **Template ID**: `customer_order_confirmation`
   - **Template Name**: `Customer Order Confirmation - Neevstra`

3. **Subject Line:**
   ```
   Order Confirmation - {{order_id}} | Neevstra
   ```

4. **Content:**
   - Copy the entire content from `customer-email-template.html`
   - Paste it into the EmailJS template editor
   - Make sure to use the **HTML editor** mode

5. **Test Variables** (for testing):
   ```json
   {
     "customer_name": "John Doe",
     "customer_email": "john@example.com",
     "order_id": "NEV20241234",
     "payment_id": "pay_xxxxxxxxxx",
     "order_date": "January 15, 2025",
     "total_amount": "₹2,999.00",
     "customer_phone": "+91 9876543210",
     "shipping_address": "123 Main St, City, State - 123456, India",
     "items_list": "Vintage Camera (Qty: 1) - ₹2,099.00\nRetro Sunglasses (Qty: 1) - ₹900.00",
     "items_count": "2"
   }
   ```

### Template 2: Admin Notification Email

1. **Create Another New Template**

2. **Template Settings:**
   - **Template ID**: `admin_order_notification`
   - **Template Name**: `Admin Order Notification - Neevstra`

3. **Subject Line:**
   ```
   New Order Received - {{order_id}} | Neevstra
   ```

4. **Content:**
   - Copy the entire content from `admin-email-template.html`
   - Paste it into the EmailJS template editor
   - Use **HTML editor** mode

5. **Test Variables** (same as above):
   ```json
   {
     "customer_name": "John Doe",
     "customer_email": "john@example.com",
     "order_id": "NEV20241234",
     "payment_id": "pay_xxxxxxxxxx",
     "order_date": "January 15, 2025",
     "total_amount": "₹2,999.00",
     "customer_phone": "+91 9876543210",
     "shipping_address": "123 Main St, City, State - 123456, India",
     "items_list": "Vintage Camera (Qty: 1) - ₹2,099.00\nRetro Sunglasses (Qty: 1) - ₹900.00",
     "items_count": "2",
     "admin_email": "neevstra1o1@gmail.com"
   }
   ```

## 🧪 Test Your Templates

1. **In EmailJS Dashboard:**
   - Go to each template
   - Click **"Test"** button
   - Fill in the test variables
   - Send test emails to verify formatting

2. **Test Email Addresses:**
   - Send customer template test to your personal email
   - Send admin template test to `neevstra1o1@gmail.com`

## 🚀 Template Features

### Customer Email Features:
- ✅ Professional Neevstra branding
- ✅ Order details with payment confirmation
- ✅ Shipping information
- ✅ Complete item list
- ✅ Next steps and timeline
- ✅ Contact information
- ✅ Mobile-responsive design
- ✅ Sustainable fashion messaging

### Admin Email Features:
- ✅ Urgent alert styling with animations
- ✅ Complete order and customer information
- ✅ Processing checklist
- ✅ Quick action buttons (email, call)
- ✅ Priority indicators
- ✅ Payment confirmation status
- ✅ Professional admin dashboard look

## 📱 Template Variables Used

Both templates use these variables that are automatically sent from your website:

- `{{customer_name}}` - Customer's full name
- `{{customer_email}}` - Customer's email address
- `{{order_id}}` - Unique order ID (e.g., NEV20241234)
- `{{payment_id}}` - Razorpay payment ID
- `{{order_date}}` - Order date in readable format
- `{{total_amount}}` - Total order amount with currency
- `{{customer_phone}}` - Customer's phone number
- `{{shipping_address}}` - Complete shipping address
- `{{items_list}}` - List of ordered items with quantities and prices
- `{{items_count}}` - Number of items in the order
- `{{admin_email}}` - Admin email (neevstra1o1@gmail.com)

## ✅ Final Checklist

- [ ] Service connected: `service_tnoohc5`
- [ ] Public key added: `yqz2oNi5Z6h2x1FoN`
- [ ] Customer template created: `customer_order_confirmation`
- [ ] Admin template created: `admin_order_notification`
- [ ] Both templates tested successfully
- [ ] Email formatting looks good on desktop and mobile
- [ ] Ready to process real orders!

## 🎯 What Happens Next

When a customer completes a purchase:

1. **Payment Success** → Razorpay confirms payment
2. **Order Created** → Order details saved to localStorage
3. **Emails Sent** → Both customer and admin receive emails automatically
4. **Status Tracked** → Email success/failure status saved
5. **Receipt Shows Status** → Customer can see email confirmation status

Your EmailJS integration is now complete and ready to send professional confirmation emails! 🎉