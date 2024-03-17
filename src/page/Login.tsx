import React from "react";
import "./Login.css";
function Login() {
  return (
    <>
      <div className="Login_card">
        <div className="blur">
          <span> User name: </span>
          <input type="text" />
          <span> Password: </span>
          <input type="text" />
        </div>
      </div>
    </>
  );
}

export default Login;
