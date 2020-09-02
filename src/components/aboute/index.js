import React, { useEffect } from "react";
import Style from "./Style.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsArrowRight } from "react-icons/bs";

export default function About(props) {
  useEffect(() => {
    AOS.init({ once: true });
  });
  return (
    <div className={Style.main_div}>
      <a href="#" className={Style.anc}>
        <div className={Style.about}>
          <p data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            {props.head}
          </p>
        </div>
        <div className={Style.text}>
          <p data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            {props.para}
          </p>
        </div>
        <div className={Style.circle}>
          <div
            className={Style.main_border}
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <div className={Style.bordr}>
              <BsArrowRight size="14px" />
            </div>
            <div className={Style.bordrback}>
              <BsArrowRight size="10px" className={Style.icn} />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
