"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900">
      {/* Hero Section */}
      <div className="relative py-24">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
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
      <div className="sm:bg-gradient-to-b from-gray-900/80 to-blue-900/80 backdrop-blur-sm border-t border-b border-blue-800/20 sm:max-w-xl sm:mx-auto sm:rounded-full w-full">
        <div className="mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-4 py-4">
            {clients.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-3 text-lg font-medium rounded-full transition-all duration-300 ${
                  activeCategory === index 
                    ? "bg-blue-600/90 text-white shadow-lg scale-105" 
                    : "text-blue-200 hover:bg-blue-800/30 hover:text-white"
                }`}
              >
                <span className="flex items-center gap-2">
                  {category.category === "Pressure Cooker Industry" ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  )}
                  {category.category}
                </span>
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
            <h2 className="text-3xl font-bold text-white mb-4">{clients[activeCategory].category}</h2>
            <p className="text-lg text-blue-200">{clients[activeCategory].description}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients[activeCategory].clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-blue-900/50 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-blue-900/60 transition-all duration-300"
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
                  <h3 className="text-xl font-bold text-white mb-2">{client.name}</h3>
                  <p className="text-blue-200 mb-4">{client.description}</p>
                  <p className="text-sm text-blue-300 font-medium">{client.since}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-70"></div>
              <h2 className="text-3xl font-bold text-white">What Our Clients Say</h2>
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-70"></div>
            </div>
            <p className="text-lg text-blue-200">Hear from the companies that rely on our machinery and components</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gray-500/50 backdrop-blur-sm p-8 rounded-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-900/70 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Quality and Reliability</h3>
                  <p className="text-blue-200">Hawkins Pressure Cookers</p>
                </div>
              </div>
              <blockquote className="text-lg text-blue-200 italic">
                &quot;Right Angle Industries has been our trusted partner for over a decade. Their machinery has significantly improved our production efficiency while maintaining the high quality standards our customers expect. Their technical support and after-sales service are exceptional.&quot;
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
