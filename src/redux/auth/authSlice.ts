import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialStateAuth } from "./Types";
import {
  fethcRegisterUser,
  fetchLogInUser,
  fetchLogOutUser,
  fetchRefreshUser,
} from "./authOperations";

const initialState: initialStateAuth = {
  user: { name: "", email: "" },
  token: null,
  isLoggedIn: false,
  isRefresh: false,
  error: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fethcRegisterUser.fulfilled, (state, action) => {
        if (action.payload) {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        }
      })
      .addCase(fetchLogInUser.fulfilled, (state, actions) => {
        state.user = actions.payload.user;
        state.token = actions.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(fetchLogOutUser.fulfilled, (state, _) => {
        state.user = { name: "", email: "" };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(fetchRefreshUser.fulfilled, (state, actions) => {
        state.user = actions.payload;
        state.isLoggedIn = true;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.isLoggedIn = false;
        state.error = null;
      });
  },
});

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}

export const authSliceReducer = authSlice.reducer;
