"use client";
import { useState } from "react";

export default function CounselingForm() {
  const [formData, setFormData] = useState({ name: "", email: "", date: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const response = await fetch("/api/counseling", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    setLoading(false);

    if (result.success) {
      setMessage("✅ Request sent successfully!");
      setFormData({ name: "", email: "", date: "" });
    } else {
      setMessage("❌ Failed to send request.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-greenCustom"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-greenCustom"
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-greenCustom"
          required
        />
        <button
          type="submit"
          className="w-full bg-greenCustom text-white p-3 rounded hover:bg-yellowh transition shadow-md"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
        {message && <p className="text-center mt-2 text-gray-700">{message}</p>}
      </form>
    </div>
  );
}
