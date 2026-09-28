import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Free Marriage Biodata Maker | Create Bio Data for Marriage Online",
  description: "Create bio data for marriage online for free. Use Biodata Maker to make biodata for marriage and download in PDF, Word or Image format in minutes. No registration needed.",
  keywords: "marriage biodata maker, biodata for marriage, create biodata online, free biodata maker, marriage biodata format, biodata templates, marriage biodata pdf, biodata maker free download, shaadi biodata, biodata format for marriage",
  openGraph: {
    title: "Free Marriage Biodata Maker | Create Bio Data for Marriage Online",
    description: "Create bio data for marriage online for free. Download in PDF, Word or Image format in minutes.",
    type: "website",
    locale: "en_IN",
    siteName: "Biodata Maker"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Marriage Biodata Maker | Create Bio Data for Marriage Online",
    description: "Create stunning marriage biodata in minutes. Free templates, instant PDF download.",
  },
  alternates: {
    canonical: "https://biodatamaker.com",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "name": "Biodata Maker",
      "url": "https://biodatamaker.com",
      "description": "Create beautiful marriage biodata online for free. Download in PDF, PNG, or JPG format instantly.",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "0",
        "highPrice": "99",
        "priceCurrency": "INR",
        "offerCount": "15"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "2847",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "Organization",
      "name": "Biodata Maker",
      "url": "https://biodatamaker.com",
      "logo": "https://biodatamaker.com/favicon.ico",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "support@biodatamaker.app",
        "contactType": "customer support"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://biodatamaker.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Templates",
          "item": "https://biodatamaker.com/templates"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Create Biodata",
          "item": "https://biodatamaker.com/create"
        }
      ]
    }
  ]
};

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Google Analytics 4 */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_title: document.title,
                  send_page_view: true,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <Header/>
          {children}
          <Footer/>
        </LanguageProvider>
      </body>
    </html>
  );
}