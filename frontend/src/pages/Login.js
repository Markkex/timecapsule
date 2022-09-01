import React, { useState } from "react";
import { loginUser } from "../redux/user";
import { useSelector, useDispatch } from "react-redux";
import { Button, TextField } from "@material-ui/core";

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
      <TextField />
    </div>
  );
};

export default Login;
