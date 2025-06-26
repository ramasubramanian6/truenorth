// Home.jsx
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

// --- Local Image Imports ---
// Make sure these paths are correct relative to your Home.jsx file
import logoImage from './assets/react.svg'; // Assuming react.svg is your logo
import abacusImage from './assets/TRUENORTH-abacus.jpeg';
import archeryImage from './assets/TRUENORTH-archery.jpeg';
import bharatanatyamImage from './assets/TRUENORTH-bharatanatyam.jpeg';
import drawingImage from './assets/TRUENORTH-drawing.jpeg';
import karateImage from './assets/TRUENORTH-karate.png';
import kickBoxingImage from './assets/TRUENORTH-kick boxing.jpg';
import kobudoImage from './assets/TRUENORTH-kobudo.jpeg';
import silambamImage from './assets/TRUENORTH-silambam.jpeg';
import yogaImage from './assets/TRUENORTH-yoga.jpeg';

// --- Placeholder/Remote Image URLs (do NOT import these as modules) ---
// If you have actual local files for these, uncomment the import and replace the URL.
const heroBgImage = 'https://placehold.co/1440x920'; // Keep as string if it's a remote placeholder
const socialIcon1 = 'https://placehold.co/40x40';   // Keep as string if it's a remote placeholder
const socialIcon2 = 'https://placehold.co/40x40';   // Keep as string if it's a remote placeholder
const staffPlaceholder = 'https://placehold.co/368x355'; // Keep as string if it's a remote placeholder
const locationPin = 'https://www.svgrepo.com/show/513515/location-pin.svg'; // Keep as string for the SVG icon

const Home = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again later.');
        },
      );
  };

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Animation variants for items within sections (staggered effect)
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <div className="min-h-screen bg-white font-sans overflow-hidden">
      {/* Header */}
      <motion.header
        className="w-full h-16 bg-black bg-opacity-80 flex items-center justify-between px-3 sm:px-6 shadow-lg fixed top-0 left-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 15 }}
      >
        <motion.img
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover"
          src={logoImage}
          alt="Logo"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        />
        <nav className="hidden md:flex space-x-5 lg:space-x-8">
          {['Home', 'About', 'Program', 'Staff', 'Contact'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-center text-base lg:text-lg font-medium font-roboto leading-normal transition-colors duration-300 ${
                item === 'Home' ? 'text-orange-500' : 'text-white hover:text-orange-500'
              }`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>
        <div className="flex items-center space-x-2 sm:space-x-3">
          <motion.img
            className="w-7 h-7 sm:w-8 sm:h-8 cursor-pointer opacity-80 hover:opacity-100"
            src={socialIcon1} // Using string variable
            alt="Social Icon 1"
            whileHover={{ scale: 1.15 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          />
          <motion.img
            className="w-7 h-7 sm:w-8 sm:h-8 cursor-pointer opacity-80 hover:opacity-100"
            src={socialIcon2} // Using string variable
            alt="Social Icon 2"
            whileHover={{ scale: 1.15 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          />
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="w-full h-[calc(100vh-64px)] pt-16 relative overflow-hidden flex items-center justify-center">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={heroBgImage} // Using string variable
          alt="Hero Background"
        />
        <motion.div
          className="relative z-10 text-center p-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        >
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold font-rockwell leading-tight drop-shadow-lg">
            Master Your Craft
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl mt-3 max-w-xl mx-auto drop-shadow-md">
            Unleash your potential through discipline, focus, and ancient traditions.
          </p>
          <motion.button
            className="mt-6 px-6 py-2 bg-red-600 text-white text-lg font-bold rounded-full shadow-lg hover:bg-red-700 transition-colors duration-300"
            whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(0,0,0,0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Join a Free Class Today!
          </motion.button>
        </motion.div>
      </section>

      {/* About Our Classes Section */}
      <section id="program" className="w-full py-12 bg-white overflow-hidden">
        <motion.h2
          className="text-center text-3xl sm:text-4xl font-bold font-rockwell underline text-black mb-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          About Our Classes
        </motion.h2>

        {/* Class Listings */}
        {[
          {
            name: 'Karate',
            description:
              'Karate is a traditional Japanese martial art that emphasizes discipline, focus, and powerful striking techniques using punches, kicks, knee strikes, and open-hand techniques.',
            image: karateImage,
            reverse: false,
          },
          {
            name: 'Kick Boxing',
            description:
              'Kickboxing is a dynamic combat sport that blends the powerful punches of boxing with the agile kicks of martial arts.',
            image: kickBoxingImage,
            reverse: true,
          },
          {
            name: 'Archery',
            description:
              'Archery is the art of precision and patience, where focus meets grace in every shot. With every arrow released, archery teaches control, discipline, and the power of a calm mind.',
            image: archeryImage,
            reverse: false,
          },
          {
            name: 'Kobudo',
            description:
              'Kobudo is the ancient Okinawan martial art focusing on the use of traditional weapons like the bo, nunchaku, kama, and sai.',
            image: kobudoImage,
            reverse: true,
          },
          {
            name: 'Drawing',
            description:
              'Drawing is the art of seeing with your hands, where imagination flows through every line and shape.',
            image: drawingImage,
            reverse: false,
          },
          {
            name: 'Silambam',
            description:
              'Silambam is an ancient and dynamic martial art from Tamil Nadu, India, characterized by its fluid movements and weapon-based combat, primarily using a bamboo staff.',
            image: silambamImage,
            reverse: true,
          },
          {
            name: 'Yoga',
            description:
              'Yoga is a holistic practice originating in ancient India, combining physical postures, breathing techniques, and meditation to foster harmony between mind, body, and spirit.',
            image: yogaImage,
            reverse: false,
          },
          {
            name: 'Abacus',
            description:
              'The abacus is an ancient calculating tool that uses beads on rods to perform arithmetic operations, predating modern electronic calculators and still used today for teaching fundamental number concepts.',
            image: abacusImage,
            reverse: true,
          },
          {
            name: 'Bharatanatyam',
            description:
              'Bharatanatyam is an ancient and expressive Indian classical dance form from Tamil Nadu.',
            image: bharatanatyamImage,
            reverse: false,
          },
        ].map((classItem, index) => (
          <motion.div
            key={classItem.name}
            className={`flex flex-col items-center justify-center gap-5 md:gap-10 mb-14 px-3 sm:px-6 ${
              classItem.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.img
              className="w-40 h-40 sm:w-48 sm:h-48 rounded-md object-cover flex-shrink-0"
              src={classItem.image}
              alt={classItem.name}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div className="w-full max-w-2xl bg-red-600 rounded-md p-5 shadow-lg">
              <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold font-rockwell mb-2 text-center md:text-left">
                {classItem.name}
              </h3>
              <p className="text-white text-sm sm:text-base lg:text-lg font-normal font-rockwell leading-relaxed text-center md:text-left">
                {classItem.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </section>

      {/* Meet Our Staff Section */}
      <section id="staff" className="w-full py-12 bg-black overflow-hidden">
        <motion.h2
          className="text-center text-3xl sm:text-4xl font-bold font-rockwell tracking-wider text-white mb-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          MEET OUR STAFF
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 pb-8 max-w-6xl mx-auto">
          {[
            {
              image: staffPlaceholder, // Using string variable
              description: 'Instructor of Karate, Kick boxing, Archery.',
            },
            {
              image: staffPlaceholder, // Using string variable
              description: 'Instructor of Drawing, Sculptures.',
            },
            {
              image: staffPlaceholder, // Using string variable
              description: 'Instructor of Silambam',
            },
            {
              image: staffPlaceholder, // Using string variable
              description: 'Instructor of Archery',
            },
            {
              image: staffPlaceholder, // Using string variable
              description: 'Instructor of Bharatnatyam, Classical dance.',
            },
            {
              image: staffPlaceholder, // Using string variable
              description: 'Instructor of Music',
            },
          ].map((staff, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center shadow-lg rounded-lg overflow-hidden bg-white"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <img
                className="w-full h-auto object-cover border-b-2 border-black"
                src={staff.image}
                alt={`Staff ${index + 1}`}
              />
              <div className="w-full bg-red-600 border-t-2 border-black p-3 text-center">
                <p className="text-white text-base sm:text-lg font-normal font-rockwell leading-relaxed">
                  {staff.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Us Section - Top Part */}
      <section id="contact" className="w-full py-10 bg-red-600 overflow-hidden text-center shadow-inner">
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
          className="text-black text-base sm:text-lg font-normal font-rockwell leading-relaxed px-4 max-w-3xl mx-auto"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2 }}
        >
          Should you have any questions, please feel free to reach us @{' '}
          <span className="font-bold">93450 00685 / 70100 78309</span>
        </motion.p>
      </section>

      {/* Get In Touch Form Section */}
      <section className="w-full py-12 bg-white overflow-hidden">
        <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto px-4 sm:px-6">
          <motion.div
            className="mb-4"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <label htmlFor="user_first_name" className="block text-black text-base font-rockwell leading-tight mb-1">
              Your First Name
            </label>
            <input
              type="text"
              id="user_first_name"
              name="user_first_name"
              className="w-full p-2 border border-black focus:outline-none focus:border-red-600 transition-colors duration-200 text-sm"
            />
          </motion.div>

          <motion.div
            className="mb-4"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1 }}
          >
            <label htmlFor="user_last_name" className="block text-black text-base font-rockwell leading-tight mb-1">
              Your Last Name
            </label>
            <input
              type="text"
              id="user_last_name"
              name="user_last_name"
              className="w-full p-2 border border-black focus:outline-none focus:border-red-600 transition-colors duration-200 text-sm"
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
            <label htmlFor="user_email" className="block text-black text-base font-rockwell leading-tight mb-1">
              Your Email<span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              className="w-full p-2 border border-black focus:outline-none focus:border-red-600 transition-colors duration-200 text-sm"
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
            <label htmlFor="user_phone" className="block text-black text-base font-rockwell leading-tight mb-1">
              Your Phone No.
            </label>
            <input
              type="tel"
              id="user_phone"
              name="user_phone"
              className="w-full p-2 border border-black focus:outline-none focus:border-red-600 transition-colors duration-200 text-sm"
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
            <label htmlFor="user_programs" className="block text-black text-base font-rockwell leading-tight mb-1">
              Programs of Interest
            </label>
            <input
              type="text"
              id="user_programs"
              name="user_programs"
              className="w-full p-2 border border-black focus:outline-none focus:border-red-600 transition-colors duration-200 text-sm"
              placeholder="e.g., Karate, Drawing"
            />
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
            Get In Touch
          </motion.button>
        </form>
      </section>

      {/* Map Section */}
      <section className="w-full h-[280px] md:h-[350px] lg:h-[400px] bg-stone-200 relative overflow-hidden flex items-center justify-center">
        {/* Placeholder for Google Map - In a real application, replace this with an embedded Google Map iframe */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.423985790403!2d77.69742417502422!3d8.718049891823795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0412e88a0b0f4d%3A0xc3f605a92a5b6d0!2sMeena%20Plaza!5e0!3m2!1sen!2sin!4v1719407338574!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Roundhouse Karate School Location"
          className="absolute inset-0 z-0"
        ></iframe>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
          <img className="w-6 h-10 mb-2" src={locationPin} alt="Location Pin" />
          <motion.div
            className="bg-white rounded-lg shadow-xl p-3 text-center min-w-[180px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-black text-base font-bold font-roboto mb-1">Roundhouse Karate School</h3>
            <p className="text-gray-700 text-xs">3rd Floor, Meena Plaza,</p>
            <p className="text-gray-700 text-xs">60 Feet Road, Perumalpuram,</p>
            <p className="text-gray-700 text-xs">Tirunelveli, Tamil Nadu, India</p>
          </motion.div>
        </div>
      </section>

      {/* Stay Updated Footer */}
      <motion.footer
        className="w-full py-10 bg-black text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-orange-500 text-2xl sm:text-3xl font-bold font-rockwell tracking-wider mb-6">
          STAY UPDATED
        </h2>
        <div className="max-w-xl mx-auto px-4">
          <div className="mb-5 text-left">
            <label htmlFor="newsletterEmail" className="block text-white text-sm font-rockwell leading-snug mb-1">
              Enter your email here<span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="newsletterEmail"
              name="newsletterEmail"
              className="w-full p-2 bg-black border border-white text-white placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors duration-200 text-sm"
              placeholder="your.email@example.com"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <label className="flex items-center text-white text-xs font-normal font-rockwell leading-snug cursor-pointer">
              <input
                type="checkbox"
                className="mr-2 w-4 h-4 border border-white bg-black accent-red-600 focus:ring-red-600 transition-colors duration-200"
              />
              Yes, subscribe me to your newsletter.
            </label>
            <motion.button
              type="submit"
              className="w-full sm:w-auto px-5 py-2 bg-red-600 text-black text-base font-medium font-roboto rounded-md shadow-md hover:bg-red-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe Now
            </motion.button>
          </div>
        </div>
        <p className="text-white text-lg sm:text-xl font-bold font-rockwell mt-10 px-4 max-w-3xl mx-auto leading-relaxed">
          📍 3rd Floor, STC 60 Feet Road, Meena Plaza, Perumalpuram, Tirunelveli.
        </p>
      </motion.footer>
    </div>
  );
};

export default Home;