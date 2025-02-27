"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AddressSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <motion.div
      initial={isMobile ? { opacity: 0 } : undefined}
      animate={isMobile ? { opacity: 1 } : undefined}
      transition={isMobile ? { duration: 1.2 } : undefined}
      className="flex flex-col-reverse md:flex-row items-center justify-center w-full min-h-[50vh] md:min-h-screen gap-8"
    >
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={!isMobile ? { opacity: 1, x: 0 } : undefined}
        animate={isMobile ? { opacity: 1, x: 0 } : undefined}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full md:w-1/2 flex flex-col justify-center items-center text-center px-4 sm:px-6"
      >
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold">
          Want to meet us
        </h1>
        <p className="text-white text-lg sm:text-xl lg:text-2xl mt-4 max-w-md">
          Our Address is 18-Industrial Area, Phagwara - 144 401, Punjab-India
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={!isMobile ? { opacity: 1, scale: 1 } : undefined}
        animate={isMobile ? { opacity: 1, scale: 1 } : undefined}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full md:w-1/2"
      >
        <iframe
          className="w-full aspect-video rounded-2xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.607866676763!2d75.76681761148818!3d31.20388437425345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391af4d1a918a90b%3A0x24c3e76061bcfd2e!2sRight%20Angle%20Industries!5e0!3m2!1sen!2sin!4v1740679558119!5m2!1sen!2sin"
          allowFullScreen
        ></iframe>
      </motion.div>
    </motion.div>
  );
}
