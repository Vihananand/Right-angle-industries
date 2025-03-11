"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Directors() {
  const leaders = [
    {
      name: "S. Ajit Singh Bhamra",
      role: "Founder",
      year: "Since 1995",
      image: "/ajitsingh.jpg",
      quote: "When I founded Right Angle Industries, I didn't just set out to build machines—I set out to build reliability, efficiency, and progress. I saw an industry that needed precision, automation, and durability, and I knew we could make a difference. From high-performance pressure cooker-making machines to top-tier textile machinery components, our goal has always been the same: to empower manufacturers with cutting-edge technology that doesn't just meet standards but sets them."
    },
    {
      name: "S. Manpreet Singh Bhamra",
      role: "Managing Director",
      year: "Since 2010",
      image: "/manpreet.jpg",
      quote: "Our father built Right Angle Industries with a vision—to revolutionize the manufacturing of pressure cooker-making machines and textile machinery components with precision, automation, and durability. He believed that industries thrive on innovation, and we are here to carry that vision forward. Today, we continue to push the boundaries of technology, ensuring that every machine we produce upholds the legacy of excellence he started."
    },
    {
      name: "S. Kulvir Singh Bhamra",
      role: "Managing Director",
      year: "Since 2010",
      image: "/kulveer.jpg",
      quote: "For us, this isn't just a business; it's a responsibility. Our father laid the foundation with hard work and innovation, and it's our duty to take it to new heights. We are committed to advancing automation, improving efficiency, and delivering world-class machinery that empowers manufacturers worldwide. Right Angle Industries isn't just our family's legacy—it's a name that stands for trust, quality, and progress."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />

      <div className="relative">
        {/* Hero Section */}
        <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-blue-900/50 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-4 mt-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Legacy
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Meet the visionaries who have shaped Right Angle Industries into a leader in manufacturing excellence
            </p>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-blue-400/20" />

            {/* Leaders Cards */}
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative mb-32 last:mb-0 ${
                  index % 2 === 0 ? "md:pr-[50%]" : "md:pl-[50%] md:text-right"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
                </div>

                {/* Content Card */}
                <div className={`relative mt-20 ${
                  index % 2 === 0 ? "md:mr-16" : "md:ml-16"
                }`}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden hover:bg-white/[0.15] transition-all duration-300 group">
                    <div className="grid md:grid-cols-2 gap-8 p-8">
                      {/* Image Section */}
                      <div className={`relative h-[400px] rounded-2xl overflow-hidden ${
                        index % 2 === 1 ? "md:order-2" : ""
                      }`}>
                        <Image
                          src={leader.image}
                          alt={leader.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>

                      {/* Text Content */}
                      <div className={`flex flex-col justify-center ${
                        index % 2 === 1 ? "md:order-1 md:text-right" : ""
                      }`}>
                        <h2 className="text-3xl font-bold text-white mb-3">
                          {leader.name}
                        </h2>
                        <h3 className="text-xl text-blue-300 mb-6">{leader.role}</h3>
                        <p className="text-gray-300 leading-relaxed italic">
                          {leader.quote}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
