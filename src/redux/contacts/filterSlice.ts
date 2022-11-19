import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState: string = "";
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterContact(state, action: PayloadAction<string>) {
      return (state = action.payload);
    },
  },
});

export const { filterContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
