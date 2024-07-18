import connectDB from "@/config/db";
import Orders from "@/models/Orders";




export const dynamic = 'force-dynamic';

export const GET = async (req, res) => {

try {
    await connectDB();
    const orders = await Orders.find();
//    console.log('API', orders)
 return new Response (JSON.stringify(orders), {status: 200});
} catch (error) {
    console.log(error)
    return new Response ("error", {status: 500});
}
};
