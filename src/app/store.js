import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import inputReducer from "../features/inputSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    input: inputReducer,
  },
});
