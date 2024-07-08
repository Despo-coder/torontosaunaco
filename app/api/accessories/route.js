import connectDB from "@/config/db";
import Accessories from "@/models/Accessories";
import { getUserSession } from "@/assets/utils/getServerSession";

// GET API Handler - /api/products
export const GET = async (req, res) => {

try {
    await connectDB();
    const accessories = await Accessories.find();
   
    return new Response (JSON.stringify(accessories), {status: 200});
} catch (error) {
    console.log(error)
    return new Response ("error", {status: 500});
}
};
