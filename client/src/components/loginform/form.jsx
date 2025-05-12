import React from "react";
import "./form.css";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };
  const signup = () => {
    navigate("/signup");
  };
  return (
    <div>
      <div class="wrapper">
        <div class="title">Login Form</div>
        <form action="#">
          <div class="field">
            <input type="text" required />
            <label>Email Address</label>
          </div>
          <div class="field">
            <input type="password" required />
            <label>Password</label>
          </div>
          <div class="content">
            <div class="checkbox">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>
            <div class="pass-link">
              <a href="#">Forgot password?</a>
            </div>
          </div>
          <div class="field">
            <input type="submit" value="Login" onClick={home} />
          </div>
          <div class="signup-link">
            Not a member? <button onClick={signup}>Signup now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
