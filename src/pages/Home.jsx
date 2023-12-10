import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const navigateToPosts = (e) => {
    e.preventDefault();
    navigate("/posts");
  };

  return (
    <main>
      <button
        style={{ padding: "16px", margin: "40px" }}
        onClick={(e) => navigateToPosts(e)}
      >
        Go to Posts page
      </button>
      <div>homeiieeeee.....{user?.name}</div>
    </main>
  );
};
export default Home;
