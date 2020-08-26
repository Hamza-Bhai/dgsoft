import React from "react";
import Style from "./Style.module.css";
export default function Story() {
  return (
    <div className={Style.main_div}>
      <div className={Style.sdiv}>
        <div className={Style.sec1}>
          <h3>
            <div>Our story</div>
          </h3>
        </div>
        <div className={Style.txt}>
          <p className={Style.txt1}>
            Our name is inspired by the Gordian knot and reflects our efforts in
          </p>
          <p className={Style.txt2}>resolving business problems.</p>
        </div>
      </div>
    </div>
  );
}
