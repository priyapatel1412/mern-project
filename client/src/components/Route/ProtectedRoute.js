import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = (isAdmin) => {
  //return an outlet that will render child elements
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  return (
    <Fragment>
      {loading === false && isAuthenticated ? (
        <Outlet />
      ) : (
        <Navigate to="/login" />
      )}
    </Fragment>
  );
};

export default ProtectedRoute;
