"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Directors() {
  return (
    <div className="flex flex-col space-y-16 md:space-y-28 justify-center items-center bg-gradient-to-br from-[#1E3A8A] via-[#1E3A8A]/60 to-[#1E3A8A] hover:shadow-md p-4">
      <h1 className="text-white text-3xl md:text-4xl font-bold mt-12 text-center">
        Founder & Directors
      </h1>

      {/* Founder */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full max-w-xs md:max-w-md lg:w-96"
      >
        <div className="relative h-72 md:h-96 m-2.5 overflow-hidden text-white rounded-md">
          <Image
            height={300}
            width={800}
            src="/Images/ajitsingh.jpg"
            alt="card-image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-4">
          <h6 className="mb-2 text-slate-800 text-lg md:text-xl font-bold uppercase text-center">
            S. Ajit Singh Bhamra
          </h6>
          <h6 className="mb-2 text-slate-800 text-md md:text-lg font-semibold text-center">
            Founder
          </h6>
          <p className="text-slate-600 leading-normal font-light italic text-center">
            &quot;When I founded Right Angle Industries, I didn’t just set out
            to build machines—I set out to build reliability, efficiency, and
            progress. I saw an industry that needed precision, automation, and
            durability, and I knew we could make a difference. From
            high-performance pressure cooker-making machines to top-tier textile
            machinery components, our goal has always been the same: to empower
            manufacturers with cutting-edge technology that doesn’t just meet
            standards but sets them.&quot;
          </p>
        </div>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-evenly items-center w-full gap-8">
        {/* Managing Directors */}
        {["/Images/manpreet.jpg", "/Images/kulveer.jpg"].map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.3 }}
            className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full max-w-xs md:max-w-md lg:w-96"
          >
            <div
              className={`relative h-72 md:h-96 m-2.5 overflow-hidden text-white rounded-md ${
                index === 1 ? "h-80" : ""
              }`}
            >
              <Image
                height={300}
                width={800}
                src={src}
                alt="card-image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <h6 className="mb-2 text-slate-800 text-lg md:text-xl font-bold uppercase text-center">
                {index === 0
                  ? "S. Manpreet Singh Bhamra"
                  : "S. Kulveer Singh Bhamra"}
              </h6>
              <h6 className="mb-2 text-slate-800 text-md md:text-lg font-semibold text-center">
                Managing Director
              </h6>
              <p className="text-slate-600 leading-normal font-light italic text-center">
                {index === 0
                  ? '"Our father built Right Angle Industries with a vision—to revolutionize the manufacturing of pressure cooker-making machines and textile machinery components with precision, automation, and durability. He believed that industries thrive on innovation, and we are here to carry that vision forward. Today, we continue to push the boundaries of technology, ensuring that every machine we produce upholds the legacy of excellence he started."'
                  : "\"For us, this isn't just a business; it's a responsibility. Our father laid the foundation with hard work and innovation, and it's our duty to take it to new heights. We are committed to advancing automation, improving efficiency, and delivering world-class machinery that empowers manufacturers worldwide. Right Angle Industries isn’t just our family’s legacy—it’s a name that stands for trust, quality, and progress.\""}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
