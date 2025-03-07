"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const pressureCookerClients = [
  { name: "Hawkins", src: "/client-1.jpg" },
  { name: "Pigeon", src: "/client-2.jpg" },
  { name: "TTK (Prestige)", src: "/client-3.jpg" },
];

const textileIndustryClients = [
  { name: "Reliance Industry Pvt Ltd.", src: "/client-4.jpg" },
  { name: "Usha Martin", src: "/client-5.jpg" },
  { name: "JCT Textile Units", src: "/client-6.jpg" },
];

const Clients = () => {
  return (
    <div className="bg-gradient-to-br from-[#1E3A8A] via-[#1E3A8A]/60 to-[#1E3A8A] py-16 flex flex-col items-center">
      {/* Pressure Cooker Clients Title */}
      <motion.h2
        className="text-center text-white text-4xl sm:text-5xl font-bold font-sans mb-8 sm:mb-24"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Pressure Cooker Clients
      </motion.h2>

      {/* Pressure Cooker Clients */}
      <div className="flex flex-wrap w-full justify-evenly px-6 md:px-12 lg:px- gap-10">
        {pressureCookerClients.map((client, index) => (
          <motion.div
            key={client.name}
            className="w-full sm:w-80 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.6 }}
          >
            <Image
              width={300}
              height={200}
              className="rounded-t-lg border-b-2 w-full h-auto"
              src={client.src}
              alt={client.name}
              loading="lazy"
            />
            <div className="p-5 text-center">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                {client.name}
              </h5>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Textile Industry Clients Title */}
      <motion.h2
        className="text-center text-white text-4xl sm:text-5xl font-bold font-sans mt-16 mb-8 sm:mb-24"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Textile Industry Clients
      </motion.h2>

      {/* Textile Industry Clients */}
      <div className="flex flex-wrap w-full justify-evenly px-6 md:px-12 lg:px- gap-10">
        {textileIndustryClients.map((client, index) => (
          <motion.div
            key={client.name}
            className="w-full sm:w-80 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.6 }}
          >
            <Image
              width={300}
              height={200}
              className="rounded-t-lg border-b-2 w-full h-auto"
              src={client.src}
              alt={client.name}
              loading="lazy"
            />
            <div className="p-5 text-center">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                {client.name}
              </h5>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
