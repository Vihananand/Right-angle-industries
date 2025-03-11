import { motion } from "framer-motion";
import Image from "next/image";

export default function AchievementsSection({ achievements, isMobile }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={!isMobile ? { opacity: 1, y: 0 } : undefined}
      animate={isMobile ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full py-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0, delay: index * 0.2 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all flex flex-col h-full"
          >
            <div className="relative h-64 w-full">
              <Image
                src={achievement.image}
                alt={achievement.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
              {achievement.description && (
                <p className="text-gray-600">{achievement.description}</p>
              )}
            </div>
            <div className="px-6 pb-6">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                Certified
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
