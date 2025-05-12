import "./navbar.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };
  const login = () => {
    navigate("/login");
  };
  const signup = () => {
    navigate("/signup");
  };
  const { loading, error, dispatch } = useContext(AuthContext);
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
  };

  const { user } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo" onClick={home}>
          Booking.com
        </span>
        {user ? (
          <div className="navItems">
            <span className="username">{user.username}</span>
            <button className="navButton" onClick={handleClick}>
              LogOut
            </button>
          </div>
        ) : (
          <div className="navItems">
            <button className="navButton" onClick={signup}>
              Register
            </button>
            <button className="navButton" onClick={login}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
