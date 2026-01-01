'use client'

import React, { useState } from 'react';
import { Search, Filter, UserCog, Mail, Phone, MoreHorizontal, CheckCircle, Clock } from 'lucide-react';

const DoctorManagement = () => {
    // doctors list
    const [users, setUsers] = useState([
        { id: 1, name: "Dr. Ariful Islam", email: "ariful@health.com", role: "Doctor", specialty: "Cardiologist", status: "Available", image: "https://i.pravatar.cc/150?u=1" },
        { id: 2, name: "Dr. Sarah Taylor", email: "sarah.t@health.com", role: "Doctor", specialty: "Neurologist", status: "On Leave", image: "https://i.pravatar.cc/150?u=2" },
        { id: 3, name: "Mr. Rahat Khan", email: "rahat@gmail.com", role: "Patient", specialty: "N/A", status: "Active", image: "https://i.pravatar.cc/150?u=3" },
        { id: 4, name: "Ms. Laboni Akter", email: "laboni@pharma.com", role: "Pharmacist", specialty: "Pharmacy Manager", status: "Active", image: "https://i.pravatar.cc/150?u=4" },
        { id: 5, name: "Dr. Kevin Moore", email: "kevin.m@health.com", role: "Doctor", specialty: "Orthopedic", status: "Available", image: "https://i.pravatar.cc/150?u=5" },
        { id: 6, name: "Dr. Nusrat Jahan", email: "nusrat@health.com", role: "Doctor", specialty: "Pediatrician", status: "Busy", image: "https://i.pravatar.cc/150?u=6" },
    ]);

    const [searchTerm, setSearchTerm] = useState("");

    // role update
    const handleRoleChange = (id, newRole) => {
        setUsers(users.map(user => user.id === id ? { ...user, role: newRole } : user));
    };

    // search system
    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        user.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-10 font-sans text-slate-900">
            <div className="max-w-7xl mx-auto">
                
                {/* Top Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                    <div>
                        <h1 className="text-2xl font-extrabold tracking-tight text-slate-800 flex items-center gap-2">
                            <UserCog className="text-indigo-600" /> Doctor & Staff Management
                        </h1>
                        <p className="text-slate-500 text-sm">Update roles, monitor status and manage medical professionals.</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input 
                                type="text" 
                                placeholder="Search by name or role..."
                                className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none w-full md:w-64 transition-all shadow-sm"
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <button className="p-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50">
                            <Filter size={20} className="text-slate-600" />
                        </button>
                    </div>
                </div>

                {/* Main Table Content */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50/50 border-b border-slate-100">
                                    <th className="px-6 py-4 text-xs font-bold uppercase text-slate-400 tracking-wider">Professional Info</th>
                                    <th className="px-6 py-4 text-xs font-bold uppercase text-slate-400 tracking-wider">Expertise</th>
                                    <th className="px-6 py-4 text-xs font-bold uppercase text-slate-400 tracking-wider">Role</th>
                                    <th className="px-6 py-4 text-xs font-bold uppercase text-slate-400 tracking-wider">Status</th>
                                    <th className="px-6 py-4 text-xs font-bold uppercase text-slate-400 tracking-wider">Management</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {filteredUsers.map((user) => (
                                    <tr key={user.id} className="hover:bg-indigo-50/30 transition-all group">
                                        {/* User Name & Email */}
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <img src={user.image} alt="" className="w-10 h-10 rounded-full object-cover ring-2 ring-white group-hover:ring-indigo-200 transition-all" />
                                                <div>
                                                    <p className="font-bold text-slate-800 leading-tight">{user.name}</p>
                                                    <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                                                        <Mail size={12} /> {user.email}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Specialty */}
                                        <td className="px-6 py-4">
                                            <p className="text-sm font-medium text-slate-600 italic">
                                                {user.specialty}
                                            </p>
                                        </td>

                                        {/* Role with Dynamic Color */}
                                        <td className="px-6 py-4">
                                            <span className={`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-tighter ${
                                                user.role === 'Doctor' ? 'bg-indigo-100 text-indigo-700' : 
                                                user.role === 'Pharmacist' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'
                                            }`}>
                                                {user.role}
                                            </span>
                                        </td>

                                        {/* Status */}
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-1.5">
                                                {user.status === 'Available' || user.status === 'Active' ? 
                                                    <CheckCircle size={14} className="text-emerald-500" /> : 
                                                    <Clock size={14} className="text-amber-500" />
                                                }
                                                <span className="text-sm font-semibold text-slate-700">{user.status}</span>
                                            </div>
                                        </td>

                                        {/* Action: Role Selection */}
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <select 
                                                    value={user.role}
                                                    onChange={(e) => handleRoleChange(user.id, e.target.value)}
                                                    className="text-xs font-bold bg-slate-100 border-none rounded-lg px-2 py-1.5 focus:ring-2 focus:ring-indigo-400 outline-none cursor-pointer hover:bg-slate-200 transition-colors"
                                                >
                                                    <option value="Doctor">MAKE DOCTOR</option>
                                                    <option value="Patient">MAKE PATIENT</option>
                                                    <option value="Pharmacist">MAKE PHARMACIST</option>
                                                </select>
                                                <button className="text-slate-400 hover:text-indigo-600 p-1">
                                                    <MoreHorizontal size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Footer Insight */}
                <div className="mt-6 flex justify-between items-center bg-indigo-900 text-white p-4 rounded-2xl shadow-lg">
                    <div className="flex gap-6">
                        <div><p className="text-xs opacity-70 uppercase font-bold">Total Personnel</p><p className="text-xl font-bold">{users.length}</p></div>
                        <div className="border-l border-indigo-700 pl-6">
                            <p className="text-xs opacity-70 uppercase font-bold">Active Doctors</p>
                            <p className="text-xl font-bold">{users.filter(u => u.role === 'Doctor').length}</p>
                        </div>
                    </div>
                    <button className="bg-indigo-500 hover:bg-indigo-400 px-4 py-2 rounded-xl text-sm font-bold transition-all">Download Report</button>
                </div>
            </div>
        </div>
    );
};

export default DoctorManagement;