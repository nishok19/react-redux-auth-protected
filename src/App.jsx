import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";
import authService from "./appwrite/auth";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./store/authSlice";
import { disableLoader, enableLoader } from "./store/loaderSlice";

function App() {
  const loader = useSelector((state) => state.loader.loader);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function checkForUser() {
      const user = await authService.getUserInfo();
      if (user.success) {
        dispatch(setUser(user.user));
      } else {
        if (user.statusCode === 401) navigate("/login");
      }
      dispatch(disableLoader());
    }
    checkForUser();
  }, []);

  return <>{loader ? "Loadddinggg...." : <Outlet />}</>;
}

export default App;
