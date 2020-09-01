import React from "react";
import Style from "./Style.module.css";
import Workheader from "../workheader";
import Worktxtarea from "../worktxtarea";
import VideoSection from "../videosetion";
export default function index() {
  return (
    <div className={Style.main_div}>
      <Workheader />
      <Worktxtarea />
      <VideoSection />
    </div>
  );
}
