"use client";

import { useState } from "react";
import { seedHeaters } from "@/scripts/seed-heaters";

const AdminSeedPage = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSeed = async () => {
    try {
      setLoading(true);
      setStatus("Seeding database...");
      await seedHeaters();
      setStatus("Database seeded successfully!");
    } catch (error) {
      setStatus("Error seeding database: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
          <h1 className="text-3xl font-bold mb-8">Database Seeding</h1>

          <div className="space-y-4">
            <p className="text-gray-600">
              This will clear all existing heaters and add sample data to the
              database.
            </p>

            <button
              onClick={handleSeed}
              disabled={loading}
              className={`px-4 py-2 rounded ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              } text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
            >
              {loading ? "Seeding..." : "Seed Database"}
            </button>

            {status && (
              <div
                className={`mt-4 p-4 rounded ${
                  status.includes("Error")
                    ? "bg-red-100 text-red-700"
                    : status.includes("success")
                      ? "bg-green-100 text-green-700"
                      : "bg-blue-100 text-blue-700"
                }`}
              >
                {status}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSeedPage;
