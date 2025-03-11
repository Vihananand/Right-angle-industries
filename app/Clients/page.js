"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Client data with more details
const clients = [
  {
    category: "Pressure Cooker Industry",
    description: "Leading manufacturers in the pressure cooker industry who trust our machinery and components.",
    clients: [
      { 
        name: "Hawkins", 
        src: "/client-1.jpg",
        description: "India's premier pressure cooker brand, known for quality and innovation.",
        since: "Partner since 2010"
      },
      { 
        name: "Pigeon", 
        src: "/client-2.jpg",
        description: "A trusted name in kitchen appliances with nationwide distribution.",
        since: "Partner since 2012"
      },
      { 
        name: "TTK (Prestige)", 
        src: "/client-3.jpg",
        description: "One of India's largest kitchen appliance manufacturers.",
        since: "Partner since 2008"
      },
    ]
  },
  {
    category: "Textile Industry",
    description: "Major players in the textile industry who rely on our precision components and machinery.",
    clients: [
      { 
        name: "Reliance Industry Pvt Ltd.", 
        src: "/client-4.jpg",
        description: "One of India's largest conglomerates with significant textile operations.",
        since: "Partner since 2015"
      },
      { 
        name: "Usha Martin", 
        src: "/client-5.jpg",
        description: "Leading manufacturer of specialty steel and wire rope products.",
        since: "Partner since 2013"
      },
      { 
        name: "JCT Textile Units", 
        src: "/client-6.jpg",
        description: "Pioneer in the Indian textile industry with state-of-the-art manufacturing facilities.",
        since: "Partner since 2011"
      },
    ]
  }
];

export default function Clients() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-900 py-24">
        <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-[1px]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mt-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Trusted Clients</h1>
            <p className="text-xl text-blue-200 mb-8">
              We&apos;re proud to partner with industry leaders who trust our quality and precision
            </p>
          </motion.div>
        </div>
      </div>

      {/* Client Categories Navigation */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center">
            {clients.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-4 text-lg font-medium transition-colors relative ${
                  activeCategory === index 
                    ? "text-blue-700" 
                    : "text-gray-600 hover:text-blue-700"
                }`}
              >
                {category.category}
                {activeCategory === index && (
                  <motion.div 
                    layoutId="activeCategory"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-blue-700"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Clients Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{clients[activeCategory].category}</h2>
            <p className="text-lg text-gray-600">{clients[activeCategory].description}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients[activeCategory].clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={client.src}
                    alt={client.name}
                    fill
                    className="object-cover"
                  />
                  
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{client.name}</h3>
                  <p className="text-gray-600 mb-4">{client.description}</p>
                  <p className="text-sm text-blue-700 font-medium">{client.since}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">Hear from the companies that rely on our machinery and components</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Quality and Reliability</h3>
                  <p className="text-gray-600">Hawkins Pressure Cookers</p>
                </div>
              </div>
              <blockquote className="text-lg text-gray-700 italic">
                &quot;Right Angle Industries has been our trusted partner for over a decade. Their machinery has significantly improved our production efficiency while maintaining the high quality standards our customers expect. Their technical support and after-sales service are exceptional.&quot;
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl text-white font-bold mb-6">Join Our Growing List of Satisfied Clients</h2>
            <p className="text-xl text-blue-200 mb-8">
              Contact us today to discuss how our machinery and components can enhance your manufacturing process
            </p>
            <a 
              href="/Contact" 
              className="inline-block px-8 py-3 bg-white text-blue-900 rounded-full font-medium hover:bg-blue-50 transition-colors shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
