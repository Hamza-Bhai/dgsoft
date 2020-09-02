import React, { Component } from "react";
import Style from "./Style.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsArrowRightShort } from "react-icons/bs";

export default class Slider extends Component {
  constructor(props) {
    super(props);
    // slidde1
    this.containr = React.createRef();
    this.sliwde1 = React.createRef();
    this.topSlide = React.createRef();
    // slidde1
    // slidde2
    this.sliwde2 = React.createRef();
    this.topSlide2 = React.createRef();
    // slidde2
    // slidde3
    this.sliwde3 = React.createRef();
    this.topSlide3 = React.createRef();
    // slidde3
    // slidde4
    this.sliwde4 = React.createRef();
    this.topSlide4 = React.createRef();
    // slidde4
  }

  componentDidMount() {
    gsap.registerPlugin(ScrollTrigger);
    // slide1
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.sliwde1.current,
        start: "top bottom",
        end: "bottom 70%",
        scrub: true,
      },
    });
    tl.from(this.sliwde1.current, {
      css: {
        transform: "scale(0.87)",
        opacity: -0.2,
      },
    });
    tl.to(this.sliwde1.current, {
      css: {
        transform: "scale(1)",
        opacity: 1,
      },
    });

    // second
    let tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: this.topSlide.current,
        start: "top 5%",
        end: "bottom top",
        scrub: true,
      },
    });
    tl1.to(this.topSlide.current, {
      css: {
        transform: "scale(0.87)",
        opacity: 0.2,
      },
    });
    // slide1
    // slide2
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: this.sliwde2.current,
        start: "top bottom",
        end: "bottom 70%",
        scrub: true,
      },
    });
    tl2.from(this.sliwde2.current, {
      css: {
        transform: "scale(0.87)",
        opacity: 0,
      },
    });
    tl2.to(this.sliwde2.current, {
      css: {
        transform: "scale(1)",
        opacity: 1,
      },
    });
    // second
    let tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: this.topSlide2.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    tl3.to(this.topSlide2.current, {
      css: {
        transform: "scale(0.87)",
        opacity: 0.2,
      },
    });
    // slide2
    // slide3
    let tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: this.sliwde3.current,
        start: "top bottom",
        end: "bottom 70%",
        scrub: true,
      },
    });
    tl4.from(this.sliwde3.current, {
      css: {
        transform: "scale(0.87)",
        opacity: 0,
      },
    });
    tl4.to(this.sliwde3.current, {
      css: {
        transform: "scale(1)",
        opacity: 1,
      },
    });
    // second
    let tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: this.topSlide3.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    tl5.to(this.topSlide3.current, {
      css: {
        transform: "scale(0.87)",
        opacity: 0.2,
      },
    });
    // slide3
    // slide4
    let tl6 = gsap.timeline({
      scrollTrigger: {
        trigger: this.sliwde4.current,
        start: "top bottom",
        end: "bottom 70%",
        scrub: true,
      },
    });
    tl6.from(this.sliwde4.current, {
      css: {
        transform: "scale(0.87)",
        opacity: 0,
      },
    });
    tl6.to(this.sliwde4.current, {
      css: {
        transform: "scale(1)",
        opacity: 1,
      },
    });
    // second
    let tl7 = gsap.timeline({
      scrollTrigger: {
        trigger: this.topSlide4.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    tl7.to(this.topSlide4.current, {
      css: {
        transform: "scale(0.87)",
        opacity: 0.2,
      },
    });
    // slide4
  }

  render() {
    return (
      <div className={Style.main_slider_div} ref={this.containr}>
        <div className={Style.main_txt}>
          <p className={Style.txt}>RECENT WORK</p>
        </div>
        {/* sliders */}
        <div className={Style.slider_container}>
          {/* slider1 */}
          <div ref={this.topSlide}>
            <div className={Style.slide1} ref={this.sliwde1}>
              {/* left_div1 */}
              <div className={Style.left_div}>
                <ul>
                  <li className={Style.list1}>
                    <span>01</span>-04
                  </li>
                  <li className={Style.list2}>Creative concept</li>
                  <li className={Style.list3}>Lufthansa</li>
                  <li>
                    <div className={Style.main_border}>
                      <div className={Style.bordr}>
                        <BsArrowRightShort size="20px" className={Style.farr} />
                      </div>
                      <div className={Style.bordrback}>
                        <BsArrowRightShort
                          size="15px"
                          className={Style.riarr}
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* left_div1 */}
              {/* img_div1 */}
              <div className={Style.img1_div}>
                <div id={Style.main_img1}></div>
              </div>
              {/* img_div1 */}
              {/* left_div2 */}
              <div className={Style.left_div_800}>
                <ul>
                  <li className={Style.list1_800}>
                    <span>01</span>-04
                  </li>
                  <li className={Style.list2_800}>Creative concept</li>
                  <li className={Style.list3_800}>Lufthansa</li>
                  <li>
                    <div className={Style.main_border}>
                      <div className={Style.bordr}>
                        <BsArrowRightShort size="20px" className={Style.farr} />
                      </div>
                      <div className={Style.bordrback}>
                        <BsArrowRightShort
                          size="15px"
                          className={Style.riarr}
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* left_div2 */}
            </div>
          </div>
          {/* slider1 */}
          {/* slider2 */}
          <div ref={this.topSlide2}>
            <div className={Style.slide2} ref={this.sliwde2}>
              {/* left_div */}
              <div className={Style.left_div}>
                <ul>
                  <li className={Style.list1}>
                    <span>02</span>-04
                  </li>
                  <li className={Style.list2}>Social media strategy</li>
                  <li className={Style.list3}>Franck</li>
                  <li>
                    <div className={Style.main_border}>
                      <div className={Style.bordr}>
                        <BsArrowRightShort size="20px" className={Style.farr} />
                      </div>
                      <div className={Style.bordrback}>
                        <BsArrowRightShort
                          size="15px"
                          className={Style.riarr}
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* left_div */}
              {/* img_div2 */}
              <div className={Style.img2_div}>
                <div id={Style.main_img2}></div>
              </div>
              {/* img_div2 */}
              {/* left_div2 */}
              <div className={Style.left_div_800}>
                <ul>
                  <li className={Style.list1_800}>
                    <span>02</span>-04
                  </li>
                  <li className={Style.list2_800}>Creative concept</li>
                  <li className={Style.list3_800}>Lufthansa</li>
                  <li>
                    <div className={Style.main_border}>
                      <div className={Style.bordr}>
                        <BsArrowRightShort size="20px" className={Style.farr} />
                      </div>
                      <div className={Style.bordrback}>
                        <BsArrowRightShort
                          size="15px"
                          className={Style.riarr}
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* left_div2 */}
            </div>
          </div>
          {/* slider2 */}
          {/* slider3 */}
          <div ref={this.topSlide3}>
            <div className={Style.slide3} ref={this.sliwde3}>
              {/* left_div */}
              <div className={Style.left_div}>
                <ul>
                  <li className={Style.list1}>
                    <span>03</span>-04
                  </li>
                  <li className={Style.list2}>Animated YouTube sitcom</li>
                  <li className={Style.list3}>
                    Adria Snack <br />
                    Company
                  </li>
                  <li>
                    <div className={Style.main_border}>
                      <div className={Style.bordr}>
                        <BsArrowRightShort size="20px" className={Style.farr} />
                      </div>
                      <div className={Style.bordrback}>
                        <BsArrowRightShort
                          size="15px"
                          className={Style.riarr}
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* left_div */}
              {/* img_div3 */}
              <div className={Style.img3_div}>
                <div id={Style.main_img3}></div>
              </div>
              {/* img_div3 */}
              {/* left_div2 */}
              <div className={Style.left_div_800}>
                <ul>
                  <li className={Style.list1_800}>
                    <span>03</span>-04
                  </li>
                  <li className={Style.list2_800}>Creative concept</li>
                  <li className={Style.list3_800}>Lufthansa</li>
                  <li>
                    <div className={Style.main_border}>
                      <div className={Style.bordr}>
                        <BsArrowRightShort size="20px" className={Style.farr} />
                      </div>
                      <div className={Style.bordrback}>
                        <BsArrowRightShort
                          size="15px"
                          className={Style.riarr}
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* left_div2 */}
            </div>
          </div>
          {/* slider3 */}
          {/* slider4 */}
          <div ref={this.topSlide4}>
            <div className={Style.slide4} ref={this.sliwde4}>
              {/* left_div */}
              <div className={Style.left_div}>
                <ul>
                  <li className={Style.list1}>
                    <span>04</span>-04
                  </li>
                  <li className={Style.list2}>Website development</li>
                  <li className={Style.list3}>Nordeus</li>
                  <li>
                    <div className={Style.main_border}>
                      <div className={Style.bordr}>
                        <BsArrowRightShort size="20px" className={Style.farr} />
                      </div>
                      <div className={Style.bordrback}>
                        <BsArrowRightShort
                          size="15px"
                          className={Style.riarr}
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* left_div */}
              {/* img_div4 */}
              <div className={Style.img4_div}>
                <div id={Style.main_img4}></div>
              </div>
              {/* img_div4 */}
              {/* left_div2 */}
              <div className={Style.left_div_800}>
                <ul>
                  <li className={Style.list1_800}>
                    <span>04</span>-04
                  </li>
                  <li className={Style.list2_800}>Creative concept</li>
                  <li className={Style.list3_800}>Lufthansa</li>
                  <li>
                    <div className={Style.main_border}>
                      <div className={Style.bordr}>
                        <BsArrowRightShort size="20px" className={Style.farr} />
                      </div>
                      <div className={Style.bordrback}>
                        <BsArrowRightShort
                          size="15px"
                          className={Style.riarr}
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* left_div2 */}
            </div>
          </div>
          {/* slider4 */}
        </div>
        {/* sliders */}
      </div>
    );
  }
}
