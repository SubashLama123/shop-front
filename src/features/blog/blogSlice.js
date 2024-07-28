import { createSlice } from "@reduxjs/toolkit";


export const blogSlice = createSlice({
  name: 'blogSlice',
  initialState: {
    blogs: []
  },
  reducers: {
    addToBlog: (state, action) => {
      state.blogs.push(action.payload);
    },
    removeBlog: (state, action) => {
      state.blogs.splice(action.payload, 1);
    },
  }
});


export const { addToBlog, removeBlog } = blogSlice.actions;