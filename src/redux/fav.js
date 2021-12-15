import { createSlice } from "@reduxjs/toolkit";

const initialState = []


const fav = createSlice({
  name: "fav",
  initialState,
  reducers: {
    add: (state, action) => {
      return [...state, action.payload]
    },
    remove: (state, action) => {
      const newList = state.filter(item => item.id.videoId !== action.payload)
      return state = newList
    }
  }
});

export default fav.reducer;
export const { add, remove } = fav.actions;