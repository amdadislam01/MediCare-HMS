"use client";
import { useState } from "react";
import {
  FaSearch,
  FaEye,
  FaCheck,
  FaTimes,
  FaPhone,
  FaEnvelope,
  FaCalendar,
  FaUser,
  FaStethoscope,
} from "react-icons/fa";

export default function PharmacyOrdersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const orders = [
    {
      id: "ORD-001",
      patientName: "John Doe",
      patientEmail: "john@example.com",
      patientPhone: "+880 1712-345678",
      doctorName: "Dr. Sarah Ahmed",
      doctorSpecialty: "General Physician",
      orderDate: "2024-01-15",
      status: "Pending",
      total: 850,
      medicines: [
        {
          name: "Paracetamol 500mg",
          quantity: 2,
          price: 50,
          instructions: "Take 1 tablet 3 times daily after meals",
        },
        {
          name: "Amoxicillin 250mg",
          quantity: 3,
          price: 120,
          instructions: "Take 1 capsule 2 times daily",
        },
        {
          name: "Omeprazole 20mg",
          quantity: 2,
          price: 80,
          instructions: "Take 1 capsule before breakfast",
        },
      ],
      prescriptionImage:
        "https://5.imimg.com/data5/SELLER/Default/2021/10/YO/TI/KU/23444274/prescription-pad.jpg",
      notes: "Patient has mild fever and stomach issues",
    },
    {
      id: "ORD-002",
      patientName: "Jane Smith",
      patientEmail: "jane@example.com",
      patientPhone: "+880 1812-345678",
      doctorName: "Dr. Michael Khan",
      doctorSpecialty: "Cardiologist",
      orderDate: "2024-01-15",
      status: "Processing",
      total: 620,
      medicines: [
        {
          name: "Aspirin 75mg",
          quantity: 4,
          price: 35,
          instructions: "Take 1 tablet daily after dinner",
        },
        {
          name: "Metformin 500mg",
          quantity: 3,
          price: 60,
          instructions: "Take 1 tablet 2 times daily",
        },
      ],
      prescriptionImage:
        "https://5.imimg.com/data5/SELLER/Default/2021/10/YO/TI/KU/23444274/prescription-pad.jpg",
      notes: "Regular checkup medication refill",
    },
    {
      id: "ORD-003",
      patientName: "Robert Brown",
      patientEmail: "robert@example.com",
      patientPhone: "+880 1912-345678",
      doctorName: "Dr. Fatima Rahman",
      doctorSpecialty: "Dermatologist",
      orderDate: "2024-01-14",
      status: "Delivered",
      total: 1200,
      medicines: [
        {
          name: "Cetirizine 10mg",
          quantity: 3,
          price: 40,
          instructions: "Take 1 tablet at bedtime",
        },
        {
          name: "Vitamin D3 60K",
          quantity: 2,
          price: 90,
          instructions: "Take 1 capsule weekly",
        },
        {
          name: "Ranitidine 150mg",
          quantity: 2,
          price: 70,
          instructions: "Take 1 tablet before meals",
        },
      ],
      prescriptionImage:
        "https://5.imimg.com/data5/SELLER/Default/2021/10/YO/TI/KU/23444274/prescription-pad.jpg",
      notes: "Skin allergy treatment",
    },
    {
      id: "ORD-004",
      patientName: "Emily Wilson",
      patientEmail: "emily@example.com",
      patientPhone: "+880 1612-345678",
      doctorName: "Dr. Ahmed Hassan",
      doctorSpecialty: "Pediatrician",
      orderDate: "2024-01-14",
      status: "Pending",
      total: 320,
      medicines: [
        {
          name: "Cough Syrup 100ml",
          quantity: 1,
          price: 180,
          instructions: "5ml 3 times daily",
        },
      ],
      prescriptionImage:
        "https://5.imimg.com/data5/SELLER/Default/2021/10/YO/TI/KU/23444274/prescription-pad.jpg",
      notes: "For child age 5 years",
    },
    {
      id: "ORD-005",
      patientName: "David Lee",
      patientEmail: "david@example.com",
      patientPhone: "+880 1512-345678",
      doctorName: "Dr. Nadia Islam",
      doctorSpecialty: "Endocrinologist",
      orderDate: "2024-01-13",
      status: "Rejected",
      total: 450,
      medicines: [
        {
          name: "Insulin Injection",
          quantity: 1,
          price: 450,
          instructions: "As per doctor instructions",
        },
      ],
      prescriptionImage:
        "https://5.imimg.com/data5/SELLER/Default/2021/10/YO/TI/KU/23444274/prescription-pad.jpg",
      notes: "Prescription unclear, needs verification",
    },
  ];

  const statusOptions = [
    "All",
    "Pending",
    "Processing",
    "Delivered",
    "Rejected",
  ];

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.doctorName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "All" || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-warning text-warning-color";
      case "Processing":
        return "bg-primary-light text-blue";
      case "Delivered":
        return "bg-secondary-light text-success";
      case "Rejected":
        return "bg-error-light text-error";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const handleApprove = (orderId) => {
    console.log("Approve order:", orderId);
    alert("Order approved and processing!");
  };

  const handleReject = (orderId) => {
    const reason = prompt("Enter rejection reason:");
    if (reason) {
      console.log("Reject order:", orderId, "Reason:", reason);
      alert("Order rejected!");
    }
  };

  const handleDeliver = (orderId) => {
    console.log("Mark as delivered:", orderId);
    alert("Order marked as delivered!");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary">Prescription Orders</h1>
        <p className="text-muted mt-1">
          Manage and process patient prescription orders
        </p>
      </div>

      {/* Search and Filter */}
      <div className="bg-card rounded-xl shadow-md border border-default p-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted" />
            <input
              type="text"
              placeholder="Search by Order ID, Patient, or Doctor name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {statusOptions.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-4 text-sm text-muted">
          Showing {filteredOrders.length} of {orders.length} orders
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-card rounded-xl shadow-md border border-default overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-secondary uppercase">
                  Order ID
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-secondary uppercase">
                  Patient
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-secondary uppercase">
                  Doctor
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-secondary uppercase">
                  Date
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-secondary uppercase">
                  Total
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-secondary uppercase">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-secondary uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-default">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 text-sm font-semibold text-primary">
                    {order.id}
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-primary">
                        {order.patientName}
                      </p>
                      <p className="text-xs text-muted">
                        {order.medicines.length} medicines
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-secondary">
                    {order.doctorName}
                  </td>
                  <td className="px-6 py-4 text-sm text-secondary">
                    {order.orderDate}
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-primary">
                    ৳{order.total}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedOrder(order)}
                        className="bg-primary-light text-blue p-2 rounded-lg hover:bg-primary hover:text-black cursor-pointer transition"
                        title="View Details"
                      >
                        <FaEye />
                      </button>
                      {order.status === "Pending" && (
                        <>
                          <button
                            onClick={() => handleApprove(order.id)}
                            className="bg-secondary-light text-success p-2 rounded-lg hover:bg-success hover:text-black cursor-pointer transition"
                            title="Approve"
                          >
                            <FaCheck />
                          </button>
                          <button
                            onClick={() => handleReject(order.id)}
                            className="bg-error-light text-error p-2 rounded-lg hover:bg-error hover:text-black cursor-pointer transition"
                            title="Reject"
                          >
                            <FaTimes />
                          </button>
                        </>
                      )}
                      {order.status === "Processing" && (
                        <button
                          onClick={() => handleDeliver(order.id)}
                          className="bg-secondary-light text-success px-3 py-1 rounded-lg hover:bg-success hover:text-black cursor-pointer transition text-xs font-semibold"
                        >
                          Deliver
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-card rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-primary text-white p-6 rounded-t-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Order Details</h2>
                  <p className="text-sm opacity-90">{selectedOrder.id}</p>
                </div>
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-lg transition"
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Patient & Doctor Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-primary-light rounded-lg p-4 border border-blue-200">
                  <div className="flex items-center gap-2 mb-3">
                    <FaUser className="text-blue" />
                    <h3 className="font-bold text-primary">
                      Patient Information
                    </h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="text-secondary">
                      <strong>Name:</strong> {selectedOrder.patientName}
                    </p>
                    <p className="text-secondary flex items-center gap-2">
                      <FaEnvelope className="text-muted" />{" "}
                      {selectedOrder.patientEmail}
                    </p>
                    <p className="text-secondary flex items-center gap-2">
                      <FaPhone className="text-muted" />{" "}
                      {selectedOrder.patientPhone}
                    </p>
                  </div>
                </div>

                <div className="bg-secondary-light rounded-lg p-4 border border-green-200">
                  <div className="flex items-center gap-2 mb-3">
                    <FaStethoscope className="text-success" />
                    <h3 className="font-bold text-primary">
                      Doctor Information
                    </h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="text-secondary">
                      <strong>Name:</strong> {selectedOrder.doctorName}
                    </p>
                    <p className="text-secondary">
                      <strong>Specialty:</strong>{" "}
                      {selectedOrder.doctorSpecialty}
                    </p>
                    <p className="text-secondary flex items-center gap-2">
                      <FaCalendar className="text-muted" />{" "}
                      {selectedOrder.orderDate}
                    </p>
                  </div>
                </div>
              </div>

              {/* Prescribed Medicines */}
              <div>
                <h3 className="font-bold text-primary mb-4 text-lg">
                  Prescribed Medicines
                </h3>
                <div className="space-y-3">
                  {selectedOrder.medicines.map((medicine, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-4 border border-default"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <p className="font-semibold text-primary">
                            {medicine.name}
                          </p>
                          <p className="text-sm text-secondary mt-1">
                            <strong>Instructions:</strong>{" "}
                            {medicine.instructions}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted">
                            Qty: {medicine.quantity}
                          </p>
                          <p className="font-bold text-primary">
                            ৳{medicine.price * medicine.quantity}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notes */}
              {selectedOrder.notes && (
                <div className="bg-warning rounded-lg p-4 border border-yellow-200">
                  <h4 className="font-bold text-warning-color mb-2">
                    Additional Notes
                  </h4>
                  <p className="text-sm text-secondary">
                    {selectedOrder.notes}
                  </p>
                </div>
              )}

              {/* Total */}
              <div className="flex items-center justify-between p-4 bg-primary-light rounded-lg border border-blue-200">
                <span className="font-bold text-lg text-primary">
                  Total Amount
                </span>
                <span className="font-bold text-2xl text-primary">
                  ৳{selectedOrder.total}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                {selectedOrder.status === "Pending" && (
                  <>
                    <button
                      onClick={() => {
                        handleApprove(selectedOrder.id);
                        setSelectedOrder(null);
                      }}
                      className="flex-1 bg-success text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2"
                    >
                      <FaCheck /> Approve Order
                    </button>
                    <button
                      onClick={() => {
                        handleReject(selectedOrder.id);
                        setSelectedOrder(null);
                      }}
                      className="flex-1 bg-error text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition flex items-center justify-center gap-2"
                    >
                      <FaTimes /> Reject Order
                    </button>
                  </>
                )}
                {selectedOrder.status === "Processing" && (
                  <button
                    onClick={() => {
                      handleDeliver(selectedOrder.id);
                      setSelectedOrder(null);
                    }}
                    className="flex-1 bg-success text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                  >
                    Mark as Delivered
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
