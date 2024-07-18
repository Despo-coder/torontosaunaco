import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    
    cardholderName: {
      type: String,
    },
    address: [{
      // line1: String,
      // city: String,
      // postal_code: String,
      // country: String,
    }],
    items: [{}],
    username: {
      type: String,
    },
    paymentIntentId: {
      type: String,
    },
    email: {
      type: String,
    },
    id: {
      type: String,
    },
    amount: {
      type: Number,
    },
    emailSent: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Order || mongoose.model('Order', orderSchema);
