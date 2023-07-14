import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchProductsApi } from "./../../utils/apiFruits";

fetchProductsApi();
const initialState = {
  products: [
    {
      id: 1,
      name: "coconut",
    },
  ],
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
      .addCase(fetchProductsApi.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProductsApi.fulfilled, (state, action) => {
        console.log(state);
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProductsApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ? action.error.message : "";
      });
  },
});

export const selectAllProducts = (state: any) => state.products;
export const getProductsError = (state: any) => state.products.error;
export const getProductsStatus = (state: any) => state.products.status;

export const { fetchProduct } = productSlice.actions;

export default productSlice.reducer;
