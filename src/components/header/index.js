import React, { Component } from "react";
import Style from "./Style.module.css";
import Splash from "../splashscreen";
import { menuRight } from "../../redux/index";
import { connect } from "react-redux";
import cn from "classnames";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      indicator: "indicator_btn",
      colr: "gray",
      menuShow: false,
    };
  }

  listenScrollEvent = (e) => {
    if (window.scrollY > 130) {
      this.setState({ indicator: "indicator_btn1" });
    } else {
      this.setState({ indicator: "indicator_btn" });
    }
    if (window.scrollY > 2929) {
      this.setState({ indicator: "indicator_btn" });
    } else {
      this.setState({ colr: "gray" });
    }
    if (window.scrollY > 5900) {
      this.setState({ indicator: "indicator_btn1" });
    } else {
      this.setState({ colr: "gray" });
    }
    // console.log(window.scrollY);
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <div className={Style.main_div}>
        <div className={Style.main_header}>
          <div id="navbar">
            <div className={Style.navbar}>
              <div className={Style.main_logo}>
                <a className="" href="#" name="">
                  <svg className="" fill="#E5233B" viewBox="0 0 360 150">
                    <path
                      className="st0"
                      d="M40,13.5v50.57h-9.02v-3.82c-2.58,3.01-6.15,4.87-10.73,4.87c-9.35,0-16.89-7.63-16.89-18.6 c0-10.64,7.11-18.65,16.89-18.65c4.63,0,8.2,1.67,10.73,4.53V13.5H40z M30.98,46.41c0-5.68-3.91-10.16-9.26-10.16 c-5.44,0-9.4,4.49-9.4,10.16c0,5.68,3.96,10.21,9.4,10.21C27.07,56.62,30.98,52.09,30.98,46.41"
                    />
                    <path
                      className="st0"
                      d="M49.68,18.89c0-2.86,2.34-5.3,5.2-5.3c2.96,0,5.3,2.43,5.3,5.3c0,2.96-2.34,5.2-5.3,5.2 C52.07,24.09,49.68,21.8,49.68,18.89 M59.46,64.06h-8.97V28.86h8.97V64.06z"
                    />
                    <path
                      className="st0"
                      d="M85.03,71.27c5.96,0,9.68-3.24,9.68-9.25v-3.1c-2.58,2.86-6.15,4.63-10.74,4.63c-9.02,0-16.36-7.25-16.36-17.84 c0-10.21,7.35-17.65,16.36-17.65c4.63,0,8.21,1.53,10.74,4.25v-3.43h9.02v32.77c0,13.88-9.64,17.84-18.22,17.84 c-6.53,0-11.88-1.67-15.36-4.72l4.53-6.96C76.49,69.12,79.98,71.27,85.03,71.27 M94.72,45.7c0-5.2-3.82-9.4-9.02-9.4 c-5.2,0-9.11,4.2-9.11,9.4c0,5.3,3.91,9.4,9.11,9.4C90.9,55.1,94.72,50.9,94.72,45.7"
                    />
                    <path
                      className="st0"
                      d="M113.47,18.89c0-2.86,2.34-5.3,5.2-5.3c2.96,0,5.3,2.43,5.3,5.3c0,2.96-2.34,5.2-5.3,5.2 C115.8,24.09,113.47,21.8,113.47,18.89 M123.24,64.06h-8.97V28.86h8.97V64.06z"
                    />
                    <path
                      className="st0"
                      d="M130.06,28.86h6.25v-9.11h8.97v9.11h9.54v7.97h-9.49v14.93c0,3.29,1.38,4.91,4.06,4.91 c1.62,0,3.24-0.72,4.1-1.76l4.06,6.68c-2,1.91-5.3,3.53-9.64,3.53c-7.11,0-11.69-4.49-11.69-13.07V36.83h-6.15V28.86z"
                    />
                    <path
                      className="st0"
                      d="M187.6,60.25c-2.58,3.01-6.15,4.87-10.73,4.87c-9.35,0-16.89-7.63-16.89-18.6c0-10.64,7.11-18.65,16.89-18.65 c4.63,0,8.2,1.67,10.73,4.53v-3.53h9.02v35.21h-9.02V60.25z M187.6,46.41c0-5.68-3.91-10.16-9.26-10.16c-5.44,0-9.4,4.49-9.4,10.16 c0,5.68,3.96,10.21,9.4,10.21C183.69,56.62,187.6,52.09,187.6,46.41"
                    />
                    <rect
                      x="207.16"
                      y="13.5"
                      className="st0"
                      width="8.97"
                      height="50.57"
                    />
                    <path
                      className="st0"
                      d="M83.94,130.04c5.96,0,9.68-3.24,9.68-9.25v-3.1c-2.58,2.86-6.15,4.63-10.73,4.63 c-9.02,0-16.36-7.25-16.36-17.84c0-10.21,7.35-17.65,16.36-17.65c4.63,0,8.2,1.53,10.73,4.25v-3.43h9.02v32.77 c0,13.88-9.64,17.84-18.22,17.84c-6.54,0-11.88-1.67-15.36-4.72l4.53-6.97C75.4,127.89,78.88,130.04,83.94,130.04 M93.62,104.47 c0-5.2-3.82-9.4-9.02-9.4c-5.2,0-9.11,4.2-9.11,9.4c0,5.3,3.91,9.4,9.11,9.4C89.8,113.87,93.62,109.67,93.62,104.47"
                    />
                    <path
                      className="st0"
                      d="M122.15,122.84h-8.97V87.63h8.97v3.82c2-2.96,4.91-4.87,8.59-4.87c2.34,0,4.25,0.67,5.68,1.77l-3.77,8.54 c-1.19-0.95-2.96-1.53-4.63-1.53c-3.58,0-5.87,3.01-5.87,7.78V122.84z"
                    />
                    <path
                      className="st0"
                      d="M165.32,119.02c-2.58,3-6.15,4.87-10.74,4.87c-9.35,0-16.89-7.63-16.89-18.6c0-10.64,7.11-18.65,16.89-18.65 c4.63,0,8.21,1.67,10.74,4.53v-3.53h9.02v35.21h-9.02V119.02z M165.32,105.19c0-5.68-3.91-10.16-9.26-10.16 c-5.44,0-9.4,4.49-9.4,10.16c0,5.68,3.96,10.21,9.4,10.21C161.46,115.4,165.32,110.86,165.32,105.19"
                    />
                    <path
                      className="st0"
                      d="M193.85,87.63v3.82c2.58-3.01,6.15-4.87,10.74-4.87c9.35,0,16.89,7.63,16.89,18.6 c0,10.64-7.11,18.65-16.89,18.65c-4.63,0-8.21-1.67-10.74-4.53v17.93h-8.97V87.63H193.85z M193.85,105.28 c0,5.68,3.96,10.16,9.35,10.16c5.44,0,9.35-4.49,9.35-10.16c0-5.68-3.91-10.21-9.35-10.21C197.81,95.07,193.85,99.61,193.85,105.28"
                    />
                    <path
                      className="st0"
                      d="M238.64,122.84h-8.97V72.27h8.97v18.8c2.19-2.86,5.58-4.49,9.92-4.49c8.16,0,13.36,5.73,13.36,14.93v21.32H253 v-19.99c0-4.77-2.82-7.78-7.11-7.78c-4.48,0-7.2,3.01-7.2,7.78v19.99H238.64z"
                    />
                    <path
                      className="st0"
                      d="M271.37,77.66c0-2.86,2.34-5.3,5.2-5.3c2.96,0,5.3,2.43,5.3,5.3c0,2.96-2.34,5.2-5.3,5.2 C273.71,82.86,271.37,80.57,271.37,77.66 M281.1,122.84h-8.97V87.63h8.97V122.84z"
                    />
                    <polygon
                      className="st0"
                      points="291.64,72.27 300.61,72.27 300.61,100.32 304.86,100.32 313.87,87.63 324.8,87.63 312.82,103.95 325.85,122.84 314.59,122.84 304.95,108.52 300.56,108.52 300.56,122.84 291.64,122.84 "
                    />
                    <path
                      className="st0"
                      d="M357,112.87c0,5.96-5.06,11.02-14.6,11.02c-6.68,0-11.74-2.43-14.79-5.96l5.01-5.72 c2.72,3.01,6.11,4.48,10.3,4.48c3.44,0,5.2-1.48,5.2-3.67c0-6.3-18.89-3.24-18.89-15.89c0-5.34,4.53-10.49,13.5-10.49 c6.3,0,11.31,2.15,13.98,5.82l-5.06,5.3c-2.34-2.81-5.3-3.91-8.68-3.91c-3.1,0-4.91,1.38-4.91,3.29 C338.06,103.28,357,99.7,357,112.87"
                    />
                    <rect x="5" y="81" className="st0" width="55" height="8" />
                  </svg>
                </a>
              </div>
              <div className={Style.main_menu} onClick={this.props.menuRight}>
                <span className={Style.menu}></span>
                <span className={Style.menu1}></span>
                <span className={Style.menu2}></span>
              </div>
            </div>
          </div>
          {/* <Splash /> */}
        </div>
        <div className={Style.main_div_contact_indicator}>
          <span className={this.state.indicator}>
            <svg x="0px" y="0px" viewBox="0 0 400 360">
              <circle className={Style.st1} cx="195" cy="200" r="75" />
            </svg>
          </span>
          <span className={Style.contact_us}>contact us</span>
        </div>
        <div
          className={cn(
            Style.heading_div,
            this.props.txt2 ? Style.mainhead : null
          )}
        >
          <h1
            className={cn(Style.heading, this.props.txt2 ? Style.shead : null)}
          >
            {this.props.txt1} <br /> {this.props.txt2}
          </h1>
          <br />
          {this.props.para1}
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    menushow: state.menushow,
  };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    menuRight: function () {
      dispatch(menuRight());
    },
  };
};
export default connect(mapStatetoProps, mapDispatchtoProps)(Header);
