'use client'

import React from 'react'
import Image from 'next/image'
import { useSession} from 'next-auth/react';
import { useState, useEffect } from 'react';


const OrderCard = ({ initialOrders }) => {
  const [myOrders, setMyOrders] = useState([])
  const [orders, setOrders] = useState(initialOrders);
  const { data: session } = useSession()

  //useEffect(() => {
    // Only update state if initialOrders changes
//     if (JSON.stringify(initialOrders) !== JSON.stringify(orders)) {
//       setOrders(initialOrders);
//     }
//   }, [initialOrders]);


//   console.log(session)
//   console.log(orders)

// useEffect(() => {
//   if (session?.user?.user?.id !== orders.id) {
//     return <div className="bg-white shadow-md rounded-lg p-6 m-4 w-full max-w-3xl">No orders found.</div>
//   }else if(session?.user?.user?.id === orders.id){
 
// setMyOrders(orders)
//   }

// }, [session, orders])



useEffect(() => {
  if (session && initialOrders.length) {
    const userOrders = initialOrders.filter(order => order.id === session.user.secondaryId || order.email === session.user.email);
    setOrders(userOrders);
  }
}, [session, initialOrders]);

if (!session) {
  return <div>Please sign in to view your orders.</div>;
}

if (!orders.length) {
  return <div>No orders found.</div>;
}



  return (
    <div className="container mx-auto px-4 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {orders.map((order, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 m-4 w-full max-w-3xl">
            <h2 className="text-xl font-bold mb-4">Order Details</h2>
            <p><strong>Date Ordered:</strong> {new Date(order.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p><strong>Order ID:</strong> {order._id}</p>
            <p><strong>Total:</strong> ${(order.amount / 100).toFixed(2)}</p>
            
            <div className="mt-4">
              <h3 className="font-semibold">Shipping Address:</h3>
              {order.address && order.address.length > 0 && (
                <>
                  <p>{order.address[0].line1}</p>
                  <p>{order.address[0].city}, {order.address[0].postal_code}</p>
                  <p>{order.address[0].country}</p>
                </>
              )}
            </div>
            
            <div className="mt-4">
              <h3 className="font-semibold">Items:</h3>
              <div className="flex flex-col md:flex-row md:flex-wrap md:justify-start">
                {order.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="mt-2 md:mr-4">
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
          </div>
        ))}
      </div>
    </div>
  )
}

export default OrderCard
