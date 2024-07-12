import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/redux/slices/cartSlice";
import productsReducer from "@/redux/slices/productSlice";
import ordersReducer from "@/redux/slices/ordersSlice";
import usersReducer from "@/redux/slices/userSlice";


const isDevelopment = process.env.NODE_ENV === 'development';

// Create a store and give it reducers
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    orders: ordersReducer,
    users: usersReducer,
  },
  devTools: isDevelopment,
});
