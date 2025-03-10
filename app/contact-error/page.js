"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactError() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 flex items-center justify-center px-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-3xl w-full">
        {/* Error Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 1
          }}
          className="w-24 h-24 mx-auto mb-8 bg-red-500/10 rounded-full flex items-center justify-center"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </motion.svg>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Oops! Something Went Wrong
          </h1>
          <p className="text-xl text-blue-200 mb-8">
            We couldn't send your message at this time. Please try again or use alternative contact methods.
          </p>

          {/* Troubleshooting Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-12 text-left"
          >
            <h2 className="text-xl font-semibold text-white mb-4">Try These Solutions:</h2>
            <ul className="text-gray-300 space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Check your internet connection
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Ensure all required fields are filled correctly
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Try refreshing the page
              </li>
            </ul>
          </motion.div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/Contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-blue-900 rounded-full font-medium hover:bg-blue-50 transition-colors shadow-lg"
              >
                Try Again
              </motion.button>
            </Link>
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                Back to Home
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Alternative Contact Methods */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400">
            Alternatively, you can reach us at:
          </p>
          <p className="text-blue-300 mt-2">
            Email: info@rightangleindustries.com
          </p>
          <p className="text-blue-300">
            Phone: +91 XXX XXX XXXX
          </p>
        </motion.div>
      </div>
    </div>
  );
} 