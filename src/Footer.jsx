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
          <h3 className="footer-title">
            True North Academy
          </h3>
          <p className="footer-description">
            Where tradition meets excellence. Our academy offers comprehensive training in martial arts,
            cultural arts, and academic enrichment. Join us in nurturing discipline, creativity, and
            personal growth through expert guidance and proven methodologies.
          </p>
          <p className="footer-quote mt-2">
            "Transforming Lives Through Excellence in Education & Training"
          </p>
        </div>

        {/* Column 2: Contact & Location */}
        <div>
          <h3 className="footer-title">
            Contact & Visit Us
          </h3>
          <p className="footer-text">
            📍 3rd Floor, STC 60 Feet Road, Meena Plaza, Perumalpuram,
            Tirunelveli, Tamil Nadu, India.
          </p>
          <p className="footer-text mt-2">
            📞 Primary: +91 93450 00685
          </p>
          <p className="footer-text mt-1">
            📞 Secondary: +91 70100 78309
          </p>
          <p className="footer-quote mt-2">
            Hours: Monday - Saturday
            <br />
            Morning: 6:00 AM - 8:00 AM
            <br />
            Evening: 4:00 PM - 8:00 PM
          </p>
        </div>

        {/* Column 3: Quick Links & Socials */}
        <div>
          <h3 className="footer-title">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="footer-link"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/programs"
                className="footer-link"
              >
                Our Programs
              </Link>
            </li>
            <li>
              <Link
                to="/staff"
                className="footer-link"
              >
                Meet Our Staff
              </Link>
            </li>
            <li>
              <Link
                to="/testimonials"
                className="footer-link"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="/join-now"
                className="footer-link"
              >
                Join Now
              </Link>
            </li>
          </ul>

          <h3 className="footer-title mt-6">
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
        <p className="footer-copyright">
          © {new Date().getFullYear()} True North Academy. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
