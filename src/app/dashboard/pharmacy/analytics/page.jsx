"use client";
import { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  FaDollarSign,
  FaShoppingCart,
  FaPills,
  FaCalendar,
  FaUps,
} from "react-icons/fa";

export default function PharmacyAnalyticsPage() {
  const [timeRange, setTimeRange] = useState("7days");

  const revenueData = [
    { date: "Jan 10", revenue: 35000, orders: 45 },
    { date: "Jan 11", revenue: 42000, orders: 52 },
    { date: "Jan 12", revenue: 38000, orders: 48 },
    { date: "Jan 13", revenue: 51000, orders: 65 },
    { date: "Jan 14", revenue: 49000, orders: 61 },
    { date: "Jan 15", revenue: 45230, orders: 58 },
    { date: "Jan 16", revenue: 47000, orders: 60 },
  ];

  const topMedicinesData = [
    { name: "Paracetamol", sales: 450, revenue: 22500 },
    { name: "Amoxicillin", sales: 320, revenue: 38400 },
    { name: "Omeprazole", sales: 280, revenue: 22400 },
    { name: "Cetirizine", sales: 250, revenue: 10000 },
    { name: "Metformin", sales: 210, revenue: 12600 },
  ];

  const categoryData = [
    { name: "Tablets", value: 45, color: "#2563EB" },
    { name: "Capsules", value: 25, color: "#16A34A" },
    { name: "Syrups", value: 15, color: "#F59E0B" },
    { name: "Injections", value: 10, color: "#DC2626" },
    { name: "Others", value: 5, color: "#8B5CF6" },
  ];

  const monthlyData = [
    { month: "Aug", sales: 120000 },
    { month: "Sep", sales: 135000 },
    { month: "Oct", sales: 148000 },
    { month: "Nov", sales: 162000 },
    { month: "Dec", sales: 178000 },
    { month: "Jan", sales: 195000 },
  ];

  const stats = [
    {
      icon: <FaDollarSign />,
      label: "Total Revenue",
      value: "৳3,07,230",
      change: "+18%",
      isPositive: true,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: <FaShoppingCart />,
      label: "Total Orders",
      value: "389",
      change: "+12%",
      isPositive: true,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: <FaPills />,
      label: "Medicines Sold",
      value: "1,847",
      change: "+15%",
      isPositive: true,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: <FaUps />,
      label: "Avg Order Value",
      value: "৳790",
      change: "+5%",
      isPositive: true,
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-primary">
            Analytics & Reports
          </h1>
          <p className="text-muted mt-1">
            Track your pharmacy performance and sales
          </p>
        </div>
        <div className="flex items-center gap-3">
          <FaCalendar className="text-muted" />
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="7days">Last 7 Days</option>
            <option value="30days">Last 30 Days</option>
            <option value="90days">Last 90 Days</option>
            <option value="1year">Last Year</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-card rounded-xl shadow-md p-6 border border-default hover:shadow-lg transition"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`${stat.bgColor} ${stat.iconColor} p-4 rounded-lg`}
              >
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <div
                className={`text-sm font-semibold ${
                  stat.isPositive ? "text-success" : "text-error"
                }`}
              >
                {stat.change}
              </div>
            </div>
            <p className="text-muted text-sm mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-primary">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-card rounded-xl shadow-md border border-default p-6">
          <h3 className="text-xl font-bold text-primary mb-4">Revenue Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis
                dataKey="date"
                stroke="#94A3B8"
                style={{ fontSize: "12px" }}
              />
              <YAxis stroke="#94A3B8" style={{ fontSize: "12px" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#2563EB"
                strokeWidth={3}
                dot={{ fill: "#2563EB", r: 5 }}
                activeDot={{ r: 7 }}
                name="Revenue (৳)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-card rounded-xl shadow-md border border-default p-6">
          <h3 className="text-xl font-bold text-primary mb-4">
            Sales by Category
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {categoryData.map((cat, index) => (
              <div
                key={index}
                className="flex items-center justify-between text-sm"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: cat.color }}
                  ></div>
                  <span className="text-secondary">{cat.name}</span>
                </div>
                <span className="font-semibold text-primary">{cat.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl shadow-md border border-default p-6">
          <h3 className="text-xl font-bold text-primary mb-4">
            Top Selling Medicines
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topMedicinesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis
                dataKey="name"
                stroke="#94A3B8"
                style={{ fontSize: "12px" }}
              />
              <YAxis stroke="#94A3B8" style={{ fontSize: "12px" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Bar
                dataKey="sales"
                fill="#16A34A"
                name="Units Sold"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
{/* sales of month  */}
        <div className="bg-card rounded-xl shadow-md border border-default p-6">
          <h3 className="text-xl font-bold text-primary mb-4">
            Monthly Sales Growth
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis
                dataKey="month"
                stroke="#94A3B8"
                style={{ fontSize: "12px" }}
              />
              <YAxis stroke="#94A3B8" style={{ fontSize: "12px" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Bar
                dataKey="sales"
                fill="#2563EB"
                name="Sales (৳)"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-card rounded-xl shadow-md border border-default">
        <div className="p-6 border-b border-default">
          <h3 className="text-xl font-bold text-primary">
            Best Performing Medicines
          </h3>
          <p className="text-sm text-muted mt-1">
            Top revenue generating medicines this period
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-secondary uppercase">
                  Rank
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-secondary uppercase">
                  Medicine
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-secondary uppercase">
                  Units Sold
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-secondary uppercase">
                  Revenue
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-secondary uppercase">
                  Trend
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-default">
              {topMedicinesData.map((medicine, index) => (
                <tr key={index} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full font-bold text-sm">
                      {index + 1}
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-primary">
                    {medicine.name}
                  </td>
                  <td className="px-6 py-4 text-secondary">
                    {medicine.sales} units
                  </td>
                  <td className="px-6 py-4 font-bold text-primary">
                    ৳{medicine.revenue.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-secondary-light text-success rounded-full text-xs font-semibold flex items-center gap-1 w-fit">
                      <FaUps /> +{Math.floor(Math.random() * 20 + 5)}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-primary-light rounded-xl border border-blue-200 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between cursor-pointer gap-4">
          <div>
            <h3 className="font-bold text-primary text-lg mb-1">
              Export Analytics Report
            </h3>
            <p className="text-sm text-secondary">
              Download detailed reports in PDF or Excel format
            </p>
          </div>
          <div className="flex gap-3">
            <button className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition cursor-pointer shadow-md">
              Export as PDF
            </button>
            <button className="bg-success hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition cursor-pointer shadow-md">
              Export as Excel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
