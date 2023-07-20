import { register } from "../auth/operations";
import { logIn, logOut, refreshUser } from "../auth/operations";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading:false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
    extraReducers: {
        [register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            //state.isLoading = false;
        },
        [logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [logOut.fulfilled](state, action) {
            state.user =  { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },
        [logOut.pending](state) {
            state.isLoading = true;
        },
        [logOut.rejected](state, action) {
            state.isLoading = false;  
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