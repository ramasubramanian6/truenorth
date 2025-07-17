import React from "react";
import Header from "./Header.jsx";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aarav S.",
    feedback:
      "We were looking for a place that could build confidence and discipline in our son—and we found it here. The martial arts program has truly transformed the way he carries himself.",
    course: "Karate",
  },
  {
    name: "Priya R.",
    feedback:
      "My daughter absolutely loves her art classes. Every week she comes home proud of what she’s created. Ms. Priya’s gentle guidance has really helped her grow and explore her creativity.",
    course: "Drawing & Fine Arts",
  },
  {
    name: "Vikram T.",
    feedback:
      "Silambam has done more for me than just fitness. It’s helped me become more focused, more patient. Rajan sir pushes us in the best way possible and makes the sessions so engaging.",
    course: "Silambam",
  },
  {
    name: "Meena K.",
    feedback:
      "Bharatanatyam here feels like coming home to tradition. The way they teach—with passion, respect, and personal attention—has reignited my daughter’s love for dance.",
    course: "Bharatanatyam",
  },
];

export default function Testimonials() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 py-16 px-4 mt-16">
        <h1 className="text-4xl font-bold text-center text-orange-600 mb-10 font-rockwell">
          What Our Students and Parents Say
        </h1>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-6 border-4 border-orange-300 flex flex-col justify-between"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-700 text-[1.05rem] mb-4 leading-relaxed">
                “{t.feedback}”
              </p>
              <div className="flex flex-col items-start">
                <span className="font-semibold text-orange-700">{t.name}</span>
                <span className="text-sm text-gray-500">
                  Course: {t.course}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.a
            href="https://wa.me/919345000685"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="inline-block px-8 py-4 bg-green-500 text-white font-bold rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
          >
            Have a story to share? We'd love to hear from you.
          </motion.a>
        </div>
      </div>
    </>
  );
}
