import React from "react";
import "../loginform/form.css";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };
  const login = () => {
    navigate("/login");
  };
  return (
    <div>
      <div class="wrapper">
        <div class="title">SignUp Form</div>
        <form action="#">
          <div class="field">
            <input type="text" required />
            <label>Full Name</label>
          </div>
          <div class="field">
            <input type="text" required />
            <label>Email Address</label>
          </div>
          <div class="field">
            <input type="password" required />
            <label>Set Password</label>
          </div>

          <div class="field">
            <input type="submit" value="SignUp" onClick={home} />
          </div>
          <div class="signup-link">
            Already a member? <button onClick={login}>Login now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
