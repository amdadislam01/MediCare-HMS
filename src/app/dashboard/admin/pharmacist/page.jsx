'use client'

import React, { useState } from 'react';
import { Search, Package, UserPlus, ClipboardList, CheckCircle2, XCircle, MoreVertical } from 'lucide-react';

const PharmacistManagement = () => {
    // pharmacist list
    const [staff, setStaff] = useState([
        { id: "PH-101", name: "Anisur Rahman", email: "anis@pharma.com", role: "Pharmacist", shop: "Lazz Pharma", license: "D-4452", status: "Active" },
        { id: "DOC-202", name: "Dr. Selina Begum", email: "selina@hospital.com", role: "Doctor", shop: "Central Aid", license: "BMDC-882", status: "Active" },
        { id: "PH-105", name: "Kamrul Hassan", email: "kamrul@med.com", role: "Pharmacist", shop: "Popular Pharma", license: "D-9981", status: "Pending" },
        { id: "PAT-301", name: "Tanvir Mahtab", email: "tanvir@gmail.com", role: "Patient", shop: "N/A", license: "N/A", status: "Active" },
        { id: "PH-109", name: "Nusrat Faria", email: "faria@pharma.com", role: "Pharmacist", shop: "Model Pharmacy", license: "D-1120", status: "Active" },
    ]);

    const [search, setSearch] = useState("");

    const handleRoleUpdate = (id, newRole) => {
        setStaff(staff.map(user => user.id === id ? { ...user, role: newRole } : user));
    };

    const filteredStaff = staff.filter(user => 
        user.name.toLowerCase().includes(search.toLowerCase()) || 
        user.role.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
                
                {/* Header Stats Area */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-blue-600 flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500 font-medium">Total Pharmacists</p>
                            <h3 className="text-2xl font-bold">{staff.filter(s => s.role === 'Pharmacist').length}</h3>
                        </div>
                        <Package className="text-blue-600 opacity-20" size={40} />
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-green-600 flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500 font-medium">Active Licenses</p>
                            <h3 className="text-2xl font-bold">{staff.filter(s => s.status === 'Active' && s.role === 'Pharmacist').length}</h3>
                        </div>
                        <CheckCircle2 className="text-green-600 opacity-20" size={40} />
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-orange-500 flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500 font-medium">New Requests</p>
                            <h3 className="text-2xl font-bold">02</h3>
                        </div>
                        <UserPlus className="text-orange-500 opacity-20" size={40} />
                    </div>
                </div>

                {/* Main Table Section */}
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-6 border-b border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
                        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                            <ClipboardList className="text-blue-600" /> Staff & Role Directory
                        </h2>
                        <div className="relative w-full md:w-80">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input 
                                type="text"
                                placeholder="Search by name or license..."
                                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Staff Details</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">License/ID</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Organization</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Current Role</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-center">Update Access</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {filteredStaff.map((user) => (
                                    <tr key={user.id} className="hover:bg-gray-50/80 transition-all">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shadow-md ${user.role === 'Pharmacist' ? 'bg-indigo-500' : 'bg-blue-400'}`}>
                                                    {user.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-gray-800 tracking-tight">{user.name}</p>
                                                    <p className="text-xs text-gray-400 font-medium">{user.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 font-mono text-sm text-gray-600">{user.license}</td>
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-500">{user.shop}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                                                user.role === 'Pharmacist' ? 'bg-purple-100 text-purple-700' : 
                                                user.role === 'Doctor' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                                            }`}>
                                                {user.role}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex justify-center items-center gap-3">
                                                <select 
                                                    value={user.role}
                                                    onChange={(e) => handleRoleUpdate(user.id, e.target.value)}
                                                    className="bg-white border border-gray-200 text-xs font-bold rounded-lg px-3 py-2 outline-none focus:border-blue-500 cursor-pointer shadow-sm hover:border-gray-300 transition-all"
                                                >
                                                    <option value="Pharmacist">Make Pharmacist</option>
                                                    <option value="Doctor">Make Doctor</option>
                                                    <option value="Patient">Make Patient</option>
                                                </select>
                                                <button className="text-gray-300 hover:text-gray-600">
                                                    <MoreVertical size={20} />
                                                </button>
                                            </div>
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

export default PharmacistManagement;