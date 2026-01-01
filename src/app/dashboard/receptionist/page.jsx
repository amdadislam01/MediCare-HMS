"use client";

import Link from "next/link";
import {
  FaUserPlus,
  FaCalendarCheck,
  FaPhoneAlt,
  FaClock,
  FaUserMd,
  FaBed,
  FaMoneyBillWave,
  FaCheckCircle,
  FaHourglassHalf,
  FaTimesCircle,
  FaUserClock,
} from "react-icons/fa";

export default function ReceptionistDashboard() {
  const stats = [
    {
      icon: <FaUserPlus />,
      label: "Today's Check-ins",
      value: "42",
      change: "+8 since morning",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: <FaCalendarCheck />,
      label: "Total Appointments",
      value: "58",
      change: "12 pending",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: <FaPhoneAlt />,
      label: "Incoming Calls",
      value: "127",
      change: "23 missed",
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      icon: <FaClock />,
      label: "Avg. Wait Time",
      value: "18 min",
      change: "-5 min from yesterday",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ];

  const todayAppointments = [
    {
      id: "APT-001",
      patientName: "Sarah Ahmed",
      time: "09:00 AM",
      doctor: "Dr. Michael Khan",
      department: "Cardiology",
      status: "Checked In",
    },
    {
      id: "APT-002",
      patientName: "John Smith",
      time: "09:30 AM",
      doctor: "Dr. Fatima Rahman",
      department: "Neurology",
      status: "Waiting",
    },
    {
      id: "APT-003",
      patientName: "Emily Wilson",
      time: "10:00 AM",
      doctor: "Dr. Ahmed Hassan",
      department: "Orthopedics",
      status: "Confirmed",
    },
    {
      id: "APT-004",
      patientName: "Robert Brown",
      time: "10:30 AM",
      doctor: "Dr. Sarah Johnson",
      department: "Cardiology",
      status: "No Show",
    },
  ];

  const waitingQueue = [
    {
      token: "W-012",
      patientName: "David Lee",
      doctor: "Dr. Fatima Rahman",
      waitTime: "12 min",
      priority: "Normal",
    },
    {
      token: "W-013",
      patientName: "Lisa Chen",
      doctor: "Dr. Ahmed Hassan",
      waitTime: "25 min",
      priority: "Urgent",
    },
    {
      token: "W-014",
      patientName: "Ahmed Ali",
      doctor: "Dr. Michael Khan",
      waitTime: "8 min",
      priority: "Normal",
    },
  ];

  const quickActions = [
    {
      title: "Register New Patient",
      description: "Add new patient to system",
      icon: <FaUserPlus />,
      link: "/dashboard/receptionist/register",
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Schedule Appointment",
      description: "Book new appointment",
      icon: <FaCalendarCheck />,
      link: "/dashboard/receptionist/appointments",
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Check-in Patient",
      description: "Mark patient arrival",
      icon: <FaUserClock />,
      link: "/dashboard/receptionist/queue",
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "View All Doctors",
      description: "Doctor availability",
      icon: <FaUserMd />,
      link: "/dashboard/receptionist/doctors",
      color: "bg-indigo-100 text-indigo-600",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Checked In":
        return "bg-blue-100 text-blue-600";
      case "Waiting":
        return "bg-yellow-100 text-yellow-600";
      case "Confirmed":
        return "bg-green-100 text-green-600";
      case "No Show":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getPriorityColor = (priority) => {
    return priority === "Urgent"
      ? "bg-red-500 text-white"
      : "bg-gray-400 text-white";
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-card rounded-xl shadow-md p-4 md:p-6 border border-default hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`${stat.bgColor} ${stat.iconColor} p-3 md:p-4 rounded-lg`}
              >
                <span className="text-xl md:text-2xl">{stat.icon}</span>
              </div>
            </div>
            <div>
              <p className="text-muted text-xs md:text-sm">{stat.label}</p>
              <p className="text-2xl md:text-3xl font-bold text-primary mt-1">
                {stat.value}
              </p>
              <p className="text-xs text-muted mt-2">{stat.change}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickActions.map((action, index) => (
          <Link
            key={index}
            href={action.link}
            className="bg-card rounded-xl shadow-md p-4 md:p-6 border border-default hover:shadow-lg hover:border-primary transition group"
          >
            <div className="flex items-start gap-3 md:gap-4">
              <div
                className={`${action.color} p-3 md:p-4 rounded-lg group-hover:scale-110 transition flex-shrink-0`}
              >
                <span className="text-xl md:text-2xl">{action.icon}</span>
              </div>
              <div className="min-w-0">
                <p className="font-bold text-sm md:text-base text-primary truncate">
                  {action.title}
                </p>
                <p className="text-xs md:text-sm text-muted truncate">
                  {action.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Appointments */}
        <div className="lg:col-span-2 bg-card rounded-xl shadow-md border border-default">
          <div className="p-4 md:p-6 border-b border-default flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-primary">
                Today`s Appointments
              </h3>
              <p className="text-xs md:text-sm text-muted">
                {todayAppointments.length} appointments scheduled
              </p>
            </div>
            <Link
              href="/dashboard/receptionist/appointments"
              className="text-blue hover:underline text-sm font-semibold text-center sm:text-left"
            >
              View All
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-secondary uppercase">
                    Time
                  </th>
                  <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-secondary uppercase">
                    Patient
                  </th>
                  <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-secondary uppercase hidden sm:table-cell">
                    Doctor
                  </th>
                  <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-secondary uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-default">
                {todayAppointments.map((appointment) => (
                  <tr
                    key={appointment.id}
                    className="hover:bg-gray-50 transition"
                  >
                    <td className="px-4 md:px-6 py-4">
                      <div className="flex items-center gap-2">
                        <FaClock className="text-muted text-xs md:text-sm" />
                        <span className="text-xs md:text-sm font-medium text-primary">
                          {appointment.time}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-4">
                      <p className="text-xs md:text-sm font-medium text-primary">
                        {appointment.patientName}
                      </p>
                      <p className="text-xs text-muted sm:hidden">
                        {appointment.doctor}
                      </p>
                    </td>
                    <td className="px-4 md:px-6 py-4 hidden sm:table-cell">
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Waiting Queue */}
        <div className="bg-card rounded-xl shadow-md border border-default">
          <div className="p-4 md:p-6 border-b border-default">
            <div className="flex items-center gap-2 mb-1">
              <FaUserClock className="text-primary" />
              <h3 className="text-lg md:text-xl font-bold text-primary">
                Patient Queue
              </h3>
            </div>
            <p className="text-xs md:text-sm text-muted">
              {waitingQueue.length} patients waiting
            </p>
          </div>
          <div className="p-4 md:p-6 space-y-4 max-h-[500px] overflow-y-auto">
            {waitingQueue.map((patient, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 rounded-lg border border-default hover:shadow-md transition"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-primary text-sm">
                        {patient.token}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${getPriorityColor(
                          patient.priority
                        )}`}
                      >
                        {patient.priority}
                      </span>
                    </div>
                    <p className="font-semibold text-sm text-primary truncate">
                      {patient.patientName}
                    </p>
                    <p className="text-xs text-muted truncate">
                      {patient.doctor}
                    </p>
                  </div>
                  <div className="text-right ml-2">
                    <p className="text-xs text-muted">Wait Time</p>
                    <p className="text-base md:text-lg font-bold text-primary">
                      {patient.waitTime}
                    </p>
                  </div>
                </div>
                <button className="w-full bg-primary text-white py-2 rounded-lg text-xs font-semibold hover:bg-primary-dark transition">
                  Call Next
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <Link
          href="/dashboard/receptionist/payments"
          className="bg-card rounded-xl shadow-md p-4 md:p-6 border border-default hover:shadow-lg hover:border-primary transition group"
        >
          <div className="flex items-center gap-3 md:gap-4">
            <div className="bg-green-100 text-green-600 p-3 md:p-4 rounded-lg group-hover:scale-110 transition flex-shrink-0">
              <FaMoneyBillWave className="text-xl md:text-2xl" />
            </div>
            <div className="min-w-0">
              <p className="font-bold text-base md:text-lg text-primary">
                Process Payments
              </p>
              <p className="text-xs md:text-sm text-muted">
                ৳45,200 collected today
              </p>
            </div>
          </div>
        </Link>

        <Link
          href="/dashboard/receptionist/bed-bookings"
          className="bg-card rounded-xl shadow-md p-4 md:p-6 border border-default hover:shadow-lg hover:border-primary transition group"
        >
          <div className="flex items-center gap-3 md:gap-4">
            <div className="bg-indigo-100 text-indigo-600 p-3 md:p-4 rounded-lg group-hover:scale-110 transition flex-shrink-0">
              <FaBed className="text-xl md:text-2xl" />
            </div>
            <div className="min-w-0">
              <p className="font-bold text-base md:text-lg text-primary">
                Bed Management
              </p>
              <p className="text-xs md:text-sm text-muted">
                12 beds available
              </p>
            </div>
          </div>
        </Link>

        <Link
          href="/dashboard/receptionist/reports"
          className="bg-card rounded-xl shadow-md p-4 md:p-6 border border-default hover:shadow-lg hover:border-primary transition group"
        >
          <div className="flex items-center gap-3 md:gap-4">
            <div className="bg-purple-100 text-purple-600 p-3 md:p-4 rounded-lg group-hover:scale-110 transition flex-shrink-0">
              <FaCheckCircle className="text-xl md:text-2xl" />
            </div>
            <div className="min-w-0">
              <p className="font-bold text-base md:text-lg text-primary">
                Daily Reports
              </p>
              <p className="text-xs md:text-sm text-muted">
                Generate reports
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
