// COPY THIS FILE TO: contact-email-config.js
// THEN UPDATE WITH YOUR ACTUAL EMAILJS CREDENTIALS

const CONTACT_EMAIL_CONFIG = {
    serviceId: 'service_YOUR_SERVICE_ID', 
    adminQueryTemplateId: 'admin_query',
    customerQueryConfirmationTemplateId: 'query_confirm',
    adminEmail: 'your-email@example.com'
};

const CONTACT_EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY_HERE';

emailjs.init({
    publicKey: CONTACT_EMAILJS_PUBLIC_KEY,
});