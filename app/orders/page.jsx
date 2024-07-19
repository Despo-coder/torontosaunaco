import React from 'react';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/assets/utils/authOptions";
import OrderCard from '../../components/OrdersCard';
import { fetchOrders } from '@/assets/utils/request';

const OrdersPage = async () => {
  // Get the user's session on the server side
  const session = await getServerSession(authOptions);

  if (!session) {
    // Redirect to sign in page if there's no session
    return (
      <div>Please sign in to view your orders.</div>
    );
  }

  // Fetch orders on the server side
  const orders = await fetchOrders();

  // Filter orders for the logged-in user
  const userOrders = orders.filter(order => order.id === session.user.secondaryId);




  // Handle case when there are no orders
  if (!userOrders.length) {
    return (
      <div>No orders found.</div>
    );
  }

  return (
    <div>
      <OrderCard orders={userOrders} />
    </div>
  );
};

export default OrdersPage;
