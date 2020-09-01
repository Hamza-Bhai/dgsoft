import React, { useEffect } from "react";
import Style from "./Style.module.css";
import Cardimg1 from "../../assets/images/card1.jpg";
import Cardimg2 from "../../assets/images/card2.jpg";
import Cardimg3 from "../../assets/images/card3.jpg";
import Cardimg4 from "../../assets/images/card4.jpg";
import Cardimg5 from "../../assets/images/card5.jpg";
import Cardimg6 from "../../assets/images/card6.jpg";
import Cardimg7 from "../../assets/images/card7.jpg";
import Cardimg8 from "../../assets/images/card8.jpg";
// import AOS from "aos";

export default function Recognitions() {
  useEffect(() => {
    // AOS.init();
  });

  return (
    <div className={Style.main_div}>
      <div className={Style.sec1}>
        <h2 className={Style.head}>
          <div className={Style.txt_div}>
            <div
              data-aos="slide-up"
              // data-aos-anchor-placement="bottom-bottom"
              data-aos-once="false"
              data-aos-duration="1000"
            >
              Awards & recognitions
            </div>
          </div>
        </h2>
        <div className={Style.para_div}>
          <p className={Style.txt_div}>
            Analyses have shown that these are 80% cellulose and
          </p>
          <p className={Style.txt_div}>
            20% sweat and tears. Also, our CEO wants you to know we
          </p>
          <p className={Style.txt_div}>have more awards than pictured here.</p>
        </div>
      </div>
      <ul className={Style.sec2}>
        <li>
          <img src={Cardimg1} />
        </li>
        <li>
          <img src={Cardimg2} />
        </li>
        <li>
          <img src={Cardimg3} />
        </li>
        <li>
          <img src={Cardimg4} />
        </li>
        <li>
          <img src={Cardimg5} />
        </li>
        <li>
          <img src={Cardimg6} />
        </li>
        <li>
          <img src={Cardimg7} />
        </li>
        <li>
          <img src={Cardimg8} />
        </li>
      </ul>
    </div>
  );
}
