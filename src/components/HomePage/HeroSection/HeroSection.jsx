'use client';

import { motion } from 'framer-motion';
import { CalendarCheck, Stethoscope, Users, Award, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden flex items-center justify-center bg-blue-900 text-white pt-35 pb-15 mt-20">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/videos/Hero_BG.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className=" text-3xl md:text-5xl lg:text-7xl font-bold leading-tight">
            Delivering Exceptional Healthcare
          </h2>

          <p className="text-base sm:text-lg md:text-2xl text-blue-200 mt-4 max-w-3xl mx-auto">
            Services with Compassion and Expertise.
          </p>

          <p className="text-sm sm:text-base text-blue-200 mt-2">
            Your health and well-being are our top priorities.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center py-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-lg bg-primary font-semibold"
          >
            <CalendarCheck size={20} />
            Book Appointment
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-lg bg-secondary font-semibold"
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
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-15   "
        >
          {[
            { icon: Users, value: '25k+', label: 'Happy Patients' },
            { icon: Stethoscope, value: '120+', label: 'Expert Doctors' },
            { icon: Award, value: '15+', label: 'Years Experience' },
            { icon: Star, value: '98%', label: 'Success Rate' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 text-center"
            >
              <stat.icon className="mx-auto mb-2 text-blue-200" size={24} />
              <h3 className="text-xl sm:text-3xl font-bold">{stat.value}</h3>
              <p className="text-xs sm:text-sm text-blue-100">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
