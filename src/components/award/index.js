import React, { useState, useRef, useEffect } from "react";
import VisibilitySensor from "react-visibility-sensor";
import Style from "./Style.module.css";
import imgvalueswide from "../../assets/images/valueswide.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCountUp } from "react-countup";
import AOS from "aos";

export default function Award() {
  const [num, setnum] = useState(false);
  gsap.registerPlugin(ScrollTrigger);
  const { countUp, start } = useCountUp({
    start: 0,
    end: 64,
    duration: 2,
    startOnMount: false,
  });
  // function startcount(isVisible) {
  //   if (isVisible) {
  //     start
  //   }
  // }
  const main_div = useRef();
  const img_slide = useRef();
  const nub = useRef();
  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width:800px)": function () {
        // slide1
        let timLine = gsap.timeline({
          scrollTrigger: {
            trigger: main_div.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: true,
            // markers: true,
          },
        });
        timLine.to(img_slide.current, {
          css: {
            transform: "translateX(-300px)",
          },
        });
      },
    });
    // let numtimline = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: nub.current,
    //     start: "top 95%",
    //     end: "bottom top",
    //     // markers: true,
    //     onToggle: () => {
    //       setnum(true);
    //       console.log(num);
    //     },
    //   },
    // });
  });
  useEffect(() => {
    AOS.init({ once: true });
  });

  return (
    <div ref={main_div}>
      <div className={Style.main_div}>
        <p className={Style.para}>COMPANY HIGHLIGHTS </p>
        <section className={Style.sect1}>
          <div className={Style.left_div}>
            <VisibilitySensor onChange={start}>
              <div ref={nub} className={Style.div1}>
                {countUp}
              </div>
            </VisibilitySensor>

            <div className={Style.div2}>
              <p
                data-aos="slide-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="1000"
              >
                Industry awards
              </p>
            </div>
            <div className={Style.div3}>
              <p
                data-aos="slide-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="900"
              >
                We're thankful to be recognized by our peers.
              </p>
            </div>
          </div>
          <div className={Style.right_div}>
            <img src={imgvalueswide} alt="frame-img" ref={img_slide} />
          </div>
        </section>
      </div>
    </div>
  );
}
