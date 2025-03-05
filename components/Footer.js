import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const sections = [
  {
    title: "Resources",
    links: [
      { name: "Products", href: "/Gallery" },
      { name: "Clients", href: "/Clients" },
    ],
  },
  {
    title: "Follow us",
    links: [
      { name: "Instagram", href: "https://www.instagram.com/right_angle_industries?igsh=cWdkN215dThra3dx" },
      { name: "Facebook", href: "https://www.facebook.com/share/18mRSnsMv7/" },
      { name: "Youtube", href: "https://youtube.com/@rightangleindustries8419?feature=shared" },
    ],
  },
  {
    title: "Extra",
    links: [
      { name: "Vision", href: "/Vision" },
      { name: "Directors", href: "/Directors" },
      { name: "Contacts", href: "/Contact" },
    ],
  },
];

const socialLinks = [
  { icon: <FaFacebook size={30} />, href: "https://www.facebook.com/share/18mRSnsMv7/" },
  { icon: <FaInstagram size={30} />, href: "https://www.instagram.com/right_angle_industries?igsh=cWdkN215dThra3dx" },
  { icon: <FaYoutube size={30} />, href: "https://youtube.com/@rightangleindustries8419?feature=shared" },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#152A5A]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between md:items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image
                width={50}
                height={50}
                src="/logo.svg"
                className="h-8 me-3"
                alt="Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Right Angle Industries
              </span>
            </Link>
          </div>
          <div className="flex flex-wrap gap-8 sm:gap-12">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  {section.title}
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="hover:underline" target="_blank">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-400/90 sm:mx-auto lg:my-8" />
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <span className="text-lg text-gray-500 text-center sm:text-left dark:text-gray-400">
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="hover:underline">
              Right Angle Industries™
            </Link>
            . All Rights Reserved.
          </span>

          <div className="flex mt-4 sm:mt-0 justify-center space-x-5">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                target="_blank"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="flex text-center flex-col md:flex-row gap-6 bg-gradient-to-t from-[#2C4691] to-[#152A5A] text-gray-300/80 px-6 py-3.5 rounded font-[helvetica]">
        <p className="text-lg flex-1 text-center">
          Address: 18-Industrial Area, Phagwara - 144 401, Punjab-India
        </p>
      </div>
    </footer>
  );
}
