import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchProductsApi = createAsyncThunk("products/fetch", async () => {
  const response = await axios.get(
    "http://localhost:3000/mock-data/products.json"
  );

  return response.data;
});

fetchProductsApi();
