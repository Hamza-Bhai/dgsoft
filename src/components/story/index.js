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
        <div className={Style.sec2}></div>
        <div className={Style.sec3}></div>
      </div>
    </div>
  );
}
