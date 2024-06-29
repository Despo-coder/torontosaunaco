'use client'
import { createSlice } from "@reduxjs/toolkit";

//Create Initial State
const initialState = [];


//Create the slice with Reducers
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    
    addToCart: (state, action) => {
      console.log(action.payload)
      // const { id, title, price, qty } = action.payload;
      state.push( action.payload );
      console.log(state)
    },
    removeFromCart: (state, action) => {
      console.log(action.payload)
      const cartId = action.payload;
      return state.filter((item) => item.id === cartId);
    },
    updateCartItemQuantity: (state, action) => {
      const { id, qty } = action.payload;
      const item = state.find((item) => item.id === id);
      if (item) {
        item.qty = qty;
      }
    },
    clearCart: (state) => {
      return [];
    },
  },
});

//export the reducers(actions)
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;