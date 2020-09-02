import React, { useState } from "react";
import Style from "./Style.module.css";
import ReactPlayer from "react-player/lazy";
import Url from "../../assets/videos/work_video1.mp4";
import Cover from "../../assets/images/cover_dg_video.jpg";

export default function VideoSection() {
  const [vplay, setVplay] = useState(false);
  return (
    <>
      <div className={Style.main_div}>
        <div className={Style.sdiv}>
          <div
            onClick={() => {
              setVplay(!vplay);
            }}
          >
            <ReactPlayer width="100%" height="100%" url={Url} playing={vplay} />
          </div>
        </div>
      </div>
      <div className={Style.txtsec}>
        <div>
          <p>
            With four target groups, it was important to speak to each one
            directly, helping them find their answers and specific
            opportunities.
          </p>
        </div>
      </div>
    </>
  );
}
