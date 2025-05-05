import { Schema, model, models } from "mongoose";

const HeaterSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    power: {
      type: Number, // in kW
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    basePrice: {
      type: Number,
      required: true,
    },
    specifications: {
      roomSize: {
        min: Number, // in m³
        max: Number,
        imperial_min: Number, // in ft³
        imperial_max: Number,
      },
      stoneCapacity: {
        weight: Number, // in kg
        imperial_weight: Number, // in lb
        diameter: {
          min: Number, // in cm
          max: Number,
          imperial_min: Number, // in inches
          imperial_max: Number,
        },
      },
      dimensions: {
        height: {
          metric: Number, // in mm
          imperial: Number, // in inches
        },
        width: {
          metric: Number,
          imperial: Number,
        },
        depth: {
          metric: Number,
          imperial: Number,
        },
      },
      weight: {
        metric: Number, // in kg
        imperial: Number, // in lb
      },
    },
    options: {
      stones: [
        {
          type: {
            type: String,
          },
          description: String,
          weight: {
            metric: Number,
            imperial: Number,
          },
          price: Number,
          isDefault: Boolean,
        },
      ],
      controls: [
        {
          type: {
            type: String, // 'local', 'wifi', 'remote'
          },
          description: String,
          price: Number,
          isDefault: Boolean,
        },
      ],
      safetyRailing: [
        {
          type: {
            type: String,
          },
          description: String,
          price: Number,
          isDefault: Boolean,
        },
      ],
    },
    images: [
      {
        url: String,
        alt: String,
        isPrimary: Boolean,
      },
    ],
    warranty: {
      duration: Number, // in years
      description: String,
    },
    installation: {
      requirements: [String],
      safetyDistances: {
        sides: Number,
        front: Number,
        back: Number,
        top: Number,
      },
    },
    features: [
      {
        title: String,
        description: String,
      },
    ],
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Heaters = models.Heaters || model("Heaters", HeaterSchema);

export default Heaters;
