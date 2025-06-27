import React, { useRef, useState } from "react"; // Removed useEffect
import { motion } from "framer-motion"; // Removed useAnimation
import emailjs from "emailjs-com";
import { FaInstagramSquare, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import logoImage from "./assets/True-North-Logo.jpeg";
import { Link } from "react-router-dom";


const JoinNowForm = () => {
  const form = useRef();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Removed const controls = useAnimation(); - it was unused

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Your registration request has been sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send request. Please try again later.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <motion.header
        className="w-full h-24 bg-black bg-opacity-80 flex items-center justify-between px-4 sm:px-6 fixed top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
      >
        <div className="flex items-center space-x-4">
          <motion.img
            src={logoImage}
            alt="Logo"
            className="h-20 w-auto object-contain rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
          <h1 className="text-white text-2xl font-bold font-rockwell">
            True North Academy
          </h1>
        </div>

        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-orange-500">
            Home
          </Link>
          <Link to="/programs" className="text-white hover:text-orange-500">
            Programs
          </Link>
          
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

        <div className="hidden md:flex items-center space-x-3">
          <motion.a
            href="https://www.instagram.com/tnorthco/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-600"
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaInstagramSquare className="w-7 h-7" />
          </motion.a>
          <motion.a
            href="https://wa.me/919345000685"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-500"
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaWhatsapp className="w-7 h-7" />
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
          { name: "Staff", path: "/#staff" }, // Keep if staff section exists on home
          { name: "Contact", path: "/#contact-section" }, // Keep if contact section exists on home
        ].map((item) => (
          <motion.span
            key={item.name}
            whileHover={{ scale: 1.1 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.path.startsWith("/") ? (
              <Link to={item.path} className="text-white text-2xl font-bold hover:text-orange-500">
                {item.name}
              </Link>
            ) : (
              <a href={item.path} className="text-white text-2xl font-bold hover:text-orange-500">
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


      <main className="flex-grow pt-24 pb-12 bg-gradient-to-br from-blue-50 to-indigo-100">
        <section className="w-full py-10 px-4 sm:px-6 bg-gradient-to-r from-red-700 to-orange-500 text-center shadow-lg rounded-b-3xl">
          <motion.h2
            className="text-white text-4xl sm:text-5xl font-extrabold font-rockwell tracking-wider mb-3 drop-shadow-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            JOIN OUR PROGRAMS
          </motion.h2>
          <motion.p
            className="text-white text-lg sm:text-xl font-light font-rockwell leading-relaxed px-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Ready to unleash your potential? Fill out the form below to register your interest and we'll get back to you!
          </motion.p>
        </section>

        <section className="w-full py-12 px-4 sm:px-6">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-2xl border-4 border-black"
          >
            <motion.div
              className="mb-6"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <label
                htmlFor="user_first_name"
                className="block text-gray-800 text-lg font-bold font-rockwell leading-tight mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="user_first_name"
                name="user_first_name"
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-red-600 transition-colors duration-200 text-base shadow-sm"
                placeholder="Enter your full name"
              />
            </motion.div>

            <motion.div
              className="mb-6"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1 }}
            >
              <label
                htmlFor="user_email"
                className="block text-gray-800 text-lg font-bold font-rockwell leading-tight mb-2"
              >
                Your Email<span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-red-600 transition-colors duration-200 text-base shadow-sm"
                placeholder="your.email@example.com"
                required
              />
            </motion.div>

            <motion.div
              className="mb-6"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.2 }}
            >
              <label
                htmlFor="user_phone"
                className="block text-gray-800 text-lg font-bold font-rockwell leading-tight mb-2"
              >
                Your Phone No.
              </label>
              <input
                type="tel"
                id="user_phone"
                name="user_phone"
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-red-600 transition-colors duration-200 text-base shadow-sm"
                placeholder="+91 XXXXXXXXXX"
              />
            </motion.div>

            <motion.div
              className="mb-6"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.3 }}
            >
              <label
                htmlFor="user_programs"
                className="block text-gray-800 text-lg font-bold font-rockwell leading-tight mb-2"
              >
                Programs of Interest<span className="text-red-600">*</span>
              </label>
              <select
                id="user_programs"
                name="user_programs"
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-red-600 transition-colors duration-200 text-base shadow-sm bg-white"
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
                <option value="Multiple/Other">Multiple/Other</option>
              </select>
            </motion.div>

            <motion.div
              className="mb-8"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.4 }}
            >
              <label
                htmlFor="user_message"
                className="block text-gray-800 text-lg font-bold font-rockwell leading-tight mb-2"
              >
                Your Message (Optional)
              </label>
              <textarea
                id="user_message"
                name="user_message"
                rows="2"
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-red-600 transition-colors duration-200 text-base shadow-sm"
                placeholder="Any specific questions or additional details you'd like to share?"
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="w-full py-3 bg-red-600 text-white text-xl font-bold font-rockwell rounded-md shadow-lg hover:bg-red-700 transition-colors duration-300 transform hover:scale-102 active:scale-98"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.5 }}
            >
              Submit Registration Request
            </motion.button>
          </form>
        </section>
      </main>

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

          <div>
            <h3 className="text-xl font-bold font-rockwell mt-6 mb-4 text-orange-500">
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
              {/* If you want Staff/Contact in footer quick links, add them back here */}
              {/* <li>
                <a href="/#staff" className="text-gray-300 hover:text-orange-500 transition-colors duration-300 text-sm font-roboto">
                  Meet Our Staff
                </a>
              </li>
              <li>
                <a href="/joinnow" className="text-gray-300 hover:text-orange-500 transition-colors duration-300 text-sm font-roboto">
                  Contact Us
                </a>
              </li> */}
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

export default JoinNowForm;