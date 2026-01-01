"use client";
import { useState } from "react";
import {
  FaSave,
  FaBell,
  FaStore,
  FaUser,
  FaLock,
  FaClock,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function AdminSettingsPage() {
  const [AdminProfile, setAdminProfile] = useState({
    name: "MediCare Admin",
    license: "PH-2024-001234",
    email: "Admin@medicare.com",
    phone: "+880 1712-345678",
    address: "123 Medical Road, Dhaka 1000",
    emergencyContact: "+880 1812-987654",
  });

  const [operatingHours, setOperatingHours] = useState({
    monday: { open: "09:00", close: "21:00", isOpen: true },
    tuesday: { open: "09:00", close: "21:00", isOpen: true },
    wednesday: { open: "09:00", close: "21:00", isOpen: true },
    thursday: { open: "09:00", close: "21:00", isOpen: true },
    friday: { open: "09:00", close: "21:00", isOpen: true },
    saturday: { open: "09:00", close: "18:00", isOpen: true },
    sunday: { open: "10:00", close: "16:00", isOpen: false },
  });

  const [notifications, setNotifications] = useState({
    lowStockAlert: true,
    expiryAlert: true,
    newOrders: true,
    orderUpdates: true,
    emailNotifications: true,
    smsNotifications: false,
  });

  const [userProfile, setUserProfile] = useState({
    name: "Dr. Ahmed Hassan",
    role: "Admin",
    email: "ahmed@medicare.com",
    phone: "+880 1712-345678",
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setAdminProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleUserProfileChange = (e) => {
    const { name, value } = e.target;
    setUserProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNotificationToggle = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleHoursChange = (day, field, value) => {
    setOperatingHours((prev) => ({
      ...prev,
      [day]: { ...prev[day], [field]: value },
    }));
  };

  const handleSaveProfile = () => {
    console.log("Admin Profile:", AdminProfile);
    alert("Admin profile updated successfully!");
  };

  const handleSaveHours = () => {
    console.log("Operating Hours:", operatingHours);
    alert("Operating hours updated successfully!");
  };

  const handleSaveNotifications = () => {
    console.log("Notifications:", notifications);
    alert("Notification settings updated successfully!");
  };

  const handleSaveUserProfile = () => {
    console.log("User Profile:", userProfile);
    alert("User profile updated successfully!");
  };

  const handleChangePassword = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Password changed");
    alert("Password changed successfully!");
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-primary">Settings</h1>
        <p className="text-muted mt-1">
          Manage your Admin settings and preferences
        </p>
      </div>

      <div className="bg-card rounded-xl shadow-md border border-default p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-primary-light text-blue p-3 rounded-lg">
            <FaStore className="text-2xl" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-primary">Admin Profile</h2>
            <p className="text-sm text-muted">
              Basic information about your Admin
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-secondary mb-2">
              Admin Name <span className="text-error">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={AdminProfile.name}
              onChange={handleProfileChange}
              className="w-full px-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-secondary mb-2">
              License Number <span className="text-error">*</span>
            </label>
            <input
              type="text"
              name="license"
              value={AdminProfile.license}
              onChange={handleProfileChange}
              className="w-full px-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-secondary mb-2 flex items-center gap-2">
              <FaEnvelope className="text-muted" /> Email
            </label>
            <input
              type="email"
              name="email"
              value={AdminProfile.email}
              onChange={handleProfileChange}
              className="w-full px-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-secondary mb-2 flex items-center gap-2">
              <FaPhone className="text-muted" /> Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={AdminProfile.phone}
              onChange={handleProfileChange}
              className="w-full px-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-secondary mb-2 flex items-center gap-2">
              <FaMapMarkerAlt className="text-muted" /> Address
            </label>
            <textarea
              name="address"
              value={AdminProfile.address}
              onChange={handleProfileChange}
              rows={3}
              className="w-full px-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-semibold text-secondary mb-2">
              Emergency Contact
            </label>
            <input
              type="tel"
              name="emergencyContact"
              value={AdminProfile.emergencyContact}
              onChange={handleProfileChange}
              className="w-full px-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={handleSaveProfile}
            className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2"
          >
            <FaSave /> Save Changes
          </button>
        </div>
      </div>

      {/* Operating Hours */}
      <div className="bg-card rounded-xl shadow-md border border-default p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-green-100 text-green-600 p-3 rounded-lg">
            <FaClock className="text-2xl" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-primary">Operating Hours</h2>
            <p className="text-sm text-muted">
              Set your Admin working hours
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {Object.entries(operatingHours).map(([day, hours]) => (
            <div
              key={day}
              className="flex flex-col md:flex-row md:items-center gap-4 p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center gap-4 md:w-48">
                <input
                  type="checkbox"
                  checked={hours.isOpen}
                  onChange={(e) =>
                    handleHoursChange(day, "isOpen", e.target.checked)
                  }
                  className="w-5 h-5 text-primary focus:ring-primary rounded"
                />
                <span className="font-semibold text-primary capitalize">
                  {day}
                </span>
              </div>

              {hours.isOpen ? (
                <div className="flex items-center gap-4 flex-1">
                  <div className="flex-1">
                    <label className="block text-xs text-muted mb-1">
                      Opening Time
                    </label>
                    <input
                      type="time"
                      value={hours.open}
                      onChange={(e) =>
                        handleHoursChange(day, "open", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <span className="text-muted">to</span>
                  <div className="flex-1">
                    <label className="block text-xs text-muted mb-1">
                      Closing Time
                    </label>
                    <input
                      type="time"
                      value={hours.close}
                      onChange={(e) =>
                        handleHoursChange(day, "close", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
              ) : (
                <span className="text-error font-semibold">Closed</span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6">
          <button
            onClick={handleSaveHours}
            className="bg-success hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2"
          >
            <FaSave /> Save Hours
          </button>
        </div>
      </div>

      <div className="bg-card rounded-xl shadow-md border border-default p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-yellow-100 text-yellow-600 p-3 rounded-lg">
            <FaBell className="text-2xl" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-primary">
              Notification Settings
            </h2>
            <p className="text-sm text-muted">
              Manage your notification preferences
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {Object.entries(notifications).map(([key, value]) => (
            <div
              key={key}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div>
                <p className="font-semibold text-primary capitalize">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </p>
                <p className="text-sm text-muted">
                  {key === "lowStockAlert" &&
                    "Get notified when stock is running low"}
                  {key === "expiryAlert" &&
                    "Alert for medicines nearing expiry"}
                  {key === "newOrders" &&
                    "Notification for new prescription orders"}
                  {key === "orderUpdates" && "Updates on order status changes"}
                  {key === "emailNotifications" &&
                    "Receive notifications via email"}
                  {key === "smsNotifications" &&
                    "Receive notifications via SMS"}
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={() => handleNotificationToggle(key)}
                  className="sr-only peer"
                />
                <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <button
            onClick={handleSaveNotifications}
            className="bg-warning-color hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2"
          >
            <FaSave /> Save Preferences
          </button>
        </div>
      </div>
      <div className="bg-card rounded-xl shadow-md border border-default p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-purple-100 text-purple-600 p-3 rounded-lg">
            <FaUser className="text-2xl" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-primary">User Profile</h2>
            <p className="text-sm text-muted">
              Update your personal information
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-secondary mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={userProfile.name}
              onChange={handleUserProfileChange}
              className="w-full px-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-secondary mb-2">
              Role
            </label>
            <input
              type="text"
              name="role"
              value={userProfile.role}
              onChange={handleUserProfileChange}
              disabled
              className="w-full px-4 py-3 border border-default rounded-lg bg-gray-100 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-secondary mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={userProfile.email}
              onChange={handleUserProfileChange}
              className="w-full px-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-secondary mb-2">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={userProfile.phone}
              onChange={handleUserProfileChange}
              className="w-full px-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={handleSaveUserProfile}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2"
          >
            <FaSave /> Update Profile
          </button>
        </div>
      </div>

      <div className="bg-card rounded-xl shadow-md border border-default p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-red-100 text-red-600 p-3 rounded-lg">
            <FaLock className="text-2xl" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-primary">Change Password</h2>
            <p className="text-sm text-muted">Update your account password</p>
          </div>
        </div>

        <div className="space-y-4 max-w-md">
          <div>
            <label className="block text-sm font-semibold text-secondary mb-2">
              Current Password
            </label>
            <input
              type="password"
              name="currentPassword"
              value={passwordData.currentPassword}
              onChange={handlePasswordChange}
              className="w-full px-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-secondary mb-2">
              New Password
            </label>
            <input
              type="password"
              name="newPassword"
              value={passwordData.newPassword}
              onChange={handlePasswordChange}
              className="w-full px-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-secondary mb-2">
              Confirm New Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={passwordData.confirmPassword}
              onChange={handlePasswordChange}
              className="w-full px-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={handleChangePassword}
            className="bg-error hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2"
          >
            <FaLock /> Change Password
          </button>
        </div>
      </div>
    </div>
  );
}
