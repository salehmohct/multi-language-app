import { createSlice } from "@reduxjs/toolkit";
export const DirectionSlice = createSlice({
  name: "DirectionSlice",
  initialState: "ltr",
  reducers: {
    addDirection: (state, action) => {
      return (state = action.payload);
    },
  },
});
export const { addDirection } = DirectionSlice.actions;
export default DirectionSlice.reducer;
