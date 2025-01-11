import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import shopReducer from "../features/shopSlice";
import { shopApi } from "../services/shop";
import { ordersApi } from "../services/orders";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    shop: shopReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware, ordersApi.middleware),
});

setupListeners(store.dispatch);

export default store;
