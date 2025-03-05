"use client";

import Image from "next/image";

export default function Gallery() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#1E3A8A] via-[#1E3A8A]/60 to-[#1E3A8A] font-[helvetica]">
      <section className="text-gray-600 body-font">
        <div className="w-1/2 px-4 sm:px-6 lg:px-8 py-12 mx-auto">
          <div className="flex flex-col items-center text-center space-y-6 mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-300">
              Our latest Products
            </h1>
            <p className="uppercase text-md sm:text-4xl lg:w-2/3 leading-relaxed text-gray-300 font-bold">
              Special Purpose Machinery
            </p>
          </div>

          <div className="responsive-columns">
            {[
              {
                src: "/img-15.jpg",
                title: "image15",
              },
              {
                src: "/img-14.jpg",
                title: "image14",
              },
              {
                src: "/img-12.jpg",
                title: "image12",
              },
              {
                src: "/img-11.jpg",
                title: "image11",
              },
              {
                src: "/img-9.jpg",
                title: "image9",
              },
              {
                src: "/img-8.jpg",
                title: "image8",
              },
              {
                src: "/img-7.jpg",
                title: "image7",
              },
              {
                src: "/img-6.jpg",
                title: "image6",
              },
              {
                src: "/img-5.jpg",
                title: "image5",
              },
              {
                src: "/img-4.jpg",
                title: "image4",
              },
              {
                src: "/img-3.jpg",
                title: "image3",
              },
              {
                src: "/img-2.jpg",
                title: "image2",
              },
              {
                src: "/img-1.jpg",
                title: "image1",
              },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <Image
                  width={600}
                  height={400}
                  alt={item.title}
                  className="w-full mb-4 rounded-xl transition-opacity"
                  src={item.src}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="md:w-1/2 px-4 sm:px-6 lg:px-8 py-12 mx-auto w-full">
          <div className="flex flex-col items-center text-center space-y-6 mb-12">
            <p className="text-md sm:text-4xl lg:w-2/3 leading-relaxed text-gray-200 uppercase font-bold">
              Textile Machinery Components
            </p>
          </div>

          <div className="responsive-columns-2">
            {[
              {
                src: "/img_1.jpg",
                title: "image1",
              },
              {
                src: "/img_2.jpg",
                title: "image2",
              },
              {
                src: "/img_3.jpg",
                title: "image3",
              },
              {
                src: "/img_4.jpg",
                title: "image4",
              },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <Image
                  width={400}
                  height={400}
                  alt={item.title}
                  className="w-full mb-4 rounded-xl transition-opacity"
                  src={item.src}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="md:w-1/2 px-4 sm:px-6 lg:px-8 py-12 mx-auto w-full">
          <div className="flex flex-col items-center text-center space-y-6 mb-12">
            <p className="text-md sm:text-4xl lg:w-2/3 leading-relaxed text-gray-200 uppercase font-bold">
              Tool Room
            </p>
          </div>

          <div className="responsive-columns-2">
            {[
              {
                src: "/img_21.jpg",
                title: "image1",
              },
              {
                src: "/img_22.jpg",
                title: "image2",
              },
              {
                src: "/img_23.jpg",
                title: "image3",
              },
              {
                src: "/img_24.jpg",
                title: "image4",
              },
              {
                src: "/img_25.jpg",
                title: "image4",
              },
              {
                src: "/img_26.jpg",
                title: "image4",
              },
              {
                src: "/img_27.jpg",
                title: "image4",
              },
              {
                src: "/img_28.jpg",
                title: "image4",
              },
              {
                src: "/img_29.jpg",
                title: "image4",
              },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <Image
                  width={400}
                  height={400}
                  alt={item.title}
                  className="w-full mb-4 rounded-xl transition-opacity"
                  src={item.src}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
