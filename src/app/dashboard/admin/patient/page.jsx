'use client'

import React, { useState } from 'react';
import { Search, Users, Activity, Calendar, Droplets, ArrowUpRight, MoreHorizontal } from 'lucide-react';

const PatientManagement = () => {
    // Patient List
    const [members, setMembers] = useState([
        { id: "P-501", name: "Tanvir Mahtab", email: "tanvir@gmail.com", role: "Patient", blood: "A+", lastVisit: "20 Dec 2025", condition: "Stable" },
        { id: "D-202", name: "Dr. Selina Begum", email: "selina@hospital.com", role: "Doctor", blood: "B+", lastVisit: "N/A", condition: "Healthy" },
        { id: "P-505", name: "Rahima Khatun", email: "rahima.k@outlook.com", role: "Patient", blood: "O-", lastVisit: "02 Jan 2026", condition: "Critical" },
        { id: "PH-109", name: "Nusrat Faria", email: "faria@pharma.com", role: "Pharmacist", blood: "AB+", lastVisit: "N/A", condition: "Healthy" },
        { id: "P-510", name: "Arifur Rahman", email: "arif.88@gmail.com", role: "Patient", blood: "B-", lastVisit: "28 Dec 2025", condition: "Recovering" },
    ]);

    const [searchTerm, setSearchTerm] = useState("");

    const handleRoleUpdate = (id, newRole) => {
        setMembers(members.map(m => m.id === id ? { ...m, role: newRole } : m));
    };

    const filteredMembers = members.filter(m => 
        m.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        m.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen  p-4 md:p-6">
            <div className="max-w-7xl mx-auto">
                
                {/* Dashboard Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-slate-500 text-sm font-medium">Total Patients</p>
                                <h3 className="text-2xl font-bold mt-1">{members.filter(m => m.role === 'Patient').length}</h3>
                            </div>
                            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Users size={20}/></div>
                        </div>
                    </div>
                    <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-slate-500 text-sm font-medium">Critical Cases</p>
                                <h3 className="text-2xl font-bold mt-1 text-red-600">01</h3>
                            </div>
                            <div className="p-2 bg-red-50 text-red-600 rounded-lg"><Activity size={20}/></div>
                        </div>
                    </div>
                    {/* Add more stats as needed */}
                </div>

                {/* Table Section */}
                <div className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden">
                    <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
                        <h2 className="text-xl font-bold text-slate-800 tracking-tight">Patient Directory</h2>
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input 
                                type="text"
                                placeholder="Search patients by name..."
                                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Patient Name</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase text-center">Blood Group</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Condition</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Last Visit</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase text-center">Management</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {filteredMembers.map((member) => (
                                    <tr key={member.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600">
                                                    {member.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-800">{member.name}</p>
                                                    <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${
                                                        member.role === 'Patient' ? 'bg-emerald-100 text-emerald-700' : 
                                                        member.role === 'Doctor' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                                                    }`}>
                                                        {member.role}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <div className="inline-flex items-center gap-1 text-red-600 font-bold bg-red-50 px-3 py-1 rounded-lg text-sm">
                                                <Droplets size={14} /> {member.blood}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`text-sm font-semibold ${
                                                member.condition === 'Critical' ? 'text-red-600' : 
                                                member.condition === 'Stable' ? 'text-blue-600' : 'text-slate-600'
                                            }`}>
                                                {member.condition}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-500 font-medium">
                                            <div className="flex items-center gap-2">
                                                <Calendar size={14} /> {member.lastVisit}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex justify-center items-center gap-3">
                                                <select 
                                                    value={member.role}
                                                    onChange={(e) => handleRoleUpdate(member.id, e.target.value)}
                                                    className="text-xs font-bold border border-slate-200 rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-400 bg-white shadow-sm"
                                                >
                                                    <option value="Patient">SET AS PATIENT</option>
                                                    <option value="Doctor">SET AS DOCTOR</option>
                                                    <option value="Pharmacist">SET AS PHARMACIST</option>
                                                </select>
                                                <button className="text-slate-400 hover:text-slate-600 transition-colors">
                                                    <ArrowUpRight size={18} />
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

export default PatientManagement;