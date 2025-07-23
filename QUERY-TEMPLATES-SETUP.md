# 📧 Query Templates Setup Guide

## ✅ What's Ready

Your EmailJS is configured with:
- **Service ID**: `service_gipco2u`
- **Public Key**: `8uYdjvQ5qh_BTvZt6`
- **Admin Email**: `neevstraa@gmail.com`

## 📨 New Query Templates Created

### 1. Admin Query Template
- **File**: `admin-query-template.html`
- **Template ID**: `admin_query` (SHORT ID)
- **Purpose**: Receive customer queries at neevstraa@gmail.com

### 2. Customer Query Confirmation
- **File**: `customer-query-confirmation-template.html`
- **Template ID**: `query_confirm` (SHORT ID)
- **Purpose**: Send confirmation to customers

## 🚀 EmailJS Template Setup

### Step 1: Create Admin Query Template
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/admin)
2. Click **Email Templates** → **Create New Template**
3. **Template Name**: `Admin Query Notification`
4. **Template ID**: `admin_query`
5. **Subject**: `🚨 New Query - {{subject}} from {{customer_name}}`
6. **To Email**: `neevstraa@gmail.com`
7. **Content**: Copy entire content from `admin-query-template.html`
8. **Save Template**

### Step 2: Create Customer Query Confirmation
1. Create another new template
2. **Template Name**: `Customer Query Confirmation`
3. **Template ID**: `query_confirm`
4. **Subject**: `Query Received - We'll Respond Soon! - Neevstra`
5. **To Email**: `{{customer_email}}`
6. **Content**: Copy entire content from `customer-query-confirmation-template.html`
7. **Save Template**

## 🧪 Test Your Setup

### Test Home Page Form:
1. Go to your website homepage
2. Scroll to Contact section
3. Fill form and submit
4. Check neevstraa@gmail.com for admin notification
5. Check customer email for confirmation

### Test Contact Form:
1. Go to homepage and scroll to Contact section
2. Fill out the contact form and submit
3. Check both emails received

## 📋 Template Variables

### Admin Query Template (`admin_query`):
```
{{customer_name}} - Customer's name
{{customer_email}} - Customer's email
{{subject}} - Subject category
{{customer_message}} - Message content
{{message_date}} - Date/time sent
{{subject_class}} - CSS class for styling
{{subject_priority}} - Priority level
```

### Customer Query Confirmation (`query_confirm`):
```
{{customer_name}} - Customer's name
{{customer_email}} - Customer's email
{{subject}} - Subject category
{{customer_message}} - Message content
{{message_date}} - Date/time sent
{{reference_id}} - Unique tracking ID
```

## 🎯 Priority System

| Subject | Priority | Response Target |
|---------|----------|----------------|
| Order Inquiry | HIGH | 4 hours |
| Return/Exchange | HIGH | 4 hours |
| Product Question | MEDIUM | 12 hours |
| Feedback | LOW | 24 hours |
| Other | MEDIUM | 12 hours |

## ✅ Integration Status

- [x] EmailJS credentials configured
- [x] Home page contact form integrated (ONLY contact form now)
- [x] Query templates created with short IDs
- [ ] EmailJS templates created (YOU NEED TO DO THIS)
- [ ] Test forms and verify emails

## 🔧 Template IDs Summary

**Use these exact IDs in EmailJS:**
- Admin Query Template: `admin_query`
- Customer Confirmation: `query_confirm`

## 📞 What Happens When Customer Submits:

1. **Customer fills form** → Gets reference ID (e.g., CNT20250115001)
2. **Admin gets notification** → Priority-coded email to neevstraa@gmail.com
3. **Customer gets confirmation** → Professional branded email
4. **You respond** → Within target time based on priority

---

## 🚨 NEXT STEP: Create Templates in EmailJS Dashboard

**You just need to create the 2 templates in EmailJS using the HTML files provided!**

Once done, your query system will be fully operational! 🎉