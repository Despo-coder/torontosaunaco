"use client";
import { useState } from "react";

const ConsultationForm = ({ onSubmit, loading }) => {
  const saunaTypes = ["Cube", "Luna", "Barrel", "Indoor", "Outdoor"];
  const budgetRanges = [
    "Under $10,000",
    "$10,000 - $15,000",
    "$15,000 - $20,000",
    "$20,000+",
  ];
  const timeSlots = [
    "AM (9:00 - 11:00)",
    "PM (1:00 - 3:00)",
    "PM (3:00 - 5:00)",
    "PM (5:00 - 7:00)",
  ];

  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            id="name"
            required
            className="w-full text-gray-800 rounded-lg py-2.5 px-4 border text-sm outline-blue-500"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            required
            className="w-full text-gray-800 rounded-lg py-2.5 px-4 border text-sm outline-blue-500"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          Phone Number
        </label>
        <input
          type="tel"
          placeholder="Enter your phone number"
          id="phone"
          required
          className="w-full text-gray-800 rounded-lg py-2.5 px-4 border text-sm outline-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            Preferred Date
          </label>
          <input
            type="date"
            id="date"
            required
            className="w-full text-gray-800 rounded-lg py-2.5 px-4 border text-sm outline-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="time"
            className="block text-sm font-medium text-gray-700"
          >
            Preferred Time
          </label>
          <select
            id="time"
            required
            className="w-full text-gray-800 rounded-lg py-2.5 px-4 border text-sm outline-blue-500"
          >
            <option value="">Select a time slot</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="saunaType"
            className="block text-sm font-medium text-gray-700"
          >
            Sauna Type Interest
          </label>
          <select
            id="saunaType"
            required
            className="w-full text-gray-800 rounded-lg py-2.5 px-4 border text-sm outline-blue-500"
          >
            <option value="">Select a sauna type</option>
            {saunaTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="budget"
            className="block text-sm font-medium text-gray-700"
          >
            Budget Range
          </label>
          <select
            id="budget"
            required
            className="w-full text-gray-800 rounded-lg py-2.5 px-4 border text-sm outline-blue-500"
          >
            <option value="">Select your budget</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Additional Information
        </label>
        <textarea
          placeholder="Tell us about your space, specific requirements, or any questions you have..."
          rows="4"
          id="message"
          required
          className="w-full text-gray-800 rounded-lg px-4 border text-sm pt-2.5 outline-blue-500"
        ></textarea>
      </div>

      <div className="space-y-3">
        <label className="block text-sm font-medium text-gray-700">
          Preferred Contact Method
        </label>
        <div className="flex space-x-6">
          <label className="flex items-center space-x-2 text-sm text-gray-600">
            <input type="radio" name="contactMethod" value="email" required />
            <span>Email</span>
          </label>
          <label className="flex items-center space-x-2 text-sm text-gray-600">
            <input type="radio" name="contactMethod" value="phone" />
            <span>Phone</span>
          </label>
          <label className="flex items-center space-x-2 text-sm text-gray-600">
            <input type="radio" name="contactMethod" value="either" />
            <span>Either</span>
          </label>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="text-white bg-black hover:bg-[#f9bd63] rounded-xl text-sm px-4 py-3 w-full !mt-8 disabled:opacity-50"
      >
        {loading ? "Scheduling..." : "Schedule Consultation"}
      </button>
    </form>
  );
};

export default ConsultationForm;
