import "./Login.css";
import img from "./img/2784283.jpg";
import user from "./img/person-circle-outline.svg";
import password from "./img/key-outline.svg";
import IonIcon from "@reacticons/ionicons";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { useState } from "react";
function Login() {
  const navigate = useNavigate();
  const [showEffect, setShowEffect] = useState<boolean>(false);
  const handleClick = () => {
    setShowEffect(true);
    setTimeout(() => {
      setShowEffect(false);
    }, 3000);
    // navigate("/");
  };
  return (
    <>
      {showEffect && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
      <div className="backGroundLogin">
        <div className="Login_card">
          <div className="left_loginCard">
            <img src={img} alt="" className="img" />
          </div>
          <div className="right_loginCard">
            <div className="wrapper">
              <h3>User Login</h3>
              <div className="userInfor">
                <div className="usernameArea">
                  <div className="user">
                    <img src={user} alt="" />
                    <span>Username</span>
                  </div>
                  <input type="text" className="inputField" autoFocus />
                </div>
                <div className="PasswordArea">
                  <div className="user">
                    <img src={password} alt="" />
                    <span>Passwords</span>
                  </div>
                  <input type="password" className="inputField" autoFocus />
                </div>
              </div>
              <div className="submitArea">
                <button className="LoginBtn" onClick={handleClick}>
                  Login
                </button>
                <div className="register">
                  <p onClick={() => navigate("/register")}>
                    {" "}
                    Click here to create new account
                  </p>
                </div>
              </div>

              <div className="third-party">
                <span>Login with: </span>
                <ul className="social_platformList">
                  <li className="social_platformIcon">
                    <IonIcon name="logo-google"></IonIcon>
                  </li>
                  <li className="social_platformIcon">
                    <IonIcon name="logo-github"></IonIcon>
                  </li>
                  <li className="social_platformIcon">
                    <IonIcon name="logo-linkedin"></IonIcon>
                  </li>
                  <li className="social_platformIcon">
                    <IonIcon name="logo-apple"></IonIcon>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
