import { createSlice } from "@reduxjs/toolkit";
import { fetchProductsApi } from "./../../utils/apiFruits";

fetchProductsApi();
const initialState = {
  products: [],
  cartItems: {
    items: [],
    total: 9,
    showModal: false,
  },
  status: "",
  error: "",
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProduct: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProductsApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProductsApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ? action.error.message : "";
      });
  },
});
// eslint-disable-next-line
export const selectAllProducts = (state: any) => state.products;

export const selectTotal = (state: any) => state.cartItems.total;
// eslint-disable-next-line
export const getProductsError = (state: any) => state.products.error;
// eslint-disable-next-line
export const getProductsStatus = (state: any) => state.products.status;

export const { fetchProduct } = productSlice.actions;

export default productSlice.reducer;
