// EmailJS Configuration Template
// Copy this configuration and update the values in payment.html

// Step 1: Replace these values with your actual EmailJS credentials
const EMAIL_CONFIG = {
    // Get this from EmailJS Dashboard > Email Services
    serviceId: 'service_xxxxxxx', 
    
    // Create these templates in EmailJS Dashboard > Email Templates
    customerTemplateId: 'template_customer_confirmation',
    adminTemplateId: 'template_admin_notification',
    
    // Your admin email address
    adminEmail: 'your-admin-email@example.com'
};

// Step 2: Replace this with your EmailJS Public Key
// Get this from EmailJS Dashboard > Account > API Keys
const EMAILJS_PUBLIC_KEY = 'your_public_key_here';

// Step 3: Initialize EmailJS (add this to payment.html)
emailjs.init({
    publicKey: EMAILJS_PUBLIC_KEY,
});

// Example template variables that will be sent to EmailJS:
const exampleTemplateData = {
    customer_name: "John Doe",
    customer_email: "john@example.com",
    order_id: "NEV20241234",
    payment_id: "pay_xxxxxxxxxx",
    order_date: "January 15, 2025",
    total_amount: "₹2,999.00",
    customer_phone: "+91 9876543210",
    shipping_address: "123 Main St, City, State - 123456, India",
    items_list: "Vintage Camera (Qty: 1) - ₹2,099.00\nRetro Sunglasses (Qty: 1) - ₹900.00",
    items_count: 2,
    admin_email: "admin@neevstra.com"
};

// Quick Setup Checklist:
// □ 1. Create EmailJS account at https://www.emailjs.com/
// □ 2. Add email service (Gmail, Outlook, etc.)
// □ 3. Create customer confirmation email template
// □ 4. Create admin notification email template  
// □ 5. Get your Service ID and Template IDs
// □ 6. Get your Public Key
// □ 7. Update EMAIL_CONFIG in payment.html
// □ 8. Update emailjs.init() with your public key
// □ 9. Test with a sample order
// □ 10. Check EmailJS dashboard for delivery status