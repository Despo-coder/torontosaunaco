import React from 'react';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/assets/utils/authOptions";
import OrderCard from '../../components/OrdersCard';
import { fetchOrders } from '@/assets/utils/request';

export const metadata = {
  title: "Toronto Sauna Co.",
  description: "Explore premium outdoor and indoor saunas for your home, crafted from high-quality cedar wood. Proudly made in Canada, our cedar barrel and cube saunas, sauna kits, and backyard wellness solutions provide relaxation, health benefits, and timeless luxury. Elevate your space today—cold plunges available!",
  keywords: "sauna, toronto, ontario, canada, wellness, relaxation, steam, Best sauna shop in Ontario, Home Saunas near me",
};


const OrdersPage = async () => {
  // Get the user's session on the server side
  const session = await getServerSession(authOptions);
  // const session = await getServerSession(authOptions);



  // if (!session) {
    // Redirect to sign in page if there's no session
  //   return (
  //     <div>Please sign in to view your orders.</div>
  //   );
  // }

  // Fetch orders on the server side
  const orders = await fetchOrders();
  // const { orders, totalPages, currentPage } = await fetchOrders();
  // const { orders = [] } = await fetchOrders()
  // Filter orders for the logged-in user

console.log(orders)
  // const userOrders = orders.filter(order => order.id === session.user.secondaryId);

  // const userOrders = session ? orders.filter(order => order.id === session.user.secondaryId) : [];

//const userOrders = session?.user?.id ? orders.filter(order => order.id === session.user.secondaryId)  : []
//console.log(userOrders)

  // Handle case when there are no orders
  // if (!userOrders.length) {
  //   return (
  //     <div>No orders found.</div>
  //   );
  // }

  return (
    <div>
      {/* <OrderCard orders={userOrders} /> */}
      <OrderCard initialOrders={orders} />
    </div>
  );
};

export default OrdersPage;