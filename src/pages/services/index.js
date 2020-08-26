import React, { useEffect, useRef } from "react";
import Header from "../../components/header";
import ServicesData from "../../components/servicesdata";
import Process from "../../components/ourprocess";
import Work from "../../components/work";
import Menu from "../../components/menu";
import Footer from "../../components/footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function Services() {
  const scrolbar = useRef();
  const progressbar = useRef();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let brt = gsap.timeline({
      scrollTrigger: {
        trigger: scrolbar.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
    brt.to(progressbar.current, {
      css: {
        height: "100%",
      },
    });
  });
  const txt = (
    <p className="para">
      Our full pack of digital marketing services is tuned to work together
      <br /> under an overarching business methodology.
    </p>
  );
  return (
    <div className="App" ref={scrolbar}>
      <div className="progress-container">
        <div
          ref={progressbar}
          className="progress-bar"
          id="myBar"
          style={{ height: "0%" }}
        ></div>
      </div>
      <Header
        txt1="We solve business"
        txt2="problems"
        para1={txt}
        txt3="true"
      />
      <ServicesData />
      <Process />
      <Work />
      <Footer />
      <Menu />
    </div>
  );
}
