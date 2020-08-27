import React from "react";
import Style from "./Style.module.css";
import Stimg1 from "../../assets/images/our-story-image-1.jpg";
import Stimg2 from "../../assets/images/our-story-image-2.jpg";

export default function Story() {
  return (
    <div className={Style.main_div}>
      {/* first section */}
      <div className={Style.fsec}>
        <div className={Style.sdiv}>
          <div className={Style.sec1}>
            <h3>
              <div>Our story</div>
            </h3>
          </div>
          <div className={Style.txt}>
            <p className={Style.txt1}>
              Our name is inspired by the Gordian knot and reflects our efforts
              in
            </p>
            <p className={Style.txt2}>resolving business problems.</p>
          </div>
          <div className={Style.img_div}>
            <img src={Stimg1} />
          </div>
        </div>
      </div>
      {/* 2 section */}
      <div className={Style.sdiv}>
        <div className={Style.ssec}>
          <div>
            <h3 className={Style.head2}>
              <div>We are seriously curious about our </div>
              <div>work, and never, ever back away </div>
              <div>from a challenge. </div>
            </h3>
          </div>
          <div className={Style.img_div1}>
            <img src={Stimg2} />
          </div>
        </div>
      </div>
      {/* 3 section */}
      <div className={Style.sdiv}>
        <div className={Style.tsec}>
          <h3>
            <div>To us, it’s not just about having a good idea; it’s </div>
            <div>about having the right one, one that works and </div>
            <div>creates value for our partners and us.</div>
          </h3>
        </div>
      </div>
    </div>
  );
}
