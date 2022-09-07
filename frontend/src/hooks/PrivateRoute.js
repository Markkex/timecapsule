import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  let storageUser = JSON.parse(localStorage.getItem("user"));

  return storageUser && storageUser.token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
