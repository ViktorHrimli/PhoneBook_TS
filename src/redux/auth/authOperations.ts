import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginAuth, LoginlogIn, UserData, UserProps } from "./Types";

import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const setAuthToken = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const fethcRegisterUser = createAsyncThunk<
  UserData,
  UserProps,
  { rejectValue: string }
>("auth/register", async (user, thunkApi: any) => {
  try {
    if (!user) return;
    const { data } = await axios.post("/users/signup", user);
    setAuthToken(data.token);
    console.log(data);
    return data;
  } catch (error: any) {
    thunkApi.rejectWithValue(error.message);
  }
});

export const fetchLogInUser = createAsyncThunk<
  LoginAuth,
  LoginlogIn,
  { rejectValue: string }
>("auth/logIn", async (user, thunkApi) => {
  try {
    const { data } = await axios.post("/users/login", user);
    console.log(data);

    setAuthToken(data.token);
    return data;
  } catch (error: any) {
    thunkApi.rejectWithValue(error.message);
  }
});

export const fetchLogOutUser = createAsyncThunk<{ rejectValue: string }>(
  "auth/logout",
  async (_, thunkApi: any) => {
    try {
      await axios.post("/users/logout");
      clearAuthToken();
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchRefreshUser = createAsyncThunk<
  UserData,
  undefined,
  { rejectValue: string }
>("auth/refresh", async (_, thunkApi: any) => {
  try {
    const state = thunkApi.getState();

    if (state.auth.token === null) {
      return thunkApi.rejectWithValue(5);
    }

    setAuthToken(thunkApi.getState().auth.token);

    const { data } = await axios.get("/users/current");

    return data;
  } catch (error: any) {
    thunkApi.rejectWithValue(error.message);
  }
});
