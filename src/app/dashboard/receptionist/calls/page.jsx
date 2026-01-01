"use client";

import { useState } from "react";
import {
  FaPhoneAlt,
  FaSearch,
  FaFilter,
  FaPhoneSlash,
  FaPhoneVolume,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaRedo,
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

export default function CallLogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterDate, setFilterDate] = useState("today");

  const callLogs = [
    {
      id: "CALL-001",
      callerName: "John Doe",
      phoneNumber: "+880 1712-345678",
      callType: "Incoming",
      purpose: "Appointment Booking",
      duration: "5:32",
      status: "Answered",
      timestamp: "2026-01-01 09:15 AM",
      notes: "Booked appointment for Jan 5",
    },
    {
      id: "CALL-002",
      callerName: "Sarah Ahmed",
      phoneNumber: "+880 1823-456789",
      callType: "Incoming",
      purpose: "Inquiry",
      duration: "2:15",
      status: "Answered",
      timestamp: "2026-01-01 09:45 AM",
      notes: "Asked about consultation fees",
    },
    {
      id: "CALL-003",
      callerName: "Unknown",
      phoneNumber: "+880 1934-567890",
      callType: "Incoming",
      purpose: "General",
      duration: "0:00",
      status: "Missed",
      timestamp: "2026-01-01 10:20 AM",
      notes: "No voicemail left",
    },
    {
      id: "CALL-004",
      callerName: "Emily Wilson",
      phoneNumber: "+880 1645-678901",
      callType: "Outgoing",
      purpose: "Appointment Reminder",
      duration: "1:45",
      status: "Answered",
      timestamp: "2026-01-01 11:00 AM",
      notes: "Reminded about tomorrow's appointment",
    },
    {
      id: "CALL-005",
      callerName: "Robert Brown",
      phoneNumber: "+880 1756-789012",
      callType: "Incoming",
      purpose: "Emergency",
      duration: "8:20",
      status: "Answered",
      timestamp: "2026-01-01 11:30 AM",
      notes: "Directed to emergency department",
    },
    {
      id: "CALL-006",
      callerName: "Maria Garcia",
      phoneNumber: "+880 1867-890123",
      callType: "Outgoing",
      purpose: "Follow-up",
      duration: "0:00",
      status: "Not Answered",
      timestamp: "2026-01-01 02:15 PM",
      notes: "Need to call back",
    },
  ];

  const getCallTypeColor = (type) => {
    return type === "Incoming"
      ? "bg-blue-100 text-blue-600"
      : "bg-green-100 text-green-600";
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Answered":
        return "bg-green-100 text-green-600";
      case "Missed":
        return "bg-red-100 text-red-600";
      case "Not Answered":
        return "bg-yellow-100 text-yellow-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Answered":
        return <FaCheckCircle />;
      case "Missed":
        return <FaTimesCircle />;
      case "Not Answered":
        return <FaPhoneSlash />;
      default:
        return <FaClock />;
    }
  };

  const filteredCalls = callLogs.filter((call) => {
    const matchesSearch =
      call.callerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      call.phoneNumber.includes(searchTerm) ||
      call.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType =
      filterType === "all" ||
      call.callType.toLowerCase() === filterType.toLowerCase();

    return matchesSearch && matchesType;
  });

  const callStats = {
    total: callLogs.length,
    answered: callLogs.filter((c) => c.status === "Answered").length,
    missed: callLogs.filter((c) => c.status === "Missed").length,
    outgoing: callLogs.filter((c) => c.callType === "Outgoing").length,
  };

  const handleCallBack = (phoneNumber, name) => {
    toast.success(`Calling back ${name} at ${phoneNumber}`);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <Toaster position="top-right" />

      {/* Header */}
      <div className="bg-card rounded-xl shadow-md p-4 md:p-6 border border-default">
        <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">
          Call Logs
        </h1>
        <p className="text-sm md:text-base text-muted">
          Track and manage incoming and outgoing calls
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <div className="bg-card rounded-xl shadow-md p-4 border border-default">
          <div className="flex items-center gap-2 mb-2">
            <FaPhoneAlt className="text-primary text-lg" />
            <p className="text-xs text-muted">Total Calls</p>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-primary">
            {callStats.total}
          </p>
          <p className="text-xs text-muted mt-1">Today</p>
        </div>

        <div className="bg-card rounded-xl shadow-md p-4 border border-default">
          <div className="flex items-center gap-2 mb-2">
            <FaCheckCircle className="text-green-600 text-lg" />
            <p className="text-xs text-muted">Answered</p>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-green-600">
            {callStats.answered}
          </p>
          <p className="text-xs text-muted mt-1">
            {Math.round((callStats.answered / callStats.total) * 100)}% rate
          </p>
        </div>

        <div className="bg-card rounded-xl shadow-md p-4 border border-default">
          <div className="flex items-center gap-2 mb-2">
            <FaTimesCircle className="text-red-600 text-lg" />
            <p className="text-xs text-muted">Missed</p>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-red-600">
            {callStats.missed}
          </p>
          <p className="text-xs text-muted mt-1">Requires callback</p>
        </div>

        <div className="bg-card rounded-xl shadow-md p-4 border border-default">
          <div className="flex items-center gap-2 mb-2">
            <FaPhoneVolume className="text-blue-600 text-lg" />
            <p className="text-xs text-muted">Outgoing</p>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-blue-600">
            {callStats.outgoing}
          </p>
          <p className="text-xs text-muted mt-1">Made today</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-card rounded-xl shadow-md p-4 md:p-6 border border-default">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" />
            <input
              type="text"
              placeholder="Search by name, phone number, or call ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-primary"
            />
          </div>

          <div className="relative">
            <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-primary"
            >
              <option value="all">All Call Types</option>
              <option value="incoming">Incoming</option>
              <option value="outgoing">Outgoing</option>
            </select>
          </div>
        </div>
      </div>

      {/* Call Logs List */}
      <div className="space-y-4">
        {filteredCalls.map((call) => (
          <div
            key={call.id}
            className="bg-card rounded-xl shadow-md p-4 md:p-6 border border-default hover:shadow-lg transition"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex items-start gap-3 md:gap-4 flex-1">
                <div
                  className={`p-3 md:p-4 rounded-full ${
                    call.callType === "Incoming"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-green-100 text-green-600"
                  } flex-shrink-0`}
                >
                  <FaPhoneAlt className="text-lg md:text-xl" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-base md:text-lg font-bold text-primary">
                      {call.callerName}
                    </h3>
                    <span
                      className={`px-2 md:px-3 py-1 rounded-full text-[10px] md:text-xs font-semibold ${getCallTypeColor(
                        call.callType
                      )}`}
                    >
                      {call.callType}
                    </span>
                    <span
                      className={`px-2 md:px-3 py-1 rounded-full text-[10px] md:text-xs font-semibold flex items-center gap-1 ${getStatusColor(
                        call.status
                      )}`}
                    >
                      {getStatusIcon(call.status)}
                      {call.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 text-xs md:text-sm">
                    <div>
                      <p className="text-muted">Phone Number</p>
                      <p className="font-medium text-primary">
                        {call.phoneNumber}
                      </p>
                    </div>
                    <div>
                      <p className="text-muted">Purpose</p>
                      <p className="font-medium text-secondary">
                        {call.purpose}
                      </p>
                    </div>
                    <div>
                      <p className="text-muted">Duration</p>
                      <p className="font-medium text-primary flex items-center gap-1">
                        <FaClock className="text-[10px]" />
                        {call.duration}
                      </p>
                    </div>
                    <div>
                      <p className="text-muted">Time</p>
                      <p className="font-medium text-primary">
                        {call.timestamp}
                      </p>
                    </div>
                  </div>

                  {call.notes && (
                    <div className="mt-3 pt-3 border-t border-default">
                      <p className="text-xs text-muted">Notes:</p>
                      <p className="text-xs md:text-sm text-secondary">
                        {call.notes}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex sm:flex-col gap-2 lg:ml-4">
                {(call.status === "Missed" ||
                  call.status === "Not Answered") && (
                  <button
                    onClick={() =>
                      handleCallBack(call.phoneNumber, call.callerName)
                    }
                    className="flex-1 sm:flex-none bg-primary text-white px-4 py-2 rounded-lg text-xs md:text-sm font-semibold hover:bg-primary-dark transition flex items-center justify-center gap-2"
                  >
                    <FaRedo />
                    Call Back
                  </button>
                )}
                <button className="flex-1 sm:flex-none border border-default text-secondary px-4 py-2 rounded-lg text-xs md:text-sm font-semibold hover:bg-gray-50 transition">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredCalls.length === 0 && (
        <div className="bg-card rounded-xl shadow-md p-12 border border-default text-center">
          <p className="text-muted">No call logs found</p>
        </div>
      )}
    </div>
  );
}
