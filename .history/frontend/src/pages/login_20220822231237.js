import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { loginUser } from "../redux/user";
import { useSelector, useDispatch } from "react-redux";

const Login = async () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const data = [];
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logout = (token) => {
    dispatch(logout());
    console.log(user);
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
      <Button variant="contained" onClick={dispatch(loginUser)}>
        Login
      </Button>
    </div>
  );
};

export default Login;
