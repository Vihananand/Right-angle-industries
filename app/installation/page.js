'use client';

import { motion } from 'framer-motion';

export default function Installation() {
  const installationSteps = [
    {
      step: "1",
      title: "Site Assessment",
      description: "Our team evaluates your facility to ensure optimal machine placement and infrastructure requirements",
      details: [
        "Space requirements analysis",
        "Power supply assessment",
        "Ventilation requirements",
        "Safety considerations"
      ]
    },
    {
      step: "2",
      title: "Pre-Installation Setup",
      description: "Preparation of the installation site according to machine specifications",
      details: [
        "Foundation preparation",
        "Utility connections",
        "Safety equipment setup",
        "Material handling systems"
      ]
    },
    {
      step: "3",
      title: "Machine Installation",
      description: "Professional installation of your cooker-making machine by certified technicians",
      details: [
        "Equipment positioning",
        "Component assembly",
        "System integration",
        "Initial calibration"
      ]
    },
    {
      step: "4",
      title: "Testing & Commissioning",
      description: "Comprehensive testing to ensure optimal performance",
      details: [
        "Performance testing",
        "Safety checks",
        "Quality control",
        "Production trials"
      ]
    },
    {
      step: "5",
      title: "Training & Handover",
      description: "Complete training for your staff and final handover of the machine",
      details: [
        "Operator training",
        "Maintenance procedures",
        "Safety protocols",
        "Documentation handover"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900">
      {/* Header Section */}
      <div className="relative py-16 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
        <div className="container mx-auto px-4 relative z-10 mt-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl text-white text-center font-bold mb-6"
          >
            Installation Process
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-200 text-center max-w-3xl mx-auto"
          >
            Professional installation services to ensure your cooker-making machines are set up for optimal performance.
          </motion.p>
        </div>
      </div>

      {/* Installation Steps */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {installationSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative mb-12 last:mb-0"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Step Number */}
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {step.step}
                </div>
                
                {/* Content */}
                <div className="flex-grow bg-blue-900/50 backdrop-blur-sm p-6 rounded-xl">
                  <h3 className="text-xl text-white mb-2">{step.title}</h3>
                  <p className="text-blue-200 mb-4">{step.description}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-blue-200">
                        <svg className="w-4 h-4 mr-2 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Connector Line */}
              {index < installationSteps.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-12 bg-blue-600/30 hidden md:block" />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 max-w-3xl mx-auto text-center bg-blue-900/50 backdrop-blur-sm rounded-xl p-8"
        >
          <h2 className="text-2xl text-white mb-6">Ready to Get Started?</h2>
          <p className="text-blue-200 mb-8">
            Contact our installation team to schedule your machine installation or request a site assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              Schedule Installation
            </a>
            <a 
              href="/contact" 
              className="px-8 py-3 bg-transparent border-2 border-blue-300 text-blue-300 rounded-full hover:bg-blue-300/10 transition-colors"
            >
              Request Site Assessment
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}