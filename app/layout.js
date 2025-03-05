import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Right Angle Industries - Best Cooker-Making Machines",
  description: "Get high-quality cooker-making machines from Right Angle Industries. Precision, efficiency, and durability guaranteed.",
  keywords: [
    "cooker making machines", "industrial cookers", "automatic food cookers", 
    "commercial cooking equipment", "stainless steel cookers", "food industry machines",
    "high-efficiency cookers", "precision cooker machines", "automated food processing",
    "smart cooking technology", "custom-built cooking machinery", "industrial food processors"
  ].join(", "),

  authors: [{ name: "Right Angle Industries", url: "https://rightangleindustries.com" }],
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  
  openGraph: {
    title: "Right Angle Industries - Best Cooker-Making Machines",
    description: "Empowering brands with superior cooker-making machines.",
    url: "https://rightangleindustries.com",
    siteName: "Right Angle Industries",
    images: [
      {
        url: "https://rightangleindustries.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Right Angle Industries - Cooker Making Machines",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    site: "@RightAngleInd",
    creator: "@RightAngleInd",
    title: "Right Angle Industries - Best Cooker-Making Machines",
    description: "Empowering brands with superior cooker-making machines.",
    images: ["https://rightangleindustries.com/images/twitter-image.jpg"],
  },
  
  alternates: {
    canonical: "https://rightangleindustries.com",
  },
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Right Angle Industries" />
        <meta name="copyright" content="Right Angle Industries" />
        <meta name="theme-color" content="#007bff" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        
        {/* ✅ JSON-LD Structured Data (Extended) */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Right Angle Industries",
              "url": "https://rightangleindustries.com",
              "logo": "https://rightangleindustries.com/favicon.ico",
              "sameAs": [
                "https://www.facebook.com/share/18mRSnsMv7/",
                "https://www.instagram.com/righ.tangleindia?utm_source=qr&igsh=cWdkN215dThra3dx",
                "https://youtube.com/@rightangleindustries8419?feature=shared",
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9876543210",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              },
              "description": "Leading manufacturer of high-quality industrial cooker-making machines.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "18-Industrial Area",
                "addressLocality": "PUNJAB",
                "addressRegion": "PB",
                "postalCode": "144401",
                "addressCountry": "IN"
              }
            }),
          }}
        />

        {/* ✅ FAQ Schema for better ranking in Google */}
        <Script
          id="faq-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What types of cooker-making machines do you offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We provide fully automated, semi-automatic, and industrial-grade cooker-making machines designed for efficiency and precision."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer shipping?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! We offer shipping with full technical support and training."
                  }
                }
              ]
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
