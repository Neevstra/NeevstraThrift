const CONTACT_EMAIL_CONFIG = {
    serviceId: 'service_gipco2u', 
    adminQueryTemplateId: 'admin_query',
    customerQueryConfirmationTemplateId: 'query_confirm',
    adminEmail: 'neevstraa@gmail.com'
};

const CONTACT_EMAILJS_PUBLIC_KEY = '8uYdjvQ5qh_BTvZt6';

emailjs.init({
    publicKey: CONTACT_EMAILJS_PUBLIC_KEY,
});

const subjectPriorityMap = {
    "order": { priority: "HIGH", class: "order" },
    "return": { priority: "HIGH", class: "return" },
    "product": { priority: "MEDIUM", class: "product" },
    "feedback": { priority: "LOW", class: "feedback" },
    "other": { priority: "MEDIUM", class: "other" }
};

function generateReferenceId() {
    const now = new Date();
    const dateStr = now.getFullYear().toString() + 
                   (now.getMonth() + 1).toString().padStart(2, '0') + 
                   now.getDate().toString().padStart(2, '0');
    const timeStr = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `CNT${dateStr}${timeStr}`;
}

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

async function submitContactForm(formData) {
    try {
        const referenceId = generateReferenceId();
        const messageDate = formatMessageDate();
        const subjectInfo = subjectPriorityMap[formData.subject] || subjectPriorityMap["other"];
        
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
        
        const customerTemplateData = {
            customer_name: formData.name,
            customer_email: formData.email,
            subject: formData.subject,
            customer_message: formData.message,
            message_date: messageDate,
            reference_id: referenceId
        };
        
        await emailjs.send(
            CONTACT_EMAIL_CONFIG.serviceId,
            CONTACT_EMAIL_CONFIG.adminQueryTemplateId,
            adminTemplateData
        );
        
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

