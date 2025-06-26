import React from "react";
import { motion } from "framer-motion";
import { MdLocationOn } from "react-icons/md";

const embedUrl = "https://maps.google.com/maps?q=8.698833,77.737000&z=17&output=embed";
const openMapUrl = "https://www.google.com/maps?q=8.698833,77.737000";

const TrueNorthMap = () => {
  return (
    <section className="w-full h-[300px] md:h-[400px] lg:h-[500px] relative overflow-hidden">
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Exact True North Location"
        className="absolute inset-0 z-0"
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
        <motion.div
          className="w-10 h-10 mb-2 cursor-pointer text-red-600"
          onClick={() => window.open(openMapUrl, "_blank")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MdLocationOn className="w-full h-full" />
        </motion.div>

        <motion.div
          className="bg-white rounded-lg shadow-xl p-2 text-center min-w-[200px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-black text-base font-bold font-roboto mb-1">
            True North Academy
          </h3>
          <p className="text-gray-700 text-xs leading-snug">
            Sivaram Nagar, Palayamkottai, Tirunelveli, Tamil Nadu 627002
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrueNorthMap;
