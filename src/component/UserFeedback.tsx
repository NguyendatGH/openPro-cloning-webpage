import avatarOne from "../assets/img/testimonial-01.jpg";
import avatarTwo from "../assets/img/testimonial-02.jpg";
import avatarThree from "../assets/img/testimonial-03.jpg";

export const UserFeedback = () => {
  return (
    <>
      <div className="feedback__cards">
        <div className="feedback__heading">
          <h1>Don't take our word for it</h1>
          <p>
            Vitae aliquet nec ullamcorper sit amet risus nullam eget felis
            semper quis lectus
            <br /> nulla at volutpat diam ut venenatis tellus—in ornare.
          </p>
        </div>
        <div className="feedback__floatingCardList">
          <div className="card">
            <div className="card__heading">
              <div className="avatar">
                <img src={avatarOne} alt="" />
              </div>
              <svg
                className="decorationItem"
                viewBox="0 0 24 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z"
                  fill="rgb(93 93 255)"
                ></path>
              </svg>
            </div>
            <p>
              — Open PRO lets me quickly get the insights I care about so that I
              can focus on my productive work. I've had Open PRO for about 24
              hours now and I honestly don't know how I functioned without it
              before.
            </p>
            <div className="card__divider"></div>
            <div className="card__moreInfor">
              <span className="author">Anastasia Dan</span>
              <span className="space">-</span>
              <span className="infor__brand">
                <a href="https://open.cruip.com/#0">UX Board</a>
              </span>
            </div>
          </div>
          <div className="card">
            <div className="card__heading">
              <div className="avatar">
                <img src={avatarTwo} alt="" />
              </div>
              <svg
                className="decorationItem"
                viewBox="0 0 24 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z"
                  fill="rgb(93 93 255)"
                ></path>
              </svg>
            </div>
            <p>
              — Open PRO lets me quickly get the insights I care about so that I
              can focus on my productive work. I've had Open PRO for about 24
              hours now and I honestly don't know how I functioned without it
              before.
            </p>
            <div className="card__divider"></div>
            <div className="card__moreInfor">
              <span className="author">Anastasia Dan</span>
              <span className="space">-</span>
              <span className="infor__brand">
                <a href="https://open.cruip.com/#0">UX Board</a>
              </span>
            </div>
          </div>
          <div className="card">
            <div className="card__heading">
              <div className="avatar">
                <img src={avatarThree} alt="" />
              </div>
              <svg
                className="decorationItem"
                viewBox="0 0 24 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z"
                  fill="rgb(93 93 255)"
                ></path>
              </svg>
            </div>
            <p>
              — Open PRO lets me quickly get the insights I care about so that I
              can focus on my productive work. I've had Open PRO for about 24
              hours now and I honestly don't know how I functioned without it
              before.
            </p>
            <div className="card__divider"></div>
            <div className="card__moreInfor">
              <span className="author">Anastasia Dan</span>
              <span className="space">-</span>
              <span className="infor__brand">
                <a href="https://open.cruip.com/#0">UX Board</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
