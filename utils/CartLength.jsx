import React from 'react'

const CartLength = () => {
    const cartItems = useSelector((state) => state.cart);
    return (
      <div>
        {cartItems && cartItems.length > 0 ? (
          <span>{cartItems.length}</span>
        ) : (
          <span>0</span>
          )}
      </div>
    )
}

export default CartLength
