"use client";

import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaVenusMars,
  FaIdCard,
  FaUserInjured,
  FaSave,
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

export default function PatientRegistrationPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    bloodGroup: "",
    address: "",
    city: "",
    postalCode: "",
    emergencyContact: "",
    emergencyName: "",
    nidNumber: "",
    medicalHistory: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phone || !formData.email) {
      toast.error("Please fill in all required fields!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    console.log("Patient Registration Data:", formData);
    toast.success("Patient registered successfully!");

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      gender: "",
      bloodGroup: "",
      address: "",
      city: "",
      postalCode: "",
      emergencyContact: "",
      emergencyName: "",
      nidNumber: "",
      medicalHistory: "",
    });
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <Toaster position="top-right" />

      {/* Header */}
      <div className="bg-card rounded-xl shadow-md p-4 md:p-6 border border-default">
        <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">
          Patient Registration
        </h1>
        <p className="text-sm md:text-base text-muted">
          Add new patient information to the system
        </p>
      </div>

      {/* Registration Form */}
      <div className="bg-card rounded-xl shadow-md p-4 md:p-8 border border-default">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-primary mb-4 pb-2 border-b border-default">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Full Name <span className="text-error">*</span>
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-primary"
                    placeholder="Enter full name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Email Address <span className="text-error">*</span>
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-primary"
                    placeholder="Enter email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Phone Number <span className="text-error">*</span>
                </label>
                <div className="relative">
                  <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-primary"
                    placeholder="+880 1XXX-XXXXXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Date of Birth
                </label>
                <div className="relative">
                  <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" />
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Gender
                </label>
                <div className="relative">
                  <FaVenusMars className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" />
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-primary"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Blood Group
                </label>
                <div className="relative">
                  <FaUserInjured className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" />
                  <select
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-primary"
                  >
                    <option value="">Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  NID Number
                </label>
                <div className="relative">
                  <FaIdCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" />
                  <input
                    type="text"
                    name="nidNumber"
                    value={formData.nidNumber}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-primary"
                    placeholder="Enter NID number"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-primary mb-4 pb-2 border-b border-default">
              Address Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-primary mb-2">
                  Street Address
                </label>
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-3 top-4 text-muted" />
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows="3"
                    className="w-full pl-10 pr-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-primary resize-none"
                    placeholder="Enter street address"
                  ></textarea>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-primary"
                  placeholder="Enter city"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Postal Code
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-primary"
                  placeholder="Enter postal code"
                />
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-primary mb-4 pb-2 border-b border-default">
              Emergency Contact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Contact Name
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" />
                  <input
                    type="text"
                    name="emergencyName"
                    value={formData.emergencyName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-primary"
                    placeholder="Enter contact name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Contact Phone
                </label>
                <div className="relative">
                  <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" />
                  <input
                    type="tel"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-primary"
                    placeholder="+880 1XXX-XXXXXX"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Medical History */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-primary mb-4 pb-2 border-b border-default">
              Medical History (Optional)
            </h3>
            <textarea
              name="medicalHistory"
              value={formData.medicalHistory}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-primary resize-none"
              placeholder="Enter any relevant medical history, allergies, or chronic conditions..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 sm:flex-none bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition flex items-center justify-center gap-2"
            >
              <FaSave />
              Register Patient
            </button>
            <button
              type="button"
              onClick={() =>
                setFormData({
                  fullName: "",
                  email: "",
                  phone: "",
                  dateOfBirth: "",
                  gender: "",
                  bloodGroup: "",
                  address: "",
                  city: "",
                  postalCode: "",
                  emergencyContact: "",
                  emergencyName: "",
                  nidNumber: "",
                  medicalHistory: "",
                })
              }
              className="flex-1 sm:flex-none border border-default text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              Clear Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
