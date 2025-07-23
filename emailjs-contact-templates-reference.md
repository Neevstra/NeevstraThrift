# EmailJS Contact Templates Reference Card

## 📧 Quick Setup Summary

### Files Created:
1. `admin-query-template.html` - Admin query notification template
2. `customer-query-confirmation-template.html` - Customer query confirmation template  
3. `contact-email-config.js` - Configuration and functions
4. `QUERY-TEMPLATES-SETUP.md` - Quick setup guide

### EmailJS Template Setup:

#### Template 1: Admin Query Notification
- **Template Name**: `Admin Query Notification`
- **Template ID**: `admin_query`
- **Subject**: `🚨 New Query - {{subject}} from {{customer_name}}`
- **To Email**: `neevstraa@gmail.com`
- **Content**: Copy from `admin-query-template.html`

#### Template 2: Customer Query Confirmation  
- **Template Name**: `Customer Query Confirmation`
- **Template ID**: `query_confirm`
- **Subject**: `Query Received - We'll Respond Soon! - Neevstra`
- **To Email**: `{{customer_email}}`
- **Content**: Copy from `customer-query-confirmation-template.html`

## 🔧 Configuration Variables

✅ **CONFIGURED** in `contact-email-config.js`:

```javascript
const CONTACT_EMAIL_CONFIG = {
    serviceId: 'service_gipco2u',                   // ✅ Your EmailJS service ID
    adminQueryTemplateId: 'admin_query',           // ✅ Short template ID
    customerQueryConfirmationTemplateId: 'query_confirm', // ✅ Short template ID
    adminEmail: 'neevstraa@gmail.com'              // ✅ Your admin email
};

const CONTACT_EMAILJS_PUBLIC_KEY = '8uYdjvQ5qh_BTvZt6';  // ✅ Your public key
```

## 📝 Template Variables

### Admin Template Variables:
```
{{customer_name}} - Customer's name
{{customer_email}} - Customer's email
{{subject}} - Subject category
{{customer_message}} - Message content
{{message_date}} - Date/time sent
{{subject_class}} - CSS class for styling
{{subject_priority}} - Priority level
```

### Customer Template Variables:
```
{{customer_name}} - Customer's name
{{customer_email}} - Customer's email
{{subject}} - Subject category
{{customer_message}} - Message content
{{message_date}} - Date/time sent
{{reference_id}} - Unique tracking ID
```

## 🎯 Subject Categories & Priorities

| Subject | Priority | CSS Class |
|---------|----------|-----------|
| Order Inquiry | HIGH | order |
| Return/Exchange | HIGH | return |
| Product Question | MEDIUM | product |
| Feedback | LOW | feedback |
| Other | MEDIUM | other |

## ✅ Testing Checklist

- [ ] EmailJS account created
- [ ] Email service connected (service_gipco2u)
- [ ] Admin template created with ID: `admin_query`
- [ ] Customer template created with ID: `query_confirm`
- [x] Configuration file updated with real values
- [ ] Test home page contact form (index.html)
- [ ] Test dedicated contact page form (contact-us.html)
- [ ] Admin receives notification email at neevstraa@gmail.com
- [ ] Customer receives confirmation email
- [ ] All template variables populate correctly
- [ ] Reference IDs are generated properly

## 🚨 Important Notes

- Keep your EmailJS public key secure
- Test thoroughly before going live
- Monitor EmailJS dashboard for delivery status
- Respond to HIGH priority messages within 4 hours
- All messages should be responded to within 24 hours

## 📞 Support Contacts

- **EmailJS Documentation**: https://www.emailjs.com/docs/
- **EmailJS Support**: https://www.emailjs.com/support/
- **Template Issues**: Check browser console for errors