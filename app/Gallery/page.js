"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Gallery() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Define product categories and their images
  const productCategories = [
    {
      name: "Special Purpose Machinery",
      images: [
        { src: "/img-15.jpg", title: "Pressure Cooker Assembly Line", aspectRatio: "landscape", width: 600, height: 400 },
        { src: "/img-14.jpg", title: "Automated Lid Fitting Machine", aspectRatio: "portrait", width: 400, height: 600 },
        { src: "/img-12.jpg", title: "Industrial Cooker Press", aspectRatio: "landscape", width: 600, height: 400 },
        { src: "/img-11.jpg", title: "Quality Control Station", aspectRatio: "square", width: 500, height: 500 },
        { src: "/img-9.jpg", title: "Precision Cutting Machine", aspectRatio: "landscape", width: 600, height: 400 },
        { src: "/img-8.jpg", title: "Handle Attachment System", aspectRatio: "portrait", width: 400, height: 600 },
        { src: "/img-7.jpg", title: "Automated Packaging Line", aspectRatio: "landscape", width: 600, height: 400 },
        { src: "/img-6.jpg", title: "Pressure Testing Equipment", aspectRatio: "square", width: 500, height: 500 },
        { src: "/img-5.jpg", title: "Polishing Machine", aspectRatio: "landscape", width: 600, height: 400 },
        { src: "/img-4.jpg", title: "Valve Assembly System", aspectRatio: "portrait", width: 400, height: 600 },
        { src: "/img-3.jpg", title: "Conveyor System", aspectRatio: "landscape", width: 600, height: 400 },
        { src: "/img-2.jpg", title: "Control Panel", aspectRatio: "square", width: 500, height: 500 },
        { src: "/img-1.jpg", title: "Complete Production Line", aspectRatio: "landscape", width: 600, height: 400 },
      ]
    },
    {
      name: "Textile Machinery Components",
      images: [
        { src: "/img_1.jpg", title: "Textile Component 1", aspectRatio: "landscape", width: 600, height: 400 },
        { src: "/img_2.jpg", title: "Textile Component 2", aspectRatio: "portrait", width: 400, height: 600 },
        { src: "/img_3.jpg", title: "Textile Component 3", aspectRatio: "square", width: 500, height: 500 },
        { src: "/img_4.jpg", title: "Textile Component 4", aspectRatio: "landscape", width: 600, height: 400 },
      ]
    },
    {
      name: "Tool Room",
      images: [
        { src: "/img_21.jpg", title: "Tool Room Equipment 1", aspectRatio: "landscape", width: 600, height: 400 },
        { src: "/img_22.jpg", title: "Tool Room Equipment 2", aspectRatio: "portrait", width: 400, height: 600 },
        { src: "/img_23.jpg", title: "Tool Room Equipment 3", aspectRatio: "square", width: 500, height: 500 },
        { src: "/img_24.jpg", title: "Tool Room Equipment 4", aspectRatio: "landscape", width: 600, height: 400 },
        { src: "/img_25.jpg", title: "Tool Room Equipment 5", aspectRatio: "portrait", width: 400, height: 600 },
        { src: "/img_26.jpg", title: "Tool Room Equipment 6", aspectRatio: "square", width: 500, height: 500 },
        { src: "/img_27.jpg", title: "Tool Room Equipment 7", aspectRatio: "landscape", width: 600, height: 400 },
        { src: "/img_28.jpg", title: "Tool Room Equipment 8", aspectRatio: "portrait", width: 400, height: 600 },
        { src: "/img_29.jpg", title: "Tool Room Equipment 9", aspectRatio: "landscape", width: 600, height: 400 },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-900 py-24">
        <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-[1px]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Products</h1>
            <p className="text-xl text-blue-200 mb-8">
              Discover our range of high-quality industrial machinery and components
            </p>
          </motion.div>
        </div>
      </div>

      {/* Products Sections */}
      {productCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 * categoryIndex }}
              className="text-3xl font-bold text-gray-900 mb-12 text-center"
            >
              {category.name}
            </motion.h2>

            <div className="masonry-grid">
              {category.images.map((image, imageIndex) => (
                <motion.div 
                  key={imageIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * imageIndex }}
                  className={`masonry-item mb-6 ${
                    image.aspectRatio === 'portrait' ? 'aspect-portrait' : 
                    image.aspectRatio === 'square' ? 'aspect-square' : 
                    'aspect-landscape'
                  }`}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-lg group">
                    <Image
                      src={image.src}
                      alt={image.title}
                      width={image.width}
                      height={image.height}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white text-lg font-semibold drop-shadow-md">{image.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
