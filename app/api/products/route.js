// Create API Handlers

import connectDB from "@/config/db";
import Products from "@/models/Products";
import { getUserSession } from "@/assets/utils/getServerSession";


export const dynamic = 'force-dynamic';
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

// POST API Handler - /api/products
export const POST = async (req, res) => {
   
   
   
    try {
       
        await connectDB();
        const sessionUser = await getUserSession();
        if(!sessionUser ||!sessionUser.user) {
            return new Response ("Unauthorized", {status: 401});
        }
        const userId = sessionUser.user.id;
       
     

         const formData = await req.formData();
        const images = formData.getAll('images').filter(image => image.namw !== '');
        const isFeatured = formData.getAll('is_featured').length > 0
        const views = JSON.parse(formData.get('views') || '{}');
        console.log(views)
        const productData = {
         type: formData.get('type'),
         name: formData.get('name'),
         price: formData.get('price'),
         views: formData.get('views'),
         description: formData.get('description'),
         dimension: formData.get('dimension'),
         installation: formData.get('installation'),
         stove_type: formData.get('stove_type'),
         wood_type: formData.get('wood_type'),
         seller_info: {
             name: formData.get('name'),
             email: formData.get('email'),
             phone: formData.get('phone')
         },
         is_featured: isFeatured,
         owner: userId,
         //images: images
     
     
     }






       const product = await Products.create(productData);
        
       return new Response (JSON.stringify(product), {status: 201});
        // Return Dummy Response
       //return new Response (JSON.stringify({sessionUser}), {status: 201});
    } catch (error) {
        //console.log(error)
        return new Response ("error", {status: 500});
    }
    };