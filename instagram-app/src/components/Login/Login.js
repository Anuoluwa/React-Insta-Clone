import React, { useState } from "react";
import "./Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameHandler = e => setUsername(e.target.value);
  const passwordHandler = e => setPassword(e.target.value);

  const loginHandler = () => {
    if (username !== "" && password !== "") {
      localStorage.setItem("token", username);
      window.location.reload();
    }
  };

  return (
    <div>
      <div className="login">
        <h2>Instagram</h2>
        <div className="login-form">
          <form onSubmit={loginHandler}>
            <input
              onChange={usernameHandler}
              type="text"
              placeholder="Phone number, Username, or email "
              required
            />
            <input
              onChange={passwordHandler}
              type="password"
              placeholder="Password"
              required
            />
            <button onClick={loginHandler}>Log In</button>
          </form>

          <h6>
            <a href="#1">Forgot Password?</a>
          </h6>
        </div>
      </div>

      <div className="signup">
        <p>Don't have an account? </p>
        <a href="#1">Sign Up</a>
      </div>

    </div>
  );
}