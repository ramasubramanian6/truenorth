// Home.jsx
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import home_page from "./assets/TrueNorth-homepage.jpeg";

// Import React Icons
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

// --- Instructor Image Imports ---
import baratha from "./assets/TRUENORTH-bharatanatyam-instructor.jpeg";
import karate from "./assets/TRUENORTH-karate-instructor.jpeg";
import silambam from "./assets/TRUENORTH-silambam-instructor.jpeg";
import draw from "./assets/TRUENORTH-drawing-instructor.jpeg";
import { Link } from "react-router-dom";

// --- Local Image Imports ---
import logoImage from "./assets/True-North-Logo.jpeg";
import abacusImage from "./assets/TRUENORTH-abacus.jpeg";
import archeryImage from "./assets/TRUENORTH-archery.jpeg";
import bharatanatyamImage from "./assets/TRUENORTH-bharatanatyam.jpeg";
import drawingImage from "./assets/TRUENORTH-drawing.jpeg";
import karateImage from "./assets/TRUENORTH-karate.png";
import kickBoxingImage from "./assets/TRUENORTH-kick boxing.jpg";
import kobudoImage from "./assets/TRUENORTH-kobudo.jpeg";
import silambamImage from "./assets/TRUENORTH-silambam.jpeg";
import yogaImage from "./assets/TRUENORTH-yoga.jpeg";
import TrueNorthMap from "./TrueNorthMap";

// --- Hero Background Image ---
const heroBgImage = { home_page };

const Home = () => {
  const form = useRef();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Coordinates for True North Location
  const latitude = 8.69872739448295;
  const longitude = 77.7370064089706;

  // Construct Google Maps URL for opening in a new tab when pin is clicked
  const googleMapsUrlForPin = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`; // Corrected Google Maps URL

  return (
    <div className="min-h-screen bg-white font-sans overflow-hidden md:mt-25">
     
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
          <h1 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold font-rockwell tracking-wide">
            True North Co.
          </h1>
        </div>

       
        <nav className="hidden md:flex space-x-5 lg:space-x-8">
          {[
            { name: "Home", path: "/" },
            { name: "Programs", path: "/programs" },
            { name: "Staff", path: "#staff" },
            { name: "Contact", path: "#contact-section" },
          ].map((item) => (
            <motion.span key={item.name} whileHover={{ scale: 1.1 }}>
              {item.path.startsWith("http") || item.path.startsWith("#") ? (
                <a
                  href={item.path}
                  className="text-white hover:text-orange-500"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  to={item.path}
                  className="text-white hover:text-orange-500"
                >
                  {item.name}
                </Link>
              )}
            </motion.span>
          ))}
        </nav>

        
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="w-8 h-8" />
            ) : (
              <FaBars className="w-8 h-8" />
            )}
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
            className="text-white hover:text-green-500"
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaWhatsapp className="w-7 h-7 sm:w-8 sm:h-8" />
          </motion.a>
        </div>
      </motion.header>

     
      <motion.nav
        initial={false}
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, x: 0 },
          closed: { opacity: 0, x: "100%" },
        }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className={`fixed top-0 right-0 h-full w-1/3 bg-black bg-opacity-95 p-6 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-40 flex flex-col justify-center items-center space-y-6`} 
      >
        <button
          onClick={toggleMobileMenu}
          className="absolute top-6 right-6 text-white focus:outline-none"
          aria-label="Close mobile menu"
        >
          <FaTimes className="w-8 h-8" /> 
        </button>
        {[
          { name: "Home", path: "/" },
          { name: "Programs", path: "/programs" },
          { name: "Staff", path: "#staff" },
          { name: "Contact", path: "#contact-section" },
        ].map((item) => (
          <motion.span
            key={item.name}
            whileHover={{ scale: 1.1 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.path.startsWith("http") || item.path.startsWith("#") ? (
              <a href={item.path} className="text-white text-2xl font-bold hover:text-orange-500">
                {item.name}
              </a>
            ) : (
              <Link to={item.path} className="text-white text-2xl font-bold hover:text-orange-500"> 
                {item.name}
              </Link>
            )}
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
                <FaInstagramSquare className="w-8 h-8" /> 
            </motion.a>
            <motion.a
                href="https://wa.me/919345000685"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-500"
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
                <FaWhatsapp className="w-8 h-8" /> 
            </motion.a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="w-full h-[calc(100vh-64px)] pt-16 relative overflow-hidden flex items-center justify-center bg-black"
      >
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={home_page}
          alt="Hero Background"
        />
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={home_page}
          alt="Hero Background"
          style={{ backgroundColor: "#000" }}
        />

        <motion.div
          className="absolute left-10 lg:left-20 z-10 text-left p-4 max-w-md"
          initial={{ opacity: 0, x: -50, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-black text-4xl sm:text-6xl lg:text-7xl border-b-4 font-bold font-rockwell leading-tight drop-shadow-lg">
            TRUE NORTH
            <br />
            ACADEMY
          </h1>
          <motion.button
            className="mt-6 px-6 py-3 bg-red-500 text-white text-lg font-bold  border-4 border-black shadow-lg hover:bg-yellow-500 transition-colors duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("contact-section")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Try a Free Class Today
          </motion.button>
        </motion.div>
      </section>

      {/* About Our Classes Section */}
      <section
        id="program"
        className="w-full py-12 bg-blue-50 overflow-hidden"
      >
        <motion.h2
          className="text-center text-3xl sm:text-4xl font-bold font-rockwell underline text-black mb-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          About Our Classes
        </motion.h2>

        {/* Class Listings */}
        {[
          {
            name: "Karate",
            description:
              "Karate is a traditional Japanese martial art that emphasizes discipline, focus, and powerful striking techniques using punches, kicks, knee strikes, and open-hand techniques.",
            image: karateImage,
            reverse: false,
            titleClass: "text-2xl sm:text-3xl lg:text-4xl",
            imageSizeClass: "w-48 h-48 sm:w-64 sm:h-64",
          },
          {
            name: "Kick Boxing",
            description:
              "Kickboxing is a dynamic combat sport that blends the powerful punches of boxing with the agile kicks of martial arts.",
            image: kickBoxingImage,
            reverse: true,
            titleClass: "text-2xl sm:text-3xl lg:text-4xl",
            imageSizeClass: "w-48 h-48 sm:w-64 sm:h-64",
          },
          {
            name: "Archery",
            description:
              "Archery is the art of precision and patience, where focus meets grace in every shot. With every arrow released, archery teaches control, discipline, and the power of a calm mind.",
            image: archeryImage,
            reverse: false,
            titleClass: "text-2xl sm:text-3xl lg:text-4xl",
            imageSizeClass: "w-48 h-48 sm:w-64 sm:h-64",
          },
          {
            name: "Kobudo",
            description:
              "Kobudo is the ancient Okinawan martial art focusing on the use of traditional weapons like the bo, nunchaku, kama, and sai.",
            image: kobudoImage,
            reverse: true,
            titleClass: "text-2xl sm:text-3xl lg:text-4xl",
            imageSizeClass: "w-48 h-48 sm:w-64 sm:h-64",
          },
          {
            name: "Drawing",
            description:
              "Drawing is the art of seeing with your hands, where imagination flows through every line and shape.",
            image: drawingImage,
            reverse: false,
            titleClass: "text-2xl sm:text-3xl lg:text-4xl",
            imageSizeClass: "w-48 h-48 sm:w-64 sm:h-64",
          },
          {
            name: "Silambam",
            description:
              "Silambam is an ancient and dynamic martial art from Tamil Nadu, India, characterized by its fluid movements and weapon-based combat, primarily using a bamboo staff.",
            image: silambamImage,
            reverse: true,
            titleClass: "text-2xl sm:text-3xl lg:text-4xl",
            imageSizeClass: "w-48 h-48 sm:w-64 sm:h-64",
          },
          {
            name: "Yoga",
            description:
              "Yoga is a holistic practice originating in ancient India, combining physical postures, breathing techniques, and meditation to foster harmony between mind, body, and spirit.",
            image: yogaImage,
            reverse: false,
            titleClass: "text-2xl sm:text-3xl lg:text-4xl",
            imageSizeClass: "w-48 h-48 sm:w-64 sm:h-64",
          },
          {
            name: "Abacus",
            description:
              "The abacus is an ancient calculating tool that uses beads on rods to perform arithmetic operations, predating modern electronic calculators and still used today for teaching fundamental number concepts.",
            image: abacusImage,
            reverse: true,
            titleClass: "text-2xl sm:text-3xl lg:text-4xl",
            imageSizeClass: "w-48 h-48 sm:w-64 sm:h-64",
          },
          {
            name: "Bharatanatyam",
            description:
              "Bharatanatyam is an ancient and expressive Indian classical dance form from Tamil Nadu.",
            image: bharatanatyamImage,
            reverse: false,
            titleClass: "text-xl sm:text-2xl lg:text-3xl",
            imageSizeClass: "w-56 h-56 sm:w-72 sm:h-72",
          },
        ].map((classItem) => (
          <motion.div
            key={classItem.name}
            className={`flex flex-col items-center justify-center gap-5 md:gap-10 mb-14 px-3 sm:px-6 ${
              classItem.reverse ? "md:flex-row-reverse" : "md:flex-row"
            }`}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.img
              className={`${classItem.imageSizeClass} rounded-md object-cover flex-shrink-0`}
              src={classItem.image}
              alt={classItem.name}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div className="w-full max-w-2xl bg-red-600 rounded-md p-5 shadow-lg">
              <h3
                className={`text-white font-bold font-rockwell mb-2 text-center md:text-left ${classItem.titleClass}`}
              >
                {classItem.name}
              </h3>
              <p className="text-white text-sm sm:text-base lg:text-lg font-normal font-rockwell leading-relaxed text-center md:text-left">
                {classItem.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </section>

      {/* Meet Our Staff Section */}
      <section id="staff" className="w-full py-12 bg-black overflow-hidden">
        <motion.h2
          className="text-center text-3xl sm:text-4xl font-bold font-rockwell tracking-wider text-white mb-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          MEET OUR STAFF
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 pb-8 max-w-6xl mx-auto">
          {[
          {
              image: baratha,
              description: "Instructor of Bharatanatyam, Classical dance.",
            },
            {
              image: karate,
              description: "Instructor of Karate, Kick boxing, Archery.",
            },
            {
              image: draw,
              description: "Instructor of Drawing, Sculptures.",
            },
            {
              image: silambam,
              description: "Instructor of Silambam",
            },
            
          ].map((staff) => (
            <motion.div
              key={staff.description}
              className="flex flex-col items-center shadow-lg rounded-lg overflow-hidden bg-white"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <img
                className="w-full h-80 object-cover  border-b-2 border-black"
                src={staff.image}
                alt={staff.description}
              />
              <div className="w-full bg-red-600 border-t-2 border-black p-3 text-center">
                <p className="text-white text-xl sm:text-base font-bold font-rockwell leading-relaxed">
                  {staff.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Us Section */}
      <div id="contact-section" className="w-full">
        <section className="w-full py-10 bg-red-600 overflow-hidden text-center shadow-inner">
          <motion.h2
            className="text-white text-3xl sm:text-4xl font-bold font-rockwell tracking-wider mb-3"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            CONTACT US
          </motion.h2>
          <motion.p
            className="text-white text-lg font-normal font-rockwell leading-relaxed px-4 max-w-3xl mx-auto"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2 }}
          >
            Should you have any questions, please feel free to reach us @{" "}
            <span className="font-bold text-xl">93450 00685 / 70100 78309</span>
          </motion.p>
        </section>

        {/* Get In Touch Form Section */}
        <section className="w-full py-12 bg-white overflow-hidden">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="max-w-xl mx-auto px-4 sm:px-6"
          >
            <motion.div
              className="mb-4"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <label
                htmlFor="user_first_name"
                className="block text-black text-base font-rockwell leading-tight mb-1"
              >
                Your Name
              </label>
              <input
                type="text"
                id="user_first_name"
                name="user_first_name"
                className="w-full p-2 border-4 border-black focus:outline-none focus:border-red-600 transition-colors duration-200 text-sm"
              />
            </motion.div>

            <motion.div
              className="mb-4"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.2 }}
            >
              <label
                htmlFor="user_email"
                className="block text-black text-base font-rockwell leading-tight mb-1"
              >
                Your Email<span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                className="w-full p-2 border-4 border-black focus:outline-none focus:border-red-600 transition-colors duration-200 text-sm"
                required
              />
            </motion.div>

            <motion.div
              className="mb-4"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.3 }}
            >
              <label
                htmlFor="user_phone"
                className="block text-black text-base font-rockwell leading-tight mb-1"
              >
                Your Phone No.
              </label>
              <input
                type="tel"
                id="user_phone"
                name="user_phone"
                className="w-full p-2 border-4 border-black focus:outline-none focus:border-red-600 transition-colors duration-200 text-sm"
              />
            </motion.div>

            <motion.div
              className="mb-6"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.4 }}
            >
              <label
                htmlFor="user_programs"
                className="block text-black text-base font-rockwell leading-tight mb-1"
              >
                Programs of Interest
              </label>
              <select
                id="user_programs"
                name="user_programs"
                className="w-full p-2 border-4 border-black focus:outline-none focus:border-red-600 transition-colors duration-200 text-sm"
                required
              >
                <option value="" disabled selected>
                  -- Select a Program --
                </option>
                <option value="Karate">Karate</option>
                <option value="Kick Boxing">Kick Boxing</option>
                <option value="Archery">Archery</option>
                <option value="Kobudo">Kobudo</option>
                <option value="Drawing">Drawing</option>
                <option value="Silambam">Silambam</option>
                <option value="Yoga">Yoga</option>
                <option value="Abacus">Abacus</option>
                <option value="Bharatanatyam">Bharatanatyam</option>
              </select>
            </motion.div>

            <motion.button
              type="submit"
              className="w-full py-2 bg-red-600 text-white text-lg font-bold font-rockwell rounded-md shadow-md hover:bg-red-700 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.5 }}
            >
              Get In Touch
            </motion.button>
          </form>
        </section>
      </div>

      <TrueNorthMap />

      {/* Copyright Footer */}
      <motion.footer
        className="w-full py-10 bg-black text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: About True North */}
          <div>
            <h3 className="text-xl font-bold font-rockwell mb-4 text-orange-500">
              True North Academy
            </h3>
            <p className="text-gray-300 text-sm font-roboto leading-relaxed">
              Dedicated to fostering discipline, focus, and creativity through
              traditional and modern classes like Karate, Silambam, Yoga,
              Drawing, and more. We empower individuals to master their craft
              and unleash their full potential.
            </p>
            <p className="text-gray-400 text-xs mt-2 font-roboto">
              "Master Your Craft, Unleash Your Potential"
            </p>
          </div>

          {/* Column 2: Contact & Location */}
          <div>
            <h3 className="text-xl font-bold font-rockwell mb-4 text-orange-500">
              Contact & Visit Us
            </h3>
            <p className="text-gray-300 text-sm font-roboto">
              📍 3rd Floor, STC 60 Feet Road, Meena Plaza, Perumalpuram,
              Tirunelveli, Tamil Nadu, India.
            </p>
            <p className="text-gray-300 text-sm mt-2 font-roboto">
              📞 +91 93450 00685
            </p>
            <p className="text-gray-300 text-sm mt-1 font-roboto">
              📞 +91 70100 78309
            </p>
            <p className="text-gray-300 text-sm mt-1 font-roboto">
              ✉️ info@truenorthacademy.com
            </p>
            <p className="text-gray-400 text-xs mt-2 font-roboto">
              Business Hours: Mon-Sat: 9:00 AM - 7:00 PM
            </p>
          </div>

          {/* Column 3: Quick Links & Socials */}
          <div>
            <h3 className="text-xl font-bold font-rockwell mb-4 text-orange-500">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300 text-sm font-roboto"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#program"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300 text-sm font-roboto"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Our Programs
                </a>
              </li>
              <li>
                <a
                  href="#staff"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300 text-sm font-roboto"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Meet Our Staff
                </a>
              </li>
              <li>
                <a
                  href="#contact-section"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300 text-sm font-roboto"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </a>
              </li>
            </ul>

            <h3 className="text-xl font-bold font-rockwell mt-6 mb-4 text-orange-500">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/tnorthco/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange-600"
              >
                <FaInstagramSquare className="w-8 h-8" />
              </a>
              <a
                href="https://wa.me/919345000685"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-600"
              >
                <FaWhatsapp className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-3 pt-2 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm font-roboto">
            © {new Date().getFullYear()} True North. All rights reserved.
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Home;