import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15',
});

export async function POST(req) {
    try {
      const body = await req.json();
      console.log('Received body:', body);
  
      const { amount } = body;
      
      if (!amount) {
        return new Response(JSON.stringify({ error: 'Amount is required' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
  
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
        payment_method_types: ['card'],
      });
  
      return new Response(JSON.stringify({ clientSecret: paymentIntent.client_secret }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error('Payment Intent Error:', error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }
  