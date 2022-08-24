import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState([]);

  const login = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    };
    fetch("https://reqres.in/api/posts", requestOptions)
      .then((response) => response.json())
      .then((data) => setUserData(data));
    /*axios
      .post("http://127.0.0.1:8000/api/login", {
        email,
        password,
      })
      .then(function (response) {
        console.log(response.user);
      })
      .catch(function (error) {
        console.log(error);
      }); */
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

      {data}
    </div>
  );
};

export default Login;
