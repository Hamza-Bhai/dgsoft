import React from "react";
import Style from "./Style.module.css";
import { BsArrowDown } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <div className={Style.main_div}>
      <div className={Style.sub_div}>
        <div className={Style.cat_div}>
          <span>Choose category</span>
          <BsArrowDown className={Style.icn} />
        </div>
        <ul className={Style.unorderlist}>
          <li>
            <a>all</a>
          </li>
          <li>
            <a>development</a>
          </li>
          <li>
            <a>marketing</a>
          </li>
          <li>
            <a>performance</a>
          </li>
        </ul>
        <section className={Style.sec}>
          <div className={Style.card1}>
            <Link to="/work/website">
              <a className={Style.anc1}>
                <div className={Style.img1_div}></div>
                <div className={Style.txt}>
                  <div>
                    <p className={Style.para}>Website development</p>
                  </div>
                  <div>
                    <h3 className={Style.heading}>Sogelease</h3>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          <div className={Style.card2}>
            <a className={Style.anc1}>
              <div className={Style.img2_div}></div>
              <div className={Style.txt}>
                <div>
                  <p className={Style.para}>Performance marketing</p>
                </div>
                <div>
                  <h3 className={Style.heading}>Raiffeisen Bank Serbia</h3>
                </div>
              </div>
            </a>
          </div>
        </section>
        <section className={Style.sec}>
          <div className={Style.card1}>
            <a href="#" className={Style.anc1}>
              <div className={Style.img3_div}></div>
              <div className={Style.txt}>
                <div>
                  <p className={Style.para}>TV commercial</p>
                </div>
                <div>
                  <h3 className={Style.heading}>Violeta</h3>
                </div>
              </div>
            </a>
          </div>
          <div className={Style.card2}>
            <a href="#" className={Style.anc1}>
              <div className={Style.img4_div}></div>
              <div className={Style.txt}>
                <div>
                  <p className={Style.para}>Integrated campaign</p>
                </div>
                <div>
                  <h3 className={Style.heading}>Ožujsko pivo</h3>
                </div>
              </div>
            </a>
          </div>
        </section>
        <section className={Style.sec}>
          <div className={Style.card1}>
            <a href="#" className={Style.anc1}>
              <div className={Style.img5_div}></div>
              <div className={Style.txt}>
                <div>
                  <p className={Style.para}>Website development</p>
                </div>
                <div>
                  <h3 className={Style.heading}>Nordeus</h3>
                </div>
              </div>
            </a>
          </div>
          <div className={Style.card2}>
            <a href="#" className={Style.anc1}>
              <div className={Style.img6_div}></div>
              <div className={Style.txt}>
                <div>
                  <p className={Style.para}>Social media strategy</p>
                </div>
                <div>
                  <h3 className={Style.heading}>Franck</h3>
                </div>
              </div>
            </a>
          </div>
        </section>
        <section className={Style.sec}>
          <div className={Style.card1}>
            <a href="#" className={Style.anc1}>
              <div className={Style.img7_div}></div>
              <div className={Style.txt}>
                <div>
                  <p className={Style.para}>Animated YouTube sitcom</p>
                </div>
                <div>
                  <h3 className={Style.heading}>Adria Snack Company</h3>
                </div>
              </div>
            </a>
          </div>
          <div className={Style.card2}>
            <a href="#" className={Style.anc1}>
              <div className={Style.img8_div}></div>
              <div className={Style.txt}>
                <div>
                  <p className={Style.para}>Creative concept</p>
                </div>
                <div>
                  <h3 className={Style.heading}>Lufthansa</h3>
                </div>
              </div>
            </a>
          </div>
        </section>
        <section className={Style.sec}>
          <div className={Style.card1}>
            <a href="#" className={Style.anc1}>
              <div className={Style.img9_div}></div>
              <div className={Style.txt}>
                <div>
                  <p className={Style.para}>CSR campaign</p>
                </div>
                <div>
                  <h3 className={Style.heading}>Wiener Insurance</h3>
                </div>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
