import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

const Login = await () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const data = [];
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    axios
      .post("http://127.0.0.1:8000/api/login", {
        email,
        password,
      })
      .then(function (response) {
        console.log(response.data);
        async fillUserData(response.data);
        console.log("user", user);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const logout = (token) => {
    dispatch(logout());
    console.log(user);
  };
  const fillUserData = (data) => {
    dispatch(login(data));
  };

  return (
    <div>
      <TextField
        variant="outlined"
        label="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        variant="outlined"
        label="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" onClick={login}>
        Login
      </Button>
      {user && (
        <Button variant="contained" onClick={logout}>
          Logout
        </Button>
      )}
    </div>
  );
};

export default Login;
