import React, { useRef } from "react";
import Style from "./Style.module.css";
import videos1 from "../../assets/videos/video1.mp4";
import videos2 from "../../assets/videos/video2.mp4";
import videos3 from "../../assets/videos/video3.mp4";
import videos4 from "../../assets/videos/video4.mp4";

export default function Services() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const change1 = () => {
    ref1.current.style.display = "none";
    ref2.current.style.display = "block";
    ref3.current.style.display = "none";
    ref4.current.style.display = "none";
    ref5.current.style.display = "none";
  };
  const change2 = () => {
    ref1.current.style.display = "none";
    ref2.current.style.display = "none";
    ref3.current.style.display = "block";
    ref4.current.style.display = "none";
    ref5.current.style.display = "none";
  };
  const change3 = () => {
    ref1.current.style.display = "none";
    ref2.current.style.display = "none";
    ref3.current.style.display = "none";
    ref4.current.style.display = "block";
    ref5.current.style.display = "none";
  };
  const change4 = () => {
    ref1.current.style.display = "none";
    ref2.current.style.display = "none";
    ref3.current.style.display = "none";
    ref4.current.style.display = "none";
    ref5.current.style.display = "block";
  };
  return (
    <div className={Style.main_div1}>
      <video
        ref={ref1}
        autoPlay
        muted
        loop
        id={Style.myVideo}
        style={{ display: "block" }}
        className={Style.first_video}
      >
        <source src={videos1} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <video
        ref={ref2}
        autoPlay
        muted
        loop
        id={Style.myVideo}
        style={{ display: "none" }}
      >
        <source src={videos2} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <video
        ref={ref3}
        autoPlay
        muted
        loop
        id={Style.myVideo}
        style={{ display: "none" }}
      >
        <source src={videos3} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <video
        ref={ref4}
        autoPlay
        muted
        loop
        id={Style.myVideo}
        style={{ display: "none" }}
      >
        <source src={videos4} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <video
        ref={ref5}
        autoPlay
        muted
        loop
        id={Style.myVideo}
        style={{ display: "none" }}
      >
        <source src={videos1} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className={Style.mn}>
        <div className={Style.txt}>SERVICES</div>
        <div className={Style.main_container}>
          <div className={Style.container}>
            <div className={Style.lists}>
              <ol>
                <li
                  className={Style.li1}
                  onMouseOver={change1}
                  onMouseOut={change4}
                >
                  <span className={Style.txt1}>Performence Marketing</span>
                  <svg
                    className={Style.icon}
                    width="50"
                    height="33"
                    viewBox="0 0 120 120"
                  >
                    <circle
                      cx="80"
                      cy="60"
                      r="54"
                      fill="none"
                      stroke="#ABADAE"
                      strokeWidth="4"
                      className={Style.circle1}
                    ></circle>
                    <circle
                      className="progress-video__value"
                      cx="80"
                      cy="60"
                      r="54"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="4"
                      className={Style.circle2}
                    ></circle>
                  </svg>
                </li>
                <li onMouseOver={change2} onMouseOut={change4}>
                  <span className={Style.txt1}>Digital Markiting</span>
                  <svg
                    className={Style.icon}
                    width="50"
                    height="33"
                    viewBox="0 0 120 120"
                  >
                    <circle
                      cx="80"
                      cy="60"
                      r="54"
                      fill="none"
                      stroke="#ABADAE"
                      strokeWidth="4"
                      className={Style.circle1}
                    ></circle>
                    <circle
                      className="progress-video__value"
                      cx="80"
                      cy="60"
                      r="54"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="4"
                      className={Style.circle2}
                    ></circle>
                  </svg>
                </li>
                <li onMouseOver={change3} onMouseOut={change4}>
                  <span className={Style.txt1}>Development</span>
                  <svg
                    className={Style.icon}
                    width="50"
                    height="33"
                    viewBox="0 0 120 120"
                  >
                    <circle
                      cx="80"
                      cy="60"
                      r="54"
                      fill="none"
                      stroke="#ABADAE"
                      strokeWidth="4"
                      className={Style.circle1}
                    ></circle>
                    <circle
                      className="progress-video__value"
                      cx="80"
                      cy="60"
                      r="54"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="4"
                      className={Style.circle2}
                    ></circle>
                  </svg>
                </li>
              </ol>
            </div>
            <div className={Style.cir_bton}>Tap Circle</div>
            <div className={Style.bton}>
              <a href="" className={Style.anch}>
                <div className={Style.main_border}>
                  <div className={Style.bordr}></div>
                  <div className={Style.bordrback}></div>
                </div>
                <span>Explore our Services</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
