import { register } from "../auth/operations";
import { logIn, logOut, refreshUser } from "../auth/operations";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    error:null,
}

const authSlice = createSlice({
  name: 'auth',
    initialState,
    extraReducers: {
       
        [register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.error = null;
            //state.isLoading = false;
        },
        [register.rejected](state, action) {
            state.isLoading = false;
            state.error = null;
        },
         [register.pending](state) {
            state.isLoading = true;
        },
        [logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.isLoading = false;
            state.error = null;
        },
          [logIn.pending](state) {
            state.isLoading = true;
        },
        [logIn.rejected](state, action) {
            state.error = action.payload;
            state.isLoading = false;
        },
        [logOut.fulfilled](state, action) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
            state.isLoading = false;
            state.error = null;
        },
        [logOut.pending](state) {
            state.isLoading = true;
        },
        [logOut.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        [refreshUser.pending](state) {
            state.isRefreshing = true;
        },
        [refreshUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
            state.error = null;
        },
        [refreshUser.rejected](state) {
            state.isRefreshing = false;
        },
    },
});
export const authReducer = authSlice.reducer;

 // extraReducers: builder =>
        //     builder
        //         .addCase(register.pending, (state, action) => state)
        //         .addCase(register.fulfilled, (state, action) => {
        //             state.user = action.payload.user;
        //             state.token = action.payload.token;
        //             state.isLoggedIn = true;
        //         })
        //         .addCase(register.rejected, (state, action) => state)
        //         .addCase(logIn.fulfilled, (state, action) => {
        //             state.user = action.payload.user;
        //             state.token = action.payload.token;
        //             state.isLoggedIn = false;
        //         })
        //         .addCase(logOut.fulfilled, state => {
        //             state.user = { name: null, email: null };
        //             state.token = null;
        //             state.isLoggedIn = false;
        //         })
        //         .addCase(refreshUser.fulfilled, (state, action) => {
        //             state.user = action.payload;
        //             state.isLoggedIn = true;
        //         }),