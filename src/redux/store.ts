import storage from "redux-persist/lib/storage";
import {
  AnyAction,
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import { authSliceReducer } from "./auth/authSlice";
import { filterReducer } from "./contacts/filterSlice";
import { contactReducer } from "./contacts/contactsSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const persistConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
};
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filterContact: filterReducer,
    auth: persistReducer(persistConfig, authSliceReducer),
  },
  middleware,
});

export const presister = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type ReduxState = ReturnType<typeof contactReducer>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
export const useTypedDispatch = () => useDispatch<TypedDispatch>();
// not use
export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  AnyAction
>;
export const useTypedSelector: TypedUseSelectorHook<ReduxState> = useSelector;
