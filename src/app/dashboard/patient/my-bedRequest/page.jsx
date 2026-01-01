"use client";
import React from 'react';
import { LuBedDouble } from "react-icons/lu";

const ManageBedBookings = () => {
  // Data array for bed bookings. Empty for now to show the 'Not Found' state.
  const bedRequests = [];

  return (
    <div className="w-full min-h-screen bg-white p-4 md:p-8 font-sans">
      
      {/* 1. Header Section - Matches image_f38183.png */}
      <div className="mb-8">
        <h1 className="text-xl md:text-2xl font-bold text-[#1e293b] flex items-center gap-2">
          <LuBedDouble className="text-2xl" /> Manage My Bed Booking Requests
        </h1>
        <p className="text-gray-500 text-sm md:text-[15px] mt-1">
          View and manage all bed booking Requests
        </p>
      </div>

      {/* 2. Responsive Content Container */}
      <div className="w-full border border-gray-100 rounded-sm shadow-sm overflow-hidden">
        
        {/* Desktop View: Full Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#f8fafc] border-b border-gray-100">
                <th className="px-3 py-3 text-[12px] font-bold text-[#1e293b]">#</th>
                <th className="px-3 py-3 text-[12px] font-bold text-[#1e293b]">Bed Image</th>
                <th className="px-3 py-3 text-[12px] font-bold text-[#1e293b]">Bed Title</th>
                <th className="px-3 py-3 text-[12px] font-bold text-[#1e293b]">Price</th>
                <th className="px-3 py-3 text-[12px] font-bold text-[#1e293b]">Requested Time</th>
                <th className="px-3 py-3 text-[12px] font-bold text-[#1e293b]">Patient Name</th>
                <th className="px-3 py-3 text-[12px] font-bold text-[#1e293b]">Patient Age</th>
                <th className="px-3 py-3 text-[12px] font-bold text-[#1e293b]">Patient Number</th>
                <th className="px-3 py-3 text-[12px] font-bold text-[#1e293b]">Admission Date</th>
                <th className="px-3 py-3 text-[12px] font-bold text-[#1e293b]">Reason</th>
                <th className="px-3 py-3 text-[12px] font-bold text-[#1e293b]">Status</th>
                <th className="px-3 py-3 text-[12px] font-bold text-[#1e293b] text-right">Actions</th>
              </tr>
            </thead>
            
            <tbody>
              {bedRequests.length === 0 ? (
                <tr>
                  <td colSpan="12" className="py-20 text-center">
                    {/* Empty State Labels from image_f38183.png */}
                    <div className="space-y-4">
                      <p className="text-[#1e293b] font-bold text-sm">No Bed Booking Requests Found</p>
                      <p className="text-gray-400 text-xs italic">A List of All Bed Booking Request</p>
                    </div>
                  </td>
                </tr>
              ) : (
                bedRequests.map((request, index) => (
                  <tr key={index} className="border-b border-gray-50 text-[12px] text-gray-600">
                    {/* Data rows would go here */}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile View: Card Layout for small screens */}
        <div className="lg:hidden">
          {bedRequests.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <p className="text-[#1e293b] font-bold text-sm">No Bed Booking Requests Found</p>
              <p className="text-gray-400 text-[11px] italic px-4">A List of All Bed Booking Request</p>
            </div>
          ) : (
            bedRequests.map((request, index) => (
              <div key={index} className="p-4 border-b border-gray-100 bg-white space-y-2">
                 {/* Individual card items for mobile */}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageBedBookings;