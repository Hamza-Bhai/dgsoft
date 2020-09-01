import React, { useEffect, useRef } from "react";
import Style from "./Style.module.css";
import img1 from "../../assets/images/aboutslide1.jpg";
import img2 from "../../assets/images/aboutslide2.jpg";
import img3 from "../../assets/images/aboutslide3.jpg";
import img4 from "../../assets/images/aboutslide4.jpg";
import img5 from "../../assets/images/aboutslide5.jpg";
import img6 from "../../assets/images/aboutslide6.jpg";
import img7 from "../../assets/images/aboutslide7.jpg";
import { BsArrowRightShort } from "react-icons/bs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function Menslide() {
  gsap.registerPlugin(ScrollTrigger);
  const abmain_div1 = useRef();
  const abimg_slide1 = useRef();
  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width:800px)": function () {
        // slide1
        let timLine1 = gsap.timeline({
          scrollTrigger: {
            trigger: abmain_div1.current,
            start: "top top",
            end: "100% top",
            scrub: true,
            pin: true,
          },
        });
        timLine1.to(abimg_slide1.current, {
          css: {
            transform: "translateX(-200vw)",
          },
        });
      },
    });
  });
  return (
    <div className={Style.m_div}>
      <div className={Style.txt540}>
        <div className={Style.txt1}>
          <a href="#" className={Style.anc}>
            <div className={Style.icn}>
              <div className={Style.circle}>
                <div className={Style.main_border}>
                  <div className={Style.bordr}></div>
                  <div className={Style.bordrback}></div>
                </div>
              </div>
            </div>
            <p>Meet the team</p>
          </a>
        </div>
      </div>
      <div className={Style.main_div} ref={abmain_div1}>
        <div className={Style.mcontainer}>
          <div className={Style.scontainer} ref={abimg_slide1}>
            <div className={Style.img_div}>
              <img className={Style.ig1} src={img1} />
            </div>
            <div className={Style.img_div}>
              <img className={Style.ig1} src={img2} />
            </div>
            <div className={Style.img_div}>
              <img className={Style.ig1} src={img3} />
            </div>
            <div className={Style.img_div}>
              <img className={Style.ig1} src={img4} />
            </div>
            <div className={Style.img_div}>
              <img className={Style.ig1} src={img5} />
            </div>
            <div className={Style.img_div}>
              <img className={Style.ig1} src={img6} />
            </div>
            <div className={Style.img_div7}>
              <img src={img7} className={Style.ig7} />
              <div className={Style.txt}>
                <a href="#" className={Style.anc}>
                  <div className={Style.icn}>
                    <div className={Style.circle}>
                      <div className={Style.main_border}>
                        <div className={Style.bordr}>
                          <BsArrowRightShort size="20px" />
                        </div>
                        <div className={Style.bordrback}>
                          <BsArrowRightShort
                            size="17px"
                            color="white"
                            style={{ marginTop: "4px", marginLeft: "4px" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>Meet the team</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
