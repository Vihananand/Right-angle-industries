import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Right Angle Industries - Best Cooker-Making Machines",
  description: "Get high-quality cooker-making machines from Right Angle Industries. Precision, efficiency, and durability guaranteed.",
  keywords: "cooker, cooker making machines, industrial cookers, manufacturing equipment, automatic cooker machines, commercial cooker machines, industrial pressure cookers, stainless steel cookers, large-scale cooking equipment, food processing machinery, industrial kitchen equipment, automatic food cookers, heavy-duty cookers, industrial boiler cookers, steam cookers, professional kitchen appliances, industrial food machinery, high-capacity cookers, commercial kitchen machines, industrial cooking solutions, automated cooking systems, precision cooker machines, food production equipment, large-volume cookers, heavy-duty industrial cookers, high-efficiency cookers, industrial food preparation machines, smart cooking technology, restaurant cooking equipment, food-grade cookers, industrial-grade cookers, advanced cooking solutions, energy-efficient cooking machines, pressure cooking systems, electric industrial cookers, gas-powered cooking machines, industrial soup cookers, batch cooking machines, food industry cookers, high-speed cooking equipment, industrial food processors, automatic pressure cookers, commercial catering equipment, heavy-duty steamers, custom-built cooking machinery, industrial sauce cookers, high-performance food machines, hygienic cooking systems, industrial-grade pressure cookers, automated kitchen equipment, large-scale meal prep systems, durable commercial cookers.",
  authors: [{ name: "Right Angle Industries", url: "https://rightangleindustries.com" }],
  robots: "index, follow",
  openGraph: {
    title: "Right Angle Industries - Best Cooker-Making Machines",
    description: "Empowering brands with superior cooker-making machines.",
    url: "https://rightangleindustries.com",
    siteName: "Right Angle Industries",
    images: [
      {
        url: "/favicon.ico",
        width: 800,
        height: 600,
        alt: "Right Angle Industries",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Right Angle Industries - Best Cooker-Making Machines",
    description: "Empowering brands with superior cooker-making machines.",
    images: ["/favicon.ico"],
  },
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script
          id="script"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Right Angle Industries",
              "url": "https://rightangleindustries.com",
              "logo": "https://rightangleindustries.com/favicon.ico",
              "description": "Empowering brands with superior cooker-making machines.",
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
