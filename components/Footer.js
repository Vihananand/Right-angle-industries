import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const sections = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/Vision" },
      { name: "Directors", href: "/Directors" },
      { name: "Clients", href: "/Clients" },
      { name: "Contact", href: "/Contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { name: "All Products", href: "/Gallery" },
      { name: "Cooker Machines", href: "/Gallery?category=cooker" },
      { name: "Spare Parts", href: "/Gallery?category=parts" },
      { name: "Custom Solutions", href: "/Contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "FAQ", href: "/faq" },
      { name: "Support", href: "/support" },
      { name: "Maintenance", href: "/maintenance" },
      { name: "Installation", href: "/installation" },
    ],
  },
];

const contactInfo = [
  { 
    icon: <FaMapMarkerAlt className="text-blue-400" />, 
    text: "18-Industrial Area, Phagwara - 144 401, Punjab-India",
    href: "https://maps.google.com/?q=18-Industrial+Area,+Phagwara,+Punjab,+India"
  },
  { 
    icon: <FaPhone className="text-blue-400" />, 
    text: "+91 84272-29890",
    href: "tel:+918427229890"
  },
  { 
    icon: <FaEnvelope className="text-blue-400" />, 
    text: "info@rightangleindustries.com",
    href: "mailto:info@rightangleindustries.com"
  },
];

const socialLinks = [
  { 
    icon: <FaFacebook size={20} />, 
    href: "https://www.facebook.com/share/18mRSnsMv7/",
    label: "Facebook"
  },
  { 
    icon: <FaInstagram size={20} />, 
    href: "https://www.instagram.com/right_angle_industries?igsh=cWdkN215dThra3dx",
    label: "Instagram"
  },
  { 
    icon: <FaYoutube size={20} />, 
    href: "https://youtube.com/@rightangleindustries8419?feature=shared",
    label: "YouTube"
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center mb-6">
              <Image
                width={40}
                height={40}
                src="/logo.svg"
                className="h-10 w-10 mr-3"
                alt="Right Angle Industries Logo"
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white">
                  Right Angle
                </span>
                <span className="text-xs text-blue-300">
                  Industries
                </span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 pr-4">
              Empowering brands with superior pressure cooker-making machines that combine precision, efficiency, and durability.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 hover:bg-blue-700 text-white p-2 rounded-full transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-white mb-6 border-b border-gray-700 pb-2">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center"
                    >
                      <span className="mr-2">›</span> {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-12 border-t border-gray-800 pt-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((item, index) => (
              <a 
                key={index} 
                href={item.href}
                className="flex items-start space-x-3 text-gray-400 hover:text-blue-400 transition-colors duration-300"
                target={item.href.startsWith('http') ? "_blank" : undefined}
                rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
              >
                <span className="mt-1">{item.icon}</span>
                <span>{item.text}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-950 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Right Angle Industries. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-blue-400 text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-500 hover:text-blue-400 text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
