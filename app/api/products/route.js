// Create API Handlers

import connectDB from "@/config/db";
import Products from "@/models/Products";

// GET API Handler - /api/products
export const GET = async (req, res) => {

try {
    await connectDB();
    const products = await Products.find();
    
    return new Response (JSON.stringify(products), {status: 200});
} catch (error) {
    console.log(error)
    return new Response ("error", {status: 500});
}
};