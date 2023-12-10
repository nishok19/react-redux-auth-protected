import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { disableLoader, enableLoader } from "../store/loaderSlice";

const AuthProtectedLayout = ({ children, isAuthNeeded = true }) => {
  const loader = useSelector((state) => state.loader.loader);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isUserLoggedIn = useSelector((state) => state.auth.authStatus);

  useEffect(() => {
    if (!isAuthNeeded && isUserLoggedIn) {
      navigate("/");
    } else if (isAuthNeeded && !isUserLoggedIn) {
      navigate("/login");
    }
    dispatch(disableLoader());
  }, [isUserLoggedIn, isAuthNeeded, navigate]);

  return loader ? "looadddingg....." : <>{children}</>;
  //   if (isAuthNeeded && isUserLoggedIn) {
  //     return <>{children}</>;
  //   } else if (!isAuthNeeded && !isUserLoggedIn) {
  //     return <>{children}</>;
  //   }
};
export default AuthProtectedLayout;
