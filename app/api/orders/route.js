import connectDB from "@/config/db";
import Orders from "@/models/Orders";
import { getToken } from "next-auth/jwt";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/assets/utils/authOptions";


export const maxDuration = 25;
export const dynamic = 'force-dynamic';

export const GET = async (req, res) => {

    const session = await getServerSession(authOptions);
    // const session = await getServerSession(authOptions);
  
  console.log('Session',session)

try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    console.log('Token:', token); // Log the token for debugging
    
    // if (!token) {
    //     return new Response(JSON.stringify({ error: "Not authenticated" }), { status: 401 });
    // }
    await connectDB();
    const orders = await Orders.find();
  // console.log('API Route', orders)
 return new Response (JSON.stringify(orders), {status: 200});
} catch (error) {
    console.log(error)
    return new Response ("error", {status: 500});
}
};
