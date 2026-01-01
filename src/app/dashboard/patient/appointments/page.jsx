"use client";
import React from 'react';
import { FaSearch, FaRegCalendarPlus } from 'react-icons/fa';
import { LuCalendarPlus } from "react-icons/lu";

const MyAppointments = () => {
  return (
    <div className="w-full min-h-screen bg-white p-4 md:p-8 font-sans">
      {/* ১. হেডার সেকশন */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1e293b] flex items-center gap-2">
          <LuCalendarPlus className="text-2xl" /> My Appointments
        </h1>
        <p className="text-gray-500 text-[15px] mt-1">
          All your appointments upcoming, current, and past in one place!
        </p>
      </div>

      {/* ২. ফিল্টার এবং সার্চ বার (রেসপনসিভ) */}
      <div className="flex flex-col lg:flex-row gap-3 mb-16">
        <div className="flex-1 relative">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 text-sm" />
          <input
            type="text"
            placeholder="Search with patient or doctor name..."
            className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 placeholder:text-gray-300 transition-all shadow-sm"
          />
        </div>
        
        <div className="flex flex-wrap md:flex-nowrap gap-2">
          <select className="bg-white border border-gray-200 text-gray-400 text-sm rounded-lg px-4 py-2.5 min-w-37.5 outline-none shadow-sm cursor-pointer hover:bg-gray-50 transition-all">
            <option>Categories</option>
          </select>
          
          <select className="bg-white border border-gray-200 text-gray-400 text-sm rounded-lg px-4 py-2.5 min-w-30 outline-none shadow-sm cursor-pointer hover:bg-gray-50 transition-all">
            <option>Sort By</option>
          </select>
          
          <button className="bg-[#0f172a] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-black transition-all shadow-md active:scale-95">
            Reset
          </button>
        </div>
      </div>

      {/* ৩. এম্পটি স্টেট (No Appointments Yet) */}
      <div className="flex flex-col items-center justify-center text-center mt-10">
        <div className="w-20 h-20 bg-[#f1f5f9] rounded-full flex items-center justify-center mb-6 shadow-inner">
          <FaRegCalendarPlus className="text-[#94a3b8] text-3xl" />
        </div>
        
        <h2 className="text-xl font-bold text-[#1e293b] mb-2">No Appointments Yet</h2>
        
        <p className="text-gray-500 text-sm max-w-100 leading-relaxed mb-8">
          You don`t have any scheduled appointments. Book a consultation with one of our specialists.
        </p>
        
        <button className="bg-[#0f172a] text-white px-8 py-3 rounded-lg text-sm font-bold shadow-lg hover:shadow-xl transition-all active:scale-95">
          Book An Appointment
        </button>
      </div>
    </div>
  );
};

export default MyAppointments;