import { register } from "redux/contacts/operations";
import { logIn, logOut, refreshUser } from "./operations";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
    extraReducers: {
        [register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.contact = action.payload.contact;
            state.isLoggedIn = true;
        },
        [logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.contact = action.payload.contact;
            state.isLoggedIn = true;
        },
        [logOut.fulfilled](state, action) {
            state.user =  { name: null, email: null };
            state.contact = null;
            state.isLoggedIn = false;
        },
        [refreshUser.pending](state) {
            state.isRefreshing = true;
        },
        [refreshUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        },
        [refreshUser.rejected](state) {
            state.isRefreshing = false;
        },
  },
});
export const authReducer = authSlice.reducer;