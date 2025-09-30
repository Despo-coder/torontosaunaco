"use client";

import { useState, useEffect } from "react";
import HeaterCard from "@/components/HeaterCard";
// import { GoogleTagManager } from "@next/third-parties/google";
import Link from "next/link";

const Heaters = () => {
  const [heaters, setHeaters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeaters = async () => {
      try {
        const response = await fetch("/api/heaters");
        if (!response.ok) throw new Error("Failed to fetch heaters");
        const data = await response.json();
        setHeaters(data);
      } catch (error) {
        console.error("Error fetching heaters:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeaters();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* <GoogleTagManager gtmId="AW-16622832527" /> */}

      {/* Hero Section */}
      <div className="relative bg-gray-800 text-white py-24 mt-[4px]">
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dw4ev5whz/image/upload/v1746123759/heater_new_qvf9w7.jpg')] bg-clip-content opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold mb-6 font-rubik">
            Premium Sauna Heaters
          </h1>
          <p className="text-xl max-w-2xl font-light">
            Discover our collection of high-quality sauna heaters, designed for
            optimal performance and durability.
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center font-rubik">
          Our Heater Collection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {heaters.map((heater) => (
            <HeaterCard key={heater._id} heater={heater} />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Why Choose Our Heaters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "⚡",
                title: "Energy Efficient",
                description:
                  "Our heaters are designed for optimal energy consumption",
              },
              {
                icon: "🛡️",
                title: "Safety First",
                description:
                  "Built-in safety features and temperature controls",
              },
              {
                icon: "🔧",
                title: "Easy Installation",
                description: "Simple setup process with comprehensive guides",
              },
              {
                icon: "⭐",
                title: "Long Lasting",
                description: "Durable construction for years of reliable use",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-rubik">
            Need Help Choosing?
          </h2>
          <p className="text-xl mb-8 font-light">
            Our experts are here to help you select the perfect heater for your
            sauna
          </p>

          <Link href="/quote">
            <button className="px-8 py-3 border border-gray-300 text-black bg-white rounded-lg hover:bg-black hover:text-white shadow-sm transition-all ease-in duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 text-lg">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heaters;
