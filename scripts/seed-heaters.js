const sampleHeaters = [
  // HUUM DROP 6kW
  {
    name: "HUUM DROP Electric Sauna Heater 6 kW",
    model: "DROP-6",
    power: 6,
    description: [
      "HUUM DROP Electric Sauna Heater 6 kW is the standout model among HUUM heaters, largely thanks to its compact design. It is unique in the HUUM range as the only wall-mounted heater, saving considerable space in the sauna without compromising on the generous stone capacity that HUUM is known for. Inspired by the natural form of a water drop, its design introduces a rounded, softening element to the typically angular sauna space, infusing it with a touch of elegance.",

      "Functionality-wise, the Drop excels. It can hold up to 55 kg of stones, outperforming many wood-burning and electric heaters in stone capacity, which is crucial for prolonged and consistent steam production. This large stone capacity allows for the emission of gentle, soothing heat.",

      "When water is added, it generates a rich steam, more abundant than what is produced by heaters with a higher metal content, which can often lead to a less comfortable, harsher heat. The inclusion of a popular Wi-Fi control feature, enabling connection to the HUUM app for remote sauna activation, adds a layer of convenience, ensuring your sauna is ready for use the moment you arrive home.",

      "The combination of thoughtful design, superior functionality, and user convenience makes the Drop model, and HUUM heaters in general, highly regarded in the market. The wall-mounted design not only saves space but also ensures optimal heat distribution throughout your sauna space.",
    ].join("\n\n"),
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
        height: { metric: 590, imperial: 23.3 },
        width: { metric: 390, imperial: 15.35 },
        depth: { metric: 335, imperial: 13.2 },
      },
      weight: { metric: 11, imperial: 24.3 },
    },
    options: {
      stones: [
        {
          type: "Standard Stones",
          description:
            "55 kg of standard sauna stones with a diameter of 5-10 cm",
          weight: { metric: 55, imperial: 121 },
          price: 0,
          isDefault: true,
        },
        {
          type: "Premium Stones",
          description:
            "55 kg of premium olivine diabase stones for enhanced heat retention",
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
        url: "/images/heaters/huum-drop-6kw-main.jpg",
        alt: "HUUM DROP Electric Sauna Heater 6kW - Front View",
        isPrimary: true,
      },
      {
        url: "/images/heaters/huum-drop-6kw-side.jpg",
        alt: "HUUM DROP Electric Sauna Heater 6kW - Side View",
        isPrimary: false,
      },
      {
        url: "/images/heaters/huum-drop-6kw-installed.jpg",
        alt: "HUUM DROP Electric Sauna Heater 6kW - Installed View",
        isPrimary: false,
      },
      {
        url: "/images/heaters/huum-drop-6kw-detail.jpg",
        alt: "HUUM DROP Electric Sauna Heater 6kW - Detail View",
        isPrimary: false,
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
        description:
          "Optional WiFi control for remote operation via smartphone",
      },
      {
        title: "Elegant Aesthetics",
        description:
          "Unique water drop design adds a sophisticated touch to your sauna",
      },
    ],
    isFeatured: true,
  },

  // HUUM DROP 9kW
  {
    name: "HUUM DROP Electric Sauna Heater 9 kW",
    model: "DROP-9",
    power: 9,
    description: [
      "The HUUM DROP 9kW model offers enhanced heating power for larger saunas while maintaining the elegant water drop design. Perfect for commercial installations or larger home saunas requiring more heating capacity, this model delivers exceptional performance without compromising on aesthetics.",

      "Engineered specifically for spaces between 8-13 cubic meters, this powerful heater maintains all the beloved features of the DROP series while providing the additional output needed for larger sauna rooms. The wall-mounted design continues to save valuable floor space, making it an ideal choice for both commercial and high-end residential installations.",

      "The 9kW version retains the impressive stone capacity of its smaller sibling, ensuring the same gentle, enveloping heat that HUUM heaters are known for. This makes it particularly suitable for commercial settings where consistent, high-quality heat is essential throughout extended periods of use.",

      "With its enhanced power output, this model is particularly effective in larger spaces, ensuring even heat distribution and optimal steam generation. The heater's ability to maintain consistent temperatures in larger volumes makes it perfect for commercial saunas, fitness centers, and luxury home installations.",
    ].join("\n\n"),
    basePrice: 999,
    specifications: {
      roomSize: {
        min: 8,
        max: 13,
        imperial_min: 282,
        imperial_max: 459,
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
        height: { metric: 590, imperial: 23.3 },
        width: { metric: 390, imperial: 15.35 },
        depth: { metric: 335, imperial: 13.2 },
      },
      weight: { metric: 12, imperial: 26.5 },
    },
    options: {
      stones: [
        {
          type: "Standard Stones",
          description:
            "55 kg of standard sauna stones with a diameter of 5-10 cm",
          weight: { metric: 55, imperial: 121 },
          price: 0,
          isDefault: true,
        },
        {
          type: "Premium Stones",
          description:
            "55 kg of premium olivine diabase stones for enhanced heat retention",
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
        url: "/images/heaters/huum-drop-9kw.jpg",
        alt: "HUUM DROP Electric Sauna Heater 9kW",
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
        title: "High Power Output",
        description: "9kW power for larger sauna rooms up to 13 cubic meters",
      },
      {
        title: "Space-Saving Design",
        description:
          "Wall-mounted design saves floor space while maintaining high performance",
      },
      {
        title: "Smart Control Option",
        description:
          "Optional WiFi control for remote operation via smartphone",
      },
      {
        title: "Commercial Grade",
        description:
          "Suitable for both commercial and residential installations",
      },
    ],
    isFeatured: true,
  },
];

// Function to seed the database
async function seedHeaters() {
  try {
    // Delete existing heaters first (optional)
    const deleteResponse = await fetch("/api/heaters", {
      method: "DELETE",
    });

    if (!deleteResponse.ok) {
      throw new Error(
        `Failed to delete existing heaters: ${await deleteResponse.text()}`
      );
    }

    // Add each heater
    for (const heater of sampleHeaters) {
      const response = await fetch("/api/heaters", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(heater),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Failed to add heater: ${heater.name}\nError: ${errorText}`
        );
      }

      const data = await response.json();
      console.log(`Successfully added heater: ${data.name}`);
    }

    console.log("Database seeding completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error.message);
    throw error;
  }
}

// Export the data and function
export { sampleHeaters, seedHeaters };
