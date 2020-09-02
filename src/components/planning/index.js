import React from "react";
import Style from "./Style.module.css";
import Planningimg from "../../assets/images/planning_tool.jpg";
import Planningimg1 from "../../assets/images/planning_tool1.jpg";
export default function Planning(props) {
  return (
    <div className={Style.main_div} style={{ backgroundColor: props.st }}>
      <div className={Style.sdiv}>
        <div className={Style.txt_div}>
          <div className={Style.head}>
            <h2>{props.head1}</h2>
            <h2> {props.head2} </h2>
          </div>
          <div className={Style.para}>
            <p>{props.para1}</p>
            <p> {props.para2} </p>
          </div>
        </div>
        <div className={Style.img_div}>
          <img src={props.plimg1 && Planningimg} />
          <img src={props.plimg2 && Planningimg1} />
        </div>
      </div>
    </div>
  );
}
