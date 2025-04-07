"use client";

import { useState } from "react";
import Navbar from "../components/navbar";

export default function Newone() {
  const [formData, setFormData] = useState({
    names: "",
    emails: "",
    phone: "",
    city: "",
    course: "", // Added course field
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const response = await fetch("/api/mainform", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    setLoading(false);

    if (result.success) {
      setMessage("✅ Request sent successfully!");
      setFormData({ name: "", email: "", phone: "", city: "", course: "" });
    } else {
      setMessage("❌ Failed to send request.");
    }
  };

  return (
    <div>
      <Navbar />
      <section className="bg-[#102a1f] text-white py-28 px-4 md:px-12 lg:px-32">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm tracking-widest text-yellowCustom mb-2">
            FILL YOUR DETAILS TO RESERVE THE SEAT
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-yellowCustom">
            PLEASE FILL OUT YOUR DETAILS ONLY IF:
          </h2>
          <ul className="text-left sm:text-xs md:text-base list-none space-y-3 mb-8">
            <li>
              ✅ You are interested in learning to Speak Arabic with confidence.
            </li>
            <li>
              ✅ You want to understand when you pray and recite Qur&apos;an.
            </li>
            <li>
              ✅ You will practice Arabic everyday and won&apos;t forget what
              you learn
            </li>
          </ul>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="names"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellowCustom"
              required
            />
            <input
              type="email"
              name="emails"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellowCustom"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Mobile No"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellowCustom"
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellowCustom"
              required
            />
            {/* Course Dropdown */}
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellowCustom"
              required
            >
              <option value="">Select a Course</option>
              <option value="arabic-beginner">Arabic for Beginners</option>
              <option value="advanced-arabic">Advanced Arabic</option>
              <option value="quran-understanding">
                Understanding the Qur&apos;an
              </option>
              {/* Add more options as needed */}
            </select>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded transition"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Send"}
            </button>
            {message && <p className="text-sm mt-2">{message}</p>}
          </form>
        </div>
      </section>
    </div>
  );
}
