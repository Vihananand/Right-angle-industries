import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import "./styles.css";

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
};

export default function Layout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#1E3A8A" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* ✅ JSON-LD Structured Data (Extended) */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Right Angle Industries",
                "url": "https://rightangleindustries.com",
                "logo": "https://rightangleindustries.com/logo.svg",
                "description": "Manufacturer of high-quality cooker-making machines with precision, efficiency, and durability.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "18-Industrial Area",
                  "addressLocality": "Phagwara",
                  "addressRegion": "Punjab",
                  "postalCode": "144401",
                  "addressCountry": "IN"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-84272-29890",
                  "contactType": "customer service"
                },
                "sameAs": [
                  "https://www.facebook.com/share/18mRSnsMv7/",
                  "https://www.instagram.com/right_angle_industries?igsh=cWdkN215dThra3dx",
                  "https://youtube.com/@rightangleindustries8419?feature=shared"
                ]
              }
            `,
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
      <body className="min-h-screen flex flex-col bg-slate-50">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        
        {/* Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
