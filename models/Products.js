import { Schema, model, models } from 'mongoose';

const ProductsSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User', // Assuming the 'owner' refers to a user
      required: true
    },
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    square_feet: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    views: {
      standard: {
        type: Number,
        required: true
      },
      panoramic: {
        type: Number,
        required: true
      },
      regular: {
        type: Number,
        required: true
      }
    },
    wood_type: {
      KWC: {
        type: String,
        required: true
      },
      CC: {
        type: String,
        required: true
      }
    },
    stove_type: {
      HarviaElectricStove8kw: {
        type: Number,
        required: true
      },
      HuumDropWithRemote9kw: {
        type: Number,
        required: true
      },
      HuumHiveMini10_5kw: {
        type: Number,
        required: true
      },
      Karhu20: {
        type: Number,
        required: true
      },
      HuumHiveWoodHeater: {
        type: Number,
        required: true
      }
    },
    upgrades: {
      HuumDropUKUWiFiController: {
        type: Number,
        required: true
      },
      DoubleTiredBenches: {
        type: Number,
        required: true
      },
      LBench: {
        type: Number,
        required: true
      }
    },
    installation: {
      DIY: {
        type: Number,
        required: true
      },
      SupplyAndInstall: {
        type: Number,
        required: true
      }
    },
    seller_info: {
      name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      phone: {
        type: String,
        required: true
      }
    },
    images: [{
      type: String,
      required: true
    }],
    is_featured: {
      type: Boolean,
      default: false
    },
   
  },
  {
    timestamps: true,
  }
);

const Products = models.Products || model('Products', ProductsSchema);

export default Products;
