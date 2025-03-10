"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
      
      <div className="relative pt-36 pb-12">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
            {/* Left Side - Vision and Mission Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex"
            >
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h2 className="text-white text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                      Vision and Mission
                    </h2>
                    <p className="text-gray-300 text-base font-normal leading-relaxed lg:text-start text-center">
                      We envision a future where precision engineering and
                      innovation redefine the pressure cooker industry. Our
                      mission is to design and manufacture state-of-the-art
                      pressure cooker machines that empower pressure cooker
                      manufacturers with efficiency, consistency, and reliability.
                      By integrating cutting-edge technology, automation, and
                      sustainable manufacturing practices, we aim to revolutionize
                      the way pressure cookers are produced—ensuring safety,
                      durability, and performance in every unit. Our commitment to
                      quality and continuous improvement drives us to be the most
                      trusted partner for pressure cooker manufacturers worldwide.
                    </p>
                  </div>
                </div>

                {/* Stats Section */}
                <div className="w-full flex-col justify-center items-start gap-6 flex">
                  <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    {[
                      {
                        title: "15+ Years",
                        desc: "Innovating Precision Engineering in Manufacturing.",
                      },
                      {
                        title: "5+ Clients",
                        desc: "Trusted by Leading Pressure Cooker Brands Worldwide.",
                      },
                      {
                        title: "3+ Awards",
                        desc: "Recognized for Excellence in Manufacturing & Innovation.",
                      },
                      {
                        title: "Happy Clients",
                        desc: "Delivering Reliable & High-Performance Machinery.",
                      },
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.1, delay: index * 0.2 }}
                        className="w-full h-full p-3.5 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/[0.15] transition-all duration-300 flex-col justify-start items-start gap-2.5 inline-flex"
                      >
                        <h4 className="text-white text-2xl font-bold font-manrope leading-9">
                          {stat.title}
                        </h4>
                        <p className="text-gray-300 text-base font-normal leading-relaxed">
                          {stat.desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-full lg:justify-start justify-center items-start flex"
            >
              <div className="sm:w-[564px] w-full sm:h-[646px] h-full relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Image
                  height={400}
                  width={800}
                  className="w-full h-full rounded-3xl object-cover"
                  src="/vision.jpg"
                  alt="VisionImage"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
