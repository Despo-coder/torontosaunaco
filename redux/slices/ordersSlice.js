import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      return action.payload;
    },
    addOrder: (state, action) => {
      state.push(action.payload);
    },
    updateOrder: (state, action) => {
      const index = state.findIndex((order) => order.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    removeOrder: (state, action) => {
      return state.filter((order) => order.id !== action.payload);
    },
  },
});

export const { setOrders, addOrder, updateOrder, removeOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
