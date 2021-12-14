import { createSlice } from "@reduxjs/toolkit";

const initialState = ['video1']


const fav = createSlice({
  name: "fav",
  initialState,
  reducers: {
    add: (state, action) => {
      return [...state, action.payload]
    },
    remove: (state, action) => {
      const newList = state.filter(item => item !== action.payload)
      return [newList]
    }
  }

});

export default fav.reducer;
export const { add, remove } = fav.actions;