import React from 'react'
import Orders from '@/models/Orders'
import connectDB from '@/config/db'
import OrdersPage from '@/components/Orders'

const page = () => {
  return (
    <div >
       
      <OrdersPage/>
    </div>
  )
}

export default page
