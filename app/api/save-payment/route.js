import { NextResponse } from 'next/server';
import connectDB from "@/config/db";
import Orders from "@/models/Orders";
import { getUserSession } from '@/assets/utils/getServerSession';

export async function POST(req) {
  const sessionUser = await getUserSession();
  //console.log(sessionUser)
  
  try {
    await connectDB();
    const { paymentIntentId, amount, items, cardholderName, address } = await req.json();
    const {id , username, email}= sessionUser.user
    
    //console.log(cardholderName, address, paymentIntentId, amount, items, id, username, email)
    //const {username, email, password} = user;
    
    //const newOrder = await User.create({username, email, password:hashedPassword});

    const newOrder = await Orders.create({
      cardholderName,
      address,
      items,
      username,
      email,
      id,
      amount,
      paymentIntentId
    });
    return NextResponse.json({newOrder}, {status: 200})

  } catch (error) {
    console.error('Save payment error:', error);
    return NextResponse.json({ error: 'Failed to save payment' }, { status: 500 });
  }
}
