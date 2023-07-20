import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import  storage  from 'redux-persist/lib/storage';
import { authReducer } from "./auth/slice";
import { contactsReducer } from "./contacts/slice";

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
  whitelist: ['contacts'],
};
export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
export const persistor = persistStore(store);


// import { combineReducers } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
// import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import contactsReducer from './contactsSlice';
// import { filterReducer } from './filterSlice';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['contacts'],
// };
// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//   getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);