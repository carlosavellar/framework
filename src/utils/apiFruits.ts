import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductsApi = createAsyncThunk("products/fetch", async () => {
  const response = await axios.get(
    "http://localhost:3000/mock-data/products.json"
  );
  // console.log(response);
  return response.data;
});

fetchProductsApi();
