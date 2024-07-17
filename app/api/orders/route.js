import connectDB from "@/config/db";
import Orders from "@/models/Orders";


// GET API Handler - /api/products

export const dynamic = 'auto'

export const GET = async (req, res) => {

try {
    await connectDB();
    const orders = await Orders.find();
    // console.log('API:',orders)
    return new Response (JSON.stringify(orders), {status: 200});
} catch (error) {
    console.log(error)
    return new Response ("error", {status: 500});
}
};
