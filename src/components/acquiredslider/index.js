import React, { Component } from "react";
import Style from "./Style.module.css";
import Inimg1 from "../../assets/images/adaptslide1.jpg";
import Inimg2 from "../../assets/images/adaptslide2.jpg";
import Inimg3 from "../../assets/images/adaptslide3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

export default class Acquired extends Component {
  next = (e) => {
    e.preventDefault();
    this.slider.slickNext();
  };
  previous = (e) => {
    e.preventDefault();
    this.slider.slickPrev();
  };
  render() {
    const settings = {
      className: "slider variable-width",
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };
    return (
      <div className={Style.main_div}>
        <div className={Style.sdiv}>
          <div className={Style.slide_div}>
            <div style={{ textAlign: "left" }} className={Style.arrow}>
              <button className="button" id={Style.arr} onClick={this.previous}>
                <div className="bton">
                  <a href="" className="anch">
                    <div className="main_border">
                      <div className="bordr">
                        <BsArrowLeftShort size="20px" />
                      </div>
                      <div className="bordrback">
                        <BsArrowLeftShort
                          size="17px"
                          color="white"
                          style={{ marginTop: "4px" }}
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </button>
              <button className="button" onClick={this.next}>
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
              </button>
            </div>
            <Slider ref={(c) => (this.slider = c)} {...settings}>
              <div className={Style.slide_div1} key={1}>
                <div>1679</div>
                <p>Contracts acquired in 2018 </p>
              </div>
              <div className={Style.slide_div2} key={2}>
                <div>30%</div>
                <p>Increase in unique users </p>
              </div>
              <div className={Style.slide_div3} key={3}>
                <div>02:19</div>
                <p>Avg time spent on site</p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
