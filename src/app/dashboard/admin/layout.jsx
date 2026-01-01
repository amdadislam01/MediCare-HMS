"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  FaCog,
  FaBars,
  FaBell,
  FaUser,
} from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { DollarSign, LucideLayoutDashboard, PillBottle, UsersRound } from "lucide-react";
import { SiVirustotal } from "react-icons/si";

export default function AdminDashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { icon: <LucideLayoutDashboard />, label: "Overview", path: "/dashboard/admin" },
    {
      icon: <FaUserDoctor />,
      label: "Doctor Management",
      path: "/dashboard/admin/doctors",
    },
    {
      icon: <PillBottle />,
      label: "Pharmacist Management",
      path: "/dashboard/admin/pharmacist",
    },
    {
      icon: <UsersRound />,
      label: "Patient Management",
      path: "/dashboard/admin/patient",
    },
    {
      icon: <SiVirustotal />,
      label: "Total Role",
      path: "/dashboard/admin/totalrole",
    },
    {
      icon: <DollarSign />,
      label: "Total Sale",
      path: "/dashboard/admin/pharmacysale",
    },
    {
      icon: <FaCog />,
      label: "Settings",
      path: "/dashboard/admin/settings",
    },
  ];

  const isActive = (path) => {
    if (path === "/dashboard/admin") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-main mx-auto">
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-card border-b border-default shadow-sm">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-primary hover:bg-primary-light p-2 rounded-lg transition"
            >
              <FaBars size={20} />
            </button>
            <h1 className="text-xl font-bold text-primary">
              MediCare Admin
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition">
              <FaBell className="text-gray-600" size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
              <FaUser className="text-gray-600" size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex pt-16 lg:pt-0">
        <aside className="hidden lg:flex lg:flex-col lg:w-64 bg-card border-r border-default h-screen sticky top-0">
          <div className="p-6 border-b border-default">
            <Link href={"/"}>
              <h1 className="text-2xl font-bold text-primary">MediCare</h1>
              <p className="text-sm text-muted">Admin Dashboard</p>
            </Link>
          </div>
          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                      isActive(item.path)
                        ? "bg-primary text-white"
                        : "text-secondary hover:bg-primary-light hover:text-primary"
                    }`}
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="p-4 border-t border-default">
            <div className="flex items-center gap-3 p-3 bg-primary-light rounded-lg">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                A
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm text-primary">Admin</p>
                <p className="text-xs text-muted">Admin@medicare.com</p>
              </div>
            </div>
          </div>
        </aside>
        {isSidebarOpen && (
          <>
            <div
              className="fixed inset-0 bg-opacity-50 z-40"
              onClick={() => setIsSidebarOpen(false)}
            ></div>
            <aside className="lg:hidden fixed left-0 top-16 bottom-0 w-64 bg-card z-50 shadow-xl">
              <nav className="p-4 overflow-y-auto h-full">
                <ul className="space-y-2">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.path}
                        onClick={() => setIsSidebarOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                          isActive(item.path)
                            ? "bg-primary text-white"
                            : "text-secondary hover:bg-primary-light hover:text-primary"
                        }`}
                      >
                        <span className="text-xl">{item.icon}</span>
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
          </>
        )}

        {/* //main section  */}

        <main className="flex-1 mx-auto">
          <div className="hidden lg:block sticky top-0 z-40 bg-card border-b border-default shadow-sm">
            <div className="flex items-center justify-between p-[21.7px]">
              <div>
                <h2 className="text-2xl font-bold text-primary">
                  Admin Dashboard
                </h2>
                <p className="text-sm text-muted">
                  Manage your Admin operations
                </p>
              </div>

              <div className="flex items-center gap-4">
                <button className="relative p-3 hover:bg-gray-100 rounded-lg transition">
                  <FaBell className="text-gray-600" size={20} />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
                </button>

                <div className="flex items-center gap-3 px-4 py-2 bg-primary-light rounded-lg">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-primary">
                      Admin
                    </p>
                    <p className="text-xs text-muted">Online</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 lg:p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
