import React from "react";
import Style from "./Style.module.css";
import side1 from "../../assets/videos/vdeo.mp4";
import { menuRight1 } from "../../redux";
import { connect } from "react-redux";
import cn from "classnames";
import "../../App.css";

function Menu(props) {
  return (
    <div className={cn(props.menushow ? Style.main1 : props.cls, props.fmain)}>
      <div className={Style.left_div}>
        <video autoPlay loop muted src={side1} type="video/mp4"></video>
      </div>
      <div className={Style.right_div}>
        <button type="button" className={Style.bton} onClick={props.menuRight1}>
          <div className={props.txtshow ? Style.mainsp : Style.clsclose}>
            <div className={Style.cose}>
              <span>Close menu</span>
            </div>
            <div className={Style.close_icn}>
              <span className={Style.sp1}></span>
              <span className={Style.sp2}></span>
            </div>
          </div>
        </button>
        <div className={Style.botom}>
          <div className={Style.mainlist}>
            <ul className={Style.nav_main}>
              <li className={Style.li1}>
                <div id={Style.anc}>
                  <a href="#">
                    <div id={Style.ho1}>
                      <div id={Style.hf} className={Style.icn1}>
                        <span
                          className={props.txtshow ? Style.mt : Style.mtclose}
                        >
                          Home
                        </span>
                      </div>
                      <span>
                        <div className={Style.bton1}>
                          <a href="" className={Style.anch}>
                            <div className={Style.main_border}>
                              <div className={Style.bordr}></div>
                              <div className={Style.bordrback}></div>
                            </div>
                          </a>
                        </div>
                      </span>
                    </div>
                    <p className={Style.txt} id={Style.txt0}>
                      There's no place like it
                    </p>
                  </a>
                </div>
              </li>
              <li className={Style.li2}>
                <div id={Style.anc}>
                  <a href="#">
                    <div id={Style.ho1}>
                      <div id={Style.hf} className={Style.icn2}>
                        <span
                          className={props.txtshow ? Style.mt : Style.mtclose}
                        >
                          About
                        </span>
                      </div>
                      <span>
                        <div className={Style.bton1}>
                          <a href="" className={Style.anch}>
                            <div className={Style.main_border}>
                              <div className={Style.bordr}></div>
                              <div className={Style.bordrback}></div>
                            </div>
                          </a>
                        </div>
                      </span>
                    </div>
                    <p className={Style.txt} id={Style.txt1}>
                      Get to know us better
                    </p>
                  </a>
                </div>
              </li>
              <li className={Style.li3}>
                <div id={Style.anc}>
                  <a href="#">
                    <div id={Style.ho1}>
                      <div id={Style.hf} className={Style.icn3}>
                        <span
                          className={props.txtshow ? Style.mt : Style.mtclose}
                        >
                          Services
                        </span>
                      </div>
                      <span>
                        <div className={Style.bton1}>
                          <a href="" className={Style.anch}>
                            <div className={Style.main_border}>
                              <div className={Style.bordr}></div>
                              <div className={Style.bordrback}></div>
                            </div>
                          </a>
                        </div>
                      </span>
                    </div>
                    <p className={Style.txt} id={Style.txt2}>
                      Learn about our <br />
                      expertise
                    </p>
                  </a>
                </div>
              </li>
              <li className={Style.li4}>
                <div id={Style.anc}>
                  <a href="#">
                    <div id={Style.ho1}>
                      <div id={Style.hf} className={Style.icn4}>
                        <span
                          className={props.txtshow ? Style.mt : Style.mtclose}
                        >
                          Work
                        </span>
                      </div>
                      <span>
                        <div className={Style.bton1}>
                          <a href="" className={Style.anch}>
                            <div className={Style.main_border}>
                              <div className={Style.bordr}></div>
                              <div className={Style.bordrback}></div>
                            </div>
                          </a>
                        </div>
                      </span>
                    </div>
                    <p className={Style.txt} id={Style.txt3}>
                      Browse our latest <br />
                      projects
                    </p>
                  </a>
                </div>
              </li>
              <li className={Style.li5}>
                <div id={Style.anc}>
                  <a href="#">
                    <div id={Style.ho1}>
                      <div id={Style.hf} className={Style.icn5}>
                        <span
                          className={props.txtshow ? Style.mt : Style.mtclose}
                        >
                          Careers
                        </span>
                      </div>
                      <span>
                        <div className={Style.bton1}>
                          <a href="" className={Style.anch}>
                            <div className={Style.main_border}>
                              <div className={Style.bordr}></div>
                              <div className={Style.bordrback}></div>
                            </div>
                          </a>
                        </div>
                      </span>
                    </div>
                    <p className={Style.txt} id={Style.txt4}>
                      Join our team
                    </p>
                  </a>
                </div>
              </li>
              <li className={Style.li6}>
                <div id={Style.anc}>
                  <a href="#">
                    <div id={Style.ho1}>
                      <div id={Style.hf} className={Style.icn6}>
                        <span
                          className={props.txtshow ? Style.mt : Style.mtclose}
                        >
                          Team
                        </span>
                      </div>
                      <span>
                        <div className={Style.bton1}>
                          <a href="" className={Style.anch}>
                            <div className={Style.main_border}>
                              <div className={Style.bordr}></div>
                              <div className={Style.bordrback}></div>
                            </div>
                          </a>
                        </div>
                      </span>
                    </div>
                    <p className={Style.txt} id={Style.txt5}>
                      See us trying to do <br />
                      candid
                    </p>
                  </a>
                </div>
              </li>
            </ul>
            <div className={Style.nav_botom}>
              <ul className={Style.nav_ful}>
                <li className={Style.bfi}>
                  <a
                    href=""
                    className={props.txtshow ? Style.blogopen : Style.blogclose}
                  >
                    Contact
                  </a>
                </li>
                <li className={Style.bfi}>
                  <a
                    href=""
                    className={props.txtshow ? Style.blogopen : Style.blogclose}
                  >
                    Blog
                  </a>
                </li>
              </ul>
              <ul className={Style.nav_sul}>
                <li>
                  <a
                    className={
                      props.txtshow ? Style.nav_anc : Style.nav_ancclose
                    }
                    href=""
                  >
                    Facebook.
                  </a>
                </li>
                <li>
                  <a
                    className={
                      props.txtshow ? Style.nav_anc : Style.nav_ancclose
                    }
                    href=""
                  >
                    Twitter.
                  </a>
                </li>
                <li className={Style.inst}>
                  <a
                    className={
                      props.txtshow ? Style.nav_anc : Style.nav_ancclose
                    }
                    href=""
                  >
                    Instagram.
                  </a>
                </li>
                <li>
                  <a
                    className={
                      props.txtshow ? Style.nav_anc : Style.nav_ancclose
                    }
                    href=""
                  >
                    Linkedin.
                  </a>
                </li>
                <li>
                  <a
                    className={
                      props.txtshow ? Style.nav_anc : Style.nav_ancclose
                    }
                    href=""
                  >
                    Dribbble.
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStatetoProps = (state) => {
  return {
    menushow: state.menushow,
    cls: state.cls,
    fmain: state.fmain,
    txtshow: state.txtshow,
  };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    menuRight1: function () {
      dispatch(menuRight1());
    },
  };
};
export default connect(mapStatetoProps, mapDispatchtoProps)(Menu);
