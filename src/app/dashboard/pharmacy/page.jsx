//for view go to this link  http://localhost:3000/dashboard/pharmacy

import Link from "next/link";
import {
  FaPills,
  FaClipboardList,
  FaExclamationTriangle,
  FaDollarSign,
  FaArrowUp,
  FaArrowDown,
  FaChartBar,
} from "react-icons/fa";

export default function PharmacyDashboard() {
  const stats = [
    {
      icon: <FaPills />,
      label: "Total Medicines",
      value: "1,247",
      change: "+12%",
      isPositive: true,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: <FaClipboardList />,
      label: "Pending Orders",
      value: "23",
      change: "-5%",
      isPositive: false,
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      icon: <FaExclamationTriangle />,
      label: "Low Stock Items",
      value: "15",
      change: "+3",
      isPositive: false,
      bgColor: "bg-red-100",
      iconColor: "text-red-600",
    },
    {
      icon: <FaDollarSign />,
      label: "Today's Revenue",
      value: "৳45,230",
      change: "+18%",
      isPositive: true,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
  ];

  const recentOrders = [
    {
      id: "ORD-001",
      patientName: "John Doe",
      doctor: "Dr. Sarah Ahmed",
      medicines: 3,
      total: "৳850",
      status: "Pending",
      date: "2024-01-15",
    },
    {
      id: "ORD-002",
      patientName: "Jane Smith",
      doctor: "Dr. Michael Khan",
      medicines: 2,
      total: "৳620",
      status: "Processing",
      date: "2024-01-15",
    },
    {
      id: "ORD-003",
      patientName: "Robert Brown",
      doctor: "Dr. Fatima Rahman",
      medicines: 5,
      total: "৳1,200",
      status: "Delivered",
      date: "2024-01-14",
    },
    {
      id: "ORD-004",
      patientName: "Emily Wilson",
      doctor: "Dr. Ahmed Hassan",
      medicines: 1,
      total: "৳320",
      status: "Pending",
      date: "2024-01-14",
    },
  ];

  const lowStockMedicines = [
    { name: "Paracetamol 500mg", stock: 12, minStock: 50, category: "Tablet" },
    { name: "Amoxicillin 250mg", stock: 8, minStock: 30, category: "Capsule" },
    { name: "Cough Syrup", stock: 5, minStock: 20, category: "Syrup" },
    {
      name: "Insulin Injection",
      stock: 3,
      minStock: 15,
      category: "Injection",
    },
    { name: "Vitamin D3", stock: 15, minStock: 40, category: "Tablet" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-warning text-warning-color";
      case "Processing":
        return "bg-primary-light text-blue";
      case "Delivered":
        return "bg-secondary-light text-success";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-card rounded-xl shadow-md p-6 border border-default hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div
                className={`${stat.bgColor} ${stat.iconColor} p-4 rounded-lg`}
              >
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <div
                className={`flex items-center gap-1 text-sm font-semibold ${
                  stat.isPositive ? "text-success" : "text-error"
                }`}
              >
                {stat.isPositive ? <FaArrowUp /> : <FaArrowDown />}
                {stat.change}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-muted text-sm">{stat.label}</p>
              <p className="text-3xl font-bold text-primary mt-1">
                {stat.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-card rounded-xl shadow-md border border-default">
          <div className="p-6 border-b border-default flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-primary">Recent Orders</h3>
              <p className="text-sm text-muted">Latest prescription orders</p>
            </div>
            <Link
              href="/dashboard/pharmacy/orders"
              className="text-blue hover:underline text-sm font-semibold"
            >
              View All
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-secondary uppercase">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-secondary uppercase">
                    Patient
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-secondary uppercase">
                    Doctor
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-secondary uppercase">
                    Total
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-secondary uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-default">
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 text-sm font-medium text-primary">
                      {order.id}
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-medium text-primary">
                          {order.patientName}
                        </p>
                        <p className="text-xs text-muted">
                          {order.medicines} medicines
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-secondary">
                      {order.doctor}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-primary">
                      {order.total}
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-card rounded-xl shadow-md border border-default">
          <div className="p-6 border-b border-default">
            <div className="flex items-center gap-2 mb-1">
              <FaExclamationTriangle className="text-error" />
              <h3 className="text-xl font-bold text-primary">
                Low Stock Alert
              </h3>
            </div>
            <p className="text-sm text-muted">Medicines need restocking</p>
          </div>
          <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
            {lowStockMedicines.map((medicine, index) => (
              <div
                key={index}
                className="p-4 bg-error-light rounded-lg border border-red-200"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-primary">
                      {medicine.name}
                    </p>
                    <p className="text-xs text-muted">{medicine.category}</p>
                  </div>
                  <span className="px-2 py-1 bg-error text-white text-xs font-bold rounded">
                    {medicine.stock}
                  </span>
                </div>
                <div className="w-full bg-red-200 rounded-full h-2">
                  <div
                    className="bg-error h-2 rounded-full"
                    style={{
                      width: `${(medicine.stock / medicine.minStock) * 100}%`,
                    }}
                  ></div>
                </div>
                <p className="text-xs text-muted mt-1">
                  Min Stock: {medicine.minStock}
                </p>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-default">
            <button className="w-full cursor-pointer bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary-dark transition">
              Restock All
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          href="/dashboard/pharmacy/medicines/add"
          className="bg-card rounded-xl shadow-md p-6 border border-default hover:shadow-lg hover:border-primary transition group"
        >
          <div className="flex items-center gap-4">
            <div className="bg-primary-light text-blue p-4 rounded-lg group-hover:scale-110 transition">
              <FaPills className="text-2xl" />
            </div>
            <div>
              <p className="font-bold text-lg text-primary">Add New Medicine</p>
              <p className="text-sm text-muted">Add to inventory</p>
            </div>
          </div>
        </Link>

        <Link
          href="/dashboard/pharmacy/orders"
          className="bg-card rounded-xl shadow-md p-6 border border-default hover:shadow-lg hover:border-primary transition group"
        >
          <div className="flex items-center gap-4">
            <div className="bg-yellow-100 text-yellow-600 p-4 rounded-lg group-hover:scale-110 transition">
              <FaClipboardList className="text-2xl" />
            </div>
            <div>
              <p className="font-bold text-lg text-primary">Process Orders</p>
              <p className="text-sm text-muted">23 pending orders</p>
            </div>
          </div>
        </Link>

        <Link
          href="/dashboard/pharmacy/analytics"
          className="bg-card rounded-xl shadow-md p-6 border border-default hover:shadow-lg hover:border-primary transition group"
        >
          <div className="flex items-center gap-4">
            <div className="bg-green-100 text-green-600 p-4 rounded-lg group-hover:scale-110 transition">
              <FaChartBar className="text-2xl" />
            </div>
            <div>
              <p className="font-bold text-lg text-primary">View Analytics</p>
              <p className="text-sm text-muted">Sales & Reports</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
