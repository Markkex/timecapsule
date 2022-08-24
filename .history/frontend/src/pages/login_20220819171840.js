import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (email, password) => {};
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
      <Button variant="contained">Login</Button>
    </div>
  );
};

export default Login;