import React, { useEffect } from "react";
import Style from "./Style.module.css";
import AOS from "aos";
export default function About() {
  useEffect(() => {
    AOS.init({ once: true });
  });
  return (
    <div className={Style.main_div}>
      <a href="#" className={Style.anc}>
        <div className={Style.about}>
          <p
            data-aos="slide-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="1000"
          >
            About us
          </p>
        </div>
        <div className={Style.text}>
          <p
            data-aos="slide-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="1000"
          >
            Get to know us better.
          </p>
        </div>
        <div className={Style.circle}>
          <div className={Style.main_border}>
            <div className={Style.bordr}></div>
            <div className={Style.bordrback}></div>
          </div>
        </div>
      </a>
    </div>
  );
}
