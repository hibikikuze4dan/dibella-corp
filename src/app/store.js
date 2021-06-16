import { configureStore } from "@reduxjs/toolkit";
import { saveSlice } from "../redux/slice";

export const store = configureStore({
  reducer: saveSlice.reducer,
});
