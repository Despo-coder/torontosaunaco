'use client'
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const card = elements.getElement(CardElement);
    if (!stripe || !card) {
      return;
    }

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card,
      },
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
    }
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <CardElement id="card-element" />
      <button
        disabled={processing || !stripe}
        id="submit"
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        {processing ? "Processing..." : "Pay"}
      </button>
      {error && <div className="card-error" role="alert">{error}</div>}
      {succeeded && <p className="text-green-500 mt-4">Payment succeeded!</p>}
    </form>
  );
};

export default CheckoutForm;
