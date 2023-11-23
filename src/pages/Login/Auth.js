import { useNavigate } from "react-router-dom";
export const Auth = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (!isLoggedIn) {
    navigate("/");
  }
  navigate("/home");
};
