'use client'

import React, { useState } from 'react';
import { Users, ShieldCheck, Pill, UserCircle, Search, Filter, MoreHorizontal, ArrowUpDown } from 'lucide-react';

const TotalRoleManagement = () => {
    // all role list
    const [allUsers, setAllUsers] = useState([
        { id: 1, name: "Dr. Rakib Ahmed", email: "rakib@med.com", role: "Doctor", status: "Active", joined: "12 Dec 2025" },
        { id: 2, name: "Sumit Saha", email: "sumit@patient.com", role: "Patient", status: "Active", joined: "05 Jan 2026" },
        { id: 3, name: "Fatima Khan", email: "fatima@pharma.com", role: "Pharmacist", status: "Active", joined: "10 Jan 2026" },
        { id: 4, name: "Dr. Anika", email: "anika@med.com", role: "Doctor", status: "Inactive", joined: "15 Jan 2026" },
        { id: 5, name: "Labib Mahmud", email: "labib@pharma.com", role: "Pharmacist", status: "Active", joined: "22 Jan 2026" },
        { id: 6, name: "Tanvir Ahmed", email: "tanvir@patient.com", role: "Patient", status: "Pending", joined: "18 Jan 2026" },
    ]);

    const [filterRole, setFilterRole] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    // Role Update
    const updateRole = (id, newRole) => {
        setAllUsers(allUsers.map(user => user.id === id ? { ...user, role: newRole } : user));
    };

    // Search Filter
    const filteredUsers = allUsers.filter(user => {
        const matchesRole = filterRole === "All" || user.role === filterRole;
        const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              user.email.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesRole && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-10">
            <div className="max-w-7xl mx-auto">
                
                {/* 1. Statistics Overview Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <StatCard title="Total Users" count={allUsers.length} icon={<Users className="text-blue-600"/>} color="bg-blue-50" />
                    <StatCard title="Doctors" count={allUsers.filter(u=>u.role==='Doctor').length} icon={<ShieldCheck className="text-indigo-600"/>} color="bg-indigo-50" />
                    <StatCard title="Pharmacists" count={allUsers.filter(u=>u.role==='Pharmacist').length} icon={<Pill className="text-purple-600"/>} color="bg-purple-50" />
                    <StatCard title="Patients" count={allUsers.filter(u=>u.role==='Patient').length} icon={<UserCircle className="text-emerald-600"/>} color="bg-emerald-50" />
                </div>

                {/* 2. Controls Area */}
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="relative w-full md:w-1/3">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input 
                            type="text" 
                            placeholder="Search by name or email..."
                            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    
                    <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                        {["All", "Doctor", "Pharmacist", "Patient"].map((r) => (
                            <button 
                                key={r}
                                onClick={() => setFilterRole(r)}
                                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                                    filterRole === r ? 'bg-slate-900 text-white shadow-md' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                                }`}
                            >
                                {r}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 3. Global Management Table */}
                <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 border-b border-slate-100">
                                <tr>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">User Profile</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Assigned Role</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest text-center">Update Access</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Status</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {filteredUsers.map((user) => (
                                    <tr key={user.id} className="hover:bg-blue-50/30 transition-all group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold">
                                                    {user.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-800 leading-none">{user.name}</p>
                                                    <p className="text-xs text-slate-400 mt-1.5">{user.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-3 py-1 rounded-lg text-[10px] font-black tracking-widest uppercase ${
                                                user.role === 'Doctor' ? 'bg-indigo-100 text-indigo-700' : 
                                                user.role === 'Pharmacist' ? 'bg-purple-100 text-purple-700' : 'bg-emerald-100 text-emerald-700'
                                            }`}>
                                                {user.role}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <select 
                                                value={user.role}
                                                onChange={(e) => updateRole(user.id, e.target.value)}
                                                className="w-full text-xs font-bold bg-white border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer"
                                            >
                                                <option value="Doctor">Doctor</option>
                                                <option value="Pharmacist">Pharmacist</option>
                                                <option value="Patient">Patient</option>
                                            </select>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className={`flex items-center gap-1.5 text-xs font-bold ${user.status === 'Active' ? 'text-green-600' : 'text-slate-400'}`}>
                                                <span className={`w-1.5 h-1.5 rounded-full ${user.status === 'Active' ? 'bg-green-600' : 'bg-slate-400'}`}></span>
                                                {user.status}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                                                <MoreHorizontal size={18} className="text-slate-400" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Help Component card
const StatCard = ({ title, count, icon, color }) => (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
        <div className="flex justify-between items-start">
            <div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{title}</p>
                <h3 className="text-3xl font-black mt-1 text-slate-800">{count}</h3>
            </div>
            <div className={`p-3 ${color} rounded-2xl`}>{icon}</div>
        </div>
    </div>
);

export default TotalRoleManagement;