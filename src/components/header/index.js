import React, { Component } from "react";
import Style from "./Style.module.css";

import Navigation from "../navigation";
import { menuRight } from "../../redux/index";
import { connect } from "react-redux";
import cn from "classnames";

class Header extends Component {
  render() {
    return (
      <div className={Style.main_div}>
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
