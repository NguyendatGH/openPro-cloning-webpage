import React, { useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");
  const navigate = useNavigate();
  const handleClick = () => {
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(password);
    console.log(confirm);
    if (password !== confirm) {
      console.log("invalid");
    } else {
      navigate("/");
    }
  };
  return (
    <>
      <div className="register_main">
        <div className="register_card">
          <div className="wrapper">
            <h1>Register</h1>
            <div className="userName">
              <input
                type="text"
                placeholder="Firstname"
                autoFocus
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Lastname"
                autoFocus
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <input
              type="text"
              placeholder="Email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Password"
              autoFocus
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="text"
              placeholder="Confirm password"
              autoFocus
              onChange={(e) => setConfirm(e.target.value)}
            />
            <div className="agreeTerm">
              <input type="checkbox" className="checkBox" />
              <span>I agree with</span>
              <a
                className="linkTerms"
                href="https://en.wikipedia.org/wiki/Terms_of_service"
              >
                terms of use
              </a>
            </div>
            <button className="submitBtn" onClick={() => handleClick()}>
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
