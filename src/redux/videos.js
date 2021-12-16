import { createSlice } from "@reduxjs/toolkit";

const initialState = []


const  videos= createSlice({
  name: "videos",
  initialState,
  reducers: {
    add: (state, action) => {
      return [action.payload]
    },
  }
});

export default videos.reducer;
export const { add } = videos.actions;