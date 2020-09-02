import React from "react";
import Style from "./Style.module.css";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
export default function index() {
  return (
    <div className={Style.main_div}>
      <div className={Style.sdiv}>
        <div className={Style.head}>
          <p>
            Client - <strong>Sogelease</strong>
          </p>
        </div>
        <div className={Style.txt_div}>
          <p className={Style.para}>
            Sogelease, the regional leader in leasing services wanted to
            introduce people to the brand and educate them on all the benefits
            they can gain from leasing.
          </p>
          <div className={Style.sec}>
            <h6>SERVICES</h6>
            <ul>
              <li>Design</li>
              <li>Front-end development </li>
              <li>Back-end development </li>
              <li>Analytics </li>
              <li>Copywriting </li>
            </ul>
          </div>
          <div className={Style.sec1}>
            <Link>
              <span>
                <div className="bton">
                  <a href="" className="anch">
                    <div className="main_border">
                      <div className="bordr">
                        <BsArrowRightShort size="20px" />
                      </div>
                      <div className="bordrback">
                        <BsArrowRightShort
                          size="15px"
                          color="white"
                          style={{ marginTop: "5px" }}
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </span>
              <span className={Style.txt1}>Visit live site</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
