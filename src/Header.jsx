import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagramSquare, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import logoImage from "./assets/True-North-Logo.jpeg";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.header
        className="w-full h-25 bg-black bg-opacity-80 flex items-center justify-between px-3 sm:px-6 shadow-lg fixed top-0 left-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
      >
        <div className="flex items-center space-x-3">
          <motion.img
            className="h-18 sm:h-24 w-auto object-contain rounded-b-4xl"
            src={logoImage}
            alt="Logo"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
          <h1 className="text-red-600 text-xl sm:text-2xl lg:text-3xl font-bold font-rockwell tracking-wide">
            True North Co.
          </h1>
        </div>
        <nav className="hidden md:flex space-x-5 lg:space-x-8">
          {[{ name: "Home", path: "/" }, { name: "Programs", path: "/programs" }, { name: "Staff", path: "/staff" }, { name: "Testimonials", path: "/testimonials" }, { name: "Contact", path: "/join-now" }].map((item) => (
            <motion.span key={item.name} whileHover={{ scale: 1.1 }}>
              <Link to={item.path} className="text-white hover:text-orange-500">
                {item.name}
              </Link>
            </motion.span>
          ))}
        </nav>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FaTimes className="w-8 h-8" /> : <FaBars className="w-8 h-8" />}
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-2 sm:space-x-3">
          <motion.a
            href="https://www.instagram.com/tnorthco/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-600"
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaInstagramSquare className="w-7 h-7 sm:w-8 sm:h-8" />
          </motion.a>
          <motion.a
            href="https://wa.me/919345000685"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-white flex flex-row text-green-500"
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaWhatsapp className="w-9 h-9 " /><span className=" font-extralight text-2xl ">+91 9345000685</span>
          </motion.a>
        </div>
      </motion.header>
      <motion.nav
        initial={false}
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={{ open: { opacity: 1, x: 0 }, closed: { opacity: 0, x: "100%" } }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className={`fixed top-0 right-0 h-full w-2/3 bg-black bg-opacity-95 p-6 transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"} md:hidden z-40 flex flex-col justify-center items-center space-y-6`}
      >
        <button
          onClick={toggleMobileMenu}
          className="absolute top-6 right-6 text-white focus:outline-none"
          aria-label="Close mobile menu"
        >
          <FaTimes className="w-8 h-8" />
        </button>
        {[{ name: "Home", path: "/" }, { name: "Programs", path: "/programs" }, { name: "Staff", path: "/staff" }, { name: "Testimonials", path: "/testimonials" }, { name: "Contact", path: "/join-now" }].map((item) => (
          <motion.span key={item.name} whileHover={{ scale: 1.1 }} onClick={() => setIsMobileMenuOpen(false)}>
            <Link to={item.path} className="text-white text-2xl font-bold hover:text-orange-500">
              {item.name}
            </Link>
          </motion.span>
        ))}
        <div className="flex items-center space-x-6 mt-8">
          <motion.a
            href="https://www.instagram.com/tnorthco/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-600"
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaInstagramSquare className="w-12 h-12" />
          </motion.a>
          <motion.a
            href="https://wa.me/919345000685"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-500"
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaWhatsapp className="w-12 h-12" />
          </motion.a>
        </div>
      </motion.nav>
    </>
  );
}
