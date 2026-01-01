"use client";
import React from 'react';
import { LuHistory, LuShoppingBag } from "react-icons/lu";

const OrdersHistoryPage = () => {
  // Data array for orders. Currently empty to show the 'Empty State'
  const orders = [];

  return (
    <div className="w-full min-h-screen bg-white p-4 md:p-8 font-sans">
      
      {/* 1. Page Header Section - Matches image_f38585.png */}
      <div className="mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-[#1e293b] flex items-center gap-2">
          <LuHistory className="text-2xl" /> Orders History
        </h1>
        <p className="text-gray-500 text-sm md:text-[15px] mt-1">
          View all your pending, present orders and past purchases in one place!
        </p>
      </div>

      {/* 2. Main Content Card - Matches the bordered container in image_f38585.png */}
      <div className="w-full border border-gray-200 rounded-xl p-8 md:p-20 shadow-sm min-h-100 flex items-center justify-center">
        
        {/* Empty State View */}
        {orders.length === 0 ? (
          <div className="flex flex-col items-center text-center max-w-md">
            
            {/* Centered Bag Icon in Circle */}
            <div className="w-16 h-16 bg-[#f1f5f9] rounded-full flex items-center justify-center mb-6">
              <LuShoppingBag className="text-[#94a3b8] text-2xl" />
            </div>

            {/* Empty State Labels */}
            <h2 className="text-lg font-bold text-[#1e293b] mb-2">
              No orders or purchase history found
            </h2>
            
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-8">
              Looks like you haven`t made any purchases yet. Once you place an order, 
              all your order details, tracking info, and history will appear here — happy shopping!
            </p>

            {/* Make An Order Button */}
            <button className="bg-[#0f172a] text-white px-8 py-2.5 rounded-lg text-sm font-bold shadow-md hover:bg-black transition-all active:scale-95">
              Make An Order
            </button>
          </div>
        ) : (
          /* If there were orders, the list/table would go here */
          <div className="w-full">
            {/* Order data mapping */}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersHistoryPage;