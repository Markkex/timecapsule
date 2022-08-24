import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { loginUser } from "../redux/user";
import { useSelector, useDispatch } from "react-redux";

const Login = async () => {
  const dispatch = useDispatch();

  const data = [];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (email, password) => {
    let obj = { email, password };
    dispatch(loginUser(obj));
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
      <Button variant="contained" onClick={() => login}>
        Login
      </Button>
    </div>
  );
};

export default Login;
