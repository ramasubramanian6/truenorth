import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaInstagramSquare, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import heroImg from "./assets/truenorth-program-img.avif";
import Header from "./Header.jsx";
import { Link } from "react-router-dom";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    controls.start({
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: { duration: 20, repeat: Infinity, ease: "linear" },
    });
  }, [controls]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <Header />

      {/* Mobile Nav */}
      <motion.nav
        initial={false}
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, x: 0 },
          closed: { opacity: 0, x: "100%" },
        }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className={`fixed top-0 right-0 h-full w-2/3 bg-black bg-opacity-95 p-6 md:hidden z-40 flex flex-col justify-center items-center space-y-6 mt-10`}
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
          { name: "Staff", path: "/staff" },
          { name: "Contact", path: "/join-now" },
        ].map((item) => (
          <motion.span
            key={item.name}
            whileHover={{ scale: 1.1 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Link
              to={item.path}
              className="text-white text-2xl font-bold hover:text-orange-500"
            >
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

      <div className="min-h-screen bg-white font-sans overflow-hidden">
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
                <strong>Music, Silambam & Bharatanatyam classes</strong> are
                starting soon.
              </p>
              <p className="mb-2">Register now and join us at:</p>
              <p className="flex items-center justify-center space-x-2 mb-2">
                <MdLocationOn />
                <span>
                  3rd Floor, STC 60 Feet Road, Meena Plaza, Perumalpuram,
                  Tirunelveli
                </span>
              </p>
              <p className="mt-2">
                Questions? Call <strong>+91 93450 00685</strong> or{" "}
                <strong>+91 70100 78309</strong>
              </p>
              <p className="mt-4 italic">
                We look forward to seeing you in class!
              </p>

              <div className="mt-6">
                <Link
                  to="/join-now"
                  className="inline-block px-6 py-3 bg-red-600 text-white font-bold rounded-full shadow-lg hover:bg-red-700 transition-colors duration-300"
                >
                  Join Now
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  );
}
