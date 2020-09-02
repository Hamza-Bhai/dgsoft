import React, { useRef, useEffect } from "react";
import Style from "./Style.module.css";
import Slide1 from "../../assets/images/slide1.jpg";
import Slide2 from "../../assets/images/slide2.jpg";
import Slide3 from "../../assets/images/slide3.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";
// import { useCountUp } from "react-countup";
export default function Offices() {
  gsap.registerPlugin(ScrollTrigger);
  // const { countUp } = useCountUp({
  //   start: 0,
  //   end: 3,
  //   duration: 5,
  // });
  const main_div1 = useRef();
  const img_slide1 = useRef();
  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width:800px)": function () {
        // slide1
        let timLine1 = gsap.timeline({
          scrollTrigger: {
            trigger: main_div1.current,
            start: "top top",
            end: "100% top",
            scrub: true,
            pin: true,
          },
        });
        timLine1.to(img_slide1.current, {
          css: {
            transform: "translateX(-865px)",
          },
        });
      },
    });
  });
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className={Style.main_div} ref={main_div1}>
      <div className={Style.top_div}>
        <div className={Style.sub_div}>
          <div className={Style.number}>3</div>
          <div className={Style.text_div}>
            <div className={Style.text1}>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                Offices
              </p>
            </div>
            <div className={Style.text2}>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                Up close and personal with brands and customers across the
                region.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={Style.img_slide_main}>
        <div data-aos="fade-left">
          <div className={Style.sub_img_div} ref={img_slide1}>
            <div>
              <div className={Style.img_div1}>
                <img src={Slide1} alt="img1" className={Style.img1} />
              </div>
              <div className={Style.txt_div}>
                <span className={Style.txt1}>01</span>
                <span className={Style.txt2}>Zagreb Office</span>
              </div>
            </div>
            <div>
              <div className={Style.img_div1}>
                <img src={Slide2} alt="img1" className={Style.img1} />
              </div>
              <div className={Style.txt_div}>
                <span className={Style.txt1}>02</span>
                <span className={Style.txt2}>Mostar Office</span>
              </div>
            </div>
            <div>
              <div className={Style.img_div1}>
                <img src={Slide3} alt="img1" className={Style.img1} />
              </div>
              <div className={Style.txt_div}>
                <span className={Style.txt1}>03</span>
                <span className={Style.txt2}>Belgrade Office</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
