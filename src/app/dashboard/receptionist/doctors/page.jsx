"use client";

import { useState } from "react";
import {
  FaUserMd,
  FaSearch,
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export default function DoctorAvailabilityPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedDate, setSelectedDate] = useState("2026-01-02");

  const doctors = [
    {
      id: "D-001",
      name: "Dr. Michael Khan",
      specialty: "Cardiology",
      department: "Cardiology",
      phone: "+880 1712-111222",
      email: "mkhan@medicare.com",
      photo: null,
      schedule: [
        { day: "Monday", time: "09:00 AM - 05:00 PM", status: "Available" },
        { day: "Tuesday", time: "09:00 AM - 05:00 PM", status: "Available" },
        { day: "Wednesday", time: "09:00 AM - 01:00 PM", status: "Available" },
        { day: "Thursday", time: "Off", status: "Unavailable" },
        { day: "Friday", time: "09:00 AM - 05:00 PM", status: "Available" },
      ],
      todayStatus: "Available",
      patientsToday: 12,
      availableSlots: 8,
    },
    {
      id: "D-002",
      name: "Dr. Fatima Rahman",
      specialty: "Neurology",
      department: "Neurology",
      phone: "+880 1823-222333",
      email: "frahman@medicare.com",
      photo: null,
      schedule: [
        { day: "Monday", time: "10:00 AM - 06:00 PM", status: "Available" },
        { day: "Tuesday", time: "10:00 AM - 06:00 PM", status: "Available" },
        { day: "Wednesday", time: "10:00 AM - 06:00 PM", status: "Available" },
        { day: "Thursday", time: "10:00 AM - 02:00 PM", status: "Available" },
        { day: "Friday", time: "Off", status: "Unavailable" },
      ],
      todayStatus: "Busy",
      patientsToday: 15,
      availableSlots: 2,
    },
    {
      id: "D-003",
      name: "Dr. Ahmed Hassan",
      specialty: "Orthopedics",
      department: "Orthopedics",
      phone: "+880 1934-333444",
      email: "ahassan@medicare.com",
      photo: null,
      schedule: [
        { day: "Monday", time: "08:00 AM - 04:00 PM", status: "Available" },
        { day: "Tuesday", time: "08:00 AM - 04:00 PM", status: "Available" },
        { day: "Wednesday", time: "Off", status: "Unavailable" },
        { day: "Thursday", time: "08:00 AM - 04:00 PM", status: "Available" },
        { day: "Friday", time: "08:00 AM - 12:00 PM", status: "Available" },
      ],
      todayStatus: "Available",
      patientsToday: 8,
      availableSlots: 12,
    },
    {
      id: "D-004",
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      department: "Cardiology",
      phone: "+880 1645-444555",
      email: "sjohnson@medicare.com",
      photo: null,
      schedule: [
        { day: "Monday", time: "09:00 AM - 05:00 PM", status: "Available" },
        { day: "Tuesday", time: "Off", status: "Unavailable" },
        { day: "Wednesday", time: "09:00 AM - 05:00 PM", status: "Available" },
        { day: "Thursday", time: "09:00 AM - 05:00 PM", status: "Available" },
        { day: "Friday", time: "09:00 AM - 01:00 PM", status: "Available" },
      ],
      todayStatus: "Unavailable",
      patientsToday: 0,
      availableSlots: 0,
    },
  ];

  const departments = [
    "all",
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Pediatrics",
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-600";
      case "Busy":
        return "bg-yellow-100 text-yellow-600";
      case "Unavailable":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDepartment =
      selectedDepartment === "all" ||
      doctor.department === selectedDepartment;

    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-card rounded-xl shadow-md p-4 md:p-6 border border-default">
        <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">
          Doctor Availability
        </h1>
        <p className="text-sm md:text-base text-muted">
          View doctor schedules and availability
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <div className="bg-card rounded-xl shadow-md p-4 border border-default">
          <p className="text-xs md:text-sm text-muted mb-1">Total Doctors</p>
          <p className="text-2xl md:text-3xl font-bold text-primary">24</p>
        </div>
        <div className="bg-card rounded-xl shadow-md p-4 border border-default">
          <p className="text-xs md:text-sm text-muted mb-1">Available Today</p>
          <p className="text-2xl md:text-3xl font-bold text-green-600">18</p>
        </div>
        <div className="bg-card rounded-xl shadow-md p-4 border border-default">
          <p className="text-xs md:text-sm text-muted mb-1">Busy</p>
          <p className="text-2xl md:text-3xl font-bold text-yellow-600">4</p>
        </div>
        <div className="bg-card rounded-xl shadow-md p-4 border border-default">
          <p className="text-xs md:text-sm text-muted mb-1">On Leave</p>
          <p className="text-2xl md:text-3xl font-bold text-red-600">2</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-card rounded-xl shadow-md p-4 md:p-6 border border-default">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" />
            <input
              type="text"
              placeholder="Search by doctor name or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-primary"
            />
          </div>
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="px-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-primary"
          >
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept === "all" ? "All Departments" : dept}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {filteredDoctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-card rounded-xl shadow-md border border-default overflow-hidden hover:shadow-lg transition"
          >
            <div className="p-4 md:p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg md:text-2xl flex-shrink-0">
                    {doctor.name.charAt(3)}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base md:text-lg font-bold text-primary truncate">
                      {doctor.name}
                    </h3>
                    <p className="text-xs md:text-sm text-muted">
                      {doctor.specialty}
                    </p>
                    <p className="text-xs text-muted">{doctor.id}</p>
                  </div>
                </div>
                <span
                  className={`px-2 md:px-3 py-1 rounded-full text-[10px] md:text-xs font-semibold ${getStatusColor(
                    doctor.todayStatus
                  )}`}
                >
                  {doctor.todayStatus}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 pb-4 border-b border-default">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-muted mb-1">Patients Today</p>
                  <p className="text-lg md:text-xl font-bold text-primary">
                    {doctor.patientsToday}
                  </p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-muted mb-1">Available Slots</p>
                  <p className="text-lg md:text-xl font-bold text-green-600">
                    {doctor.availableSlots}
                  </p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-xs md:text-sm text-secondary">
                  <FaPhone className="text-muted" />
                  <span>{doctor.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-secondary">
                  <FaEnvelope className="text-muted" />
                  <span className="truncate">{doctor.email}</span>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold text-primary uppercase">
                  Weekly Schedule
                </p>
                {doctor.schedule.map((day, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                  >
                    <span className="text-xs md:text-sm font-medium text-secondary">
                      {day.day}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs md:text-sm text-muted">
                        {day.time}
                      </span>
                      {day.status === "Available" ? (
                        <FaCheckCircle className="text-green-600 text-xs" />
                      ) : (
                        <FaTimesCircle className="text-red-600 text-xs" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-4 flex gap-2">
              <button className="flex-1 bg-primary text-white py-2 rounded-lg text-xs md:text-sm font-semibold hover:bg-primary-dark transition">
                Book Appointment
              </button>
              <button className="px-3 md:px-4 border border-default text-secondary rounded-lg text-xs md:text-sm font-semibold hover:bg-white transition">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredDoctors.length === 0 && (
        <div className="bg-card rounded-xl shadow-md p-12 border border-default text-center">
          <p className="text-muted">No doctors found</p>
        </div>
      )}
    </div>
  );
}
