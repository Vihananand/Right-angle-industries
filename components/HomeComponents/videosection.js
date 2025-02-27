"use client";

import { motion } from "framer-motion";

export default function VideoSection() {
  return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex flex-col md:flex-row items-center justify-center w-full min-h-[50vh] md:min-h-screen gap-8"
      >
        <motion.video
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full md:w-1/2 rounded-2xl"
          autoPlay
          muted
          loop
        >
          <source src="Video/main.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full md:w-1/2 flex flex-col justify-center items-center text-center px-4 sm:px-6"
        >
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Right Angle Industries
          </h1>
          <p className="text-white text-lg sm:text-xl lg:text-2xl mt-4 max-w-md">
            Empowering Brands with Superior Cooker-Making Machines.
          </p>
        </motion.div>
      </motion.div>
  );
}
