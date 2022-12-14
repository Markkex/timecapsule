import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk("user/Login", async ({ obj }) => {
  return axios
    .post("http://127.0.0.1:8000/api/login", {
      email: obj.email,
      password: obj.password,
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    status: null,
  },
  extraReducers: {
    [loginUser.pending]: (state, action) => {
      state.status = "loading";
    },
    [loginUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.status = "success";
    },
    [loginUser.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

// Action creators are generated for each case reducer function

export default userSlice.reducer;
