import React, { useState } from "react";
import { loginUser } from "../redux/user";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { user, status } = useSelector((state) => state.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    let obj = { email, password };
    let response = await dispatch(loginUser({ obj: obj }));
    console.log(response.payload);
    let parsedResponse = {
      token: response.payload.token,
      email: response.payload.user.email,
      username: response.payload.user.name,
    };
    localStorage.setItem("user", JSON.stringify(parsedResponse));
    navigate("/index");
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
