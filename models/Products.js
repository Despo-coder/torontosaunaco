import { Schema, model, models } from 'mongoose';

const ProductsSchema = new Schema(
  {
    owner: {
      type: String,
      required: true,
      ref: 'User'
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
    dimension: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    views: {
      type: Object,
      default: {}
    },
    wood_type: {
      type: Object,
      required: true
    },
    stove_type: {
      type: Object,
      required: true
    },
    installation: {
      type: Object,
      required: true
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
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true,
  },
  {
    timestamps: true,
  }
);

const Products = models.Products || model('Products', ProductsSchema);

export default Products;
