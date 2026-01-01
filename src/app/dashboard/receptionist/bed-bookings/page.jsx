"use client";

import { useState } from "react";
import {
  FaBed,
  FaSearch,
  FaFilter,
  FaUserInjured,
  FaClock,
  FaCheckCircle,
  FaExclamationCircle,
  FaTimesCircle,
  FaEdit,
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

export default function BedManagementPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterWard, setFilterWard] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  const beds = [
    {
      bedNumber: "ICU-101",
      ward: "ICU",
      floor: "2nd Floor",
      status: "Occupied",
      patientName: "John Doe",
      patientId: "P-10234",
      admissionDate: "2025-12-28",
      doctor: "Dr. Michael Khan",
      condition: "Critical",
      estimatedDischarge: "2026-01-05",
    },
    {
      bedNumber: "GW-201",
      ward: "General Ward",
      floor: "3rd Floor",
      status: "Available",
      patientName: null,
      patientId: null,
      admissionDate: null,
      doctor: null,
      condition: null,
      estimatedDischarge: null,
    },
    {
      bedNumber: "PW-301",
      ward: "Private Ward",
      floor: "4th Floor",
      status: "Occupied",
      patientName: "Sarah Ahmed",
      patientId: "P-10235",
      admissionDate: "2025-12-30",
      doctor: "Dr. Fatima Rahman",
      condition: "Stable",
      estimatedDischarge: "2026-01-03",
    },
    {
      bedNumber: "ICU-102",
      ward: "ICU",
      floor: "2nd Floor",
      status: "Maintenance",
      patientName: null,
      patientId: null,
      admissionDate: null,
      doctor: null,
      condition: null,
      estimatedDischarge: null,
    },
    {
      bedNumber: "GW-202",
      ward: "General Ward",
      floor: "3rd Floor",
      status: "Reserved",
      patientName: "Ahmed Ali",
      patientId: "P-10236",
      admissionDate: "2026-01-02",
      doctor: "Dr. Ahmed Hassan",
      condition: "Scheduled",
      estimatedDischarge: null,
    },
    {
      bedNumber: "PW-302",
      ward: "Private Ward",
      floor: "4th Floor",
      status: "Available",
      patientName: null,
      patientId: null,
      admissionDate: null,
      doctor: null,
      condition: null,
      estimatedDischarge: null,
    },
    {
      bedNumber: "ICU-103",
      ward: "ICU",
      floor: "2nd Floor",
      status: "Occupied",
      patientName: "Emily Wilson",
      patientId: "P-10237",
      admissionDate: "2025-12-29",
      doctor: "Dr. Sarah Johnson",
      condition: "Critical",
      estimatedDischarge: "2026-01-06",
    },
    {
      bedNumber: "GW-203",
      ward: "General Ward",
      floor: "3rd Floor",
      status: "Available",
      patientName: null,
      patientId: null,
      admissionDate: null,
      doctor: null,
      condition: null,
      estimatedDischarge: null,
    },
  ];

  const wards = ["all", "ICU", "General Ward", "Private Ward", "Maternity"];

  const getStatusColor = (status) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-600";
      case "Occupied":
        return "bg-red-100 text-red-600";
      case "Reserved":
        return "bg-yellow-100 text-yellow-600";
      case "Maintenance":
        return "bg-gray-100 text-gray-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getConditionColor = (condition) => {
    switch (condition) {
      case "Critical":
        return "text-red-600";
      case "Stable":
        return "text-green-600";
      case "Scheduled":
        return "text-yellow-600";
      default:
        return "text-gray-600";
    }
  };

  const filteredBeds = beds.filter((bed) => {
    const matchesSearch =
      bed.bedNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (bed.patientName &&
        bed.patientName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (bed.patientId &&
        bed.patientId.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesWard = filterWard === "all" || bed.ward === filterWard;
    const matchesStatus =
      filterStatus === "all" || bed.status.toLowerCase() === filterStatus;

    return matchesSearch && matchesWard && matchesStatus;
  });

  const bedStats = {
    total: beds.length,
    available: beds.filter((b) => b.status === "Available").length,
    occupied: beds.filter((b) => b.status === "Occupied").length,
    reserved: beds.filter((b) => b.status === "Reserved").length,
    maintenance: beds.filter((b) => b.status === "Maintenance").length,
  };

  const handleAssignBed = (bedNumber) => {
    toast.success(`Bed ${bedNumber} assignment initiated`);
  };

  const handleDischarge = (bedNumber) => {
    toast.success(`Patient discharged from bed ${bedNumber}`);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <Toaster position="top-right" />

      {/* Header */}
      <div className="bg-card rounded-xl shadow-md p-4 md:p-6 border border-default">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              Bed Management
            </h1>
            <p className="text-sm md:text-base text-muted">
              Monitor and manage hospital bed availability
            </p>
          </div>
          <button className="bg-primary text-white px-4 md:px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition flex items-center justify-center gap-2">
            <FaBed />
            Assign Bed
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
        <div className="bg-card rounded-xl shadow-md p-4 border border-default">
          <div className="flex items-center gap-2 mb-2">
            <FaBed className="text-primary text-lg" />
            <p className="text-xs text-muted">Total Beds</p>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-primary">
            {bedStats.total}
          </p>
        </div>

        <div className="bg-card rounded-xl shadow-md p-4 border border-default">
          <div className="flex items-center gap-2 mb-2">
            <FaCheckCircle className="text-green-600 text-lg" />
            <p className="text-xs text-muted">Available</p>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-green-600">
            {bedStats.available}
          </p>
        </div>

        <div className="bg-card rounded-xl shadow-md p-4 border border-default">
          <div className="flex items-center gap-2 mb-2">
            <FaUserInjured className="text-red-600 text-lg" />
            <p className="text-xs text-muted">Occupied</p>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-red-600">
            {bedStats.occupied}
          </p>
        </div>

        <div className="bg-card rounded-xl shadow-md p-4 border border-default">
          <div className="flex items-center gap-2 mb-2">
            <FaClock className="text-yellow-600 text-lg" />
            <p className="text-xs text-muted">Reserved</p>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-yellow-600">
            {bedStats.reserved}
          </p>
        </div>

        <div className="bg-card rounded-xl shadow-md p-4 border border-default">
          <div className="flex items-center gap-2 mb-2">
            <FaExclamationCircle className="text-gray-600 text-lg" />
            <p className="text-xs text-muted">Maintenance</p>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-gray-600">
            {bedStats.maintenance}
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-card rounded-xl shadow-md p-4 md:p-6 border border-default">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" />
            <input
              type="text"
              placeholder="Search by bed number, patient..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-primary"
            />
          </div>

          <div className="relative">
            <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" />
            <select
              value={filterWard}
              onChange={(e) => setFilterWard(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-primary"
            >
              {wards.map((ward) => (
                <option key={ward} value={ward}>
                  {ward === "all" ? "All Wards" : ward}
                </option>
              ))}
            </select>
          </div>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-primary"
          >
            <option value="all">All Status</option>
            <option value="available">Available</option>
            <option value="occupied">Occupied</option>
            <option value="reserved">Reserved</option>
            <option value="maintenance">Maintenance</option>
          </select>
        </div>
      </div>

      {/* Beds Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {filteredBeds.map((bed, index) => (
          <div
            key={index}
            className="bg-card rounded-xl shadow-md border border-default overflow-hidden hover:shadow-lg transition"
          >
            <div className="p-4 md:p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-primary">
                    {bed.bedNumber}
                  </h3>
                  <p className="text-xs md:text-sm text-muted">{bed.ward}</p>
                  <p className="text-xs text-muted">{bed.floor}</p>
                </div>
                <span
                  className={`px-2 md:px-3 py-1 rounded-full text-[10px] md:text-xs font-semibold ${getStatusColor(
                    bed.status
                  )}`}
                >
                  {bed.status}
                </span>
              </div>

              {bed.status === "Occupied" || bed.status === "Reserved" ? (
                <div className="space-y-3 pb-4 border-b border-default mb-4">
                  <div>
                    <p className="text-xs text-muted">Patient</p>
                    <p className="text-sm md:text-base font-semibold text-primary">
                      {bed.patientName}
                    </p>
                    <p className="text-xs text-muted">{bed.patientId}</p>
                  </div>

                  <div>
                    <p className="text-xs text-muted">Attending Doctor</p>
                    <p className="text-xs md:text-sm font-medium text-secondary">
                      {bed.doctor}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs text-muted">Admission</p>
                      <p className="text-xs font-medium text-primary">
                        {bed.admissionDate}
                      </p>
                    </div>
                    {bed.estimatedDischarge && (
                      <div>
                        <p className="text-xs text-muted">Est. Discharge</p>
                        <p className="text-xs font-medium text-primary">
                          {bed.estimatedDischarge}
                        </p>
                      </div>
                    )}
                  </div>

                  {bed.condition && (
                    <div>
                      <p className="text-xs text-muted">Condition</p>
                      <p
                        className={`text-sm font-bold ${getConditionColor(
                          bed.condition
                        )}`}
                      >
                        {bed.condition}
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="pb-4 mb-4 border-b border-default">
                  <p className="text-sm text-muted text-center py-6">
                    {bed.status === "Available"
                      ? "This bed is ready for patient assignment"
                      : "This bed is currently under maintenance"}
                  </p>
                </div>
              )}

              <div className="flex gap-2">
                {bed.status === "Available" && (
                  <button
                    onClick={() => handleAssignBed(bed.bedNumber)}
                    className="flex-1 bg-primary text-white py-2 rounded-lg text-xs md:text-sm font-semibold hover:bg-primary-dark transition"
                  >
                    Assign Patient
                  </button>
                )}
                {bed.status === "Occupied" && (
                  <>
                    <button
                      onClick={() => handleDischarge(bed.bedNumber)}
                      className="flex-1 bg-green-600 text-white py-2 rounded-lg text-xs md:text-sm font-semibold hover:bg-green-700 transition"
                    >
                      Discharge
                    </button>
                    <button className="px-3 md:px-4 border border-default text-secondary rounded-lg text-xs md:text-sm font-semibold hover:bg-gray-50 transition">
                      <FaEdit />
                    </button>
                  </>
                )}
                {bed.status === "Reserved" && (
                  <button className="flex-1 border border-default text-secondary py-2 rounded-lg text-xs md:text-sm font-semibold hover:bg-gray-50 transition">
                    View Details
                  </button>
                )}
                {bed.status === "Maintenance" && (
                  <button className="flex-1 bg-gray-600 text-white py-2 rounded-lg text-xs md:text-sm font-semibold hover:bg-gray-700 transition">
                    Mark Available
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredBeds.length === 0 && (
        <div className="bg-card rounded-xl shadow-md p-12 border border-default text-center">
          <p className="text-muted">No beds found matching your wish</p>
        </div>
      )}
    </div>
  );
}
