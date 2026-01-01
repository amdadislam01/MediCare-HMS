"use client";
import React from 'react';
import { FaUserMd, FaStar, FaBriefcase, FaMoneyBillWave } from 'react-icons/fa';

const FavoriteDoctorsPage = () => {
  // Sample data to demonstrate the responsive layout
  const favoriteDoctors = [
    { name: "Dr. Ayesha Rahman", rating: "4.8", exp: "10 Years", fee: "৳ 800" }
  ]; 

  return (
    <div className="w-full min-h-screen bg-white p-4 md:p-8 font-sans">
      
      {/* 1. Header Section - Matches image_f37a07.png */}
      <div className="mb-8">
        <h1 className="text-xl md:text-2xl font-bold text-[#1e293b] flex items-center gap-2">
          <FaUserMd className="text-xl md:text-2xl" /> Favorite Doctors
        </h1>
        <p className="text-gray-500 text-xs md:text-[15px] mt-1">
          View your all favorite doctors
        </p>
      </div>

      {/* 2. Main Content Area */}
      <div className="w-full border border-gray-100 rounded-sm shadow-sm overflow-hidden">
        
        {/* Desktop Table View - Hidden on mobile, shown on md screens and up */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#f8fafc] border-b border-gray-100">
                <th className="px-4 py-3 text-[13px] font-bold text-[#1e293b] w-16">SI.</th>
                <th className="px-4 py-3 text-[13px] font-bold text-[#1e293b]">Doctor</th>
                <th className="px-4 py-3 text-[13px] font-bold text-[#1e293b]">Rating</th>
                <th className="px-4 py-3 text-[13px] font-bold text-[#1e293b]">Experience</th>
                <th className="px-4 py-3 text-[13px] font-bold text-[#1e293b]">Consultation Fee</th>
                <th className="px-4 py-3 text-[13px] font-bold text-[#1e293b] text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {favoriteDoctors.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-4 py-10 text-center text-gray-400 text-sm italic">
                    A list of your favorite doctors.
                  </td>
                </tr>
              ) : (
                favoriteDoctors.map((doc, index) => (
                  <tr key={index} className="border-b border-gray-50 hover:bg-gray-50 transition-all">
                    <td className="px-4 py-4 text-sm text-gray-600">{index + 1}</td>
                    <td className="px-4 py-4 text-sm font-semibold text-[#1e293b]">{doc.name}</td>
                    <td className="px-4 py-4 text-sm text-gray-600">{doc.rating}</td>
                    <td className="px-4 py-4 text-sm text-gray-600">{doc.exp}</td>
                    <td className="px-4 py-4 text-sm text-gray-600">{doc.fee}</td>
                    <td className="px-4 py-4 text-sm text-right">
                       <button className="text-blue-600 font-bold text-xs hover:underline">View</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View - Shown on mobile, hidden on md screens and up */}
        <div className="md:hidden">
          {favoriteDoctors.length === 0 ? (
            <div className="p-10 text-center text-gray-400 text-sm italic">
              A list of your favorite doctors.
            </div>
          ) : (
            favoriteDoctors.map((doc, index) => (
              <div key={index} className="p-4 border-b border-gray-100 space-y-3 bg-white">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-gray-400 uppercase">SI. {index + 1}</span>
                  <button className="text-blue-600 font-bold text-xs">View Profile</button>
                </div>
                
                <div>
                  <h3 className="text-sm font-bold text-[#1e293b]">{doc.name}</h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-[11px] text-gray-600">
                    <FaStar className="text-yellow-400" /> <span>{doc.rating} Rating</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-gray-600">
                    <FaBriefcase className="text-blue-400" /> <span>{doc.exp} Exp</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-gray-600">
                    <FaMoneyBillWave className="text-green-500" /> <span>Fee: {doc.fee}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FavoriteDoctorsPage;