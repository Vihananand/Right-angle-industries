"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/Gallery" },
    { name: "Clients", link: "/Clients" },
    { name: "Vision", link: "/Vision" },
    { name: "Directors", link: "/Directors" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center space-x-2"
          >
            <Image
              src="/logo.svg"
              width={40}
              height={40}
              className="h-10 w-10"
              alt="Right Angle Industries Logo"
            />
            <div className="flex flex-col">
              <span className={`font-bold text-lg ${scrolled ? 'text-blue-900' : 'text-white'}`}>
                Right Angle
              </span>
              <span className={`text-xs ${scrolled ? 'text-blue-700' : 'text-blue-200'}`}>
                Industries
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => {
                const isActive = pathname === item.link;
                return (
                  <Link
                    key={item.name}
                    href={item.link}
                    className={`relative px-1 py-2 text-sm font-medium transition-colors duration-300 ${
                      pathname === '/Vision' 
                        ? isActive
                          ? "text-blue-700"
                          : "text-gray-700 hover:text-blue-700"
                        : scrolled
                          ? isActive
                            ? "text-blue-700"
                            : "text-gray-700 hover:text-blue-700"
                          : isActive
                            ? "text-white"
                            : "text-gray-200 hover:text-white"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                          pathname === '/Vision' || scrolled ? "bg-blue-700" : "bg-white"
                        }`}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                );
              })}
              <Link
                href="/Contact"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  pathname === '/Vision' || scrolled
                    ? "bg-blue-700 text-white hover:bg-blue-800"
                    : "bg-white text-blue-900 hover:bg-blue-50"
                }`}
              >
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                pathname === '/Vision' || scrolled
                  ? "text-gray-700 focus:ring-blue-500"
                  : "text-white focus:ring-white"
              }`}
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden shadow-lg ${pathname === '/Vision' ? 'bg-white' : 'bg-white'}`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    pathname === item.link
                      ? "bg-blue-700 text-white"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/Contact"
                className="block px-3 py-2 mt-4 text-center rounded-md text-base font-medium bg-blue-700 text-white hover:bg-blue-800"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
