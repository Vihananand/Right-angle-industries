'use client';

import { motion } from 'framer-motion';

export default function Maintenance() {
  const maintenanceServices = [
    {
      title: "Preventive Maintenance",
      description: "Regular scheduled maintenance to prevent equipment failures and extend machine life",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: [
        "Comprehensive system inspection",
        "Lubrication and cleaning",
        "Component wear analysis",
        "Performance optimization"
      ]
    },
    {
      title: "Emergency Repairs",
      description: "Quick response team for urgent repairs and system failures",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      features: [
        "24/7 emergency response",
        "Rapid diagnostics",
        "Immediate repairs",
        "Minimal downtime"
      ]
    },
    {
      title: "Performance Upgrades",
      description: "System upgrades and modifications to enhance machine performance",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      features: [
        "Software updates",
        "Hardware upgrades",
        "Efficiency improvements",
        "Capacity enhancement"
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
            Maintenance Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-200 text-center max-w-3xl mx-auto"
          >
            Keep your cooker-making machines running at peak performance with our comprehensive maintenance services.
          </motion.p>
        </div>
      </div>

      {/* Maintenance Services */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {maintenanceServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-blue-900/50 backdrop-blur-sm p-6 rounded-xl hover:bg-blue-900/60 transition-all duration-300"
            >
              <div className="text-blue-300 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl text-white mb-2">{service.title}</h3>
              <p className="text-blue-200 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-blue-200">
                    <svg className="w-4 h-4 mr-2 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Maintenance Plans */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 max-w-3xl mx-auto text-center bg-blue-900/50 backdrop-blur-sm rounded-xl p-8"
        >
          <h2 className="text-2xl text-white mb-6">Maintenance Plans</h2>
          <p className="text-blue-200 mb-8">
            Choose from our flexible maintenance plans designed to meet your specific needs and budget. Our plans include regular inspections, preventive maintenance, and priority support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              Request Service
            </a>
            <a 
              href="/contact" 
              className="px-8 py-3 bg-transparent border-2 border-blue-300 text-blue-300 rounded-full hover:bg-blue-300/10 transition-colors"
            >
              View Plans
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}