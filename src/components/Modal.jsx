import React, { useState, useEffect } from "react";

const Modal = ({ isOpen, title, onClose, onSave, customer, type }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  // Update form when modal is opened for editing
  useEffect(() => {
    if (type === "edit" && customer) {
      setFormData({
        name: customer.name || "",
        email: customer.email || "",
        phone: customer.phone || "",
        company: customer.company || "",
      });
    }
  }, [customer, type]);

  // Handle Input Change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Save Data
  const handleSave = () => {
    if (type === "add") {
      onSave({ ...formData, id: Date.now() }); // Create a new ID for a new customer
    } else {
      onSave({ ...customer, ...formData }); // Update existing customers
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-black/30">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>

        {type === "delete" ? (
          <p>
            Are you sure you want to delete <b>{customer?.name}</b>?
          </p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSave();
            }}
          >
            {/* Input Fields */}
            <div className="mb-3">
              <label className="block text-gray-700">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <div className="mb-3">
              <label className="block text-gray-700">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <div className="mb-3">
              <label className="block text-gray-700">Phone:</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <div className="mb-3">
              <label className="block text-gray-700">Company:</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-400 text-white px-3 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-3 py-2 rounded-md"
              >
                {type === "add" ? "Add Customer" : "Update Customer"}
              </button>
            </div>
          </form>
        )}

        {/* Button Delete */}
        {type === "delete" && (
          <div className="mt-4 flex justify-end gap-2">
            <button
              onClick={onClose}
              className="bg-gray-400 text-white px-3 py-2 rounded-md"
            >
              Cancel
            </button>
            <button
              onClick={onSave}
              className="bg-red-500 text-white px-3 py-2 rounded-md"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
