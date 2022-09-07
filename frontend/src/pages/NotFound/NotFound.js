import { Button, Container } from "@mui/material";
import "./index.css";
import React from "react";

const NotFound = () => {
  return (
    <div className="font align-center">
      <h1>This page is not available.</h1>
      <Button variant="contained">Return to main page</Button>
    </div>
  );
};

export default NotFound;
