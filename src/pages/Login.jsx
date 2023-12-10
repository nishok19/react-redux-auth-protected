import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import authService from "../appwrite/auth";
import { setUser } from "../store/authSlice";
import { enableLoader } from "../store/loaderSlice";

const Login = () => {
  const [userStatus, setUserStatus] = useState(false);

  const dispatch = useDispatch();

  const loginWithGoogle = async (e) => {
    e.preventDefault();
    dispatch(enableLoader());
    const user = await authService.createSessionGoogle();
    console.log("userrr, ", user);
    if (user) {
      dispatch(setUser(user));
      // setUserStatus(true);
    }
  };

  return (
    <div>
      <button
        style={{ padding: "16px", margin: "40px" }}
        onClick={(e) => loginWithGoogle(e)}
      >
        Login with Google
      </button>
      <button style={{ padding: "16px" }}>Login with Github</button>
    </div>
  );
};
export default Login;
