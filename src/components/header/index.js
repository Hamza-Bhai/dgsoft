import React, { Component } from "react";
import Style from "./Style.module.css";
import { menuRight } from "../../redux/index";
import { connect } from "react-redux";
import cn from "classnames";
import AOS from "aos";
import "aos/dist/aos.css";

class Header extends Component {
  render() {
    AOS.init({ once: true });
    return (
      <div className={Style.main_div}>
        <div
          className={cn(
            Style.heading_div,
            this.props.txt2 ? Style.mainhead : null
          )}
        >
          <h1
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
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
