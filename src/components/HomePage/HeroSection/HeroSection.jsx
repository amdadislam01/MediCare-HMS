'use client';

import { motion } from 'framer-motion';
import {
  CalendarCheck,
  Stethoscope,
  Users,
  Award,
  HeartPulse,
  Star,
} from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden flex items-center justify-center bg-blue-900 text-white min-h-screen py-10">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover bg-primary"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/videos/Hero_BG.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 container max-w-7xl mx-auto px-2 sm:px-6 lg:px-6 text-center">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Delivering Exceptional Healthcare
          </h2>

          <p className="text-lg md:text-2xl lg:text-3xl text-blue-200 mt-4 max-w-3xl mx-auto">
            Services with Compassion and Expertise.
          </p>

          <p className="text-lg text-blue-200 mt-2">
            Your health and well-being are our top priorities.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center py-6"
        >
          {/* Book Appointment */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              flex items-center justify-center gap-2
              px-6 py-3
              rounded-lg
              bg-primary
              font-semibold
              transition-all duration-300
              hover:shadow-lg
            "
          >
            <CalendarCheck size={20} />
            Book Appointment
          </motion.button>

          {/* Find a Doctor */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              flex items-center justify-center gap-2
              px-6 py-3
              rounded-lg
              bg-secondary
              font-semibold
              transition-all duration-300
              hover:shadow-lg
            "
          >
            <Stethoscope size={20} />
            Find a Doctor
          </motion.button>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10"
        >
          {/* Stat Card 1 */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="relative group rounded-xl"
          >
            {/* Hover Border */}
            <div className="absolute inset-0 rounded-xl border border-blue-400 opacity-0 group-hover:opacity-100 transition duration-300"></div>

            {/* Content */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center group-hover:shadow-xl transition duration-300">
              <Users
                className="mx-auto mb-2 text-blue-200 group-hover:scale-110 transition duration-300"
                size={28}
              />
              <h3 className="text-3xl font-bold">25k+</h3>
              <p className="text-sm text-blue-100">Happy Patients</p>
            </div>
          </motion.div>

          {/* Stat Card 2 */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="relative group rounded-xl"
          >
            <div className="absolute inset-0 rounded-xl border border-cyan-400 opacity-0 group-hover:opacity-100 transition duration-300"></div>

            <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center group-hover:shadow-xl transition duration-300">
              <Stethoscope
                className="mx-auto mb-2 text-blue-200 group-hover:scale-110 transition duration-300"
                size={28}
              />
              <h3 className="text-3xl font-bold">120+</h3>
              <p className="text-sm text-blue-100">Expert Doctors</p>
            </div>
          </motion.div>

          {/* Stat Card 3 */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="relative group rounded-xl"
          >
            <div className="absolute inset-0 rounded-xl border border-indigo-400 opacity-0 group-hover:opacity-100 transition duration-300"></div>

            <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center group-hover:shadow-xl transition duration-300">
              <Award
                className="mx-auto mb-2 text-blue-200 group-hover:scale-110 transition duration-300"
                size={28}
              />
              <h3 className="text-3xl font-bold">15+</h3>
              <p className="text-sm text-blue-100">Years Experience</p>
            </div>
          </motion.div>

          {/* Stat Card 4 */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="relative group rounded-xl"
          >
            <div className="absolute inset-0 rounded-xl border border-emerald-400 opacity-0 group-hover:opacity-100 transition duration-300"></div>

            <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center group-hover:shadow-xl transition duration-300">
              <Star
                className="mx-auto mb-2 text-blue-200 group-hover:scale-110 transition duration-300"
                size={28}
              />
              <h3 className="text-3xl font-bold">98%</h3>
              <p className="text-sm text-blue-100">Success Rate</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
