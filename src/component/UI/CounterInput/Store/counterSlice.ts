import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    addCounter: (state) => {
      state.counter += 1;
    },
    subtractCounter: (state) => {
      state.counter -= 1;
    },
  },
});

export const { addCounter, subtractCounter } = counterSlice.actions;
export const selectCounter = (state: any) => state.counter;
export default counterSlice.reducer;
