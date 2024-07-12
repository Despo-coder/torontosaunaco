'use client'
import { createSlice } from "@reduxjs/toolkit";


//const initialState = typeof window !== 'undefined' && localStorage.getItem("cart")  ? JSON.parse(localStorage.getItem("cart")) : {cartItems:[]};

//Create Initial State
const initialState = {
  cartItems: []
};

const AddDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};


//Create the slice with Reducers
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    
    addToCart: (state, action) => {
     
      const item = action.payload;
      // console.log(item)
      // Check if Item Exsists
      const existingItem = state.cartItems.find((x) => x.id === item.id);
      //const existingItem = state.cartItems.find((item) => item.id === item.id);
      if (existingItem) {
        state.cartItems = state.cartItems.map((x) => (x.id=== existingItem.id ? item : x));
      } else {
        // If Item Doesn't Exist, Add New Item
        state.cartItems = [...state.cartItems, item];
      }
       localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      // console.log(action.payload)
      const cartId = action.payload;
      
      state.cartItems = state.cartItems.filter((item) => item.id !== cartId);
      // Remove selected Item from local Storage
      localStorage.setItem("cart", JSON.stringify(state));
    },
    updateCartItemQuantity: (state, action) => {
      const { id, qty } = action.payload;
      // console.log(id, qty)
      const item = state.cartItems.find((item) => item.id === id);
      if (item) {
        item.qty = qty;
      }
    },
    clearCart: (state) => {
     state.cartItems = [];
     localStorage.setItem("cart", JSON.stringify(state));
    },
  
  hydrateCart: (state) => {
    if (typeof window !== 'undefined') {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        return JSON.parse(storedCart);
      }
    }
  },
},
});


//export the reducers(actions)
export const {hydrateCart, addToCart, removeFromCart, updateCartItemQuantity , clearCart} = cartSlice.actions;
export default cartSlice.reducer;