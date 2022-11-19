import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchContact, AddTypeContact } from "./Types";
axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const fetchAllContacts = createAsyncThunk<
  FetchContact[],
  undefined,
  { rejectValue: string }
>("contacts/fetchAll", async (_, thunkApi: any) => {
  try {
    const { data } = await axios.get("/contacts");
    console.log(data);

    return data;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error);
  }
});

export const fetchAddContacts = createAsyncThunk<
  FetchContact,
  AddTypeContact,
  { rejectValue: string }
>("contacts/addContacts", async (value, thunkApi) => {
  try {
    const { data } = await axios.post("/contacts", {
      name: value.name,
      number: value.number,
    });
    console.log(data);

    return data;
  } catch (error: any) {
    thunkApi.rejectWithValue(error);
  }
});

export const fetchRemoveContact = createAsyncThunk<
  any,
  string,
  { rejectValue: string }
>("contacts/removeContacts", async (id, thunkApi) => {
  try {
    if (!id) return;
    await axios.delete(`/contacts/${id}`);
    return id;
  } catch (error: any) {
    thunkApi.rejectWithValue(error);
  }
});
