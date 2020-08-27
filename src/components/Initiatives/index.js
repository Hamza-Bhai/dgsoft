import React from "react";
import Style from "./Style.module.css";
import Inimg1 from "../../assets/images/initiatives-1.jpg";
import Inimg2 from "../../assets/images/initiatives-2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Initiatives() {
  const settings = {
    className: "slider variable-width",
    // dots: true,
    infinite: true,
    slidesToShow: 1.192,
    slidesToScroll: 1,
    // variableWidth: true,
    infinite: false,
  };
  return (
    <div className={Style.main_div}>
      <div className={Style.sec1}>
        <div className={Style.head}>
          <h3>
            <div>Initiatives</div>
          </h3>
          <div className={Style.para}>
            <p>
              Some of us like to exercise their muscles, some their minds and
            </p>
            <p>
              some the right to live their best sloth lives — all find
              like-minded
            </p>
            <p>supporters.</p>
          </div>
        </div>
      </div>
      <div className={Style.sec2}>
        <div>
          <Slider {...settings}>
            <div className={Style.slide_div1}>
              {/* <div> */}
              <p>
                <strong>Startup in 24h. </strong>Born in 2013, this up-all-night
                initiative has the goal of building a brand new product in only
                24 hours.
              </p>
              {/* </div> */}
            </div>
            <div className={Style.slide_div2}>
              {/* <div> */}
              <img src={Inimg1} />
              {/* </div> */}
            </div>
            <div className={Style.slide_div3}>
              {/* <div> */}
              <img src={Inimg2} />
              {/* </div> */}
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
