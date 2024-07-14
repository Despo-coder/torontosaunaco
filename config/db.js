import mongoose from "mongoose";

let connected = false;
let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
  }

const connectDB = async () => {
  
    mongoose.set('strictQuery', false);
 
if(connected){
   // console.log('DB already connected')
return;
} 
try {
    await mongoose.connect(process.env.MONGO_URI);
    connected = true;
    //console.log("DB Connected")
} catch (error) {
    console.log(error)
}
      
};

export default connectDB;