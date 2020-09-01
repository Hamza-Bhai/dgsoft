import React from "react";
import Style from "./Style.module.css";
import Hvideo from "../../assets/videos/workHeader.mp4";
import { IoIosArrowDown } from "react-icons/io";

export default function index() {
  return (
    <div className={Style.head_div}>
      <video className={Style.vid} autoPlay loop>
        <source src={Hvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={Style.arrow}>
        <a>
          <IoIosArrowDown id={Style.arani} />
        </a>
      </div>
    </div>
  );
}
