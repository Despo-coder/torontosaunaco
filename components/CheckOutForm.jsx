'use client'
import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { clearCart } from '@/redux/slices/cartSlice';
import { CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';


const CheckoutForm = ({ clientSecret, cartItems }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false); 
  const [stripeLoaded, setStripeLoaded] = useState(false);
  const [cardholderName, setCardholderName] = useState('');
  const [address, setAddress] = useState('');
const [city, setCity] = useState('');
const [postalCode, setPostalCode] = useState('');
const [country, setCountry] = useState('');

 

  useEffect(() => {
    if (stripe) {
      setStripeLoaded(true);
    }
  }, [stripe]);

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   setProcessing(true);

  //   const card = elements.getElement(CardElement);
  //   if (!stripe || !card) {
  //     console.error('Stripe.js has not loaded yet.');
  //     return;
  //   }
  //   console.log('Initiating payment confirmation...');
  //   const payload = await stripe.confirmCardPayment(clientSecret, {
  //     payment_method: {
  //       card,
  //     },
  //   });

  //   if (payload.error) {
  //     setError(`Payment failed ${payload.error.message}`);
  //     setProcessing(false);
  //   } else {
  //     setError(null);
  //     setProcessing(false);
  //     setSucceeded(true);
  //     try {
       
  //       await axios.post('/api/save-payment', {
  //         paymentIntentId: payload.paymentIntent.id,
  //         amount: payload.paymentIntent.amount,
  //         items: cartItems,
  //         cardholderName: cardholderName,
  //       });
  //       dispatch(clearCart());

  //       // Show success toast
  //       toast.success('Payment successful! Thank you for your order.');
  //       setTimeout(() => {
  //         router.push('/');
  //       }, 1000);
  //     } catch (error) {
  //       console.error('Error saving payment:', error);
  //     }
  //   }
  // };
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   setProcessing(true);
  
  //   const card = elements.getElement(CardElement);
  //   if (!stripe || !card) {
  //     console.error('Stripe.js has not loaded yet.');
  //     setProcessing(false);
  //     return;
  //   }
  
  //   try {
  //     console.log('Initiating payment confirmation...');
  //     const payload = await stripe.confirmCardPayment(clientSecret, {
  //       payment_method: {
  //         card,
  //         billing_details: {
  //           name: cardholderName,
  //         },
  //       },
  //     });
  
  //     console.log('Payment confirmation response:', payload);
  
  //     if (payload.error) {
  //       console.error('Payment failed:', payload.error);
  //       setError(`Payment failed: ${payload.error.message}`);
  //       setProcessing(false);
  //     } else {
  //       console.log('Payment succeeded:', payload.paymentIntent);
  //       setError(null);
  //       setProcessing(false);
  //       setSucceeded(true);
  
  //       try {
  //         console.log('Saving payment to database...');
  //         await axios.post('/api/save-payment', {
  //           paymentIntentId: payload.paymentIntent.id,
  //           amount: payload.paymentIntent.amount,
  //           items: cartItems,
  //           cardholderName: cardholderName,
  //         });
  //         console.log('Payment saved successfully');
  
  //         dispatch(clearCart());
  //         toast.success('Payment successful! Thank you for your order.');
  //         setTimeout(() => {
  //           router.push('/');
  //         }, 1000);
  //       } catch (error) {
  //         console.error('Error saving payment:', error);
  //       }
  //     }
  //   } catch (error) {
  //     console.error('Unexpected error during payment process:', error);
  //     setError('An unexpected error occurred. Please try again.');
  //     setProcessing(false);
  //   }
  // };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
  
    if (!stripe || !elements) {
     // console.log('Stripe has not loaded yet');
      setProcessing(false);
      return;
    }
  
    const cardElement = elements.getElement(CardNumberElement);

    if (!cardElement) {
      console.error('Card element not found');
      setProcessing(false);
      return;
    }
  
    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: cardholderName,
            address: {
              line1: address,
              city: city,
              postal_code: postalCode,
              country: country,
            },
          },
        },
      });
      //console.log('Payment confirmation response:', payload);
      if (error) {
        console.error('Payment confirmation error:', error);
        setError(`Payment failed: ${error.message}`);
      } else if (paymentIntent.status === 'succeeded') {
       // console.log('Payment succeeded:', paymentIntent);
        setError(null);
        setProcessing(false);
        setSucceeded(true);
        try {
          //console.log('Saving payment to database...');
          await axios.post('/api/save-payment', {
            paymentIntentId: paymentIntent.id,
            amount: paymentIntent.amount,
            items: cartItems,
            cardholderName: cardholderName,
            address: {
              line1: address,
              city: city,
              postal_code: postalCode,
              country: country
            }
          });
          //console.log('Payment saved successfully');
  
          dispatch(clearCart());
          toast.success('Thank you for your order. You will receive an Email confirmation shortly');
          setTimeout(() => {
            router.push('/');
          }, 2000);
        } catch (error) {
          toast.error('Something went wrong. Please try again later');
          console.error('Error saving payment:', error);
        }
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      setError('An unexpected error occurred');
    }
  
    setProcessing(false);
  };
  

  
  const cardStyle = {
    style: {
      base: {
        color: "#1f2937",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "12px",
        "::placeholder": { color: "#1f2937" },
        backgroundColor: "#f0f0f0", 
       
      },
      invalid: {
        color: "#1f2937",
        iconColor: "#1f2937"
      }
    }
  };
  
  const CartSummary = ({ items }) => (
    <div className='border-t border-gray-200 py-4'>
      <h3>Order Summary</h3>
      {Array.isArray(items) && items.map((item, index) => (
        <div key={index} className=''>
          <span>{item.name}</span>
          <span>${item.price * item.qty}</span>
        </div>
      ))}
      <div className=''>
        <strong>Total:</strong> $
        {Array.isArray(items) 
          ? items.reduce((sum, item) => sum + item.price * item.qty, 0)
          : 0}
      </div>
    </div>
  );
  const Subtotal = ({ items }) => {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
    return (
      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
    );
  };

  const CartItems = ({ items }) => (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="flex justify-between">
          <span>{item.name}</span>
          <span className='ml-28 font-semibold'>${(item.price * item.qty).toFixed(2)}</span>
        </div>
      ))}
    </div>
  );


  const Total = ({ items }) => {
    const total = items.reduce((sum, item) => sum + item.price * item.qty, 0) * 1.13; // Including 13% tax
    return (
      <div className="flex justify-between font-bold">
        
        <span>${total.toFixed(2)}</span>
      </div>
    );
  };
  
  const Tax = ({ items }) => {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
    const tax = subtotal * 0.13; // Assuming 13% tax rate
    return (
      <div className="flex justify-between">
       
        <span>${tax.toFixed(2)}</span>
      </div>
    );
  };



  return (
    <div className="font-[sans-serif] bg-white p-4">
      <div className="md:max-w-5xl max-w-xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 max-md:order-1">
        <h2 className="text-3xl font-extrabold text-gray-800">Make a payment</h2>
            <p className="text-gray-800 text-sm mt-4">Complete your transaction swiftly and securely with our easy-to-use payment process.</p>
            <p className="text-gray-800 text-sm mt-4">We use Stripe to process your payment. Your information is safe and secure.</p>
    <form id="payment-form" onSubmit={handleSubmit} className="mt-8 max-w-lg">
    <div className="grid gap-4">
    <div>
                  <input type="text" placeholder="Cardholder's Name"
                  value={cardholderName}
                  onChange={(e) => setCardholderName(e.target.value)}
                    className="px-4 py-3.5 bg-gray-100 text-[#1f2937] w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none" />
                </div>
    <div>
                  <input type="text" placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                    className="px-4 py-3.5 bg-gray-100 text-[#1f2937] w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none" />
                </div>
                <div>
    <input 
      type="text" 
      placeholder="City"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      className="px-4 py-3.5 bg-gray-100 text-[#1f2937] w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none" 
    />
  </div>
  <div>
    <input 
      type="text" 
      placeholder="Postal Code"
      value={postalCode}
      onChange={(e) => setPostalCode(e.target.value)}
      className="px-4 py-3.5 bg-gray-100 text-[#1f2937] w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none" 
    />
  </div>

  <div>
    <input 
      type="text" 
      placeholder="Country Code e.g (CA, US, UK)"
      value={country}
      onChange={(e) => setCountry(e.target.value)}
      className="px-4 py-3.5 bg-gray-100 text-[#1f2937] w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none" 
    />
  </div>


                <div>
    
    <CardNumberElement id="card-number" options={cardStyle}  className="px-4 py-3.5 bg-gray-100 text-[#1f2937] w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none"/>
  </div>

  <div>
   
    <CardExpiryElement id="card-expiry" options={cardStyle} className="px-4 py-3.5 bg-gray-100 text-[#1f2937] w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none" />
  </div>
  <div>
    
    <CardCvcElement id="card-cvc" options={cardStyle} className="px-4 py-3.5 bg-gray-100 text-[#1f2937] w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none"/>
  </div>
  {/* <div>
    <input type="text" id="postal-code" placeholder='zipcode' className="form-input px-4 py-3.5 bg-gray-100 text-gray-800 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none"/>
  </div> */}
      <button
        disabled={processing || !stripe}
        id="submit"
        className={`w-full p-3 bg-indigo-600 text-white rounded font-bold cursor-pointer transition ease-in-out duration-200 ${processing || !stripe ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-500'}`}
      >
        {processing ? "Processing..." : "Pay Now"}
      </button>
      {error && <div className="text-red-600 mt-3">{error}</div>}
      {succeeded && <div className="text-green-600 mt-3">Payment succeeded!</div>}
      </div>
    </form>
    </div>
    <div className="bg-gray-100 p-6 rounded-md">
            <h2 className="text-xl font-extrabold text-gray-800"> <Subtotal items={cartItems} /></h2>
             <ul className="text-gray-800 mt-8 space-y-4">
              <li className="flex flex-wrap gap-4 text-sm"><CartItems items={cartItems} /></li>
              {/* <li className="flex flex-wrap gap-4 text-sm">Echo Elegance <span className="ml-auto font-bold">$90.00</span></li> */}
              <li className="flex flex-wrap gap-4 text-sm">Tax <span className="ml-auto font-bold"><Tax items={cartItems} /></span></li>
              <li className="flex flex-wrap gap-4 text-sm font-bold border-t-2 pt-4">Total <span className="ml-auto"><Total items={cartItems} /></span></li>
            </ul>
            <div className="flex flex-col justify-center items-center mt-4">
              <h3>Thanks for Shopping.</h3>
              <div>
                <span className='text-xs font-light text-gray-400'>The Toronto Sauana Co @2022</span>
              </div>
              </div>
          </div>
    </div>
    </div>
    </div>
    
  
  );
};

export default CheckoutForm;
