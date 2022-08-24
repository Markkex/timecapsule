import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const Login = createAsyncThunk("user/Login", async (email, password) => {
  return axios
    .post("http://127.0.0.1:8000/api/login", {
      email,
      password,
    })
    .then(function (response) {
      console.log(response.data);
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
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: {
    [Login.pending]: (state, action) => {
      state.status = "loading";
    },
    [Login.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.status = "success";
    },
    [Login.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
