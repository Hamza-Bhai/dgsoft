import React, { Component } from "react";
import Style from "./Style.module.css";
import Inimg1 from "../../assets/images/initiatives-1.jpg";
import Inimg2 from "../../assets/images/initiatives-2.jpg";
import Inimg3 from "../../assets/images/initiatives-3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

export default class Initiatives extends Component {
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
      slidesToShow: 1.5,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 1140,
          settings: {
            slidesToShow: 1.15,
            slidesToScroll: 1,
            infinite: false,
          },
        },
      ],
    };
    return (
      <div className={Style.main_div}>
        <div className={Style.sec1}>
          <div className={Style.head}>
            <h3>
              <div>Initiatives</div>
            </h3>
            <div className={Style.para}>
              <p>
                Some of us like to exercise their muscles, some their minds and
              </p>
              <p>
                some the right to live their best sloth lives — all find
                like-minded
              </p>
              <p>supporters.</p>
            </div>
          </div>
        </div>
        <div className={Style.sec2}>
          <div className={Style.main}>
            <Slider ref={(c) => (this.slider = c)} {...settings}>
              <div className={Style.slide_div1} key={1}>
                <img src={Inimg1} />
                <p>
                  <strong>Startup in 24h. </strong>Born in 2013, this
                  up-all-night initiative has the goal of building a brand new
                  product in only 24 hours.
                </p>
              </div>
              <div className={Style.slide_div2} key={2}>
                <img src={Inimg2} />
                <p>
                  <strong>Startup in 24h. </strong>Born in 2013, this
                  up-all-night initiative has the goal of building a brand new
                  product in only 24 hours.
                </p>
              </div>
              <div className={Style.slide_div3} key={3}>
                <img src={Inimg3} />
                <p>
                  <strong>Startup in 24h. </strong>Born in 2013, this
                  up-all-night initiative has the goal of building a brand new
                  product in only 24 hours.
                </p>
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
      </div>
    );
  }
}
