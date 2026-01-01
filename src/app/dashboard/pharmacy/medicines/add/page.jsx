"use client";
import { useState } from "react";
import Link from "next/link";
import { FaArrowLeft, FaUpload, FaSave } from "react-icons/fa";

export default function AddMedicinePharmacy() {
  const [formData, setFormData] = useState({
    name: "",
    genericName: "",
    category: "Tablet",
    price: "",
    stock: "",
    minStock: "",
    manufacturer: "",
    expiryDate: "",
    description: "",
    imageUrl: "",
  });

  const [imagePreview, setImagePreview] = useState("");

  const categories = [
    "Tablet",
    "Capsule",
    "Syrup",
    "Injection",
    "Cream",
    "Drops",
    "Inhaler",
  ];
  const manufacturers = [
    "Square Pharmaceuticals",
    "Beximco Pharma",
    "Incepta Pharma",
    "Renata Limited",
    "Novo Nordisk",
    "ACI Limited",
    "Healthcare Pharma",
    "Opsonin Pharma",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Medicine added successfully!");
    setFormData({
      name: "",
      genericName: "",
      category: "Tablet",
      price: "",
      stock: "",
      minStock: "",
      manufacturer: "",
      expiryDate: "",
      description: "",
      imageUrl: "",
    });
    setImagePreview("");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/pharmacy/medicines">
          <button className="bg-gray-100 hover:bg-gray-200 text-secondary p-3 rounded-lg transition">
            <FaArrowLeft />
          </button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-primary">Add New Medicine</h1>
          <p className="text-muted mt-1">
            Fill in the details to add medicine to inventory
          </p>
        </div>
      </div>

      <div className="bg-card rounded-xl shadow-md border border-default p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="lg:col-span-2">
            <label className="block text-sm font-semibold text-secondary mb-2">
              Medicine Name <span className="text-error">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., Paracetamol 500mg"
              className="w-full px-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="lg:col-span-2">
            <label className="block text-sm font-semibold text-secondary mb-2">
              Generic Name <span className="text-error">*</span>
            </label>
            <input
              type="text"
              name="genericName"
              value={formData.genericName}
              onChange={handleChange}
              placeholder="e.g., Acetaminophen"
              className="w-full px-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-secondary mb-2">
              Category <span className="text-error">*</span>
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-secondary mb-2">
              Manufacturer <span className="text-error">*</span>
            </label>
            <select
              name="manufacturer"
              value={formData.manufacturer}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select Manufacturer</option>
              {manufacturers.map((mfr) => (
                <option key={mfr} value={mfr}>
                  {mfr}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-secondary mb-2">
              Price (৳) <span className="text-error">*</span>
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              min="0"
              step="0.01"
              placeholder="0.00"
              className="w-full px-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-secondary mb-2">
              Stock Quantity <span className="text-error">*</span>
            </label>
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              min="0"
              placeholder="0"
              className="w-full px-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-secondary mb-2">
              Minimum Stock Alert <span className="text-error">*</span>
            </label>
            <input
              type="number"
              name="minStock"
              value={formData.minStock}
              onChange={handleChange}
              min="0"
              placeholder="0"
              className="w-full px-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <p className="text-xs text-muted mt-1">
              Alert when stock goes below this number
            </p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-secondary mb-2">
              Expiry Date <span className="text-error">*</span>
            </label>
            <input
              type="date"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="lg:col-span-2">
            <label className="block text-sm font-semibold text-secondary mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              placeholder="Enter medicine description, usage instructions, side effects, etc."
              className="w-full px-4 py-3 border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            ></textarea>
          </div>

          <div className="lg:col-span-2">
            <label className="block text-sm font-semibold text-secondary mb-2">
              Medicine Image
            </label>
            <div className="border-2 border-dashed border-default rounded-lg p-6 text-center">
              {imagePreview ? (
                <div className="space-y-4">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-48 h-48 object-cover mx-auto rounded-lg border border-default"
                  />
                  <button
                    type="button"
                    onClick={() => setImagePreview("")}
                    className="text-error hover:underline text-sm font-semibold"
                  >
                    Remove Image
                  </button>
                </div>
              ) : (
                <label className="cursor-pointer">
                  <FaUpload className="text-4xl text-muted mx-auto mb-3" />
                  <p className="text-muted mb-2">
                    Click to upload medicine image
                  </p>
                  <p className="text-xs text-muted">PNG, JPG up to 5MB</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link href="/dashboard/pharmacy/medicines" className="flex-1">
            <button
              type="button"
              className="w-full bg-gray-100 hover:bg-gray-200 text-secondary px-6 py-3 rounded-lg font-semibold transition"
            >
              Cancel
            </button>
          </Link>
          <button
            onClick={handleSubmit}
            className="flex-1 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition shadow-md hover:shadow-lg"
          >
            <FaSave /> Add Medicine
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-primary-light rounded-lg p-4 border border-blue-200">
          <h4 className="font-bold text-primary mb-1">Stock Management</h4>
          <p className="text-sm text-secondary">
            Set minimum stock to get low stock alerts
          </p>
        </div>
        <div className="bg-warning rounded-lg p-4 border border-yellow-200">
          <h4 className="font-bold text-warning-color mb-1">Expiry Tracking</h4>
          <p className="text-sm text-secondary">
            Monitor expiry dates to prevent waste
          </p>
        </div>
        <div className="bg-secondary-light rounded-lg p-4 border border-green-200">
          <h4 className="font-bold text-success mb-1">Inventory Control</h4>
          <p className="text-sm text-secondary">
            Keep your pharmacy stock organized
          </p>
        </div>
      </div>
    </div>
  );
}
