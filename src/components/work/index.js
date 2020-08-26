import React, { useEffect } from "react";
import Style from "./Style.module.css";
import AOS from "aos";

export default function Work() {
  useEffect(() => {
    AOS.init({ once: true });
  });
  return (
    <div className={Style.main_div}>
      <a href="#" className={Style.anc}>
        <div className={Style.img_div}></div>

        <div className={Style.main_txt}>
          <div className={Style.main_head}>
            <h1
              data-aos="slide-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="800"
            >
              Our Work
            </h1>
          </div>
          <div className={Style.main_para}>
            <p
              data-aos="slide-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="800"
            >
              Browse our latest projects.
            </p>
          </div>
          <div className={Style.main_circle}>
            <div className={Style.circle}>
              <div
                className={Style.main_border}
                data-aos="slide-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="800"
              >
                <div className={Style.bordr}></div>
                <div className={Style.bordrback}></div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
