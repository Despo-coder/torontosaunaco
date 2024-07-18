import React from 'react'
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/assets/utils/authOptions"
import OrderCard from '../../components/OrdersCard'
import { fetchOrders } from '@/assets/utils/request'

const Page = async () => {
  const session = await getServerSession(authOptions)
  const orders = await fetchOrders()

  const userOrders = session ? orders.filter(order => order.id === session.user.id) : []

//   console.log(session.user.id)
//   console.log(orders.id)

  return (
    <div>
      <OrderCard orders={userOrders} />
    </div>
  )
}

export default Page
