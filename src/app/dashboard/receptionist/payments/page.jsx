"use client";

import { useState } from "react";
import {
  FaMoneyBillWave,
  FaSearch,
  FaFilter,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
  FaCreditCard,
  FaFileInvoice,
  FaPrint,
  FaDownload,
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

export default function PaymentsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterPaymentType, setFilterPaymentType] = useState("all");

  const payments = [
    {
      id: "INV-001",
      patientName: "John Doe",
      patientId: "P-10234",
      service: "Consultation",
      doctor: "Dr. Michael Khan",
      amount: 1500,
      paymentMethod: "Cash",
      status: "Paid",
      date: "2026-01-01",
      time: "09:30 AM",
    },
    {
      id: "INV-002",
      patientName: "Sarah Ahmed",
      patientId: "P-10235",
      service: "Lab Test",
      doctor: "Dr. Fatima Rahman",
      amount: 2500,
      paymentMethod: "Card",
      status: "Pending",
      date: "2026-01-01",
      time: "10:15 AM",
    },
    {
      id: "INV-003",
      patientName: "Emily Wilson",
      patientId: "P-10236",
      service: "Surgery",
      doctor: "Dr. Ahmed Hassan",
      amount: 45000,
      paymentMethod: "Insurance",
      status: "Paid",
      date: "2026-01-01",
      time: "11:00 AM",
    },
    {
      id: "INV-004",
      patientName: "Robert Brown",
      patientId: "P-10237",
      service: "X-Ray",
      doctor: "Dr. Sarah Johnson",
      amount: 1200,
      paymentMethod: "Mobile Banking",
      status: "Paid",
      date: "2026-01-01",
      time: "02:30 PM",
    },
    {
      id: "INV-005",
      patientName: "Maria Garcia",
      patientId: "P-10238",
      service: "Emergency Care",
      doctor: "Dr. Michael Khan",
      amount: 8500,
      paymentMethod: "Cash",
      status: "Partial",
      date: "2026-01-01",
      time: "03:45 PM",
    },
    {
      id: "INV-006",
      patientName: "David Lee",
      patientId: "P-10239",
      service: "Consultation",
      doctor: "Dr. Fatima Rahman",
      amount: 1500,
      paymentMethod: "Card",
      status: "Failed",
      date: "2026-01-01",
      time: "04:20 PM",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-600";
      case "Pending":
        return "bg-yellow-100 text-yellow-600";
      case "Partial":
        return "bg-orange-100 text-orange-600";
      case "Failed":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Paid":
        return <FaCheckCircle />;
      case "Pending":
        return <FaClock />;
      case "Failed":
        return <FaTimesCircle />;
      default:
        return <FaClock />;
    }
  };

  const filteredPayments = payments.filter((payment) => {
    const matchesSearch =
      payment.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.patientId.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      filterStatus === "all" ||
      payment.status.toLowerCase() === filterStatus.toLowerCase();

    const matchesPaymentType =
      filterPaymentType === "all" ||
      payment.paymentMethod.toLowerCase() === filterPaymentType.toLowerCase();

    return matchesSearch && matchesStatus && matchesPaymentType;
  });

  const totalRevenue = payments
    .filter((p) => p.status === "Paid")
    .reduce((sum, p) => sum + p.amount, 0);
  const pendingAmount = payments
    .filter((p) => p.status === "Pending")
    .reduce((sum, p) => sum + p.amount, 0);

  const handleProcessPayment = (id) => {
    toast.success(`Processing payment for ${id}`);
  };

  const handlePrintInvoice = (id) => {
    toast.success(`Printing invoice ${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <Toaster position="top-right" />

      {/* Header */}
      <div className="bg-card rounded-xl shadow-md p-4 md:p-6 border border-default">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              Payment Management
            </h1>
            <p className="text-sm md:text-base text-muted">
              Process and track patient payments
            </p>
          </div>
          <button className="bg-primary text-white px-4 md:px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition flex items-center justify-center gap-2">
            <FaCreditCard />
            New Payment
          </button>
        </div>
      </div>

      {/* Revenue Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-md p-4 md:p-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <FaMoneyBillWave className="text-2xl" />
            <p className="text-xs font-medium">Today`s Revenue</p>
          </div>
          <p className="text-2xl md:text-3xl font-bold">৳{totalRevenue.toLocaleString()}</p>
          <p className="text-xs mt-1 opacity-90">+18% from yesterday</p>
        </div>

        <div className="bg-card rounded-xl shadow-md p-4 md:p-6 border border-default">
          <p className="text-xs md:text-sm text-muted mb-1">Pending Payments</p>
          <p className="text-2xl md:text-3xl font-bold text-yellow-600">
            ৳{pendingAmount.toLocaleString()}
          </p>
          <p className="text-xs text-muted mt-1">
            {payments.filter((p) => p.status === "Pending").length} transactions
          </p>
        </div>

        <div className="bg-card rounded-xl shadow-md p-4 md:p-6 border border-default">
          <p className="text-xs md:text-sm text-muted mb-1">Total Transactions</p>
          <p className="text-2xl md:text-3xl font-bold text-primary">
            {payments.length}
          </p>
          <p className="text-xs text-muted mt-1">Today</p>
        </div>

        <div className="bg-card rounded-xl shadow-md p-4 md:p-6 border border-default">
          <p className="text-xs md:text-sm text-muted mb-1">Success Rate</p>
          <p className="text-2xl md:text-3xl font-bold text-green-600">94%</p>
          <p className="text-xs text-muted mt-1">Payment completion</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-card rounded-xl shadow-md p-4 md:p-6 border border-default">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" />
            <input
              type="text"
              placeholder="Search by patient, invoice ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-primary"
            />
          </div>

          <div className="relative">
            <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-primary"
            >
              <option value="all">All Status</option>
              <option value="paid">Paid</option>
              <option value="pending">Pending</option>
              <option value="partial">Partial</option>
              <option value="failed">Failed</option>
            </select>
          </div>

          <select
            value={filterPaymentType}
            onChange={(e) => setFilterPaymentType(e.target.value)}
            className="px-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-primary"
          >
            <option value="all">All Payment Methods</option>
            <option value="cash">Cash</option>
            <option value="card">Card</option>
            <option value="mobile banking">Mobile Banking</option>
            <option value="insurance">Insurance</option>
          </select>
        </div>
      </div>

      {/* Payments Table */}
      <div className="bg-card rounded-xl shadow-md border border-default overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-secondary uppercase">
                  Invoice ID
                </th>
                <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-secondary uppercase">
                  Patient
                </th>
                <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-secondary uppercase hidden md:table-cell">
                  Service
                </th>
                <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-secondary uppercase">
                  Amount
                </th>
                <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-secondary uppercase hidden lg:table-cell">
                  Method
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
              {filteredPayments.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50 transition">
                  <td className="px-4 md:px-6 py-4">
                    <div>
                      <p className="text-xs md:text-sm font-medium text-primary">
                        {payment.id}
                      </p>
                      <p className="text-xs text-muted">
                        {payment.date} {payment.time}
                      </p>
                    </div>
                  </td>
                  <td className="px-4 md:px-6 py-4">
                    <div>
                      <p className="text-xs md:text-sm font-medium text-primary">
                        {payment.patientName}
                      </p>
                      <p className="text-xs text-muted">{payment.patientId}</p>
                    </div>
                  </td>
                  <td className="px-4 md:px-6 py-4 hidden md:table-cell">
                    <div>
                      <p className="text-xs md:text-sm font-medium text-secondary">
                        {payment.service}
                      </p>
                      <p className="text-xs text-muted">{payment.doctor}</p>
                    </div>
                  </td>
                  <td className="px-4 md:px-6 py-4">
                    <p className="text-sm md:text-base font-bold text-primary">
                      ৳{payment.amount.toLocaleString()}
                    </p>
                  </td>
                  <td className="px-4 md:px-6 py-4 hidden lg:table-cell">
                    <p className="text-xs md:text-sm text-secondary">
                      {payment.paymentMethod}
                    </p>
                  </td>
                  <td className="px-4 md:px-6 py-4">
                    <span
                      className={`px-2 md:px-3 py-1 rounded-full text-[10px] md:text-xs font-semibold flex items-center gap-1 w-fit ${getStatusColor(
                        payment.status
                      )}`}
                    >
                      {getStatusIcon(payment.status)}
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-4 md:px-6 py-4">
                    <div className="flex items-center gap-2">
                      {payment.status === "Pending" && (
                        <button
                          onClick={() => handleProcessPayment(payment.id)}
                          className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition"
                          title="Process Payment"
                        >
                          <FaCheckCircle />
                        </button>
                      )}
                      <button
                        onClick={() => handlePrintInvoice(payment.id)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                        title="Print Invoice"
                      >
                        <FaPrint />
                      </button>
                      <button
                        className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition"
                        title="Download"
                      >
                        <FaDownload />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredPayments.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted">No payments found</p>
          </div>
        )}
      </div>
    </div>
  );
}
