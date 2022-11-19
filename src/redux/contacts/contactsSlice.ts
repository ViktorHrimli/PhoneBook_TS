import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contact, StateContact } from "./Types";
import {
  fetchAllContacts,
  fetchAddContacts,
  fetchRemoveContact,
} from "./operations";

const pendingStatus = (state: StateContact) => {
  state.contact.isLoading = true;
};

const rejectedStatus = (state: StateContact, action: AnyAction): void => {
  state.contact.isLoading = false;
  state.contact.error = action.payload;
};

const initialState: StateContact = {
  contact: {
    items: [],
    isLoading: false,
    error: null,
  },
};
export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllContacts.pending, pendingStatus)
      .addCase(fetchAddContacts.pending, pendingStatus)
      .addCase(fetchRemoveContact.pending, pendingStatus)

      .addCase(fetchAllContacts.rejected, rejectedStatus)
      .addCase(fetchAddContacts.rejected, rejectedStatus)
      .addCase(fetchRemoveContact.rejected, rejectedStatus)

      .addCase(fetchAllContacts.fulfilled, (state, actions) => {
        state.contact.isLoading = false;
        state.contact.error = null;
        state.contact.items = actions.payload;
      })
      .addCase(
        fetchAddContacts.fulfilled,
        (state, actions: PayloadAction<Contact>) => {
          state.contact.isLoading = false;
          state.contact.error = null;
          state.contact.items.push(actions.payload);
        }
      )
      .addCase(
        fetchRemoveContact.fulfilled,
        (state, actions: PayloadAction<string>) => {
          state.contact.isLoading = false;
          state.contact.error = null;
          state.contact.items = state.contact.items.filter(
            (item) => item.id !== actions.payload
          );
        }
      );
  },
});

export const contactReducer = contactSlice.reducer;
