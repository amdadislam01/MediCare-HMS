"use client";

import { useState } from "react";
import {
  FaUserClock,
  FaSearch,
  FaBell,
  FaClock,
  FaCheckCircle,
  FaExclamationTriangle,
  FaUserCheck,
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

export default function QueueManagementPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const waitingPatients = [
    {
      token: "W-012",
      patientName: "David Lee",
      patientId: "P-10234",
      checkInTime: "08:45 AM",
      doctor: "Dr. Fatima Rahman",
      department: "Neurology",
      waitTime: "12 min",
      priority: "Normal",
      status: "Waiting",
    },
    {
      token: "W-013",
      patientName: "Lisa Chen",
      patientId: "P-10235",
      checkInTime: "08:30 AM",
      doctor: "Dr. Ahmed Hassan",
      department: "Orthopedics",
      waitTime: "25 min",
      priority: "Urgent",
      status: "Waiting",
    },
    {
      token: "W-014",
      patientName: "Ahmed Ali",
      patientId: "P-10236",
      checkInTime: "08:52 AM",
      doctor: "Dr. Michael Khan",
      department: "Cardiology",
      waitTime: "8 min",
      priority: "Normal",
      status: "Waiting",
    },
    {
      token: "W-015",
      patientName: "Nadia Islam",
      patientId: "P-10237",
      checkInTime: "08:20 AM",
      doctor: "Dr. Sarah Johnson",
      department: "Cardiology",
      waitTime: "32 min",
      priority: "High",
      status: "Waiting",
    },
    {
      token: "W-016",
      patientName: "Michael Brown",
      patientId: "P-10238",
      checkInTime: "09:00 AM",
      doctor: "Dr. Fatima Rahman",
      department: "Neurology",
      waitTime: "5 min",
      priority: "Normal",
      status: "Called",
    },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "Urgent":
        return "bg-red-500 text-white";
      case "High":
        return "bg-orange-500 text-white";
      default:
        return "bg-gray-400 text-white";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Waiting":
        return "bg-yellow-100 text-yellow-600";
      case "Called":
        return "bg-green-100 text-green-600";
      case "In Progress":
        return "bg-blue-100 text-blue-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const handleCallNext = (token, patientName) => {
    toast.success(`Calling ${patientName} (${token})`);
  };

  const handleCheckIn = () => {
    toast.success("Patient checked in successfully!");
  };

  const filteredPatients = waitingPatients.filter(
    (patient) =>
      patient.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.token.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.patientId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <Toaster position="top-right" />

      {/* Header */}
      <div className="bg-card rounded-xl shadow-md p-4 md:p-6 border border-default">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              Queue Management
            </h1>
            <p className="text-sm md:text-base text-muted">
              Manage patient check-in and waiting queue
            </p>
          </div>
          <button
            onClick={handleCheckIn}
            className="bg-primary text-white px-4 md:px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition flex items-center justify-center gap-2"
          >
            <FaUserCheck />
            Check-in Patient
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <div className="bg-card rounded-xl shadow-md p-4 border border-default">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-yellow-100 text-yellow-600 p-2 rounded-lg">
              <FaUserClock className="text-lg" />
            </div>
            <div>
              <p className="text-xs text-muted">In Queue</p>
              <p className="text-2xl font-bold text-primary">15</p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-xl shadow-md p-4 border border-default">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-green-100 text-green-600 p-2 rounded-lg">
              <FaCheckCircle className="text-lg" />
            </div>
            <div>
              <p className="text-xs text-muted">Served Today</p>
              <p className="text-2xl font-bold text-primary">42</p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-xl shadow-md p-4 border border-default">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-purple-100 text-purple-600 p-2 rounded-lg">
              <FaClock className="text-lg" />
            </div>
            <div>
              <p className="text-xs text-muted">Avg Wait</p>
              <p className="text-2xl font-bold text-primary">18m</p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-xl shadow-md p-4 border border-default">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-red-100 text-red-600 p-2 rounded-lg">
              <FaExclamationTriangle className="text-lg" />
            </div>
            <div>
              <p className="text-xs text-muted">Urgent</p>
              <p className="text-2xl font-bold text-primary">3</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="bg-card rounded-xl shadow-md p-4 md:p-6 border border-default">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" />
          <input
            type="text"
            placeholder="Search by patient name, token, or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-primary"
          />
        </div>
      </div>

      {/* Queue List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {filteredPatients.map((patient, index) => (
          <div
            key={index}
            className="bg-card rounded-xl shadow-md p-4 md:p-6 border border-default hover:shadow-lg transition"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xl md:text-2xl font-bold text-primary">
                  {patient.token}
                </span>
                <span
                  className={`px-2 py-1 rounded-full text-[10px] font-bold ${getPriorityColor(
                    patient.priority
                  )}`}
                >
                  {patient.priority}
                </span>
              </div>
              <span
                className={`px-2 md:px-3 py-1 rounded-full text-[10px] md:text-xs font-semibold ${getStatusColor(
                  patient.status
                )}`}
              >
                {patient.status}
              </span>
            </div>

            <div className="space-y-2 mb-4">
              <div>
                <p className="text-xs text-muted">Patient Name</p>
                <p className="text-sm md:text-base font-semibold text-primary">
                  {patient.patientName}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted">Patient ID</p>
                <p className="text-xs md:text-sm text-secondary">
                  {patient.patientId}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted">Doctor</p>
                <p className="text-xs md:text-sm font-medium text-secondary">
                  {patient.doctor}
                </p>
                <p className="text-xs text-muted">{patient.department}</p>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-default">
                <div>
                  <p className="text-xs text-muted">Check-in</p>
                  <p className="text-xs font-medium text-primary">
                    {patient.checkInTime}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted">Wait Time</p>
                  <p className="text-base md:text-lg font-bold text-primary">
                    {patient.waitTime}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() =>
                  handleCallNext(patient.token, patient.patientName)
                }
                className="flex-1 bg-primary text-white py-2 rounded-lg text-xs md:text-sm font-semibold hover:bg-primary-dark transition flex items-center justify-center gap-2"
              >
                <FaBell />
                Call Next
              </button>
              <button className="px-3 md:px-4 border border-default text-secondary rounded-lg text-xs md:text-sm font-semibold hover:bg-gray-50 transition">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredPatients.length === 0 && (
        <div className="bg-card rounded-xl shadow-md p-12 border border-default text-center">
          <p className="text-muted">No patients in queue</p>
        </div>
      )}
    </div>
  );
}
