import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Header from "./Header.jsx";

// Images
import archeryImg from "./assets/TRUENORTH-drawing-instructor.jpeg";
import silambamImg from "./assets/TRUENORTH-silambam-instructor.jpeg";
import karateImg from "./assets/TRUENORTH-karate-instructor.jpeg";
import bharatanatyamImg from "./assets/TRUENORTH-bharatanatyam-instructor.jpeg";

// Instructor Data
const instructors = [
  {
    name: "Muthu Sudar",
    title: "Silambam Grandmaster",
    image: silambamImg,
    tagline: "Building confidence, discipline & joy through ancient art.",
    description:
      "With over 18 years of experience, Master Muthu Sudar has guided thousands of young learners across 16 schools. His patient, structured approach ensures every child grows strong in body and mind.",
    highlights: [
      "18+ years teaching children",
      "Mentor at 16+ schools",
      "Certified Silambam Federation Trainer",
    ],
  },
  {
    name: "Dr. K. Nambi Raja",
    title: "Professor of Drawing & Arts",
    image: archeryImg,
    tagline: "Inspiring creativity in every child’s hands.",
    description:
      "An award-winning artist and former Assistant Professor, Dr. Raja brings 18 years of gentle, encouraging instruction. Kids love his interactive lessons in sketching and color theory.",
    highlights: [
      "18+ years in fine arts education",
      "University Gold Medalist",
      "Founder of Creative Roots Academy",
    ],
  },
  {
    name: "Sensei Vimal",
    title: "Karate & Kickboxing Coach",
    image: karateImg,
    tagline: "Teaching respect, focus & self-confidence.",
    description:
      "Over 30 years of martial-arts expertise, Sensei Vimal creates a safe, disciplined environment where every child learns self-defense and self-respect.",
    highlights: [
      "Black Belt 5th Dan",
      "Internationally certified coach",
      "Developer of kids’ self-defense program",
    ],
  },
  {
    name: "M. Marimuthu",
    title: "Bharatanatyam Classical Instructor",
    image: bharatanatyamImg,
    tagline: "Nurturing grace, rhythm & cultural pride.",
    description:
      "Guru Marimuthu has taught Bharatanatyam for 20+ years, guiding students in expressive dance and storytelling to build confidence on and off the stage.",
    highlights: [
      "20+ years teaching children",
      "Choreographer of youth recitals",
      "Founder of Narthana Natyalaya",
    ],
  },
];

// Animation
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function Staff() {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <section
        id="instructors"
        className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 py-20 px-4 mt-16"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold text-center text-red-700 mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Meet Our Trusted Instructors
          </motion.h1>

          <p className="text-center text-gray-700 mb-16 max-w-2xl mx-auto font-bold text-xl">
            Our expert instructors create a safe, nurturing environment where your child can grow in confidence, creativity, and discipline.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {instructors.map((inst, idx) => (
              <motion.article
                key={inst.name}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                <img
                  src={inst.image}
                  alt={`${inst.name}, ${inst.title}`}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 flex flex-col flex-1">
                  <p className="italic text-gray-700 mb-3">{inst.tagline}</p>
                  <h2 className="text-xl font-bold text-red-700">{inst.name}</h2>
                  <h3 className="text-sm text-gray-600 mb-4">{inst.title}</h3>
                  <p className="text-gray-700 text-sm mb-4 flex-1 leading-relaxed">
                    {inst.description}
                  </p>
                  <ul className="list-disc list-inside text-gray-800 mb-6 space-y-1">
                    {inst.highlights.map((point, i) => (
                      <li key={i} className="text-sm">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Single Trust-Building CTA */}
          <div className="text-center mt-16">
            <motion.button
              onClick={() => navigate("/join-now")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 hover:bg-red-700 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition"
            >
              Enroll Your Child Today
            </motion.button>
          </div>
        </div>
      </section>
    </>
  );
}
