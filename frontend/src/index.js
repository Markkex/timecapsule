import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";

import Menu from "./components/Menu";

import PrivateRoute from "./hooks/PrivateRoute";

import Login from "./pages/Login";
import HowItWorks from "./pages/HowItWorks";
import IndexLogin from "./pages/IndexLogin";
import NotFound from "./pages/NotFound/NotFound";
import { Container } from "@mui/system";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route element={<PrivateRoute />}>
              <Route path="/index" element={<IndexLogin />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
