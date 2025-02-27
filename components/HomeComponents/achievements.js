import { motion } from "framer-motion";
import Image from "next/image";

export default function AchievementsSection({ achievements, isMobile }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={!isMobile ? { opacity: 1, scale: 1 } : undefined}
      animate={isMobile ? { opacity: 1, scale: 1 } : undefined}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex flex-col items-center justify-center w-full min-h-[50vh] md:min-h-screen gap-32"
    >
      <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Achievements
          </h1>
      <div className="flex flex-col gap-20 sm:flex-row w-full justify-evenly px-6 md:px-12 lg:px-14">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="w-full sm:w-80 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col items-center"
          >
            <Image
              width={300}
              height={200}
              className="rounded-t-lg border-b-2 w-full h-[90%]"
              src={achievement.image}
              alt={achievement.title}
            />
            <div className="p-5 text-center">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                {achievement.title}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
