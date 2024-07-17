import { NextResponse } from 'next/server';
import connectDB from "@/config/db";
import Products from "@/models/Products";

// GET API Handler - /api/products/:id
export const GET = async (request, {params}) => {
    
    const { id } = params;
    console.log(request)

    try {
        await connectDB();

        const product = await Products.findById(id);
        if (!product) {
            return new Response("Product not found", { status: 404 });
        }
        return new Response(JSON.stringify(product), { status: 200 });
    } catch (error) {
       // console.log(error);
        return new Response(error, { status: 500 });
    }
}