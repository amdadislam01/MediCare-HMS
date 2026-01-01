"use client";
import React, { useState, useEffect } from 'react';
import { 
  FaRegCalendarAlt, 
  FaRegHeart, 
  FaRegHospital, 
  FaRegCreditCard, 
  FaRegClock, 
  FaUser, 
  FaStethoscope, 
  FaHashtag, 
  FaFileAlt 
} from 'react-icons/fa';

const PatientDashboardPage = () => {
  const targetDate = "2027-02-08T11:00:00"; 
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };
    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="w-full space-y-4 md:space-y-6 max-w-full overflow-hidden">
      
      {/* Top 4 Stat Cards - 1 col on mobile, 2 on tablet, 4 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4">
        <StatCard icon={<FaRegCalendarAlt />} title="Upcoming Appointments" value="1" subtitle="Next: Feb 8, 2027" />
        <StatCard icon={<FaRegHeart />} title="Favorite Doctors" value="0" subtitle="Most recent: Dr. Sarah Johnson" />
        <StatCard icon={<FaRegHospital />} title="Bed Bookings" value="0" subtitle="0 accepted" />
        <StatCard icon={<FaRegCreditCard />} title="Total Spent" value="৳ 0.00" subtitle="Across 0 orders" />
      </div>

      {/* Smart Wait-Time Prediction Box */}
      <div className="bg-card border border-default rounded-xl p-4 md:p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-1">
          <FaRegClock className="text-primary text-lg md:text-xl" />
          <h2 className="text-lg md:text-xl font-bold text-primary tracking-tight">Smart Wait-Time Prediction</h2>
        </div>
        <p className="text-secondary text-xs md:text-sm mb-6">Based on your upcoming appointment with Dr. Sarah Johnson</p>

        <div className="flex flex-col lg:flex-row gap-6 lg:items-center">
          <div className="w-full lg:w-1/3 space-y-3">
            <p className="font-bold text-primary text-sm md:text-base border-b lg:border-none pb-1 lg:pb-0">Appointment Details:</p>
            <div className="space-y-1 text-xs md:text-sm text-secondary">
              <p>2027-02-08 at 11:00am - 11:29am</p>
              <p>With: Dr. Sarah Johnson (Cardiologist)</p>
            </div>
            <div className="flex items-center gap-2 pt-1">
              <span className="text-xs font-medium text-secondary">Current Status:</span>
              <span className="bg-primary text-white px-3 py-0.5 rounded-full text-[10px] font-bold">Approved</span>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <p className="text-[10px] font-bold text-secondary mb-3 uppercase tracking-wider text-center lg:text-left">Time Until Appointment</p>
            {/* Countdown Grid - Ensures boxes don't overflow on small mobile */}
            <div className="grid grid-cols-2 xs:grid-cols-4 gap-2 md:gap-3">
              <TimeBox value={timeLeft.days} label="Days" />
              <TimeBox value={timeLeft.hours} label="Hours" />
              <TimeBox value={timeLeft.minutes} label="Minutes" />
              <TimeBox value={timeLeft.seconds} label="Seconds" />
            </div>
          </div>
        </div>
        <p className="mt-6 text-xs md:text-sm text-secondary italic border-t border-default pt-4 leading-relaxed">
          Your appointment is scheduled for a future date. Check back on the day of your appointment for wait time estimates.
        </p>
      </div>

      {/* Tabs - Better Horizontal Scroll on Mobile */}
      <div className="flex items-center bg-[#F1F5F9] p-1 rounded-lg w-full md:w-fit overflow-x-auto no-scrollbar scroll-smooth shadow-inner border border-default">
        <button className="flex-1 md:flex-none bg-card text-primary px-4 md:px-10 py-2 rounded-md shadow-sm font-bold text-xs md:text-sm whitespace-nowrap min-w-fit">Appointments</button>
        <button className="flex-1 md:flex-none text-secondary px-4 md:px-10 py-2 font-bold text-xs md:text-sm whitespace-nowrap min-w-fit">Bed Bookings</button>
        <button className="flex-1 md:flex-none text-secondary px-4 md:px-10 py-2 font-bold text-xs md:text-sm whitespace-nowrap min-w-fit">Medicine Cart (0)</button>
      </div>

      {/* Appointment Detail Section */}
      <div className="bg-card border border-default rounded-xl p-4 md:p-8 shadow-sm overflow-hidden">
        <div className="mb-6">
          <h3 className="text-lg md:text-xl font-bold text-primary">Upcoming Appointment</h3>
          <p className="text-xs md:text-sm text-secondary mt-1">Your next scheduled appointment details</p>
        </div>

        {/* Info Grid - 1 col on mobile, 2 on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-12 lg:gap-x-24 mb-8">
          <div className="space-y-4">
            <InfoRow icon={<FaUser />} label="Patient" value="Len Briggs" />
            <InfoRow icon={<FaRegCalendarAlt />} label="Date" value="Feb 8, 2027" />
            <InfoRow icon={<FaRegClock />} label="Time" value="11:00am - 11:29am" />
            <InfoRow icon={<FaHashtag />} label="Serial" value="1" />
          </div>
          <div className="space-y-4">
            <InfoRow icon={<FaStethoscope />} label="Doctor" value="Dr. Sarah Johnson" />
            <InfoRow icon={<FaFileAlt />} label="Specialty" value="Cardiologist" />
            <InfoRow icon={<FaRegCreditCard />} label="Fee" value="400" />
          </div>
        </div>

        <div className="mb-8">
          <p className="text-xs font-bold text-primary mb-1 uppercase tracking-tighter">Reason for Visit:</p>
          <p className="text-sm md:text-base text-secondary wrap-break-words">Culpa tempor qui du</p>
        </div>

        <div className="flex justify-end">
          <button className="w-full sm:w-auto border border-default text-secondary px-6 py-2.5 rounded-lg text-xs md:text-sm font-bold hover:bg-main transition-all active:scale-95 shadow-sm">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Sub-Components ---

const StatCard = ({ icon, title, value, subtitle }) => (
  <div className="bg-card border border-default p-4 rounded-xl flex justify-between items-start shadow-sm transition-all hover:border-primary/30 group">
    <div className="flex flex-col">
      <h4 className="text-[10px] font-bold text-secondary uppercase mb-1">{title}</h4>
      <p className="text-xl md:text-2xl font-bold text-primary leading-tight">{value}</p>
      <p className="text-[10px] text-muted font-medium mt-1">{subtitle}</p>
    </div>
    <div className="text-muted text-lg group-hover:text-primary transition-colors">{icon}</div>
  </div>
);

const TimeBox = ({ value, label }) => (
  <div className="bg-main border border-default rounded-lg py-2 md:py-3 px-1 text-center flex flex-col justify-center min-w-0">
    <p className="text-lg md:text-2xl font-bold text-primary truncate">{value}</p>
    <p className="text-[8px] md:text-[9px] text-secondary font-bold uppercase truncate">{label}</p>
  </div>
);

const InfoRow = ({ icon, label, value }) => (
  <div className="flex items-start md:items-center gap-3 text-xs md:text-sm border-b border-gray-50 pb-2">
    <span className="text-primary text-base w-5 shrink-0 mt-0.5 md:mt-0">{icon}</span>
    <span className="text-secondary font-medium min-w-17.5 md:min-w-22.5 shrink-0">{label}:</span>
    <span className="text-primary font-bold wrap-wrap-break-words">{value}</span>
  </div>
);

export default PatientDashboardPage;