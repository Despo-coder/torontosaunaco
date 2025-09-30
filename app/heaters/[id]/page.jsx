"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/Contact";

const HeaterDetails = () => {
  const [heater, setHeater] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState({
    stones: null,
    controls: null,
    safetyRailing: null,
  });
  const [selectedImage, setSelectedImage] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showContact, setShowContact] = useState(false);
  const params = useParams();
  // console.log(heater);
  useEffect(() => {
    const fetchHeater = async () => {
      try {
        const response = await fetch(`/api/heaters/${params.id}`);
        if (!response.ok) throw new Error("Failed to fetch heater");
        const data = await response.json();
        setHeater(data);
        setTotalPrice(data.basePrice);

        // Set default options
        const defaultOptions = {
          stones: data.options.stones.find((s) => s.isDefault) || null,
          controls: data.options.controls.find((c) => c.isDefault) || null,
          safetyRailing:
            data.options.safetyRailing.find((r) => r.isDefault) || null,
        };
        setSelectedOptions(defaultOptions);
      } catch (error) {
        console.error("Error fetching heater:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeater();
  }, [params.id]);

  useEffect(() => {
    if (heater) {
      let total = heater.basePrice;
      if (selectedOptions.stones) total += selectedOptions.stones.price;
      if (selectedOptions.controls) total += selectedOptions.controls.price;
      if (selectedOptions.safetyRailing)
        total += selectedOptions.safetyRailing.price;
      setTotalPrice(total);
    }
  }, [selectedOptions, heater]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  if (!heater)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Heater not found
      </div>
    );

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Image gallery */}
          <div className="relative">
            {heater.images?.length > 0 && (
              <div className="relative flex flex-col items-center space-y-4">
                {/* Main Image */}
                {heater.images?.length > 0 && (
                  <div className="w-full max-w-[400px] aspect-square mx-auto rounded-lg overflow-hidden flex items-center justify-center bg-gray-100 relative">
                    <Image
                      src={heater.images[selectedImage].url}
                      alt={heater.images[selectedImage].alt}
                      className="w-full h-full object-cover"
                      fill
                      sizes="(max-width: 640px) 100vw, 400px"
                      priority={true}
                    />
                  </div>
                )}

                {/* Thumbnail Gallery */}
                {heater.images?.length > 1 && (
                  <div className="grid grid-cols-4 gap-1 w-full max-w-[400px]">
                    {heater.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`relative aspect-square rounded-lg overflow-hidden ${
                          selectedImage === index
                            ? "ring-2 ring-indigo-500"
                            : "ring-1 ring-gray-200"
                        }`}
                      >
                        <Image
                          src={image.url}
                          alt={image.alt}
                          className={`w-full h-full object-center object-cover ${
                            selectedImage === index
                              ? "opacity-100"
                              : "opacity-75 hover:opacity-100"
                          }`}
                          width={150}
                          height={150}
                          priority
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Product info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-bold mb-4  text-black font-playfair">
              {heater.name}
            </h1>
            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-2xl text-gray-900">
                Starting from ${heater.basePrice}
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900">Description</h3>
              <div className="mt-4 space-y-4 text-gray-950">
                {(() => {
                  const textArray = Array.isArray(heater.description)
                    ? heater.description.join(" ")
                    : heater.description;

                  // Split by sentence-ending period followed by a space or line break
                  const sentences =
                    textArray.match(/[^.!?]+[.!?]+[\])'"`’”]*\s*/g) || [];

                  // Group sentences into paragraphs of 3
                  const paragraphs = [];
                  for (let i = 0; i < sentences.length; i += 3) {
                    const chunk = sentences
                      .slice(i, i + 3)
                      .join(" ")
                      .trim();
                    if (chunk) paragraphs.push(chunk);
                  }

                  return paragraphs.map((para, index) => (
                    <p key={index} className="text-base leading-relaxed">
                      {para}
                    </p>
                  ));
                })()}
              </div>
            </div>

            {/* Specifications */}
            <div className="mt-8 border-t border-gray-200 pt-8">
              <h3 className="text-lg font-medium text-black">Specifications</h3>
              <div className="mt-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-black">Room Size</p>
                    <p className="mt-1 text-md text-black">
                      {heater.specifications.roomSize.min} -{" "}
                      {heater.specifications.roomSize.max} m³
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-950">Power</p>
                    <p className="mt-1 text-sm text-gray-900">
                      {heater.power} kW
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-950">Width</p>
                    <p className="mt-1 text-sm text-gray-900">
                      {heater.specifications.dimensions.width.metric} mm
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-950">Depth</p>
                    <p className="mt-1 text-sm text-gray-900">
                      {heater.specifications.dimensions.depth.metric} mm
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Options */}
            <div className="mt-8 border-t border-gray-200 pt-8">
              <h3 className="text-lg font-medium text-gray-900">
                Customize Your Heater
              </h3>

              {/* Stones Selection */}
              <div className="mt-4">
                <label className="text-sm font-medium text-gray-700">
                  Stones
                </label>
                <div className="mt-4 space-y-3">
                  {heater.options.stones.map((stone) => {
                    const isSelected =
                      selectedOptions.stones?.type === stone.type;
                    return (
                      <label
                        key={stone.type}
                        className={`block cursor-pointer border rounded-xl p-4 transition-all duration-150 ${
                          isSelected
                            ? "border-indigo-600 bg-indigo-50"
                            : "border-gray-300 hover:border-indigo-400"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <input
                              type="radio"
                              name="stones"
                              checked={isSelected}
                              onChange={() =>
                                setSelectedOptions({
                                  ...selectedOptions,
                                  stones: stone,
                                })
                              }
                              className="h-5 w-5 text-indigo-600 focus:ring-indigo-500"
                            />
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                {stone.type}
                              </p>
                              <p className="text-sm text-gray-950">
                                {stone.description}
                              </p>
                            </div>
                          </div>
                          <div className="text-sm text-gray-700 text-right">
                            <p>${stone.price}</p>
                            <p>
                              {stone.weight.metric} kg ({stone.weight.imperial}{" "}
                              lb)
                            </p>
                          </div>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Controls Selection */}
              <div className="mt-6">
                <label className="text-sm font-medium text-gray-700">
                  Controls
                </label>
                <div className="mt-4 space-y-3">
                  {heater.options.controls.map((control) => {
                    const isSelected =
                      selectedOptions.controls?.type === control.type;
                    return (
                      <label
                        key={control.type}
                        className={`block cursor-pointer border rounded-xl p-4 transition-all duration-150 ${
                          isSelected
                            ? "border-indigo-600 bg-indigo-50"
                            : "border-gray-300 hover:border-indigo-400"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <input
                              type="radio"
                              name="controls"
                              checked={isSelected}
                              onChange={() =>
                                setSelectedOptions({
                                  ...selectedOptions,
                                  controls: control,
                                })
                              }
                              className="h-5 w-5 text-indigo-600 focus:ring-indigo-500"
                            />
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                {control.type}
                              </p>
                              <p className="text-sm text-gray-950">
                                {control.description}
                              </p>
                            </div>
                          </div>
                          <div className="text-sm text-gray-700 text-right">
                            <p>${control.price}</p>
                          </div>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Safety Railing Selection */}
              <div className="mt-6">
                <label className="text-sm font-medium text-gray-700">
                  Safety Railing
                </label>
                <div className="mt-4 space-y-3">
                  {heater.options.safetyRailing.map((railing) => {
                    const isSelected =
                      selectedOptions.safetyRailing?.type === railing.type;
                    return (
                      <label
                        key={railing.type}
                        className={`block cursor-pointer border rounded-xl p-4 transition-all duration-150 ${
                          isSelected
                            ? "border-indigo-600 bg-indigo-50"
                            : "border-gray-300 hover:border-indigo-400"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <input
                              type="radio"
                              name="safetyRailing"
                              checked={isSelected}
                              onChange={() =>
                                setSelectedOptions({
                                  ...selectedOptions,
                                  safetyRailing: railing,
                                })
                              }
                              className="h-5 w-5 text-indigo-600 focus:ring-indigo-500"
                            />
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                {railing.type}
                              </p>
                              <p className="text-sm text-gray-950">
                                {railing.description}
                              </p>
                            </div>
                          </div>
                          <div className="text-sm text-gray-700 text-right">
                            <p>${railing.price}</p>
                          </div>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Total Price */}
            <div className="mt-8 border-t border-gray-200 pt-8">
              <div className="flex items-center justify-between">
                <h3 className="text-md font-md text-gray-900 ">
                  Estimated Total*
                </h3>
                <p className="text-2xl font-bold text-gray-900">
                  ${totalPrice}
                </p>
              </div>
              <div className="mt-6 text-xs italic text-gray-500 text-center">
                To make an order, click below and send the information
              </div>
              <Link href="/quote">
                <button
                  type="button"
                  className="mt-8 w-full bg-black border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowContact((v) => !v);
                  }}
                >
                  {showContact ? "Hide Contact Form" : "Order Now"}
                </button>
              </Link>
            </div>
            {showContact && (
              <div className="mt-6 transition-all duration-300">
                <Contact />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaterDetails;
