import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      return action.payload;
    },
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.findIndex((product) => product.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    removeProduct: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
  },
});

export const { setProducts, addProduct, updateProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;
