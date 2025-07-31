// EmailJS Configuration Template
// Copy this configuration and update the values in payment.html

const EMAIL_CONFIG = {
    serviceId: 'service_xxxxxxx', 
    customerTemplateId: 'template_customer_confirmation',
    adminTemplateId: 'template_admin_notification',
    adminEmail: 'your-admin-email@example.com'
};

const EMAILJS_PUBLIC_KEY = 'your_public_key_here';

emailjs.init({
    publicKey: EMAILJS_PUBLIC_KEY,
});