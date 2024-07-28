import { createSlice } from "@reduxjs/toolkit";
import { addBlogToLocal, getBlogsFromLocal } from "../../hooks/localStorage";


export const blogSlice = createSlice({
  name: 'blogSlice',
  initialState: {
    blogs: getBlogsFromLocal()
  },
  reducers: {
    addToBlog: (state, action) => {
      state.blogs.push(action.payload);
      addBlogToLocal([...state.blogs]);
    },
    removeBlog: (state, action) => {
      state.blogs.splice(action.payload, 1);
    },
  }
});


export const { addToBlog, removeBlog } = blogSlice.actions;