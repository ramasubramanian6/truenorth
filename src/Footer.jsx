import React from "react";
import { motion } from "framer-motion";
import { FaInstagramSquare, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
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
            Where tradition meets excellence. Our academy offers comprehensive training in martial arts,
            cultural arts, and academic enrichment. Join us in nurturing discipline, creativity, and
            personal growth through expert guidance and proven methodologies.
          </p>
          <p className="text-gray-400 text-xs mt-2 font-roboto">
            "Transforming Lives Through Excellence in Education & Training"
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
            📞 Primary: +91 93450 00685
          </p>
          <p className="text-gray-300 text-sm mt-1 font-roboto">
            📞 Secondary: +91 70100 78309
          </p>
          <p className="text-gray-400 text-xs mt-2 font-roboto">
            Hours: Monday - Saturday
            <br />
            Morning: 6:00 AM - 8:00 AM
            <br />
            Evening: 4:00 PM - 8:00 PM
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
              <Link
                to="/staff"
                className="text-gray-300 hover:text-orange-500 transition-colors duration-300 text-sm font-roboto"
              >
                Meet Our Staff
              </Link>
            </li>
            <li>
              <Link
                to="/testimonials"
                className="text-gray-300 hover:text-orange-500 transition-colors duration-300 text-sm font-roboto"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="/join-now"
                className="text-gray-300 hover:text-orange-500 transition-colors duration-300 text-sm font-roboto"
              >
                Join Now
              </Link>
            </li>
          </ul>

          <h3 className="text-xl font-bold font-rockwell mt-6 mb-4 text-orange-500">
            Connect With Us
          </h3>
          <div className="flex space-x-4">
            <motion.a
              href="https://www.instagram.com/tnorthco/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-orange-600"
              whileHover={{ scale: 1.1 }}
            >
              <FaInstagramSquare className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="https://wa.me/919345000685"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-green-600"
              whileHover={{ scale: 1.1 }}
            >
              <FaWhatsapp className="w-8 h-8" />
            </motion.a>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-gray-800 text-center">
        <p className="text-gray-400 text-sm font-roboto">
          © {new Date().getFullYear()} True North Academy. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
