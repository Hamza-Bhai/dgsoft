import React, { useEffect, useRef } from "react";
import Header from "../../components/header";
import Services from "../../components/services";
import Slider from "../../components/slider";
import Award from "../../components/award";
import Employer from "../../components/employer/index";
import Offices from "../../components/offices/index";
import About from "../../components/aboute/index";
import Footer from "../../components/footer/index";
import Menu from "../../components/menu/index";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Home() {
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
      <Header txt1="We are an always curious, strategic-creative digital agency." />
      <Services />
      <Slider />
      <Award />
      <Employer />
      <Offices />
      <About />
      <Footer />
      <Menu />
    </div>
  );
}

export default Home;
