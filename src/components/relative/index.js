import React from "react";
import Style from "./Style.module.css";
import Mediatoolkit from "../../assets/images/Mediatoolkit.svg";
import Bornfight from "../../assets/images/Bornfight.svg";
import { BsArrowRightShort } from "react-icons/bs";

export default function Relative() {
  return (
    <div className={Style.main_div}>
      <div className={Style.containerr}>
        <div className={Style.left}>
          <p>IT'S ALL RELATIVE</p>
        </div>
        <div className={Style.right}>
          <h3>
            <div>
              Meet our sister <br /> companies.
            </div>
          </h3>
          <div className={Style.head_txt}>
            <div className={Style.sec1}>
              <img src={Bornfight} className={Style.secimg1} />
              <p>
                A design and development company that builds high-quality custom
                software, mobile apps and websites.
              </p>
              <div className="bton">
                <a href="" className="anch">
                  <div className="main_border">
                    <div className="bordr">
                      <BsArrowRightShort size="20px" />
                    </div>
                    <div className="bordrback">
                      <BsArrowRightShort
                        size="17px"
                        color="white"
                        style={{ marginTop: "4px" }}
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className={Style.sec2}>
              <img src={Mediatoolkit} className={Style.secimg2} />
              <p>
                A media monitoring & analytics tool that notifies you in real
                time when someone mentions your brand, company, or competitors.
              </p>
              <div className="bton">
                <a href="" className="anch">
                  <div className="main_border">
                    <div className="bordr">
                      <BsArrowRightShort size="20px" />
                    </div>
                    <div className="bordrback">
                      <BsArrowRightShort
                        size="17px"
                        color="white"
                        style={{ marginTop: "4px" }}
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
