'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="border-b border-blue-800"
      initial={false}
    >
      <button
        className="w-full py-4 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg text-white">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-blue-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="overflow-hidden"
      >
        <p className="pb-4 text-blue-200">{answer}</p>
      </motion.div>
    </motion.div>
  );
};

export default function FAQ() {
  const faqs = [
    {
      question: "What types of cooker-making machines do you offer?",
      answer: "We offer a comprehensive range of cooker-making machines including fully automated lines, semi-automatic systems, and specialized equipment for different cooker components. Our machines are designed for various production scales and can be customized to meet specific requirements."
    },
    {
      question: "How long is the warranty period for your machines?",
      answer: "Our machines come with a standard 1-year warranty covering manufacturing defects and mechanical issues. Extended warranty options are available for additional coverage."
    },
    {
      question: "Do you provide installation services?",
      answer: "Yes, we provide complete installation services including setup, calibration, and initial training for your staff. Our expert technicians ensure your machine is properly installed and operating at optimal efficiency."
    },
    {
      question: "What kind of after-sales support do you offer?",
      answer: "We offer comprehensive after-sales support including 24/7 technical assistance, regular maintenance services, spare parts supply, and troubleshooting guidance. Our support team is always ready to help you maintain optimal machine performance."
    },
    {
      question: "Can your machines be customized for specific requirements?",
      answer: "Yes, we offer customization options to meet specific production needs, space constraints, and output requirements. Our engineering team works closely with clients to develop tailored solutions."
    },
    {
      question: "What is the typical delivery and installation timeline?",
      answer: "Standard delivery time is 4-6 weeks from order confirmation. Installation typically takes 2-3 days, depending on the complexity of the setup and specific requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900">
      {/* Header Section */}
      <div className="relative py-16 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl text-white text-center font-bold mb-6 mt-12"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-200 text-center max-w-3xl mx-auto"
          >
            Find answers to common questions about our cooker-making machines, services, and support.
          </motion.p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto bg-blue-900/50 backdrop-blur-sm rounded-xl p-6 shadow-xl">
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </motion.div>
        </div>

        {/* Contact Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-blue-200 mb-4">
            Can&apos;t find what you&apos;re looking for?
          </p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            Contact Our Support Team
          </a>
        </motion.div>
      </div>
    </div>
  );
}