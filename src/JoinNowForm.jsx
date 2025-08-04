import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com"; // Or use: import emailjs from '@emailjs/browser';
import { FaInstagramSquare, FaWhatsapp, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "./Header.jsx";

const JoinNowForm = () => {
  const form = useRef();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("");

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
          alert("Your registration request has been sent successfully!");
          form.current.reset();
          setSelectedProgram(""); // reset selected program
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("Failed to send request. Please try again later.");
        }
      );
  };

  return (
    <>
      <Header />

      {/* Mobile Navigation */}
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
          { name: "Staff", path: "/staff" },
          { name: "Contact", path: "/join-now" },
        ].map((item) => (
          <motion.span
            key={item.name}
            whileHover={{ scale: 1.1 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
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
          >
            <FaInstagramSquare className="w-8 h-8" />
          </motion.a>
          <motion.a
            href="https://wa.me/919345000685"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-500"
            whileHover={{ scale: 1.15 }}
          >
            <FaWhatsapp className="w-8 h-8" />
          </motion.a>
        </div>
      </motion.nav>

      <main className="min-h-screen pt-24 pb-12 bg-gradient-to-br from-blue-50 to-indigo-100 font-rockwell">
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
            noValidate
          >
            <motion.div className="mb-6" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <label htmlFor="user_first_name" className="block text-gray-800 text-lg font-bold font-rockwell mb-2">
                Name<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="user_first_name"
                name="user_first_name"
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-red-600"
                placeholder="Enter your full name"
                required
              />
            </motion.div>

            {/* Email field removed as requested */}

            <motion.div className="mb-6" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.2 }}>
              <label htmlFor="user_phone" className="block text-gray-800 text-lg font-bold font-rockwell mb-2">
                Phone Number<span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                id="user_phone"
                name="user_phone"
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-red-600"
                placeholder="+91 XXXXXXXXXX"
                required
              />
            </motion.div>

            <motion.div className="mb-6" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.3 }}>
              <label htmlFor="user_programs" className="block text-gray-800 text-lg font-bold font-rockwell mb-2">
                Programs of Interest<span className="text-red-600">*</span>
              </label>
              <select
                id="user_programs"
                name="user_programs"
                value={selectedProgram}
                onChange={(e) => setSelectedProgram(e.target.value)}
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-red-600 bg-white"
                required
              >
                <option value="" disabled>-- Select a Program --</option>
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

            <motion.div className="mb-8" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.4 }}>
              <label htmlFor="user_message" className="block text-gray-800 text-lg font-bold font-rockwell mb-2">
                Message (Optional)
              </label>
              <textarea
                id="user_message"
                name="user_message"
                rows="2"
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-red-600"
                placeholder="Any specific questions or additional details you'd like to share?"
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="w-full py-3 bg-red-600 text-white text-xl font-bold font-rockwell rounded-md shadow-lg hover:bg-red-700 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.5 }}
            >
              Submit
            </motion.button>
          </form>
        </section>
      </main>

      {/* Footer remains unchanged */}
      {/* ...footer code same as yours, no issues found... */}
    </>
  );
};

export default JoinNowForm;
