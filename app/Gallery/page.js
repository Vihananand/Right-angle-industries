"use client";

import Image from "next/image";

export default function Gallery() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#1E3A8A] via-[#1E3A8A]/60 to-[#1E3A8A] font-[helvetica]">
      <section className="text-gray-600 body-font">
        <div className="container px-4 sm:px-6 lg:px-8 py-12 mx-auto">
          <div className="flex flex-col items-center text-center space-y-6 mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-300">
              Gallery
            </h1>
            <p className="text-md sm:text-lg lg:w-2/3 leading-relaxed text-gray-300">
              These are the images of all our machines in the gallery. You can
              see the machines. These machines are bought by the big giants of
              the cooker industry.
            </p>
          </div>

          <div className="responsive-columns">
            {[
              {
                src: "/Images/img-1.jpg",
                title: "AUTOMATIC COOKER LID FACING MACHINE",
              },
              {
                src: "/Images/img-2.jpg",
                title: "AUTOMATIC OVAL BORING MACHINE FOR PRESSURE COOKER BODY",
              },
              {
                src: "/Images/img-3.jpg",
                title: "AUTOMATIC OVAL PRESSURE COOKER LEAK TESTING MACHINE",
              },
              {
                src: "/Images/img-4.jpg",
                title: "COOKER LID FACING TRIMMING MACHINE",
              },
              {
                src: "/Images/img-5.jpg",
                title: "HYDRAULIC RIVETTING MACHINE FOR PRESSURE COOKER",
              },
              {
                src: "/Images/img-6.jpg",
                title:
                  "AUTOMATIC PRESSURE COOKER OVAL BORING CUM DRILLING MACHINE",
              },
              {
                src: "/Images/img-7.jpg",
                title: "AUTOMATIC OVAL BORING MACHINE FOR PRESSURE COOKER BODY",
              },
              {
                src: "/Images/img-8.jpg",
                title: "AUTOMATIC OVAL PRESSURE COOKER LEAK TESTING MACHINE",
              },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <Image
                  width={600}
                  height={400}
                  alt={item.title}
                  className="w-full mb-4 rounded-xl transition-opacity duration-300 group-hover:opacity-85"
                  src={item.src}
                />
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-xl p-6">
                  <p className="text-white text-md sm:text-lg lg:text-xl font-semibold text-center">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
