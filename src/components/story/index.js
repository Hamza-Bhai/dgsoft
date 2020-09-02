import React, { useEffect } from "react";
import Style from "./Style.module.css";
import Stimg1 from "../../assets/images/our-story-image-1.jpg";
import Stimg2 from "../../assets/images/our-story-image-2.jpg";
import AOS from "aos";

export default function Story() {
  useEffect(() => {
    AOS.init({ once: true });
  });
  return (
    <div className={Style.main_div}>
      {/* first section */}
      <div className={Style.fsec}>
        <div className={Style.sdiv}>
          <div className={Style.sec1}>
            <h3>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="500"
              >
                Our story
              </div>
            </h3>
          </div>
          <div className={Style.txt}>
            <p>
              <div
                className={Style.txt1}
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="500"
              >
                Our name is inspired by the Gordian knot and reflects our
                efforts in
              </div>
            </p>
            <p className={Style.txt2}>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="500"
              >
                resolving business problems.
              </div>
            </p>
          </div>
          <div className={Style.img_div}>
            <img src={Stimg1} data-aos="flip-left" data-aos-duration="500" />
          </div>
        </div>
      </div>
      {/* 2 section */}
      <div className={Style.sdiv}>
        <div className={Style.ssec}>
          <div>
            <h3 className={Style.head2}>
              <div className={Style.txt_div}>
                <div
                  data-aos="fade-up"
                  // data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="500"
                >
                  We are seriously curious
                </div>
              </div>
              <div className={Style.txt_div1}>
                <div
                  data-aos="fade-up"
                  // data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="500"
                >
                  about our work, and never,
                </div>
              </div>
              <div className={Style.txt_div2}>
                <div
                  data-aos="fade-up"
                  // data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="500"
                >
                  ever back away from a challenge.
                </div>
              </div>
            </h3>
          </div>
          <div className={Style.img_div1}>
            <img src={Stimg2} data-aos="flip-left" data-aos-duration="500" />
          </div>
        </div>
      </div>
      {/* 3 section */}
      <div className={Style.sdiv}>
        <div className={Style.tsec}>
          <h3>
            <div className={Style.txt_div3}>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="500"
              >
                To us, it’s not just about having a good idea; it’s
              </div>
            </div>
            <div className={Style.txt_div4}>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="500"
              >
                about having the right one, one that works and
              </div>
            </div>
            <div className={Style.txt_div5}>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="500"
              >
                creates value for our partners and us.
              </div>
            </div>
          </h3>
        </div>
      </div>
    </div>
  );
}
