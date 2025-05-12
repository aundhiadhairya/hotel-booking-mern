import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/api/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <div class="wrapper">
          <div class="title">Login Form</div>
          <form action="#">
            <div class="field">
              <input
                type="text"
                id="username"
                onChange={handleChange}
                required
              />
              <label>Username</label>
            </div>
            <div class="field">
              <input
                type="password"
                id="password"
                onChange={handleChange}
                required
              />
              <label>Password</label>
            </div>
            <div class="content">
              <div class="checkbox">
                <input type="checkbox" id="remember-me" />
                <label for="remember-me">Remember me</label>
              </div>
            </div>
            <div class="field">
              <input
                disabled={loading}
                onClick={handleClick}
                type="submit"
                value="Login"
              />
            </div>
            {error && <span>{error.message}</span>}
            <div class="signup-link">
              Not a member? <button>Signup now</button>
            </div>
          </form>
        </div>
      </div>
      );
    </>
  );
};

export default Login;
