import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { LanguageProvider } from "./context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Free Marriage Biodata Maker | Create Bio Data for Marriage Online",
  description: "Create bio data for marriage online for free. Use Biodata Maker to make biodata for marriage and download in PDF, Word or Image format in minutes. No registration needed.",
  keywords: "marriage biodata maker, biodata for marriage, create biodata online, free biodata maker, marriage biodata format, biodata templates",
  openGraph: {
    title: "Free Marriage Biodata Maker | Create Bio Data for Marriage Online",
    description: "Create bio data for marriage online for free. Download in PDF, Word or Image format in minutes.",
    type: "website",
    locale: "en_IN",
    siteName: "Biodata Maker"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
