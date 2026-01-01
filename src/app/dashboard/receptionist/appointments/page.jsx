"use client";

import { useState } from "react";
import {
  FaCalendarPlus,
  FaSearch,
  FaFilter,
  FaClock,
  FaUserMd,
  FaPhone,
  FaEdit,
  FaTrash,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

export default function AppointmentsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [showNewAppointmentModal, setShowNewAppointmentModal] = useState(false);

  const appointments = [
    {
      id: "APT-001",
      patientName: "Sarah Ahmed",
      phone: "+880 1712-345678",
      time: "09:00 AM - 09:30 AM",
      date: "2026-01-02",
      doctor: "Dr. Michael Khan",
      department: "Cardiology",
      status: "Confirmed",
      type: "Follow-up",
      notes: "Regular checkup",
    },
    {
      id: "APT-002",
      patientName: "John Smith",
      phone: "+880 1823-456789",
      time: "09:30 AM - 10:00 AM",
      date: "2026-01-02",
      doctor: "Dr. Fatima Rahman",
      department: "Neurology",
      status: "Pending",
      type: "New Patient",
      notes: "First consultation",
    },
    {
      id: "APT-003",
      patientName: "Emily Wilson",
      phone: "+880 1934-567890",
      time: "10:00 AM - 10:30 AM",
      date: "2026-01-02",
      doctor: "Dr. Ahmed Hassan",
      department: "Orthopedics",
      status: "Confirmed",
      type: "Consultation",
      notes: "Knee pain evaluation",
    },
    {
      id: "APT-004",
      patientName: "Robert Brown",
      phone: "+880 1645-678901",
      time: "10:30 AM - 11:00 AM",
      date: "2026-01-02",
      doctor: "Dr. Sarah Johnson",
      department: "Cardiology",
      status: "Cancelled",
      type: "Follow-up",
      notes: "Patient cancelled",
    },
    {
      id: "APT-005",
      patientName: "Maria Garcia",
      phone: "+880 1756-789012",
      time: "11:00 AM - 11:30 AM",
      date: "2026-01-02",
      doctor: "Dr. Michael Khan",
      department: "Cardiology",
      status: "Completed",
      type: "Routine Checkup",
      notes: "Annual physical",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Confirmed":
        return "bg-green-100 text-green-600";
      case "Pending":
        return "bg-yellow-100 text-yellow-600";
      case "Cancelled":
        return "bg-red-100 text-red-600";
      case "Completed":
        return "bg-blue-100 text-blue-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const filteredAppointments = appointments.filter((apt) => {
    const matchesSearch =
      apt.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apt.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apt.doctor.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      filterStatus === "all" ||
      apt.status.toLowerCase() === filterStatus.toLowerCase();

    return matchesSearch && matchesFilter;
  });

  const handleConfirm = (id) => {
    toast.success(`Appointment ${id} confirmed!`);
  };

  const handleCancel = (id) => {
    toast.error(`Appointment ${id} cancelled!`);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <Toaster position="top-right" />

      {/* Header Section */}
      <div className="bg-card rounded-xl shadow-md p-4 md:p-6 border border-default">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              Appointments Management
            </h1>
            <p className="text-sm md:text-base text-muted">
              Schedule and manage patient appointments
            </p>
          </div>
          <button
            onClick={() => setShowNewAppointmentModal(true)}
            className="bg-primary text-white px-4 md:px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition flex items-center justify-center gap-2"
          >
            <FaCalendarPlus />
            <span className="hidden sm:inline">New Appointment</span>
            <span className="sm:hidden">New</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <div className="bg-card rounded-xl shadow-md p-4 border border-default">
          <p className="text-xs md:text-sm text-muted mb-1">Total Today</p>
          <p className="text-2xl md:text-3xl font-bold text-primary">58</p>
        </div>
        <div className="bg-card rounded-xl shadow-md p-4 border border-default">
          <p className="text-xs md:text-sm text-muted mb-1">Confirmed</p>
          <p className="text-2xl md:text-3xl font-bold text-green-600">42</p>
        </div>
        <div className="bg-card rounded-xl shadow-md p-4 border border-default">
          <p className="text-xs md:text-sm text-muted mb-1">Pending</p>
          <p className="text-2xl md:text-3xl font-bold text-yellow-600">12</p>
        </div>
        <div className="bg-card rounded-xl shadow-md p-4 border border-default">
          <p className="text-xs md:text-sm text-muted mb-1">Cancelled</p>
          <p className="text-2xl md:text-3xl font-bold text-red-600">4</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-card rounded-xl shadow-md p-4 md:p-6 border border-default">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" />
            <input
              type="text"
              placeholder="Search by patient name, ID, or doctor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-primary"
            />
          </div>
          <div className="flex gap-2">
            <div className="relative flex-1 md:flex-none md:w-48">
              <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-primary"
              >
                <option value="all">All Status</option>
                <option value="confirmed">Confirmed</option>
                <option value="pending">Pending</option>
                <option value="cancelled">Cancelled</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Appointments Table */}
      <div className="bg-card rounded-xl shadow-md border border-default overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-secondary uppercase">
                  ID
                </th>
                <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-secondary uppercase">
                  Patient
                </th>
                <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-secondary uppercase hidden lg:table-cell">
                  Date & Time
                </th>
                <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-secondary uppercase hidden md:table-cell">
                  Doctor
                </th>
                <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-secondary uppercase">
                  Status
                </th>
                <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-secondary uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-default">
              {filteredAppointments.map((appointment) => (
                <tr key={appointment.id} className="hover:bg-gray-50 transition">
                  <td className="px-4 md:px-6 py-4">
                    <span className="text-xs md:text-sm font-medium text-primary">
                      {appointment.id}
                    </span>
                  </td>
                  <td className="px-4 md:px-6 py-4">
                    <div>
                      <p className="text-xs md:text-sm font-medium text-primary">
                        {appointment.patientName}
                      </p>
                      <p className="text-xs text-muted flex items-center gap-1">
                        <FaPhone className="text-[10px]" />
                        {appointment.phone}
                      </p>
                      <p className="text-xs text-muted md:hidden">
                        {appointment.time}
                      </p>
                    </div>
                  </td>
                  <td className="px-4 md:px-6 py-4 hidden lg:table-cell">
                    <div>
                      <p className="text-xs md:text-sm font-medium text-primary">
                        {appointment.date}
                      </p>
                      <p className="text-xs text-muted flex items-center gap-1">
                        <FaClock className="text-[10px]" />
                        {appointment.time}
                      </p>
                    </div>
                  </td>
                  <td className="px-4 md:px-6 py-4 hidden md:table-cell">
                    <div>
                      <p className="text-xs md:text-sm font-medium text-secondary">
                        {appointment.doctor}
                      </p>
                      <p className="text-xs text-muted">
                        {appointment.department}
                      </p>
                    </div>
                  </td>
                  <td className="px-4 md:px-6 py-4">
                    <span
                      className={`px-2 md:px-3 py-1 rounded-full text-[10px] md:text-xs font-semibold ${getStatusColor(
                        appointment.status
                      )}`}
                    >
                      {appointment.status}
                    </span>
                  </td>
                  <td className="px-4 md:px-6 py-4">
                    <div className="flex items-center gap-2">
                      {appointment.status === "Pending" && (
                        <button
                          onClick={() => handleConfirm(appointment.id)}
                          className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition"
                          title="Confirm"
                        >
                          <FaCheckCircle />
                        </button>
                      )}
                      <button
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                        title="Edit"
                      >
                        <FaEdit />
                      </button>
                      {appointment.status !== "Cancelled" && (
                        <button
                          onClick={() => handleCancel(appointment.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                          title="Cancel"
                        >
                          <FaTimesCircle />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredAppointments.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted">No appointments found</p>
          </div>
        )}
      </div>
    </div>
  );
}
