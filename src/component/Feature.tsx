import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export const Feature = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="feature" data-aos="fade-down" data-aos-duration="1000">
        <div className="featureQoutes">
          {" "}
          <h2>The majority our customers do not understand their workflows.</h2>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt <br />
            mollit anim id est laborum.
          </p>
        </div>
        <div
          className="featureControl"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <ul className="featureList">
            <li
              className="featureItem"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect fill=" rgb(93 93 255)" width="64" height="64" rx="32" />
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
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </li>
            <li
              className="featureItem"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
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
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </li>
            <li
              className="featureItem"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
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
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </li>
          </ul>
          <ul className="featureList">
            <li
              className="featureItem"
              data-aos="fade-down"
              data-aos-duration="1400"
            >
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
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </li>
            <li
              className="featureItem"
              data-aos="fade-down"
              data-aos-duration="1400"
            >
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
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </li>
            <li
              className="featureItem"
              data-aos="fade-down"
              data-aos-duration="1400"
            >
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
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </li>
          </ul>
        </div>
        <div
          className="divider"
          data-aos="zoom-in"
          data-aos-duration="1600"
        ></div>
      </div>
    </>
  );
};
