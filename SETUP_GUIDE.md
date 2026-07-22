# 🚀 End-to-End Setup & Operating Guide for Marriage Bio Data Maker

This guide provides step-by-step instructions to configure, run, and deploy the **Marriage Bio Data Maker** application end-to-end.

---

## 🛠️ Tech Stack & Overview
- **Framework**: Next.js 16 (App Router with Server Actions & API Routes)
- **Styling**: Tailwind CSS v4 & Lucide Icons
- **PDF & Image Generation**: `html2canvas` & `jspdf`
- **Payments**: Razorpay Payment Gateway API
- **Database (Audit & Tracking)**: MongoDB (Official Node Driver)
- **Sharing**: WhatsApp Direct API integration (`wa.me` / `api.whatsapp.com`)

---

## 🔑 Environment Variables Setup

Create a `.env.local` file in the root directory `d:\Projects\biodata-maker\.env.local` with the following key-value pairs:

```env
# Site URL for canonical meta tags & sitemap
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Razorpay Credentials (Get from https://dashboard.razorpay.com/)
RAZORPAY_KEY_ID=rzp_test_YourKeyIdHere
RAZORPAY_KEY_SECRET=YourSecretKeyHere
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_YourKeyIdHere

# MongoDB Connection String (Atlas or Local Instance)
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxx.mongodb.net/?retryWrites=true&w0=majority
MONGODB_DB_NAME=biodata_maker
```

> 💡 **Note**: If Razorpay keys or `MONGODB_URI` are omitted during development, the application operates gracefully with automatic dev simulation fallbacks!

---

## 🏃 Running the Application Locally

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Production Build & Verification**:
   ```bash
   npm run build
   npm run start
   ```

---

## 🍃 MongoDB Setup Instructions

1. Create a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a Database named `biodata_maker`.
3. Create a Database User with read & write permissions.
4. Add `0.0.0.0/0` (or your deployment IP) to Network Access IP Access List.
5. Copy the connection string into `MONGODB_URI` in `.env.local`.

All created biodatas and payment logs are automatically stored in the `biodata_logs` collection with the following structure:
```json
{
  "name": "Rahul Sharma",
  "religion": "Hindu",
  "caste": "Brahmin",
  "templateId": 4,
  "templateName": "Royal Gold Maharani",
  "isPaid": true,
  "razorpayOrderId": "order_M123456",
  "razorpayPaymentId": "pay_P123456",
  "createdAt": "2026-07-23T00:45:00.000Z",
  "userAgent": "Mozilla/5.0..."
}
```

---

## 💳 Razorpay Webhook & Payment Flow

1. Free templates (`free: true`, IDs 1, 2, 3) trigger **direct PDF/PNG/JPG download** without requiring payment.
2. Paid templates (`free: false`, IDs 4 to 15) open the **Razorpay Checkout Modal** for payments (e.g. ₹49, ₹59, ₹69, ₹79, ₹89, ₹99).
3. Upon successful payment verification, the session unlocks high-resolution file generation.
4. After download or payment, the **WhatsApp Sharing Modal** automatically presents pre-formatted text with candidate highlights and a 1-click **Send on WhatsApp** button.

---

## 📈 SEO & Organic Traffic Features

1. **Dynamic XML Sitemap**: Available at `/sitemap.xml`. Automatically includes all templates, static pages, language hubs, and blog post URLs.
2. **Robots.txt**: Available at `/robots.txt`.
3. **Structured Data (Schema.org)**: Integrated Article JSON-LD on all blog posts (`/blog/[slug]`).
4. **Content Hub**: Located at `/blog` featuring 4 in-depth matrimony guides targeting high search keywords (*"marriage biodata format"*, *"biodata mistakes"*, *"kundali details in biodata"*).

---

## 🌐 Deploying to Production (Vercel)

1. Push your code to GitHub.
2. Import the project into [Vercel](https://vercel.com).
3. Add Environment Variables (`RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`, `NEXT_PUBLIC_RAZORPAY_KEY_ID`, `MONGODB_URI`, `NEXT_PUBLIC_SITE_URL`).
4. Click **Deploy**.
