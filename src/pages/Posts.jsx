import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { removeUser } from "../store/authSlice";

const Posts = () => {
  const dispatch = useDispatch();
  //
  const logoutSession = async (e) => {
    e.preventDefault();
    await authService.logoutUser();
    dispatch(removeUser());
  };

  const getUserDetails = async (e) => {
    e.preventDefault();
    // const user = await authService.getUserInfo();
    // console.log("userrrr, ", user);
  };

  return (
    <main>
      <div></div>
      <button
        style={{ padding: "16px", margin: "40px" }}
        onClick={(e) => getUserDetails(e)}
      >
        Get User Details
      </button>
      <button
        style={{ padding: "16px", margin: "40px" }}
        onClick={(e) => logoutSession(e)}
      >
        Logout
      </button>
    </main>
  );
};
export default Posts;
