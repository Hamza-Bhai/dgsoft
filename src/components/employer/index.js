import React, { useEffect } from "react";
import Style from "./Style.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import { useCountUp } from "react-countup";
export default function Employer() {
  // const { countUp, start } = useCountUp({
  //   start: 0,
  //   end: 5,
  //   duration: 3,
  //   startOnMount: false,
  // });
  useEffect(() => {
    AOS.init({ once: true });
  });
  return (
    <div className={Style.main_div}>
      <div className={Style.top_div}>
        <div className={Style.sub_div}>
          <div className={Style.number}>{/* {countUp} */}5</div>
          <div className={Style.text_div}>
            <div className={Style.text1}>
              <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                Best employer awards
              </div>
            </div>
            <div className={Style.text2}>
              <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                More than four, fewer than six.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={Style.img_div}>
        <div className={Style.sub_img}>
          <div className={Style.img} data-aos="fade-left"></div>
        </div>
      </div>
    </div>
  );
}
