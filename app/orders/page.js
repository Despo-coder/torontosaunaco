import OrderCard from "@/components/OrdersCard"
import {fetchOrders} from "@/assets/utils/request"
import { getUserSession } from "@/assets/utils/getServerSession"




const Orders = async() => {
const orders = await fetchOrders()
const user = await getUserSession()
const userId = user.user.secondaryId
console.log(userId)
const userOrders = orders.filter(order => order.id === userId)

return (
  <div className="container mx-auto px-4 flex justify-center">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
    {userOrders && userOrders.length > 0 ? (
      userOrders.map((order, index) => (
        <OrderCard key={index} order={order} />
      ))
    ) : (
      <div className="col-span-2 text-center mt-16 bg-slate-700 p-6 text-white font-bold">No orders found.</div>
    )}
  </div>
</div>
)
}

export default Orders
