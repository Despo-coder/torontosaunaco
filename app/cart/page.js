'use client'
import { Button } from '@/components/ui/button'
import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { removeFromCart, updateCartItemQuantity , clearCart,hydrateCart} from "@/redux/slices/cartSlice";
import { useDispatch  } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';

const CartPage = () => {
const dispatch = useDispatch();
const {cartItems} = useSelector((state) => state.cart);
const [suBtotal, setSubTotal] = useState(0);
const [shippingCost, setShippingCost] = useState(0);
const router = useRouter();


const calculateShippingCost = (subTotal) => {
    switch (true) {
      case subTotal > 5000:
        setShippingCost(200);
        break;
      case subTotal > 1000:
        setShippingCost(50);
        break;
      case subTotal > 500:
        setShippingCost(10);
        break;
      default:
        setShippingCost(0);
    }
  };

useEffect(() => {
    //Ensure that the initial state is consistent between the server and the client. 
    //Client-side effect to sync the state after the component mounts. 
    //  Call the hydrate cart action to restore the state from the localStorage.
    
    dispatch(hydrateCart());
}, [ dispatch]);

useEffect(() => {
    const Subtotal = () => {
        if(!cartItems || undefined){
            return setSubTotal(0);
        } else{
            const total = cartItems.reduce((acc, item) => {
                return acc + (Number(item.price) * Number(item.qty));
            }, 0);
            setSubTotal(total);
           calculateShippingCost(total)
        };
        }

    Subtotal();

}, [cartItems]);

const AddDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

const tax = AddDecimals((suBtotal + shippingCost) * 0.13)
const handleItemIncrement = (id) => {

    const item = cartItems.find(item => item.id === id);
    if (item) {
        const newQty = item.qty + 1;
        dispatch(updateCartItemQuantity({ id, qty: newQty }));
    }
}
const handleItemDecrement = (id) => {
    const item = cartItems.find(item => item.id === id);
    if (item && item.qty > 1) {
        const newQty = item.qty - 1;
        dispatch(updateCartItemQuantity({ id, qty: newQty }));
    }
}

const handleEmptyCart = () => {
   
    dispatch(clearCart());
}

const handleItemDelete = (id) => {
    // console.log(id)
    dispatch(removeFromCart(id));
}

const handleBuyNow = () => {
  // Navigate to the checkout page
  router.push('/precheckout');
};


  return (
    <div>
      <div className="font-sans max-w-4xl max-md:max-w-xl mx-auto p-4">
            <h1 className="text-2xl font-extrabold text-gray-800">Your Cart</h1>
            <div className="grid md:grid-cols-3 gap-4 mt-8">
                <div className="md:col-span-2 space-y-4">

                    {cartItems && cartItems.length > 0 ? cartItems.map((item, index)=> (
        <div key={index} className="flex gap-4 bg-white px-4 py-6 rounded-md shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]">
        <div className="flex gap-4">
        <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
          <Image src={item.image || ''} width={100} height={100} alt={item.name} priority={true}  className="w-full h-full object-contain" />
          {/* <img src='https://readymadeui.com/images/watch1.webp' className="w-full h-full object-contain" /> */}
         </div>

         <div className="flex flex-col gap-4">
          <div>
              <h3 className="text-base font-normal text-gray-800 font-playfair">{item.name}</h3>
              
          </div>
          {item?.selectedOptions && item?.selectedOptions!==null &&(
            <div>
              {Object.entries(item.selectedOptions).map(([key, option]) => (
                <p key={key} className='font-roboto text-sm text-gray-600'>
                  {key}: {option?.type} (${option?.price})
                </p>
              ))}
            </div>
          )}
{/* <span>{item.selectedOptions ?'True':"False"}</span> */}

          <div className="mt-auto flex items-center gap-3">
              <button type="button"
              onClick={() => handleItemDecrement(item.id)}
                  className="flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-white" viewBox="0 0 124 124">
                      <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                  </svg>
              </button>
              <span className="font-bold text-sm leading-[18px]">{item.qty}</span>
              <button type="button"
              onClick={() => handleItemIncrement(item.id)}
                  className="flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-white" viewBox="0 0 42 42">
                      <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                  </svg>
              </button>
          </div>
      </div>
  </div>

  <div className="ml-auto flex flex-col">

      <div className="flex items-start gap-4 justify-end ">
            <Button className="text-sm font-semibold text-gray-800" variant="link" onClick={() => {handleItemDelete(item.id)}}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 cursor-pointer fill-gray-400 inline-block" viewBox="0 0 24 24">
              <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" data-original="#000000"></path>
              <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" data-original="#000000"></path>
          </svg>
          </Button>
      </div>
    <h3 className="text-base font-bold text-gray-800 mt-auto">{`$${(item.price * item.qty).toLocaleString()}.00`}</h3>
  </div>
</div>
                    )) :(
                    <p> Cart is Empty </p>)
                    }
                </div>
                <div className="bg-white rounded-md px-4 py-6 h-max shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]">
                    <ul className="text-gray-800 space-y-4">
                        <li className="flex flex-wrap gap-4 text-sm">Subtotal <span className="ml-auto font-bold">${`${suBtotal.toLocaleString()}.00`}</span></li>
                        <li className="flex flex-wrap gap-4 text-sm">Shipping <span className="ml-auto font-bold">${`${shippingCost.toLocaleString()}.00`}</span></li>
                        
                        <li className="flex flex-wrap gap-4 text-sm">Tax <span className="ml-auto font-bold">${`${tax.toLocaleString()}`}</span></li>
                        <hr className="border-gray-300" />
                        <li className="flex flex-wrap gap-4 text-sm font-bold">Total <span className="ml-auto">{}</span></li>
                    </ul>

                    <div className=" flex flex-col items-center mt-8 space-y-2">
                        <button type="button" 
                        onClick={handleBuyNow}
                        className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md">Buy Now</button>
                        <h3> or</h3>
                        <Link href={'/'}>
                        <button type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-300 rounded-md">Continue Browsing</button>
                        </Link>
                    </div>
                </div>
                
                <Button className="bg-black text-white" onClick={handleEmptyCart}>
                    Empty Cart
                </Button>
            </div>
        </div>
    </div>
  )
}

export default CartPage
