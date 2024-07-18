import React from 'react';
import Image from 'next/image';


const OrderCard = ({ order }) => {

    if (!order) {
        return <div className="bg-white shadow-md rounded-lg p-6 m-4 w-full max-w-3xl">No order found.</div>
      }

  return (
    <>

    <div className="bg-white shadow-md rounded-lg p-6 m-4 w-full max-w-3xl ">
         <h3 className="text-2xl font-bold mb-4">Hello {order.username || "There"}, </h3>
         <p> Thanks Again for Shopping WIth Us.</p>
      <h2 className="text-xl font-bold mb-4">Order Details</h2>
      <div className='flex flex-col  md:flex-row md:justify-between md:items-center gap-4 w-full'>
      <p><strong>Date Ordered:</strong> {new Date(order.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

<p><strong>Order ID:</strong> {order._id}</p>
<p><strong>Total:</strong> ${(order.amount / 100).toFixed(2)}</p>
      </div>
     
      
      <div className="mt-4">
  <h3 className="font-semibold">Shipping Address:</h3>
  {order.address && order.address.length > 0 && (
    <>
      <p>{order.address[0].line1}</p>
      <p>{order.address[0].city}, {order.address[0].postal_code}</p>
      <p>{order.address[0].country}</p>
    </>
  )}
  {/* {order.address.map((item, index) => (
    <p key={index}>{item}</p>
  ))} */}
</div>

      
<div className="mt-4">
  <h3 className="font-semibold">Items:</h3>
  <div className="flex flex-col md:flex-row md:flex-wrap md:justify-start">
    {order.items.map((item, index) => (
      <div key={index} className="mt-2 md:mr-4">
        <p>{item.name}</p>
        <Image 
          src={item.image} 
          alt={item.name} 
          width={200} 
          height={200} 
          className="mt-2 rounded"
        />
      </div>
    ))}
  </div>
</div>

    </div></>


   
    
  );
};

export default OrderCard;
