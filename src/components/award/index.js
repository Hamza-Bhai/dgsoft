import React, { useState, useRef, useEffect } from "react";
import Style from "./Style.module.css";
import imgvalueswide from "../../assets/images/valueswide.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useCountUp } from "react-countup";

export default function Award() {
  // const [num, setnum] = useState(false);
  gsap.registerPlugin(ScrollTrigger);
  // const { countUp, start } = useCountUp({
  //   start: 0,
  //   end: 64,
  //   duration: 2,
  //   startOnMount: false,
  // });
  const main_div = useRef();
  const img_slide = useRef();
  const txt = useRef();
  const txt1 = useRef();
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
          },
        });
        timLine.to(img_slide.current, {
          css: {
            transform: "translateX(-300px)",
          },
        });
      },
    });
    let awtimline = gsap.timeline({
      scrollTrigger: {
        trigger: txt.current,
        start: "top 95%",
        end: "bottom top",
      },
    });
    awtimline.from(txt.current, {
      css: {
        transform: "translateY(40px)",
      },
    });
    awtimline.to(txt.current, {
      css: {
        transform: "translateY(0px)",
      },
    });
    let peertimline = gsap.timeline({
      scrollTrigger: {
        trigger: txt1.current,
        start: "top 95%",
        end: "bottom top",
      },
    });
    peertimline.from(txt1.current, {
      css: {
        transform: "translateY(40px)",
      },
    });
    peertimline.to(txt1.current, {
      css: {
        transform: "translateY(0px)",
      },
    });
  });
  return (
    <div ref={main_div}>
      <div className={Style.main_div}>
        <p className={Style.para}>COMPANY HIGHLIGHTS </p>
        <section className={Style.sect1}>
          <div className={Style.left_div}>
            {/* <VisibilitySensor onChange={start}> */}
            <div className={Style.div1}>{/* {countUp} */}64</div>
            {/* </VisibilitySensor> */}
            <div className={Style.div2}>
              <p ref={txt}>Industry awards</p>
            </div>
            <div className={Style.div3}>
              <p ref={txt1}>We're thankful to be recognized by our peers.</p>
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
