import video from "./video.mp4";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {" "}
      <div className="banner" data-aos="fade-up" data-aos-duration="1000">
        <h1 data-aos="fade-up" data-aos-duration="1300">
          Landing template for startups
        </h1>
        <p data-aos="fade-up" data-aos-duration="1500">
          Our landing page template works on all devices, so you only have to
          set it up once,
          <br /> and get beautiful results forever.
        </p>
        <div
          className="buttonGroup"
          data-aos="fade-up"
          data-aos-duration="1400"
        >
          <div
            className="Btn startLearn"
            data-aos="zoom-in"
            data-aos-duration="1600"
          >
            Start free trial
          </div>
          <div
            className="Btn LearnMore"
            data-aos="fade-up"
            data-aos-duration="1900"
          >
            Learn more
          </div>
        </div>
        <div className="video" data-aos="fade-up" data-aos-duration="2000">
          {" "}
          <video src={video} className="video_item"></video>
        </div>
      </div>
    </>
  );
};
