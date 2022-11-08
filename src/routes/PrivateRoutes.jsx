import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();
  if (loader) {
    return (
      <div className="loader-spinner flex justify-center items-center my-44">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400 text-center"></div>
      </div>
    );
  }
  if (user && user.uid) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
};

export default PrivateRoutes;
