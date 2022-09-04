import React, { useState } from "react";
import { loginUser } from "../redux/user";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Login = () => {
  const dispatch = useDispatch();
  const { user, status } = useSelector((state) => state.user);

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
      <div>
        <TextField onChange={(e) => setEmail(e.target.value)} />
        <TextField onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={login}>Login</Button>
      </div>
    </div>
  );
};

export default Login;
