// Public Configuration File
// This file is safe to commit to GitHub

// EmailJS Configuration - UPDATE THESE VALUES
const CONFIG = {
    // Add your actual values here when deploying
    emailjs: {
        publicKey: 'YOUR_EMAILJS_PUBLIC_KEY',
        serviceId: 'YOUR_SERVICE_ID',
        templates: {
            adminQuery: 'admin_query',
            customerConfirmation: 'query_confirm'
        }
    },
    
    // Contact information
    contact: {
        supportEmail: 'support@yourdomain.com',
        adminEmail: 'admin@yourdomain.com'
    },
    
    // Feature flags
    features: {
        emailNotifications: true,
        contactForm: true
    }
};

// Initialize EmailJS when config is loaded
if (typeof emailjs !== 'undefined' && CONFIG.emailjs.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY') {
    emailjs.init({
        publicKey: CONFIG.emailjs.publicKey,
    });
}