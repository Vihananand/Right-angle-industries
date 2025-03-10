"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Import components
import ServicesSection from "../components/HomeComponents/service";
import AchievementsSection from "../components/HomeComponents/achievements";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const opacityDesktop = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  const achievementsData = [
    { 
      title: "Zed Certificate", 
      image: "/achievements-1.jpg",
      description: "Recognized for excellence in quality management and environmental standards."
    },
    { 
      title: "ISO Certificate", 
      image: "/achievements-2.jpg",
      description: "ISO 9001:2015 certified for our commitment to quality management systems."
    },
    { 
      title: "Laghu Udyog Bharati", 
      image: "/achievements-3.jpg",
      description: "Proud member of Laghu Udyog Bharati, supporting small-scale industry development."
    },
  ];

  // Features data
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
      title: "Precision Engineering",
      description: "Our machines are designed with precision in mind, ensuring consistent quality in every product."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: "Full Automation",
      description: "Reduce labor costs and increase efficiency with our fully automated manufacturing solutions."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Unmatched Durability",
      description: "Built to last with high-quality materials that withstand the demands of industrial use."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "24/7 Support",
      description: "Our dedicated team provides round-the-clock support to ensure your operations run smoothly."
    }
  ];

  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            className="object-cover w-full h-full"
          >
            <source src="/main.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-sm"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 md:pt-0">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl hero-heading leading-tight mb-6"
            >
              Revolutionizing <span className="text-blue-300">Pressure Cooker</span> Manufacturing
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl hero-text mb-8 max-w-3xl mx-auto"
            >
              At Right Angle Industries, we specialize in crafting high-quality, technologically advanced, and fully automated cooker-making machines that empower brands with precision, efficiency, and durability.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/Gallery" className="px-8 py-3 bg-white text-blue-900 rounded-full font-medium hover:bg-blue-50 transition-colors shadow-lg">
                Explore Products
              </Link>
              <Link href="/Contact" className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors">
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center"
          >
            <span className="text-white text-sm mb-2">Scroll Down</span>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl section-heading mb-4">Why Choose Our Machines?</h2>
            <p className="text-lg section-description max-w-3xl mx-auto">
              Our cooker-making machines are designed with your business needs in mind, offering unparalleled quality and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl feature-title mb-2">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl section-heading mb-4">Visit Our Facility</h2>
            <p className="text-lg section-description max-w-3xl mx-auto">
              We&apos;re located at 18-Industrial Area, Phagwara - 144 401, Punjab-India
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.607866676763!2d75.76681761148818!3d31.20388437425345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391af4d1a918a90b%3A0x24c3e76061bcfd2e!2sRight%20Angle%20Industries!5e0!3m2!1sen!2sin!4v1740679558119!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Right Angle Industries Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              <span className="inline-block relative">
                Our Achievements
                <span className="absolute -bottom-3 left-0 w-full h-1 bg-blue-600 rounded-full"></span>
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We take pride in our certifications and recognition in the industry, demonstrating our commitment to quality and excellence.
            </p>
          </div>
          <div className="max-w-7xl mx-auto">
            <AchievementsSection
              achievements={achievementsData}
              isMobile={isMobile}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white">
        <ServicesSection isMobile={isMobile} opacityDesktop={opacityDesktop} />
      </section>
    </>
  );
}
