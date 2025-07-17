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

import Header from "./Header";
// --- Hero Background Image ---
const heroBgImage = { home_page };
import { useNavigate } from "react-router-dom";

const Home = () => {
  const form = useRef();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

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
      <Header />
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
      <section
        id="program"
        className="w-full py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-900 font-sans"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <motion.h2
            className="text-center text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight text-black"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            About Our Classes
          </motion.h2>
          <p className="text-center text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Discover enriching classes that build character, focus, fitness, and
            creativity in students of all backgrounds.
          </p>

          {/* Grid layout */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Karate",
                image: karateImage,
                description:
                  "Karate blends tradition with power, teaching focus, discipline, and self-defense through precise movements and mental control.",
                benefits: [
                  "Builds confidence & focus",
                  "Improves reflexes & strength",
                  "Instills discipline",
                ],
              },
              {
                name: "Kick Boxing",
                image: kickBoxingImage,
                description:
                  "A high-energy sport that combines boxing with martial arts kicks—ideal for building stamina, strength, and resilience.",
                benefits: [
                  "Cardio-intensive workouts",
                  "Boosts agility & speed",
                  "Sharpens defense skills",
                ],
              },
              {
                name: "Archery",
                image: archeryImage,
                description:
                  "Channel calmness and precision in every arrow. Archery strengthens focus, patience, and mind–body alignment.",
                benefits: [
                  "Enhances concentration",
                  "Improves posture",
                  "Encourages mental discipline",
                ],
              },
              {
                name: "Kobudo",
                image: kobudoImage,
                description:
                  "Master traditional weapons like bo, nunchaku, and sai while preserving ancient Okinawan martial traditions.",
                benefits: [
                  "Develops coordination",
                  "Explores martial heritage",
                  "Boosts hand–eye control",
                ],
              },
              {
                name: "Drawing",
                image: drawingImage,
                description:
                  "From sketches to storytelling through lines, drawing opens creative pathways and hones visual expression.",
                benefits: [
                  "Inspires creativity",
                  "Sharpens observation",
                  "Improves fine motor skills",
                ],
              },
              {
                name: "Silambam",
                image: silambamImage,
                description:
                  "An elegant weapon-based martial art from Tamil Nadu, Silambam promotes agility, endurance, and tradition.",
                benefits: [
                  "Boosts body control",
                  "Teaches ancient technique",
                  "Improves balance",
                ],
              },
              {
                name: "Yoga",
                image: yogaImage,
                description:
                  "A path to physical and mental well-being, yoga combines breath, posture, and inner reflection.",
                benefits: [
                  "Reduces stress",
                  "Improves flexibility",
                  "Promotes mindfulness",
                ],
              },
              {
                name: "Abacus",
                image: abacusImage,
                description:
                  "Train young minds with powerful mental math skills through the ancient bead-based calculation method.",
                benefits: [
                  "Boosts arithmetic skills",
                  "Improves memory",
                  "Enhances focus",
                ],
              },
              {
                name: "Bharatanatyam",
                image: bharatanatyamImage,
                description:
                  "Grace, rhythm, and storytelling come alive in this revered classical Indian dance form from Tamil Nadu.",
                benefits: [
                  "Builds body rhythm",
                  "Deepens cultural roots",
                  "Improves expression & poise",
                ],
              },
            ].map((cls, index) => (
              <motion.div
                key={cls.name}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.05 }}
              >
                <img
                  src={cls.image}
                  alt={cls.name}
                  className="h-56 w-full object-cover"
                />
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-xl font-bold text-red-600 mb-2">
                      {cls.name}
                    </h3>
                    <p className="text-sm text-gray-700 mb-3">
                      {cls.description}
                    </p>
                    <ul className="list-disc ml-5 space-y-1 text-sm text-gray-800">
                      {cls.benefits.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="staff"
        className="w-full py-20 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#2c2c2c] text-white font-sans"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl text-center font-bold tracking-tight mb-6 text-white"
          >
            Meet Our Passionate Instructors
          </motion.h2>

          <p className="text-center text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Our dedicated instructors are more than just teachers—they’re
            mentors who guide children with patience, creativity, and passion.
            Each brings years of experience and heartfelt commitment to shaping
            your child’s growth.
          </p>

          {/* Staff Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                image: silambam,
                name: "Muthu Sudar",
                title: "Silambam Grandmaster",
                shortDescription:
                  "With over 18 years of experience, Master Muthu Sudar has guided thousands of young learners across 16 schools. His patient, structured approach ensures every child grows strong in body and mind.",
              },
              {
                image: draw,
                name: "Dr. K. Nambi Raja",
                title: "Professor of Drawing & Arts",
                shortDescription:
                  "An award-winning artist and former Assistant Professor, Dr. Raja brings 18 years of gentle, encouraging instruction. Kids love his interactive lessons in sketching and color theory.",
              },
              {
                image: karate,
                name: "Sensei Vimal",
                title: "Karate & Kickboxing Coach",
                shortDescription:
                  "Over 30 years of martial-arts expertise, Sensei Vimal creates a safe, disciplined environment where every child learns self-defense and self-respect.",
              },
              {
                image: baratha,
                name: "M. Marimuthu",
                title: "Bharatanatyam Classical Instructor",
                shortDescription:
                  "Guru Marimuthu has taught Bharatanatyam for 20+ years, guiding students in expressive dance and storytelling to build confidence on and off the stage.",
              },
            ].map((staff) => (
              <motion.div
                key={staff.name}
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white text-gray-900 rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-transform duration-300"
              >
                <img
                  src={staff.image}
                  alt={`${staff.name} - ${staff.title}`}
                  className="w-full h-64 object-cover border-b-4 border-red-600"
                  loading="lazy"
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-1">{staff.name}</h3>
                  <p className="text-red-700 text-sm font-semibold mb-2">
                    {staff.title}
                  </p>
                  <p className="text-sm text-gray-700">
                    {staff.shortDescription}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="text-center mt-16 space-y-6">
            {/* Learn More About Staff Button */}
            <motion.button
              onClick={() => navigate("/staff")}
              whileHover={{ scale: 1.05 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-3 px-8 rounded-full shadow-lg transition-transform"
            >
              Learn More About Our Staff
            </motion.button>
          </div>
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
                Name
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
                Email<span className="text-red-600">*</span>
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
                Phone No.
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
              Submit
            </motion.button>
          </form>
        </section>
      </div>

      <TrueNorthMap />
    </div>
  );
};

export default Home;
