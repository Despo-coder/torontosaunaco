'use client'
import { Minus, Plus, Trash2 } from "lucide-react"
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/redux/slices/cartSlice";

const CartProduct = ({cartItem}) => {
    const dispatch = useDispatch()
    const {id} = cartItem

    const removeFromCart = () => {
dispatch(removeFromCart(id))
console.log("remove from cart")
console.log(id)
    }

  return (
    <div className="flex items-center justify-between border-b border-slate-400  pb-3 font-semibold text-sm mb-4">
    
         <div className="flex items-center gap-3">
         {/* <Image
           src="/tomato.webp"
           width={249}
           height={249}
           alt="Alt text"
           className="rounded-xl w-20 h-20"
         /> */}
         <div className="flex flex-col">
           <h2>{cartItem.title}</h2>
           
         </div>
       </div>
        <div className=" rounded-xl border border-gray-400 flex gap-3 items-center ">
        <button className="border-r border-gray-400 py-2 px-4">
          <Minus />
        </button>
        <p className="flex-grow py-2 px-4">{cartItem.qty}</p>
        <button className="border-l border-gray-400 py-2 px-4">
          <Plus />
        </button>
      </div>
       <div className="flex items-center gap-2">
       <h4>${cartItem.price}</h4>
       <button type="submit" onClick={()=>removeFromCart}>
         <Trash2 className="text-red-600 w-5 h-5" />
       </button>
     </div>
     </div>
  )
}

export default CartProduct
