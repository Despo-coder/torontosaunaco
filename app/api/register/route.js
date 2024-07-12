import { NextResponse } from "next/server";
import connectDB from "@/config/db";
import User from "@/models/Users";
import bcrypt from "bcryptjs";

export const POST = async (request) => {

try {
        
       const user  = await request.json();
    console.log(user)
       await connectDB();
       const userExists = await User.findOne({email: user.email});
       if (userExists) {
        return NextResponse.json({message:'User Already Exists'}, {status: 500})
        ;
       }
       const {username, email, password} = user;
       const hashedPassword = await bcrypt.hash(password, 10);
       const newUser = await User.create({username, email, password:hashedPassword});
       await newUser.save();
       return NextResponse.json({newUser}, {status: 200})
    }  catch (error) {
      console.log(error)
      return NextResponse.json({message:error}, {status: 500})
      
    }
}