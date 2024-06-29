'use client'
import { useSelector } from 'react-redux';

const CartCOunt = () => {
    const cartItems = useSelector((state) => state.cart);
  return (
    <span>
      {cartItems.length}
    </span>
  )
}

export default CartCOunt
