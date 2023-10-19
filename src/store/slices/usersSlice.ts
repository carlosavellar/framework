import { createSlice } from "@reduxjs/toolkit";
import { fetchUsersApi } from "../../utils/apiUser";

const INITIAL_STATE = {
  users: [],
  status: "",
  error: "",
  isLoggedIn: false,
};

const usersReducer = createSlice({
  name: "users",
  initialState: INITIAL_STATE,
  reducers: {
    fetchUsers: (state, action) => {
      state.users = action.payload;
    },
    setLoggedUser: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsersApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsersApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchUsersApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message
          ? action.error.message
          : "Request Failed";
      });
  },
});

export const { fetchUsers, setLoggedUser } = usersReducer.actions;

export default usersReducer.reducer;
