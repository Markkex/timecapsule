import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const Login = createAsyncThunk("user", async (email, password) => {
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
    [Login.pending]: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
