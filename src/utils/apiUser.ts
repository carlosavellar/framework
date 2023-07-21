import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsersApi = createAsyncThunk("user/fetch", async () => {
  const response = await axios.get("http://localhost:3000/mock-data/user.json");
  // console.log(response);
  return response.data;
});

fetchUsersApi();
