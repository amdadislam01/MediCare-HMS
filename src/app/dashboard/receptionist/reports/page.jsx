"use client";

import { useState } from "react";
import {
  FaFileAlt,
  FaCalendarAlt,
  FaDownload,
  FaPrint,
  FaChartLine,
  FaUserMd,
  FaUserInjured,
  FaMoneyBillWave,
  FaBed,
  FaClipboardList,
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

export default function ReportsPage() {
  const [reportType, setReportType] = useState("daily");
  const [selectedDate, setSelectedDate] = useState("2026-01-01");
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  const dailySummary = {
    date: "January 01, 2026",
    totalPatients: 127,
    newRegistrations: 15,
    appointments: 58,
    emergencies: 8,
    revenue: 245300,
    bedOccupancy: "85%",
    averageWaitTime: "18 min",
  };

  const departmentStats = [
    {
      name: "Cardiology",
      patients: 32,
      appointments: 28,
      revenue: 84000,
      doctors: 4,
    },
    {
      name: "Neurology",
      patients: 25,
      appointments: 22,
      revenue: 67500,
      doctors: 3,
    },
    {
      name: "Orthopedics",
      patients: 28,
      appointments: 24,
      revenue: 56000,
      doctors: 3,
    },
    {
      name: "Pediatrics",
      patients: 22,
      appointments: 18,
      revenue: 33000,
      doctors: 2,
    },
    {
      name: "General Medicine",
      patients: 20,
      appointments: 16,
      revenue: 24000,
      doctors: 2,
    },
  ];

  const topDoctors = [
    {
      name: "Dr. Michael Khan",
      department: "Cardiology",
      patients: 15,
      revenue: 45000,
      rating: 4.9,
    },
    {
      name: "Dr. Fatima Rahman",
      department: "Neurology",
      patients: 12,
      revenue: 36000,
      rating: 4.8,
    },
    {
      name: "Dr. Ahmed Hassan",
      department: "Orthopedics",
      patients: 11,
      revenue: 33000,
      rating: 4.7,
    },
    {
      name: "Dr. Sarah Johnson",
      department: "Cardiology",
      patients: 10,
      revenue: 30000,
      rating: 4.8,
    },
  ];

  const recentActivities = [
    {
      time: "04:45 PM",
      activity: "Patient Check-in",
      details: "David Lee checked in for neurology consultation",
    },
    {
      time: "04:30 PM",
      activity: "Payment Received",
      details: "৳8,500 payment received from Maria Garcia",
    },
    {
      time: "04:15 PM",
      activity: "Bed Assignment",
      details: "Bed ICU-103 assigned to Emily Wilson",
    },
    {
      time: "04:00 PM",
      activity: "Appointment Scheduled",
      details: "New appointment booked for Jan 5, 2026",
    },
    {
      time: "03:45 PM",
      activity: "Patient Discharge",
      details: "Robert Brown discharged from bed GW-201",
    },
  ];

  const handleDownloadReport = () => {
    toast.success("Downloading report...");
  };

  const handlePrintReport = () => {
    toast.success("Printing report...");
  };

  const handleGenerateReport = () => {
    toast.success("Generating custom report...");
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <Toaster position="top-right" />

      {/* Header */}
      <div className="bg-card rounded-xl shadow-md p-4 md:p-6 border border-default">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              Daily Reports
            </h1>
            <p className="text-sm md:text-base text-muted">
              View and generate hospital operation reports
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={handlePrintReport}
              className="flex-1 sm:flex-none bg-gray-600 text-white px-4 py-2 md:py-3 rounded-lg font-semibold hover:bg-gray-700 transition flex items-center justify-center gap-2 text-sm"
            >
              <FaPrint />
              <span className="hidden sm:inline">Print</span>
            </button>
            <button
              onClick={handleDownloadReport}
              className="flex-1 sm:flex-none bg-primary text-white px-4 py-2 md:py-3 rounded-lg font-semibold hover:bg-primary-dark transition flex items-center justify-center gap-2 text-sm"
            >
              <FaDownload />
              <span className="hidden sm:inline">Download</span>
            </button>
          </div>
        </div>
      </div>

      {/* Report Filters */}
      <div className="bg-card rounded-xl shadow-md p-4 md:p-6 border border-default">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-semibold text-primary mb-2">
              Report Type
            </label>
            <select
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              className="w-full px-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-primary"
            >
              <option value="daily">Daily Report</option>
              <option value="weekly">Weekly Report</option>
              <option value="monthly">Monthly Report</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-primary mb-2">
              Select Date
            </label>
            <div className="relative">
              <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" />
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-primary mb-2">
              Department
            </label>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="w-full px-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-primary"
            >
              <option value="all">All Departments</option>
              <option value="cardiology">Cardiology</option>
              <option value="neurology">Neurology</option>
              <option value="orthopedics">Orthopedics</option>
              <option value="pediatrics">Pediatrics</option>
            </select>
          </div>
        </div>
        <button
          onClick={handleGenerateReport}
          className="w-full mt-4 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Generate Report
        </button>
      </div>

      {/* Daily Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-md p-4 text-white">
          <div className="flex items-center gap-2 mb-2">
            <FaUserInjured className="text-xl md:text-2xl" />
          </div>
          <p className="text-xs font-medium mb-1">Total Patients</p>
          <p className="text-2xl md:text-3xl font-bold">
            {dailySummary.totalPatients}
          </p>
          <p className="text-xs mt-1 opacity-90">
            +{dailySummary.newRegistrations} new
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-md p-4 text-white">
          <div className="flex items-center gap-2 mb-2">
            <FaClipboardList className="text-xl md:text-2xl" />
          </div>
          <p className="text-xs font-medium mb-1">Appointments</p>
          <p className="text-2xl md:text-3xl font-bold">
            {dailySummary.appointments}
          </p>
          <p className="text-xs mt-1 opacity-90">
            {dailySummary.emergencies} emergencies
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-md p-4 text-white">
          <div className="flex items-center gap-2 mb-2">
            <FaMoneyBillWave className="text-xl md:text-2xl" />
          </div>
          <p className="text-xs font-medium mb-1">Revenue</p>
          <p className="text-xl md:text-2xl font-bold">
            ৳{(dailySummary.revenue / 1000).toFixed(0)}K
          </p>
          <p className="text-xs mt-1 opacity-90">Today's collection</p>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-md p-4 text-white">
          <div className="flex items-center gap-2 mb-2">
            <FaBed className="text-xl md:text-2xl" />
          </div>
          <p className="text-xs font-medium mb-1">Bed Occupancy</p>
          <p className="text-2xl md:text-3xl font-bold">
            {dailySummary.bedOccupancy}
          </p>
          <p className="text-xs mt-1 opacity-90">
            Wait: {dailySummary.averageWaitTime}
          </p>
        </div>
      </div>

      {/* Department Performance */}
      <div className="bg-card rounded-xl shadow-md border border-default">
        <div className="p-4 md:p-6 border-b border-default">
          <div className="flex items-center gap-2">
            <FaChartLine className="text-primary text-lg" />
            <h3 className="text-lg md:text-xl font-bold text-primary">
              Department Performance
            </h3>
          </div>
          <p className="text-xs md:text-sm text-muted mt-1">
            {dailySummary.date}
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-secondary uppercase">
                  Department
                </th>
                <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-secondary uppercase">
                  Patients
                </th>
                <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-secondary uppercase hidden md:table-cell">
                  Appointments
                </th>
                <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-secondary uppercase">
                  Revenue
                </th>
                <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-secondary uppercase hidden lg:table-cell">
                  Doctors
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-default">
              {departmentStats.map((dept, index) => (
                <tr key={index} className="hover:bg-gray-50 transition">
                  <td className="px-4 md:px-6 py-4">
                    <p className="text-sm md:text-base font-medium text-primary">
                      {dept.name}
                    </p>
                  </td>
                  <td className="px-4 md:px-6 py-4">
                    <p className="text-sm md:text-base font-bold text-blue-600">
                      {dept.patients}
                    </p>
                  </td>
                  <td className="px-4 md:px-6 py-4 hidden md:table-cell">
                    <p className="text-sm md:text-base text-secondary">
                      {dept.appointments}
                    </p>
                  </td>
                  <td className="px-4 md:px-6 py-4">
                    <p className="text-sm md:text-base font-semibold text-green-600">
                      ৳{dept.revenue.toLocaleString()}
                    </p>
                  </td>
                  <td className="px-4 md:px-6 py-4 hidden lg:table-cell">
                    <p className="text-sm md:text-base text-secondary">
                      {dept.doctors}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performing Doctors */}
        <div className="bg-card rounded-xl shadow-md border border-default">
          <div className="p-4 md:p-6 border-b border-default">
            <div className="flex items-center gap-2">
              <FaUserMd className="text-primary text-lg" />
              <h3 className="text-lg md:text-xl font-bold text-primary">
                Top Performing Doctors
              </h3>
            </div>
            <p className="text-xs md:text-sm text-muted mt-1">Based on today's performance</p>
          </div>
          <div className="p-4 md:p-6 space-y-4">
            {topDoctors.map((doctor, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 md:p-4 bg-gray-50 rounded-lg hover:shadow-md transition"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm md:text-base font-semibold text-primary truncate">
                      {doctor.name}
                    </p>
                    <p className="text-xs text-muted">{doctor.department}</p>
                  </div>
                </div>
                <div className="text-right ml-2">
                  <p className="text-xs md:text-sm font-bold text-green-600">
                    ৳{(doctor.revenue / 1000).toFixed(0)}K
                  </p>
                  <p className="text-xs text-muted">{doctor.patients} patients</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-card rounded-xl shadow-md border border-default">
          <div className="p-4 md:p-6 border-b border-default">
            <div className="flex items-center gap-2">
              <FaClipboardList className="text-primary text-lg" />
              <h3 className="text-lg md:text-xl font-bold text-primary">
                Recent Activities
              </h3>
            </div>
            <p className="text-xs md:text-sm text-muted mt-1">Latest updates</p>
          </div>
          <div className="p-4 md:p-6 space-y-4 max-h-[400px] overflow-y-auto">
            {recentActivities.map((activity, index) => (
              <div
                key={index}
                className="flex gap-3 md:gap-4 pb-4 border-b border-default last:border-0 last:pb-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="text-xs md:text-sm font-semibold text-primary">
                      {activity.activity}
                    </p>
                    <span className="text-xs text-muted whitespace-nowrap">
                      {activity.time}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-secondary">
                    {activity.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Report Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <button className="bg-card border border-default rounded-xl p-4 md:p-6 hover:shadow-lg transition text-left group">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-lg group-hover:scale-110 transition">
              <FaFileAlt className="text-xl" />
            </div>
            <div>
              <p className="text-sm md:text-base font-bold text-primary">
                Patient Report
              </p>
              <p className="text-xs text-muted">Generate patient summary</p>
            </div>
          </div>
        </button>

        <button className="bg-card border border-default rounded-xl p-4 md:p-6 hover:shadow-lg transition text-left group">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-green-100 text-green-600 p-3 rounded-lg group-hover:scale-110 transition">
              <FaMoneyBillWave className="text-xl" />
            </div>
            <div>
              <p className="text-sm md:text-base font-bold text-primary">
                Financial Report
              </p>
              <p className="text-xs text-muted">Revenue & expenses</p>
            </div>
          </div>
        </button>

        <button className="bg-card border border-default rounded-xl p-4 md:p-6 hover:shadow-lg transition text-left group">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-purple-100 text-purple-600 p-3 rounded-lg group-hover:scale-110 transition">
              <FaUserMd className="text-xl" />
            </div>
            <div>
              <p className="text-sm md:text-base font-bold text-primary">
                Doctor Report
              </p>
              <p className="text-xs text-muted">Performance analysis</p>
            </div>
          </div>
        </button>

        <button className="bg-card border border-default rounded-xl p-4 md:p-6 hover:shadow-lg transition text-left group">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-orange-100 text-orange-600 p-3 rounded-lg group-hover:scale-110 transition">
              <FaBed className="text-xl" />
            </div>
            <div>
              <p className="text-sm md:text-base font-bold text-primary">
                Bed Report
              </p>
              <p className="text-xs text-muted">Occupancy & availability</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
