import { Schema, model, models } from 'mongoose';

const NewProductSchema = new Schema(
    {
      owner: { type: String, required: true, ref: 'User' },
      name: { type: String, required: true },
      type: { type: String, required: true },
      collectionType: { type: String, required: true },
      series: { type: String },
      description: { type: String },
      dimension: { type: String },
      price: { type: Number, required: true },
      views: { type: Object, default: {} },
      wood_type: { type: Schema.Types.Mixed, required: true }, // Wood type object
      stove_type: { type: Schema.Types.Mixed, required: true }, // Stove type object
      additional_features: { type: Object },
      installation: { type: Object },
      seller_info: {
        name: { type: String },
        email: { type: String },
        phone: { type: String }
      },
      images: [{ type: String }],
      is_featured: { type: Boolean, default: false }
    },
    { timestamps: true }
  );
  
  const Product = models.Product || model('Product', NewProductSchema);
  
  export default Product;




  