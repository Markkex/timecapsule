import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { loginUser } from "../redux/user";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const { user, status } = useSelector((state) => state.user);
  const data = [];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    let obj = { email, password };
    await dispatch(loginUser({ obj: obj }));
    await console.log(user);
    await console.log(status);
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
    </div>
  );
};

export default Login;
