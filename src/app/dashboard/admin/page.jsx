//for view go to this link  http://localhost:3000/dashboard/admin
'use client'
import React, { useState } from 'react';
import { 
    Users, ShieldCheck, Pill, UserCircle, 
    DollarSign, TrendingUp, Activity, 
    Search, Filter, Calendar, ChevronRight
} from 'lucide-react';

const AdminOverview = () => {
    // Dammy Data
    const [allData, setAllData] = useState([
        { id: "UID-001", name: "Dr. Rakib Ahmed", role: "Doctor", info: "Cardiologist", amount: "৳ 12,500", status: "Active" },
        { id: "UID-002", name: "Sumit Saha", role: "Patient", info: "Blood: A+", amount: "৳ 450", status: "Stable" },
        { id: "UID-003", name: "Fatima Khan", role: "Pharmacist", info: "Lazz Pharma", amount: "৳ 55,000", status: "Active" },
        { id: "UID-004", name: "Dr. Anika", role: "Doctor", info: "Neurologist", amount: "৳ 8,400", status: "Inactive" },
        { id: "UID-005", name: "Labib Mahmud", role: "Pharmacist", info: "Model Pharmacy", amount: "৳ 22,100", status: "Active" },
        { id: "UID-006", name: "Tanvir Ahmed", role: "Patient", info: "Blood: B-", amount: "৳ 1,200", status: "Recovering" },
        { id: "UID-007", name: "Dr. Kevin Moore", role: "Doctor", info: "Orthopedic", amount: "৳ 15,200", status: "Active" },
        { id: "UID-008", name: "Sarah Taylor", role: "Patient", info: "Blood: O+", amount: "৳ 300", status: "Critical" },
        { id: "UID-009", name: "Kamrul Hassan", role: "Pharmacist", info: "Popular Pharma", amount: "৳ 12,800", status: "Pending" },
        { id: "UID-010", name: "Nusrat Jahan", role: "Doctor", info: "Pediatrician", amount: "৳ 9,600", status: "Active" },
    ]);

    const [filter, setFilter] = useState("All");

    const filteredList = filter === "All" ? allData : allData.filter(item => item.role === filter);

    return (
        <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-8 font-sans">
            <div className="max-w-7xl mx-auto">
                
                {/* 1. Dashboard Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-black text-slate-900 tracking-tight italic">ADMIN CONTROL</h1>
                        <p className="text-slate-500 font-medium">Monitoring all medical professionals, patients & revenue.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input type="text" placeholder="Search by name..." className="pl-10 pr-4 py-2.5 bg-white border-none rounded-2xl shadow-sm w-full md:w-64 focus:ring-2 focus:ring-indigo-500 outline-none" />
                        </div>
                    </div>
                </div>

                {/* 2. Top Analytics Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    <StatCard title="Overall Revenue" val="৳ 2,48,500" icon={<DollarSign/>} color="bg-emerald-500" trend="+14%" />
                    <StatCard title="Active Doctors" val="142" icon={<ShieldCheck/>} color="bg-blue-600" trend="+5" />
                    <StatCard title="New Patients" val="850" icon={<UserCircle/>} color="bg-indigo-600" trend="+22%" />
                    <StatCard title="Pharmacy Sale" val="৳ 85,200" icon={<Pill/>} color="bg-purple-600" trend="+10%" />
                </div>

                {/* 3. Main Data Table Container */}
                <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                    
                    {/* Table Filters */}
                    <div className="p-6 border-b border-slate-50 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                            {["All", "Doctor", "Pharmacist", "Patient"].map((type) => (
                                <button 
                                    key={type}
                                    onClick={() => setFilter(type)}
                                    className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${
                                        filter === type ? 'bg-slate-900 text-white shadow-lg' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                                    }`}
                                >
                                    {type}s
                                </button>
                            ))}
                        </div>
                        <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest">
                            <Filter size={16}/> Filter by Date
                        </div>
                    </div>

                    {/* Table Content */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50/50">
                                    <th className="px-8 py-5 text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">Unique ID</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">User Details</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">Role & Dept</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">Status</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">Total Transaction</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {filteredList.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50/80 transition-all group">
                                        <td className="px-8 py-5 font-mono text-xs text-slate-400">{item.id}</td>
                                        <td className="px-8 py-5">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center font-black text-slate-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                                    {item.name.charAt(0)}
                                                </div>
                                                <span className="font-bold text-slate-800">{item.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5">
                                            <div>
                                                <span className={`text-[10px] font-black uppercase px-2 py-1 rounded-md ${
                                                    item.role === 'Doctor' ? 'bg-blue-100 text-blue-600' : 
                                                    item.role === 'Pharmacist' ? 'bg-purple-100 text-purple-600' : 'bg-emerald-100 text-emerald-600'
                                                }`}>
                                                    {item.role}
                                                </span>
                                                <p className="text-xs text-slate-400 mt-1 font-medium">{item.info}</p>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5">
                                            <div className="flex items-center gap-2">
                                                <div className={`w-1.5 h-1.5 rounded-full ${item.status === 'Active' || item.status === 'Stable' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]' : 'bg-slate-300'}`}></div>
                                                <span className="text-xs font-bold text-slate-600">{item.status}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5 font-black text-slate-800 tracking-tight">{item.amount}</td>
                                        <td className="px-8 py-5">
                                            <button className="flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors">
                                                Details <ChevronRight size={14}/>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Footer / Pagination Mockup */}
                    <div className="p-6 bg-slate-50/50 border-t border-slate-50 flex justify-between items-center">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Showing {filteredList.length} of 1,250 results</p>
                        <div className="flex gap-2">
                            <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold hover:bg-slate-50 transition-all shadow-sm">Previous</button>
                            <button className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">Next Page</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Status Card
const StatCard = ({ title, val, icon, color, trend }) => (
    <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-300 group">
        <div className="flex justify-between items-start mb-4">
            <div className={`p-3 ${color} text-white rounded-2xl shadow-lg shadow-slate-200 group-hover:scale-110 transition-transform`}>
                {icon}
            </div>
            <span className="text-[10px] font-black text-emerald-500 bg-emerald-50 px-2 py-1 rounded-lg">
                {trend}
            </span>
        </div>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{title}</p>
        <h3 className="text-2xl font-black text-slate-900 mt-1">{val}</h3>
    </div>
);

export default AdminOverview;