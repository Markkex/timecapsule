import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (email, password) => {};
  return (
    <div>
      <TextField variant="outlined" label="email" />
      <Button variant="contained">Login</Button>
    </div>
  );
};

export default Login;
