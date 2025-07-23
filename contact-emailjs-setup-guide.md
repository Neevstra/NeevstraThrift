# Contact Form EmailJS Setup Guide

This guide will help you set up EmailJS for the contact us form functionality on your Neevstra website.

## 📋 Overview

The contact form system includes:
- **Admin Contact Template** (`admin-contact-template.html`) - Receives customer queries/complaints
- **Customer Confirmation Template** (`customer-contact-confirmation-template.html`) - Confirms query was sent
- **Configuration File** (`contact-email-config.js`) - EmailJS settings and functions

## 🚀 Step-by-Step Setup

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Add Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. **Note down your Service ID** (e.g., `service_contact_abc123`)

### Step 3: Create Email Templates

#### Admin Contact Template
1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. Template Name: `Admin Contact Notification`
4. Template ID: `template_admin_contact` (or your preferred ID)
5. Copy the content from `admin-contact-template.html`
6. Paste it in the **Content** section
7. Set **Subject**: `🚨 New Contact Message - {{subject}} from {{customer_name}}`
8. Set **To Email**: `support@neevstra.com` (your admin email)
9. Save the template

#### Customer Confirmation Template
1. Create another new template
2. Template Name: `Customer Contact Confirmation`
3. Template ID: `template_customer_contact_confirmation`
4. Copy the content from `customer-contact-confirmation-template.html`
5. Paste it in the **Content** section
6. Set **Subject**: `Message Received - We'll Get Back to You Soon! - Neevstra`
7. Set **To Email**: `{{customer_email}}`
8. Save the template

### Step 4: Get Your Public Key
1. Go to **Account** > **General**
2. Find your **Public Key**
3. Copy it (e.g., `your_public_key_here`)

### Step 5: Update Configuration
1. Open `contact-email-config.js`
2. Replace the placeholder values:
   ```javascript
   const CONTACT_EMAIL_CONFIG = {
       serviceId: 'your_actual_service_id', // From Step 2
       adminContactTemplateId: 'template_admin_contact', // From Step 3
       customerContactConfirmationTemplateId: 'template_customer_contact_confirmation', // From Step 3
       adminEmail: 'support@neevstra.com' // Your admin email
   };
   
   const CONTACT_EMAILJS_PUBLIC_KEY = 'your_actual_public_key'; // From Step 4
   ```

### Step 6: Add EmailJS to Contact Pages
The EmailJS integration has been added to both:
- `contact-us.html` (dedicated contact page)
- `index.html` (home page contact form)

Both pages include:
   ```html
   <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
   <script src="contact-email-config.js"></script>
   ```

3. Add the contact form submission script:
   ```html
   <script>
   document.getElementById('contactForm').addEventListener('submit', async function(e) {
       e.preventDefault();
       
       const submitBtn = document.querySelector('.submit-btn');
       const originalText = submitBtn.textContent;
       
       // Show loading state
       submitBtn.textContent = 'Sending...';
       submitBtn.disabled = true;
       
       // Get form data
       const formData = {
           name: document.getElementById('name').value,
           email: document.getElementById('email').value,
           subject: document.getElementById('subject').value,
           message: document.getElementById('message').value
       };
       
       try {
           const result = await submitContactForm(formData);
           
           if (result.success) {
               alert(`Thank you! Your message has been sent successfully.\nReference ID: ${result.referenceId}\n\nWe'll get back to you within 24 hours.`);
               document.getElementById('contactForm').reset();
           } else {
               alert('Sorry, there was an error sending your message. Please try again or contact us directly.');
           }
       } catch (error) {
           alert('Sorry, there was an error sending your message. Please try again or contact us directly.');
       }
       
       // Reset button
       submitBtn.textContent = originalText;
       submitBtn.disabled = false;
   });
   </script>
   ```

## 🧪 Testing

### Test the Contact Forms
1. **Test Home Page Contact Form** (`index.html`):
   - Fill out the contact form in the Contact section
   - Submit the form
   - Check that you receive both admin and customer emails

2. **Test Dedicated Contact Page** (`contact-us.html`):
   - Navigate to the contact us page
   - Fill out the detailed contact form
   - Submit the form
   - Check that you receive both admin and customer emails

3. **Verify Email Delivery**:
   - Admin notification email at neevstraa@gmail.com
   - Customer confirmation email at the test email address
   - All template variables are populated correctly
   - Reference IDs are generated properly

### Troubleshooting
- Check EmailJS dashboard for delivery status
- Verify all template IDs match your configuration
- Ensure your email service is properly connected
- Check browser console for any JavaScript errors

## 📧 Template Variables

### Admin Contact Template
- `{{customer_name}}` - Customer's name
- `{{customer_email}}` - Customer's email address
- `{{subject}}` - Subject category (Order Inquiry, Product Question, etc.)
- `{{customer_message}}` - Customer's message content
- `{{message_date}}` - Date and time the message was sent
- `{{subject_class}}` - CSS class for priority styling
- `{{subject_priority}}` - Priority level (HIGH/MEDIUM/LOW)

### Customer Confirmation Template
- `{{customer_name}}` - Customer's name
- `{{customer_email}}` - Customer's email address
- `{{subject}}` - Subject category
- `{{customer_message}}` - Customer's message content
- `{{message_date}}` - Date and time the message was sent
- `{{reference_id}}` - Unique reference ID for tracking

## 🎨 Customization

### Subject Priorities
The system automatically assigns priorities based on subject:
- **Order Inquiry** → HIGH priority
- **Return/Exchange** → HIGH priority
- **Product Question** → MEDIUM priority
- **Feedback** → LOW priority
- **Other** → MEDIUM priority

### Email Styling
Both templates use Neevstra's brand colors and styling:
- Primary: `#463f3a` (dark brown)
- Secondary: `#d3caab` (light beige)
- Success: `#28a745` (green)
- Warning: `#ffc107` (yellow)
- Danger: `#dc3545` (red)

## 📊 Monitoring

### EmailJS Dashboard
- Monitor email delivery status
- Track usage and limits
- View error logs
- Manage templates and services

### Best Practices
- Respond to HIGH priority messages within 4 hours
- Respond to all messages within 24 hours
- Use the reference ID for tracking conversations
- Keep templates updated with current contact information

## 🔒 Security Notes

- Never expose your private EmailJS keys in client-side code
- Use the public key only for client-side integration
- Regularly monitor your EmailJS usage to prevent abuse
- Consider implementing rate limiting for form submissions

## 📞 Support

If you need help with the setup:
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)

---

**Note**: Remember to test the entire flow before going live, and keep your EmailJS credentials secure!