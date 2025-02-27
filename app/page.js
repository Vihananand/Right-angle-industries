"use client";

import { useEffect, useState } from "react";
import { useScroll, useTransform } from "framer-motion";

import ServicesSection from "../components/HomeComponents/service";
import AchievementsSection from "../components/HomeComponents/achievements";
import AddressSection from "../components/HomeComponents/adress";
import VideoSection from "../components/HomeComponents/videosection";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const opacityDesktop = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  const achievementsData = [
    { title: "Zed Certificate", image: "/Images/achievements-1.jpg" },
    { title: "ISO Certificate", image: "/Images/achievements-2.jpg" },
    { title: "Laghu Udyog Bharati", image: "/Images/achievements-3.jpg" },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-[#1E3A8A] via-[#1E3A8A]/60 to-[#1E3A8A] flex flex-col gap-20 px-4 sm:px-8 lg:px-16 py-8 sm:py-12">
      {/* Video Section */}
      <VideoSection />

      {/* Address Section */}
      <AddressSection />

      {/* Achievements Component */}
      <AchievementsSection
        achievements={achievementsData}
        isMobile={isMobile}
      />

      {/* Services Section */}
      <ServicesSection isMobile={isMobile} opacityDesktop={opacityDesktop} />
    </div>
  );
}
