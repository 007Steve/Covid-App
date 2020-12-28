import { createSlice } from "@reduxjs/toolkit";

export const inputSlice = createSlice({
  name: "input",
  initialState: {
    input: "usa",
  },
  reducers: {
    addInput: (state, action) => {
      state.input = action.payload;
    },
  },
});

export const { addInput } = inputSlice.actions;

export const selectInput = (state) => state.input.input;

export default inputSlice.reducer;
