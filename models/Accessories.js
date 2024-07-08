import { Schema, model, models } from "mongoose";

const AccessoriesSchema = new Schema({
    
    name: {
        type: String,
        required: true,
        
    },
    image: {
        type: String,
        
    },
    price: {
        type: Number,
       
    },
   
},
{
    timestamps: true,
});

const Accessories = models.Accessories || model("Accessories", AccessoriesSchema);
export default Accessories;