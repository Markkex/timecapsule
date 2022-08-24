import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <TextField variant="outlined"></TextField>
      <Button variant="contained">Login</Button>
    </div>
  );
};

export default Login;
