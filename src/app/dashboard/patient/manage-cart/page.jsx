"use client";
import React from 'react';
import { LuShoppingBag } from "react-icons/lu";

const ManageCartPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] p-4 md:p-10 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        
        {/* Left Side: Order Summary */}
        <div className="flex-1 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-[#1e293b] mb-6 text-left">Your order</h2>
          
          {/* Empty Cart Placeholder */}
          <div className="border border-gray-100 rounded-lg p-10 flex flex-col items-center justify-center min-h-75 relative overflow-hidden">
             {/* Simple Illustration Placeholder */}
             <div className="w-48 h-32 bg-gray-50 rounded-lg flex items-center justify-center mb-4 relative">
                <div className="absolute top-2 right-4 bg-pink-500 text-white text-[10px] px-2 py-0.5 rounded-full">0 Items</div>
                <div className="text-4xl">☹️</div>
             </div>
             <p className="text-gray-300 font-medium text-sm mt-4">Your cart is Empty!</p>
             <p className="text-gray-300 text-xs italic">Add something to make me happy!!</p>
          </div>

          {/* Pricing Details */}
          <div className="mt-10 space-y-4 border-t border-gray-50 pt-6">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 font-medium">Subtotal</span>
              <span className="text-[#1e293b] font-bold">৳ 0.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 font-medium">Shipping Cost</span>
              <span className="text-[#1e293b] font-bold">৳ 0</span>
            </div>
            <div className="flex justify-between text-base border-t border-gray-100 pt-4">
              <span className="text-[#1e293b] font-black">Total</span>
              <span className="text-[#1e293b] font-black">৳ 0.00</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <button className="bg-[#0f172a] text-white px-8 py-2.5 rounded-lg text-sm font-bold shadow-md hover:bg-black transition-all active:scale-95">
              Continue Shopping
            </button>
            <button className="bg-[#ff4d4d] text-white px-8 py-2.5 rounded-lg text-sm font-bold shadow-md flex items-center gap-2 hover:bg-red-600 transition-all active:scale-95">
              Clear Cart <LuShoppingBag size={14} />
            </button>
          </div>
        </div>

        {/* Right Side: User Information Form */}
        <div className="w-full lg:w-112.5 space-y-6">
          <div className="space-y-4">
            <InputGroup label="Name" placeholder="patient" defaultValue="patient" />
            <InputGroup label="Email" placeholder="patient57229@gmail.com" defaultValue="patient57229@gmail.com" />
            
            <div className="flex flex-col md:flex-row gap-4">
               <div className="flex-1">
                 <label className="block text-xs font-bold text-[#1e293b] mb-2 uppercase tracking-tight">Phone number</label>
                 <div className="flex border border-gray-200 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                    <span className="bg-gray-50 px-3 py-2.5 text-sm text-gray-500 border-r border-gray-100">BD +880</span>
                    <input type="text" className="w-full px-4 py-2.5 text-sm outline-none placeholder:text-gray-300" placeholder="Enter Your Phone Number!" />
                 </div>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <SelectGroup label="Division" options={["Select Division"]} />
               <SelectGroup label="District" options={["Select Division First"]} />
            </div>

            <InputGroup label="Address" placeholder="Enter Your Location" />
            
            {/* Payment Method Error Message */}
            <div className="pt-2">
               <label className="block text-xs font-bold text-[#1e293b] mb-2 uppercase tracking-tight">Payment method</label>
               <p className="text-red-500 text-sm font-medium">Failed to load payment options</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

// Reusable Input Component
const InputGroup = ({ label, placeholder, defaultValue = "" }) => (
  <div className="flex flex-col">
    <label className="text-xs font-bold text-[#1e293b] mb-2 uppercase tracking-tight">{label}</label>
    <input 
      type="text" 
      defaultValue={defaultValue}
      placeholder={placeholder} 
      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all placeholder:text-gray-300"
    />
  </div>
);

// Reusable Select Component
const SelectGroup = ({ label, options }) => (
  <div className="flex flex-col">
    <label className="text-xs font-bold text-[#1e293b] mb-2 uppercase tracking-tight">{label}</label>
    <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-400 outline-none focus:ring-2 focus:ring-blue-100 transition-all bg-white cursor-pointer">
      {options.map((opt, i) => <option key={i}>{opt}</option>)}
    </select>
  </div>
);

export default ManageCartPage;