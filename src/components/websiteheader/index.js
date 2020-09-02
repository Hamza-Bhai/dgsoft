import React from "react";
import Style from "./Style.module.css";
export default function index() {
  return (
    <div>
      <div className={Style.img}></div>
      <div className={Style.txt}>
        <p>Website development</p>
        <h1>Sogelease</h1>
      </div>
    </div>
  );
}
