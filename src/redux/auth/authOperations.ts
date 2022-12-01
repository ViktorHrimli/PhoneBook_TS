import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginAuth, LoginlogIn, UserData, UserProps } from "./Types";

import axios from "axios";
import Notiflix from "notiflix";

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
    return data;
  } catch (error: any) {
    console.log(error);

    Notiflix.Notify.warning(
      "This email address already create, please choose different email address"
    );
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

    setAuthToken(data.token);
    return data;
  } catch (error: any) {
    Notiflix.Notify.warning(
      "Please provide a valid email address and password."
    );
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
      Notiflix.Notify.warning(error.message);
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
    Notiflix.Notify.warning(error.message);
    return thunkApi.rejectWithValue(error.message);
  }
});
