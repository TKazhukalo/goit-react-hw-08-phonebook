import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import  storage  from 'redux-persist/lib/storage';
import { authReducer } from "./auth/slice";
import { contactsReducer } from "./contacts/slice";
import { filterReducer } from "./filter/filterSlice";

const { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistReducer, persistStore } = require("redux-persist");

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filter:filterReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

