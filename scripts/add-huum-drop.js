const huumDropData = {
  name: "HUUM DROP Electric Sauna Heater 6 kW",
  model: "DROP-6",
  power: 6,
  description:
    "HUUM DROP Electric Sauna Heater 6 kW is the standout model among HUUM heaters, largely thanks to its compact design. It is unique in the HUUM range as the only wall-mounted heater, saving considerable space in the sauna without compromising on the generous stone capacity that HUUM is known for. Inspired by the natural form of a water drop, its design introduces a rounded, softening element to the typically angular sauna space, infusing it with a touch of elegance.",
  basePrice: 899,
  specifications: {
    roomSize: {
      min: 5,
      max: 9,
      imperial_min: 177,
      imperial_max: 318,
    },
    stoneCapacity: {
      weight: 55,
      imperial_weight: 121,
      diameter: {
        min: 5,
        max: 10,
        imperial_min: 2,
        imperial_max: 4,
      },
    },
    dimensions: {
      height: {
        metric: 590,
        imperial: 23.3,
      },
      width: {
        metric: 390,
        imperial: 15.35,
      },
      depth: {
        metric: 335,
        imperial: 13.2,
      },
    },
    weight: {
      metric: 11,
      imperial: 24.3,
    },
  },
  options: {
    stones: [
      {
        type: "Standard Stones",
        description:
          "55 kg (121 lb) of standard sauna stones with a diameter of 5-10 cm",
        weight: { metric: 55, imperial: 121 },
        price: 0,
        isDefault: true,
      },
      {
        type: "Premium Stones",
        description:
          "55 kg (121 lb) of premium olivine diabase stones for enhanced heat retention",
        weight: { metric: 55, imperial: 121 },
        price: 79,
        isDefault: false,
      },
    ],
    controls: [
      {
        type: "UKU Local Control",
        description: "Standard wall-mounted control panel",
        price: 0,
        isDefault: true,
      },
      {
        type: "UKU WiFi Control",
        description: "Smart control with mobile app connectivity",
        price: 199,
        isDefault: false,
      },
    ],
    safetyRailing: [
      {
        type: "No Railing",
        description: "Standard installation without safety railing",
        price: 0,
        isDefault: true,
      },
      {
        type: "Cedar Safety Railing",
        description: "Protective cedar wood railing for added safety",
        price: 149,
        isDefault: false,
      },
    ],
  },
  images: [
    {
      url: "/images/huum-drop-main.jpg",
      alt: "HUUM DROP Electric Sauna Heater 6kW",
      isPrimary: true,
    },
  ],
  warranty: {
    duration: 3,
    description: "3-year manufacturer warranty on electrical components",
  },
  installation: {
    requirements: [
      "Professional installation required",
      "240V electrical connection",
      "UKU sauna control system required",
      "Minimum 55 kg of sauna stones with 5-10 cm diameter",
    ],
    safetyDistances: {
      sides: 150,
      front: 200,
      back: 150,
      top: 200,
    },
  },
  features: [
    {
      title: "Large Stone Capacity",
      description:
        "Holds up to 55 kg of stones for optimal heat retention and steam generation",
    },
    {
      title: "Space-Saving Design",
      description:
        "Wall-mounted design saves floor space while maintaining high performance",
    },
    {
      title: "Smart Control Option",
      description: "Optional WiFi control for remote operation via smartphone",
    },
    {
      title: "Elegant Aesthetics",
      description:
        "Unique water drop design adds a sophisticated touch to your sauna",
    },
  ],
  isFeatured: true,
};

// Function to add the heater to the database
async function addHuumDrop() {
  try {
    const response = await fetch("/api/heaters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(huumDropData),
    });

    if (!response.ok) {
      throw new Error("Failed to add heater");
    }

    const data = await response.json();
    console.log("Successfully added HUUM DROP heater:", data);
  } catch (error) {
    console.error("Error adding heater:", error);
  }
}

// Export the data and function
export { huumDropData, addHuumDrop };
