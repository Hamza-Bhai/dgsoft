import React, { useRef, useEffect } from "react";
import Style from "./Style.module.css";
import AOS from "aos";

export default function Process() {
  useEffect(() => {
    AOS.init({ once: true });
  });
  return (
    <div className={Style.main_div}>
      <div className={Style.head_div}>
        <h1>
          <p
            data-aos="slide-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="800"
          >
            Our process
          </p>
        </h1>
        <div className={Style.ani}>
          <p
            data-aos="slide-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="800"
          >
            Continuity is key — steady, year-long attention to brands and
            clients enables
          </p>
        </div>
        <div className={Style.ani}>
          <p
            data-aos="slide-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="800"
          >
            us to continually reevaluate what could be done to produce better
            results.
          </p>
        </div>
      </div>
      {/* animation curiosity */}
      <div className={Style.main_curi}>
        <div className={Style.curi}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1234 605"
            className={Style.draw}
          >
            <g fill="none" fill-rule="evenodd">
              <path
                id="pline"
                // className="curiosity-graphic__line"
                stroke="#161617"
                stroke-width="5"
                d="M84 301.805c.497-67.78 42.608-204.335 202.343-215.339 82.942-7.007 192.973 64.94 330.093 215.839 135.61 152.975 245.76 224.956 330.45 215.943C1073.92 504.728 1150 414.02 1150 302.305c0-111.717-85.443-215.839-203.114-215.839C801.614 81.09 651.168 266.971 615.936 302.5c-44.072 38.068-176.545 215.748-329.593 215.748C138.469 504.728 83.675 391.33 84 301.805z"
                style={{
                  transition: "stroke-dashoffset 2s linear 0s",
                  strokeDasharray: " 2934.71, 2934.71",
                  strokeDashoffset: 0,
                }}
              ></path>
            </g>
          </svg>
          {/* <h3 className="curiosity-graphic__title is-active">Curiosity</h3>
            <div className="curiosity-graphic__circle c-1 is-active">
              <span className="is-visible">01</span>
              <span className="is-visible">Business goals</span>
            </div>
            <div className="curiosity-graphic__circle c-2 is-active">
              <span className="is-visible">02</span>
              <span className="is-visible">Research</span>
            </div>
            <div className="curiosity-graphic__circle c-3 is-active">
              <span className="is-visible">03</span>
              <span className="is-visible">Strategy</span>
            </div>
            <div className="curiosity-graphic__circle is-active">
              <span className="is-visible">04</span>
              <span className="is-visible">Implementation</span>
            </div>
            <div className="curiosity-graphic__circle is-active">
              <span className="is-visible">05</span>
              <span className="is-visible">Analytics</span>
            </div>
            <div className="curiosity-graphic__circle is-active">
              <span className="is-visible">06</span>
              <span className="is-visible">Optimization</span>
            </div> */}
          {/* <div
              className="ball is-active"
              style={{
                filter: "blur(1.8px)",
                transform:
                  "translate(-50%, -50%) translate3d(912.437px, 517.64px, 0px)",
              }}
            ></div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
