import React, { useState } from "react"; // Import useState
import { motion, useAnimation } from "framer-motion";
import { FaInstagramSquare, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa"; // Import FaBars, FaTimes
import { MdLocationOn } from "react-icons/md";
import heroImg from "./assets/truenorth-program-img.avif";
import logoImage from "./assets/True-North-Logo.jpeg";
import { Link } from "react-router-dom"; // Import Link

// Updated program schedule
const programs = [
  {
    id: 1,
    name: "Drawing & Fine Arts",
    schedule: "Tuesday & Thursday, 6 PM - 7 PM",
  },
  { id: 2, name: "Karate", schedule: "Tuesday & Thursday, 7 PM - 8 PM" },
  { id: 3, name: "Archery", schedule: "Tuesday & Thursday, 8 PM - 9 PM" },
];

export default function ProgramsPage() {
  const controls = useAnimation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  React.useEffect(() => {
    controls.start({
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: { duration: 20, repeat: Infinity, ease: "linear" },
    });
  }, [controls]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white font-sans overflow-hidden">
     
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
        className={`fixed top-0 right-0 h-full w-2/3 bg-black bg-opacity-95 p-6 transform ${
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
          { name: "Staff", path: "/#staff" },
          { name: "Contact", path: "/joinnow" },
        ].map((item) => (
          <motion.span
            key={item.name}
            whileHover={{ scale: 1.1 }}
            onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
          >
            {item.path.startsWith("/") ? ( // Use Link for internal paths
              <Link
                to={item.path}
                className="text-white text-2xl font-bold hover:text-orange-500"
              >
                {item.name}
              </Link>
            ) : (
              // Use <a> for external or fragment paths
              <a
                href={item.path}
                className="text-white text-2xl font-bold hover:text-orange-500"
              >
                {item.name}
              </a>
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

     
      <section className="pt-24">
        <motion.img
          src={heroImg}
          alt="Programs Hero"
          className="w-full h-auto object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </section>

      <motion.section
        className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{
          background: "linear-gradient(270deg, #fef9c3, #fed7aa, #fecaca)",
        }}
        animate={controls}
      >
        <div className="max-w-3xl mx-auto bg-white bg-opacity-90 p-6 rounded-lg shadow-xl">
          <h2 className="text-center text-3xl font-bold mb-8">
            Class Schedule
          </h2>
          {programs.map((prog) => (
            <motion.div
              key={prog.id}
              className="mb-6 p-6 border-4 border-black rounded-lg shadow-lg"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-2">{prog.name}</h3>
              <p className="text-gray-700">{prog.schedule}</p>
            </motion.div>
          ))}
          <motion.div
            className="mt-8 text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="mb-4">
              <strong>Music, Silambam & Bharatanatyam classes</strong> will
              start soon.
            </p>
            <p className="mb-2">Please register and join us at:</p>
            <p className="flex items-center justify-center space-x-2 mb-2">
              <MdLocationOn />
              <span>
                3rd Floor, STC 60 Feet Road, Meena Plaza, Perumalpuram,
                Tirunelveli
              </span>
            </p>
            <p className="mt-2">
              Questions? Call <strong>+91 93450 00685</strong> /{" "}
              <strong>+91 70100 78309</strong>
            </p>
            <p className="mt-4 italic">
              Looking forward to seeing you in class!
            </p>
           
            <div className="mt-6">
              <motion.a
                href="/joinnow" // Changed to relative path for internal navigation
                className="inline-block px-6 py-3 bg-red-600 text-white font-bold rounded-full shadow-lg hover:bg-red-700 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={() => setIsMobileMenuOpen(false)} // Close menu if "Join Now" is clicked from mobile menu
              >
                Join Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.section>

     
      <motion.footer
        className="w-full py-10 bg-black text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
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
                <Link
                  to="/"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300 text-sm font-roboto"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300 text-sm font-roboto"
                >
                  Our Programs
                </Link>
              </li>
              <li>
                <a
                  href="/#staff"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300 text-sm font-roboto"
                >
                  Meet Our Staff
                </a>
              </li>
              <li>
                <a
                  href="/joinnow"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300 text-sm font-roboto"
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
}
