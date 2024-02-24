import imgOne from "./assets/img/features-03-image-01.png";
import "./App.css";
import video from "./video/video.mp4";
function App() {
  return (
    <>
      <div className="mainPage">
        <div className="container">
          <div className="header">
            <div className="logo">
              <svg
                className="logoBrand"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="rgb(93,93,255)"
                  d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z "
                ></path>
              </svg>
            </div>
            <div className="userInterface">
              <div className="signIn">Sign In</div>
              <div className="signUp">Sign Up</div>
            </div>
          </div>
          <div className="banner">
            <h1>Landing template for startups</h1>
            <p>
              Our landing page template works on all devices, so you only have
              to set it up once,
              <br /> and get beautiful results forever.
            </p>
            <div className="buttonGroup">
              <div className="Btn startLearn">Start free trial</div>
              <div className="Btn LearnMore">Learn more</div>
            </div>
            <div className="video">
              {" "}
              <video src={video} className="video_item"></video>
            </div>
          </div>
          <div className="feature">
            <div className="featureQoutes">
              {" "}
              <h2>
                The majority our customers do not understand their workflows.
              </h2>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt <br />
                mollit anim id est laborum.
              </p>
            </div>
            <div className="featureControl">
              <ul className="featureList">
                <li className="featureItem">
                  <div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 64 64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        fill=" rgb(93 93 255)"
                        width="64"
                        height="64"
                        rx="32"
                      />
                      <path
                        stroke="rgb(244 244 255)"
                        d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924"
                        strokeLinecap="square"
                        strokeWidth="2"
                        fill="none"
                        fill-rule="evenodd"
                      />
                      <path
                        stroke="#D1BCFD"
                        d="M43 42h-9M43 37h-9"
                        strokeLinecap="square"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <h3>Instant Features</h3>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat.
                  </p>
                </li>
                <li className="featureItem">
                  <div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 64 64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        fill=" rgb(93 93 255)"
                        cx="32"
                        cy="32"
                        r="32"
                      ></circle>
                      <path
                        stroke="rgb(244 244 255)"
                        stroke-width="2"
                        stroke-linecap="square"
                        d="M21 23h22v18H21z"
                        fill="none"
                        fill-rule="evenodd"
                      ></path>
                      <path
                        stroke="#D1BCFD"
                        d="M26 28h12M26 32h12M26 36h5"
                        stroke-width="2"
                        stroke-linecap="square"
                      ></path>
                    </svg>
                  </div>
                  <h3>Instant Features</h3>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat.
                  </p>
                </li>
                <li className="featureItem">
                  <div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 64 64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        fill=" rgb(93 93 255)"
                        width="64"
                        height="64"
                        rx="32"
                      ></rect>
                      <g
                        transform="translate(21 21)"
                        stroke-linecap="square"
                        stroke-width="2"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <ellipse
                          stroke="#D1BCFD"
                          cx="11"
                          cy="11"
                          rx="5.5"
                          ry="11"
                        ></ellipse>
                        <path stroke="#C4B5FD" d="M11 0v22M0 11h22"></path>
                        <circle
                          stroke="rgb(244 244 255)"
                          cx="11"
                          cy="11"
                          r="11"
                        ></circle>
                      </g>
                    </svg>
                  </div>
                  <h3>Instant Features</h3>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat.
                  </p>
                </li>
              </ul>
              <ul className="featureList">
                <li className="featureItem">
                  <div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 64 64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        fill=" rgb(93 93 255)"
                        width="64"
                        height="64"
                        rx="32"
                      ></rect>
                      <g
                        transform="translate(22 21)"
                        stroke-linecap="square"
                        stroke-width="2"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <path
                          stroke="rgb(244 244 255)"
                          d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5"
                        ></path>
                        <circle stroke="#D1BCFD" cx="13" cy="9" r="3"></circle>
                      </g>
                    </svg>
                  </div>
                  <h3>Instant Features</h3>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat.
                  </p>
                </li>
                <li className="featureItem">
                  <div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 64 64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        fill=" rgb(93 93 255)"
                        width="64"
                        height="64"
                        rx="32"
                      ></rect>
                      <g
                        stroke-linecap="square"
                        stroke-width="2"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <path
                          stroke="rgb(244 244 255)"
                          d="M29 42h10.229a2 2 0 001.912-1.412l2.769-9A2 2 0 0042 29h-7v-4c0-2.373-1.251-3.494-2.764-3.86a1.006 1.006 0 00-1.236.979V26l-5 6"
                        ></path>
                        <path stroke="#D1BCFD" d="M22 30h4v12h-4z"></path>
                      </g>
                    </svg>
                  </div>
                  <h3>Instant Features</h3>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat.
                  </p>
                </li>
                <li className="featureItem">
                  <div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 64 64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        fill=" rgb(93 93 255)"
                        width="64"
                        height="64"
                        rx="32"
                      ></rect>
                      <g
                        transform="translate(21 22)"
                        stroke-linecap="square"
                        stroke-width="2"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <path
                          stroke="rgb(244 244 255)"
                          d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415"
                        ></path>
                        <circle stroke="#D1BCFD" cx="17" cy="5" r="3"></circle>
                        <path
                          stroke="rgb(244 244 255)"
                          d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <h3>Instant Features</h3>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat.
                  </p>
                </li>
              </ul>
            </div>
            <div className="divider"></div>
          </div>
          <div className="stategyMain">
            <div className="stategyHeading">
              <div className="popupFilled">Reach goals that matter</div>
              <h1>One product, unlimited solutions</h1>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt
                <br /> mollit laborum — semper quis lectus nulla.
              </p>
            </div>
            <div className="stategy_solution">
              <div className="solution one">
                <ul className="solution__infor">
                  <li className="solution_infor styles">
                    More speed. Less spend
                  </li>
                  <li>
                    <h1>Keep projects on schedule</h1>
                  </li>
                  <li>
                    <p className="solution__infor des">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      <br /> elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua.
                    </p>
                  </li>
                  <li className="idea">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#34D399"
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      ></path>
                    </svg>
                    <span className="idea__item">
                      Duis aute irure dolor in reprehenderit
                    </span>
                  </li>
                  <li className="idea">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#34D399"
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      ></path>
                    </svg>
                    <span className="idea__item">Excepteur sint occaecat</span>
                  </li>{" "}
                  <li className="idea">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#34D399"
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      ></path>
                    </svg>
                    <span className="idea__item">
                      Amet consectetur adipiscing elit
                    </span>
                  </li>
                </ul>
                <div className="solutionImg one">
                  <img src={imgOne} alt="" className="img__itemOne" />
                </div>
                <div className="solutionImg one">
                  <img src={imgOne} alt="" className="img__itemOne" />
                </div>
                <ul className="solution__infor">
                  <li className="solution_infor styles">
                    More speed. Less spend
                  </li>
                  <li>
                    <h1>Keep projects on schedule</h1>
                  </li>
                  <li>
                    <p className="solution__infor des">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      <br /> elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua.
                    </p>
                  </li>
                  <li className="idea">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#34D399"
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      ></path>
                    </svg>
                    <span className="idea__item">
                      Duis aute irure dolor in reprehenderit
                    </span>
                  </li>
                  <li className="idea">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#34D399"
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      ></path>
                    </svg>
                    <span className="idea__item">Excepteur sint occaecat</span>
                  </li>{" "}
                  <li className="idea">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#34D399"
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      ></path>
                    </svg>
                    <span className="idea__item">
                      Amet consectetur adipiscing elit
                    </span>
                  </li>
                </ul>

                <ul className="solution__infor">
                  <li className="solution_infor styles">
                    More speed. Less spend
                  </li>
                  <li>
                    <h1>Keep projects on schedule</h1>
                  </li>
                  <li>
                    <p className="solution__infor des">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      <br /> elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua.
                    </p>
                  </li>
                  <li className="idea">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#34D399"
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      ></path>
                    </svg>
                    <span className="idea__item">
                      Duis aute irure dolor in reprehenderit
                    </span>
                  </li>
                  <li className="idea">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#34D399"
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      ></path>
                    </svg>
                    <span className="idea__item">Excepteur sint occaecat</span>
                  </li>{" "}
                  <li className="idea">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#34D399"
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      ></path>
                    </svg>
                    <span className="idea__item">
                      Amet consectetur adipiscing elit
                    </span>
                  </li>
                </ul>
                <div className="solutionImg one">
                  <img src={imgOne} alt="" className="img__itemOne" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
