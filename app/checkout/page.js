'use client'
import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import axios from 'axios';
import CheckoutForm from '../../components/CheckoutForm';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const StripeCheckout = ({ amount }) => {
  const [clientSecret, setClientSecret] = useState('');

  const fetchClientSecret = async (amount) => {
    const { data } = await axios.post('/api/create-payment-intent', { amount:1000 });
    setClientSecret(data.clientSecret);
  };

  useEffect(() => {
    fetchClientSecret(amount);
  }, [amount]);

  return (
    <Elements stripe={stripePromise}>
      {clientSecret && <CheckoutForm clientSecret={clientSecret} />}
    </Elements>
  );
};

export default StripeCheckout;
