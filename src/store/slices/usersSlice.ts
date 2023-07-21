import { createSlice } from "@reduxjs/toolkit";
import { fetchUsersApi } from "../../utils/apiUser";

fetchUsersApi();
export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  user_name: string;
  password: string;
  isLoggedIn: boolean;
}

const INITIAL_STATE: Array<IUser> = [
  {
    id: 0,
    first_name: "",
    last_name: "",
    user_name: "neo",
    password: "magestic",
    isLoggedIn: false,
  },
];

const usersReducer = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    fetchUsers: (state, action) => {
      state = action.payload;
    },
    setLoggedUser: (state, action) => {
      state = action.payload;
    },
  },
});

export const { fetchUsers, setLoggedUser } = usersReducer.actions;

export default usersReducer.reducer;
