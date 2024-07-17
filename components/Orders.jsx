
import React from 'react'
import {fetchOrders} from "@/assets/utils/request"
import { getUserSession } from '@/assets/utils/getServerSession'
import OrderCard from './OrdersCard'


const Orders = async() => {
    const orders = await fetchOrders()
    const user = await getUserSession()
    console.log(user)
    const userOrders = orders.filter(order => order.id === user.id)
   /// console.log(userOrders.map(order => order.items.map(image => image.url)))
   
  return (
    <div className="container mx-auto px-4 flex justify-center">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
       
      {userOrders.map((order, index) => (
        <OrderCard key={index} order={order} />
      ))}
    </div>
    </div>
  )
}

export default Orders
