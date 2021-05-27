import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getToken } from "../utils/LocalStorageHandler";

const token = getToken();

const PrivateRoute = ({ children, isLoggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        return token ? children : <Redirect to={{ pathname: "/login" }} />;
      }}
    ></Route>
  );
};
export default PrivateRoute;
