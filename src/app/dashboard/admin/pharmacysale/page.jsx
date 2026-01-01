'use client'

import React, { useState } from 'react';
import { 
    DollarSign, 
    TrendingUp, 
    Package, 
    ShoppingCart, 
    ArrowUpRight, 
    ArrowDownRight, 
    Download,
    Calendar,
    Filter
} from 'lucide-react';

const TotalSale = () => {
    // Sales Data
    const salesData = [
        { id: "TRX-9901", date: "01 Jan 2026", items: "Napa Extend, Sergel 20", customer: "Abdur Rahim", amount: 450.50, status: "Completed" },
        { id: "TRX-9902", date: "01 Jan 2026", items: "Ceevit (10 strips)", customer: "Karim Ullah", amount: 220.00, status: "Completed" },
        { id: "TRX-9903", date: "31 Dec 2025", items: "Insulin Humalog", customer: "Dr. Anika", amount: 1250.00, status: "Pending" },
        { id: "TRX-9904", date: "31 Dec 2025", items: "Hand Sanitizer, Mask", customer: "Walk-in Customer", amount: 310.00, status: "Completed" },
        { id: "TRX-9905", date: "30 Dec 2025", items: "Savlon 500ml", customer: "Lazz Pharma", amount: 5500.00, status: "Completed" },
    ];

    return (
        <div className="min-h-screen p-4 md:p-10 font-sans">
            <div className="max-w-7xl mx-auto">
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Sales Overview</h1>
                        <p className="text-slate-500">Track your pharmacy revenue and transaction logs.</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all">
                            <Download size={18} /> Export Report
                        </button>
                        <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all">
                            + New Sale
                        </button>
                    </div>
                </div>

                {/* Statistics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    <SaleCard 
                        title="Total Revenue" 
                        value="৳ 1,45,200" 
                        change="+12.5%" 
                        isUp={true} 
                        icon={<DollarSign className="text-emerald-600" />} 
                        bg="bg-emerald-50" 
                    />
                    <SaleCard 
                        title="Total Orders" 
                        value="1,240" 
                        change="+5.2%" 
                        isUp={true} 
                        icon={<ShoppingCart className="text-blue-600" />} 
                        bg="bg-blue-50" 
                    />
                    <SaleCard 
                        title="Medicine Sold" 
                        value="8,420" 
                        change="-2.1%" 
                        isUp={false} 
                        icon={<Package className="text-orange-600" />} 
                        bg="bg-orange-50" 
                    />
                    <SaleCard 
                        title="Avg. Daily Sale" 
                        value="৳ 4,840" 
                        change="+8.4%" 
                        isUp={true} 
                        icon={<TrendingUp className="text-indigo-600" />} 
                        bg="bg-indigo-50" 
                    />
                </div>

                {/* Sales Table Section */}
                <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                        <h3 className="font-bold text-slate-800 text-lg flex items-center gap-2">
                            Recent Transactions
                        </h3>
                        <div className="flex gap-2">
                            <button className="p-2 bg-slate-50 rounded-lg text-slate-400"><Filter size={18}/></button>
                            <button className="p-2 bg-slate-50 rounded-lg text-slate-400"><Calendar size={18}/></button>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50/50">
                                <tr>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Transaction ID</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Customer / Payer</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Items Purchased</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Date</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Amount</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {salesData.map((sale) => (
                                    <tr key={sale.id} className="hover:bg-slate-50/80 transition-all cursor-pointer group">
                                        <td className="px-6 py-4 font-mono text-xs text-indigo-600 font-bold">{sale.id}</td>
                                        <td className="px-6 py-4 font-bold text-slate-700">{sale.customer}</td>
                                        <td className="px-6 py-4 text-sm text-slate-500">{sale.items}</td>
                                        <td className="px-6 py-4 text-sm text-slate-500">{sale.date}</td>
                                        <td className="px-6 py-4 font-black text-slate-800 tracking-tight">৳ {sale.amount}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                                                sale.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                                            }`}>
                                                {sale.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Footer Insight */}
                    <div className="bg-slate-900 p-6 flex flex-col md:flex-row justify-between items-center text-white">
                        <div className="flex gap-8 mb-4 md:mb-0">
                            <div>
                                <p className="text-slate-400 text-[10px] uppercase font-bold tracking-[0.2em]">Net Profit</p>
                                <p className="text-xl font-bold text-emerald-400">৳ 24,500.00</p>
                            </div>
                            <div className="border-l border-slate-700 pl-8">
                                <p className="text-slate-400 text-[10px] uppercase font-bold tracking-[0.2em]">Tax Collected</p>
                                <p className="text-xl font-bold">৳ 1,205.50</p>
                            </div>
                        </div>
                        <button className="w-full md:w-auto px-6 py-2.5 bg-indigo-500 hover:bg-indigo-400 rounded-xl font-bold transition-all text-sm">
                            View Full Ledger
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Status Card Components
const SaleCard = ({ title, value, change, isUp, icon, bg }) => (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-4">
            <div className={`p-3 ${bg} rounded-2xl`}>{icon}</div>
            <div className={`flex items-center gap-1 text-xs font-bold ${isUp ? 'text-emerald-500' : 'text-red-500'}`}>
                {isUp ? <ArrowUpRight size={14}/> : <ArrowDownRight size={14}/>} {change}
            </div>
        </div>
        <p className="text-slate-500 text-sm font-medium">{title}</p>
        <h3 className="text-2xl font-black text-slate-800 mt-1 tracking-tight">{value}</h3>
    </div>
);

export default TotalSale;