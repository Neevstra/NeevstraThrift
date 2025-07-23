// Contact Form EmailJS Configuration
// This configuration is specifically for the contact us form functionality

// Step 1: EmailJS credentials for contact form - CONFIGURED
const CONTACT_EMAIL_CONFIG = {
    // Your EmailJS Service ID
    serviceId: 'service_gipco2u', 
    
    // Create these templates in EmailJS Dashboard > Email Templates
    // Use the HTML templates: admin-query-template.html and customer-query-confirmation-template.html
    adminQueryTemplateId: 'admin_query',
    customerQueryConfirmationTemplateId: 'query_confirm',
    
    // Your admin/support email address
    adminEmail: 'neevstraa@gmail.com'
};

// Step 2: Your EmailJS Public Key - CONFIGURED
const CONTACT_EMAILJS_PUBLIC_KEY = '8uYdjvQ5qh_BTvZt6';

// Step 3: Initialize EmailJS for contact form (integrated in index.html)
emailjs.init({
    publicKey: CONTACT_EMAILJS_PUBLIC_KEY,
});

// Template variables for contact form emails:
const contactTemplateData = {
    // For both admin and customer templates
    customer_name: "John Doe",
    customer_email: "john@example.com",
    subject: "Order Inquiry", // Options: "Order Inquiry", "Product Question", "Return/Exchange", "Feedback", "Other"
    customer_message: "I have a question about my recent order...",
    message_date: "January 15, 2025 at 2:30 PM IST",
    
    // For admin template only
    subject_class: "order", // Used for styling priority badges (order, product, return, feedback, other)
    subject_priority: "HIGH", // HIGH, MEDIUM, LOW based on subject type
    
    // For customer confirmation template only
    reference_id: "CNT20250115001", // Auto-generated reference ID
    
    // Admin email for notifications
    admin_email: "support@neevstra.com"
};

// Subject priority mapping for admin notifications
const subjectPriorityMap = {
    "order": { priority: "HIGH", class: "order" },
    "return": { priority: "HIGH", class: "return" },
    "product": { priority: "MEDIUM", class: "product" },
    "feedback": { priority: "LOW", class: "feedback" },
    "other": { priority: "MEDIUM", class: "other" }
};

// Function to generate reference ID
function generateReferenceId() {
    const now = new Date();
    const dateStr = now.getFullYear().toString() + 
                   (now.getMonth() + 1).toString().padStart(2, '0') + 
                   now.getDate().toString().padStart(2, '0');
    const timeStr = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `CNT${dateStr}${timeStr}`;
}

// Function to format date for emails
function formatMessageDate() {
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Kolkata',
        timeZoneName: 'short'
    };
    return now.toLocaleDateString('en-IN', options);
}

// Example contact form submission function
async function submitContactForm(formData) {
    try {
        const referenceId = generateReferenceId();
        const messageDate = formatMessageDate();
        const subjectInfo = subjectPriorityMap[formData.subject] || subjectPriorityMap["other"];
        
        // Prepare template data for admin notification
        const adminTemplateData = {
            customer_name: formData.name,
            customer_email: formData.email,
            subject: formData.subject,
            customer_message: formData.message,
            message_date: messageDate,
            subject_class: subjectInfo.class,
            subject_priority: subjectInfo.priority,
            admin_email: CONTACT_EMAIL_CONFIG.adminEmail
        };
        
        // Prepare template data for customer confirmation
        const customerTemplateData = {
            customer_name: formData.name,
            customer_email: formData.email,
            subject: formData.subject,
            customer_message: formData.message,
            message_date: messageDate,
            reference_id: referenceId
        };
        
        // Send admin notification
        await emailjs.send(
            CONTACT_EMAIL_CONFIG.serviceId,
            CONTACT_EMAIL_CONFIG.adminQueryTemplateId,
            adminTemplateData
        );
        
        // Send customer confirmation
        await emailjs.send(
            CONTACT_EMAIL_CONFIG.serviceId,
            CONTACT_EMAIL_CONFIG.customerQueryConfirmationTemplateId,
            customerTemplateData
        );
        
        return { success: true, referenceId: referenceId };
        
    } catch (error) {
        console.error('Error sending contact form emails:', error);
        return { success: false, error: error.message };
    }
}

// Quick Setup Checklist for Query/Contact Form:
// □ 1. Create EmailJS account at https://www.emailjs.com/
// □ 2. Add email service (Gmail, Outlook, etc.)
// □ 3. Create admin query template using admin-query-template.html with ID: admin_query
// □ 4. Create customer confirmation template using customer-query-confirmation-template.html with ID: query_confirm
// □ 5. Get your Service ID and Template IDs
// □ 6. Get your Public Key
// □ 7. Update CONTACT_EMAIL_CONFIG with your actual values (DONE)
// □ 8. Update emailjs.init() with your public key (DONE)
// □ 9. Test contact form on index.html homepage
// □ 10. Check EmailJS dashboard for delivery status

// Template Variables Reference:
// 
// Admin Query Template Variables (admin_query):
// - {{customer_name}} - Customer's name
// - {{customer_email}} - Customer's email
// - {{subject}} - Subject category
// - {{customer_message}} - Customer's message
// - {{message_date}} - Date and time message was sent
// - {{subject_class}} - CSS class for priority styling
// - {{subject_priority}} - Priority level (HIGH/MEDIUM/LOW)
// 
// Customer Query Confirmation Template Variables (query_confirm):
// - {{customer_name}} - Customer's name
// - {{customer_email}} - Customer's email
// - {{subject}} - Subject category
// - {{customer_message}} - Customer's message
// - {{message_date}} - Date and time message was sent
// - {{reference_id}} - Unique reference ID for the inquiry