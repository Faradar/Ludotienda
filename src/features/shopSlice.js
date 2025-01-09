import { createSlice } from "@reduxjs/toolkit";
import categories from "../data/categories";
import products from "../data/products";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    categories: categories,
    products: products,
    productsFilteredByCategory: [],
    productSelected: {},
  },
  reducers: {
    setProductsFilteredByCategory: (state, action) => {
      if (action.payload.products) {
        state.productsFilteredByCategory = action.payload.products;
      } else {
        state.productsFilteredByCategory = state.products.filter(
          (product) => product.category === action.payload.category
        );
      }
    },
  },
});

export const { setProductsFilteredByCategory } = shopSlice.actions;

export default shopSlice.reducer;
