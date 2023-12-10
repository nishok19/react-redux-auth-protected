import authService from "../appwrite/auth";

const Login = () => {
  const loginWithGoogle = async (e) => {
    e.preventDefault();
    const user = await authService.createSessionGoogle();
    console.log("user: ", user);
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
