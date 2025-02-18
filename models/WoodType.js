import { Schema, model, models } from 'mongoose';

const WoodSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true }, // Cloudinary or other storage link
  },
  { timestamps: true }
);

const Wood = models.Wood || model('Wood', WoodSchema);

export default Wood;
