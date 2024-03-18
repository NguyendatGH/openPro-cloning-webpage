import React from "react";
import "./Login.css";
import IonIcon from "@reacticons/ionicons";
function Login() {
  return (
    <>
      <div className="Login_card">
        <div className="wrapper">
          <h1>Login</h1>
          <div className="userInfor">
            <span> User name: </span>
            <input type="text" autoFocus />
            <span> Password: </span>
            <input type="text" autoFocus />
          </div>
          <div className="submitArea">
            <button className="Btn Login">Login</button>
            <div className="saveLogin">
              {" "}
              <input type="checkbox" />
              <span>save account for the next login</span>
            </div>
          </div>

          <div className="third-party">
            <span>Login with: </span>
            <ul className="social_platformList">
              <li className="social_platformIcon">
                <IonIcon name="logo-google" size="large"></IonIcon>
              </li>
              <li className="social_platformIcon">
                <IonIcon name="logo-github" size="large"></IonIcon>
              </li>
              <li className="social_platformIcon">
                <IonIcon name="logo-linkedin" size="large"></IonIcon>
              </li>
              <li className="social_platformIcon">
                <IonIcon name="logo-apple" size="large"></IonIcon>
              </li>
            </ul>
          </div>
          <div className="register">
            <p>
              Don't have account? click{" "}
              <a
                className="linkToRegister"
                href="https://accounts.google.com/lifecycle/steps/signup/name?ddm=0&dsh=S-1727602553:1710778902866255&flowEntry=SignUp&flowName=GlifWebSignIn&theme=mn&TL=AEzbmxyZD6PNIHE28NwtN8ai6qCvW74XnsW15aKEiCjKMLjwKKziD0y1BAlZYu1D"
                target="_blank"
              >
                {" "}
                here
              </a>{" "}
              to create account
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
