import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./signup.css";
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
    try {
      const response = await axios.post("/api/auth/register", credentials);
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <div class="wrapper">
          <div class="title">SignUp Form</div>
          <form action="#">
            <div class="field">
              <input type="text" id="username" onChange={handleChange} />
              <label>Username</label>
            </div>
            <div class="field">
              <input type="text" id="email" onChange={handleChange} />
              <label>Email</label>
            </div>
            <div class="field">
              <input type="password" id="password" onChange={handleChange} />
              <label>Password</label>
            </div>
            <div class="field">
              <input type="text" id="country" onChange={handleChange} />
              <label>Country</label>
            </div>
            <div class="field">
              <input type="text" id="city" onChange={handleChange} />
              <label>City</label>
            </div>
            <div class="field">
              <input type="tel" id="phone" onChange={handleChange} />
              <label>Phone</label>
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
                value="SignUp"
              />
            </div>
            {error && <span>{error.message}</span>}
            <div class="signup-link">
              Already a member? <button>Login now</button>
            </div>
          </form>
        </div>
      </div>
      );
    </>
  );
};

export default Login;
