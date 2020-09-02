import React, { Component } from "react";
import Style from "./Style.module.css";
import Inimg1 from "../../assets/images/adaptslide1.jpg";
import Inimg2 from "../../assets/images/adaptslide2.jpg";
import Inimg3 from "../../assets/images/adaptslide3.jpg";
import Inimg4 from "../../assets/images/adaptslide4.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

export default class AdaptSlider extends Component {
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
      infinite: false,
      slidesToShow: 1.7,
      slidesToScroll: 1,
      arrows: false,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1370,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
          },
        },
      ],
    };
    return (
      <div className={Style.main_div}>
        <div className={Style.head}>
          <div className={Style.tall_title}>
            <h2 className={Style.split}>
              <div className={Style.split_line}>Adapt and customize</div>
            </h2>
          </div>
        </div>
        <div className={Style.slider_div}>
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            <div style={{ width: "24%" }} className={Style.slide_div1} key={1}>
              <img src={Inimg1} />
              <p>Let’s make your dreams a reality</p>
            </div>
            <div style={{ width: "20%" }} className={Style.slide_div2} key={2}>
              <img src={Inimg2} />
              <p>A trusted partner for your investments</p>
            </div>
            <div
              style={{ width: "20.1%" }}
              className={Style.slide_div3}
              key={3}
            >
              <img src={Inimg3} />
              <p>Better your business</p>
            </div>
            <div style={{ width: "20%" }} className={Style.slide_div4} key={4}>
              <img src={Inimg4} />
              <p>A farm that’s your pride and joy</p>
            </div>
          </Slider>
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
        </div>
      </div>
    );
  }
}
