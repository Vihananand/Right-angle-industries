"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "Personal information (name, email, phone number) when you contact us",
        "Usage data and analytics when you visit our website",
        "Technical information about your device and browsing",
        "Any information you provide through forms or inquiries"
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "To provide and maintain our services",
        "To notify you about changes to our services",
        "To provide customer support",
        "To gather analysis or valuable information to improve our services"
      ]
    },
    {
      title: "Information Security",
      content: [
        "We implement appropriate security measures",
        "Data is protected using industry-standard encryption",
        "Regular security assessments and updates",
        "Limited access to personal information by authorized personnel"
      ]
    },
    {
      title: "Third-Party Disclosure",
      content: [
        "We do not sell or trade your personal information",
        "Information may be shared with trusted service providers",
        "Disclosure may be required by law",
        "Partners are bound by confidentiality agreements"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />

      <div className="relative">
        {/* Hero Section */}
        <div className="relative py-24">
          <div className="absolute inset-0 bg-blue-900/50 backdrop-blur-sm" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center mt-12"
            >
              <div className="flex items-center justify-center gap-6 mb-6">
                <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>
                <h1 className="text-4xl md:text-5xl font-bold text-white relative">
                  Privacy Policy
                  <span className="absolute -inset-1 bg-blue-400/20 blur-xl"></span>
                </h1>
                <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>
              </div>
              <p className="text-xl text-blue-200">
                Your privacy is important to us. Learn how we collect, use, and protect your information.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto space-y-16">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-[2px] w-12 bg-gradient-to-r from-blue-400 to-transparent opacity-70"></div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">{section.title}</h2>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/[0.15] transition-all duration-300">
                  <ul className="space-y-4">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-blue-100 flex items-start gap-3">
                        <span className="mt-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_5px_#60A5FA]"></div>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}

            {/* Last Updated */}
            <motion.div
              initial={{ opacity: 1 }}
              className="text-center text-blue-200 mt-12"
            >
              Last updated: January 2024
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 