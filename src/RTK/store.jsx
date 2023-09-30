import { configureStore } from "@reduxjs/toolkit";
import DirectionSlice from "./Slice/DirectionSlice";
export const store = configureStore({
  reducer: {
    Direction: DirectionSlice,
  },
});
