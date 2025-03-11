"use client";

import { motion } from "framer-motion";

export default function TermsOfService() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        "By accessing our website, you agree to these terms of service",
        "These terms may be updated without notice",
        "Continued use constitutes acceptance of changes",
        "You must be legally capable of entering into binding contracts",
      ],
    },
    {
      title: "Use of Services",
      content: [
        "Services are provided 'as is' without warranties",
        "You agree not to misuse or attempt to harm our services",
        "We reserve the right to modify or discontinue services",
        "Account credentials must be kept secure and confidential",
      ],
    },
    {
      title: "Intellectual Property",
      content: [
        "All content remains the property of Right Angle Industries",
        "No content may be used without explicit permission",
        "Trademarks and logos are protected by law",
        "You retain ownership of your submitted content",
      ],
    },
    {
      title: "Limitation of Liability",
      content: [
        "We are not liable for indirect or consequential damages",
        "Maximum liability is limited to fees paid, if any",
        "Force majeure events are excluded from liability",
        "Some jurisdictions may not allow liability limitations",
      ],
    },
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
                  Terms of Service
                  <span className="absolute -inset-1 bg-blue-400/20 blur-xl"></span>
                </h1>
                <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>
              </div>
              <p className="text-xl text-blue-200">
                Please read these terms carefully before using our services.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto space-y-16">
            {sections.map((section, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                key={index}
                className="relative"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-[2px] w-12 bg-gradient-to-r from-blue-400 to-transparent opacity-70"></div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {section.title}
                  </h2>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/[0.15] transition-all duration-300">
                  <ul className="space-y-4">
                    {section.content.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-blue-100 flex items-start gap-3"
                      >
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
