'use client'
import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useSelector } from 'react-redux';
import CheckoutForm from '../../components/CheckOutForm.jsx';


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);


const StripeCheckout = ({ amount }) => {

const {cartItems} = useSelector((state) => state.cart);


  const [clientSecret, setClientSecret] = useState('');

  const fetchClientSecret = async () => {
    const totalAmount = Object.values(cartItems).reduce((total, item) => total + item.price * item.qty, 0);
    const chargeable_amt = Math.round(totalAmount * 100);
    //console.log('Sending to create-payment-intent:', { amount: chargeable_amt });
    const { data } = await axios.post('/api/create-payment-intent', { amount: chargeable_amt });
    setClientSecret(data.clientSecret);
  };
  

  useEffect(() => {
    fetchClientSecret();
  }, []);

  return (
    <Elements stripe={stripePromise}>
     {clientSecret && <CheckoutForm clientSecret={clientSecret} cartItems={cartItems} />}

    </Elements>
  );
};

export default StripeCheckout;
