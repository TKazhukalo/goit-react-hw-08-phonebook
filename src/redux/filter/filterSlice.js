import { createSlice } from "@reduxjs/toolkit";

const initialFilterState = '';

const filterSlice = createSlice({
  name: "filter",
  initialState: initialFilterState,
  reducers: {
    changeFilter(state, action) {
      return(state = action.payload);
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;