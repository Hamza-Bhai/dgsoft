import React, { useRef, useEffect } from "react";
import { gsap, TweenLite } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCountUp } from "react-countup";
export default function Test() {
  const { countUp, start } = useCountUp({
    start: 0,
    end: 64,
    duration: 1,
    startOnMount: false,
  });
  gsap.registerPlugin(ScrollTrigger);

  const contRef = useRef();
  const main_div = useRef();
  useEffect(() => {
    //
    let timLine = gsap.timeline({
      scrollTrigger: {
        trigger: main_div.current,
        start: "top center",
        end: "100% top",
        scrub: true,
        markers: true,
      },
    });

    // timLine.to(contRef.current, {});
  });
  return (
    <div
      ref={main_div}
      style={{ height: "100vh", backgroundColor: "red", textAlign: "center" }}
    >
      Test
      <div ref={contRef} id="numbers">
        {countUp}
      </div>
    </div>
  );
}
