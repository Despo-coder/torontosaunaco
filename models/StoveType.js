const StoveSchema = new Schema(
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      image: { type: String, required: true },
      type: { type: String, enum: ['Electric', 'Wood-burning'], required: true },
      features: { type: [String] }, // Optional additional features
    },
    { timestamps: true }
  );
  
  const Stove = models.Stove || model('Stove', StoveSchema);
  
  export default Stove;
  