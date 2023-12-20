import { configureStore } from "@reduxjs/toolkit";
// import products from "./components/Product/products.slice";
// import cart from "./components/Cart/cart.slice";

const store = configureStore({
  reducer: {
    // products,
    // cart,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
