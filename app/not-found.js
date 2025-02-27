"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1E3A8A] via-[#1E3A8A]/60 to-[#1E3A8A] text-white px-4">
      
      {/* Animated 404 Text */}
      <motion.h1 
        className="text-9xl font-extrabold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        404
      </motion.h1>

      {/* Not Found Text */}
      <motion.p 
        className="text-2xl sm:text-3xl font-semibold mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
      >
        Oops! Page Not Found
      </motion.p>

      {/* Back Home Button */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
      >
        <Link href="/">
          <button className="mt-6 px-6 py-3 bg-white text-[#1E3A8A] font-bold rounded-lg shadow-md transition-transform hover:scale-105 hover:bg-gray-200">
            Home
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
