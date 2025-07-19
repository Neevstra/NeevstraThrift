# EmailJS Setup Guide for Neevstra

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. Go to Email Services in your EmailJS dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note down your **Service ID**

## Step 3: Create Email Templates

### Customer Confirmation Email Template
**Template ID**: `customer_order_confirmation`

**Subject**: `Order Confirmation - {{order_id}} | Neevstra`

**Content**:
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #d3caab; padding: 20px; text-align: center; }
        .header h1 { margin: 0; color: #463f3a; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .order-details { background-color: white; padding: 15px; margin: 15px 0; border-radius: 5px; }
        .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
        .items-list { background-color: #f5f5f5; padding: 10px; margin: 10px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Neevstra</h1>
            <p>Sustainable Fashion. Timeless Style.</p>
        </div>
        
        <div class="content">
            <h2>Thank you for your order, {{customer_name}}!</h2>
            
            <p>We're excited to confirm that we've received your order and payment. Here are your order details:</p>
            
            <div class="order-details">
                <h3>Order Information</h3>
                <p><strong>Order ID:</strong> {{order_id}}</p>
                <p><strong>Payment ID:</strong> {{payment_id}}</p>
                <p><strong>Order Date:</strong> {{order_date}}</p>
                <p><strong>Total Amount:</strong> {{total_amount}}</p>
            </div>
            
            <div class="order-details">
                <h3>Shipping Address</h3>
                <p>{{customer_name}}<br>
                {{shipping_address}}<br>
                Phone: {{customer_phone}}</p>
            </div>
            
            <div class="order-details">
                <h3>Items Ordered ({{items_count}} items)</h3>
                <div class="items-list">
                    {{items_list}}
                </div>
            </div>
            
            <p><strong>What's Next?</strong></p>
            <ul>
                <li>We'll process your order within 1-2 business days</li>
                <li>You'll receive a shipping confirmation email with tracking details</li>
                <li>Your order will be delivered within 3-7 business days</li>
            </ul>
            
            <p>If you have any questions about your order, please contact us at support@neevstra.com or reply to this email.</p>
            
            <p>Thank you for choosing sustainable fashion!</p>
        </div>
        
        <div class="footer">
            <p>© 2025 Neevstra. All rights reserved.<br>
            This email was sent to {{customer_email}}</p>
        </div>
    </div>
</body>
</html>
```

### Admin Notification Email Template
**Template ID**: `admin_order_notification`

**Subject**: `New Order Received - {{order_id}} | Neevstra`

**Content**:
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #463f3a; padding: 20px; text-align: center; color: white; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .order-details { background-color: white; padding: 15px; margin: 15px 0; border-radius: 5px; border-left: 4px solid #d3caab; }
        .urgent { background-color: #fff3cd; border-left: 4px solid #ffc107; }
        .items-list { background-color: #f5f5f5; padding: 10px; margin: 10px 0; font-family: monospace; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🛍️ New Order Alert</h1>
            <p>Neevstra Admin Dashboard</p>
        </div>
        
        <div class="content">
            <div class="order-details urgent">
                <h2>⚡ Action Required: New Order Received</h2>
                <p><strong>Order ID:</strong> {{order_id}}</p>
                <p><strong>Payment ID:</strong> {{payment_id}}</p>
                <p><strong>Order Date:</strong> {{order_date}}</p>
                <p><strong>Total Amount:</strong> {{total_amount}}</p>
            </div>
            
            <div class="order-details">
                <h3>👤 Customer Information</h3>
                <p><strong>Name:</strong> {{customer_name}}</p>
                <p><strong>Email:</strong> {{customer_email}}</p>
                <p><strong>Phone:</strong> {{customer_phone}}</p>
            </div>
            
            <div class="order-details">
                <h3>📦 Shipping Address</h3>
                <p>{{shipping_address}}</p>
            </div>
            
            <div class="order-details">
                <h3>🛒 Items Ordered ({{items_count}} items)</h3>
                <div class="items-list">{{items_list}}</div>
            </div>
            
            <div class="order-details">
                <h3>📋 Next Steps</h3>
                <ul>
                    <li>✅ Payment confirmed via Razorpay</li>
                    <li>📦 Prepare items for shipping</li>
                    <li>📧 Customer confirmation email sent</li>
                    <li>🚚 Generate shipping label and tracking</li>
                </ul>
            </div>
            
            <p><strong>⏰ Please process this order within 24 hours to maintain customer satisfaction.</strong></p>
        </div>
    </div>
</body>
</html>
```

## Step 4: Get Your Keys
1. Go to Account > API Keys in EmailJS dashboard
2. Copy your **Public Key**
3. Note down your **Service ID** from the Email Services section
4. Note down your **Template IDs** from the Email Templates section

## Step 5: Update Configuration
Replace the following values in `payment.html`:

```javascript
// EmailJS configuration
const EMAIL_CONFIG = {
    serviceId: 'YOUR_SERVICE_ID', // Replace with your actual service ID
    customerTemplateId: 'customer_order_confirmation', // Your customer template ID
    adminTemplateId: 'admin_order_notification', // Your admin template ID
    adminEmail: 'your-email@example.com' // Your admin email address
};

// In the EmailJS initialization
emailjs.init({
    publicKey: "YOUR_PUBLIC_KEY", // Replace with your actual public key
});
```

## Step 6: Test the Integration
1. Make a test purchase on your website
2. Check if both emails are sent successfully
3. Verify the email content and formatting
4. Check the EmailJS dashboard for delivery status

## Troubleshooting
- Make sure your email service is properly connected
- Check that template IDs match exactly
- Verify your public key is correct
- Check browser console for any errors
- Ensure your EmailJS account has sufficient quota

## Email Quota
- Free plan: 200 emails/month
- Paid plans available for higher volumes

## Security Notes
- Public key is safe to use in frontend code
- Never expose private keys in client-side code
- Consider rate limiting for production use