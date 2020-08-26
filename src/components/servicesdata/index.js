import React, { useEffect } from "react";
import Style from "./Style.module.css";
import AOS from "aos";
import cn from "classnames";
export default function ServicesData() {
  useEffect(() => {
    AOS.init({ once: true });
  });
  return (
    <div className={Style.main_div}>
      <div className={Style.container_div}>
        <div className={Style.f1_div} id={Style.ul1}>
          <div className={cn(Style.num, Style.ani)}>
            <p
              data-aos="slide-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="800"
            >
              01
            </p>
          </div>
          <h2 className={cn(Style.head, Style.ani)}>
            <p
              data-aos="slide-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="800"
            >
              Creative
            </p>
          </h2>
          <div className={cn(Style.para1, Style.ani)}>
            <p
              data-aos="slide-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="800"
            >
              Strategic on-brand communication
            </p>
          </div>
          <div className={cn(Style.para2, Style.ani)}>
            <p
              data-aos="slide-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="800"
            >
              that comes in many creative forms.
            </p>
          </div>
          <ul className={Style.ulist}>
            <li>
              <div className={Style.ani}>
                <span
                  data-aos="slide-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="800"
                >
                  Branding
                </span>
              </div>
            </li>
            <li>
              <div className={Style.ani}>
                <span
                  data-aos="slide-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="800"
                >
                  Creative Concepts & Ideas
                </span>
              </div>
            </li>
            <li>
              <div className={Style.ani}>
                <span
                  data-aos="slide-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="800"
                >
                  Employer Branding
                </span>
              </div>
            </li>
            <li>
              <div className={Style.ani}>
                <span
                  data-aos="slide-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="800"
                >
                  PR
                </span>
              </div>
            </li>
            <li>
              <div className={Style.ani}>
                <span
                  data-aos="slide-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="800"
                >
                  Social Media
                </span>
              </div>
            </li>
            <li>
              <div className={Style.ani}>
                <span
                  data-aos="slide-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="800"
                >
                  Video Production
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div className={Style.f2_div} id={Style.ul2}>
          <div className={cn(Style.num, Style.ani)}>
            <p
              data-aos="slide-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="800"
            >
              02
            </p>
          </div>
          <h2 className={cn(Style.head, Style.ani)}>
            <p
              data-aos="slide-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="800"
            >
              Digital Production
            </p>
          </h2>
          <div className={cn(Style.para1, Style.ani)}>
            <p
              data-aos="slide-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="800"
            >
              Beautiful, functional and intuitive
            </p>
          </div>
          <div className={cn(Style.para2, Style.ani)}>
            <p
              data-aos="slide-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="800"
            >
              websites and apps users will want to <br /> return to.
            </p>
          </div>
          <ul className={Style.ulist}>
            <li>
              <div className={Style.ani}>
                <span
                  data-aos="slide-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="800"
                >
                  Ecommerce
                </span>
              </div>
            </li>
            <li>
              <div className={Style.ani}>
                <span
                  data-aos="slide-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="800"
                >
                  Experimental
                </span>
              </div>
            </li>
            <li>
              <div className={Style.ani}>
                <span
                  data-aos="slide-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="800"
                >
                  Mobile
                </span>
              </div>
            </li>
            <li>
              <div className={Style.ani}>
                <span
                  data-aos="slide-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="800"
                >
                  Product
                </span>
              </div>
            </li>
            <li>
              <div className={Style.ani}>
                <span
                  data-aos="slide-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="800"
                >
                  UX & UI Design & Analysis
                </span>
              </div>
            </li>
            <li>
              <div className={Style.ani}>
                <span
                  data-aos="slide-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="800"
                >
                  Web
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div className={Style.f3_div}>
          <div className={cn(Style.num, Style.ani)}>
            <p
              data-aos="slide-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="800"
            >
              03
            </p>
          </div>
          <h2 className={cn(Style.head, Style.ani)}>
            <p
              data-aos="slide-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="800"
            >
              Performance <br />
              Marketing
            </p>
          </h2>
          <div className={cn(Style.para1, Style.ani)}>
            <p
              data-aos="slide-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="800"
            >
              A data-driven approach focused on
            </p>
          </div>
          <div className={cn(Style.para2, Style.ani)}>
            <p
              data-aos="slide-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="800"
            >
              conversion and sales.
            </p>
          </div>
          <ul className={Style.ulist}>
            <li>
              <div className={Style.ani}>
                <span
                  data-aos="slide-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="800"
                >
                  Content Marketing
                </span>
              </div>
            </li>
            <li>
              <div className={Style.ani}>
                <span
                  data-aos="slide-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="800"
                >
                  Conversion Rate <br />
                  Optimization (CRO)
                </span>
              </div>
            </li>
            <li>
              <div className={Style.ani}>
                <span
                  data-aos="slide-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="800"
                >
                  Digital Advertising
                </span>
              </div>
            </li>
            <li>
              <div className={Style.ani}>
                <span
                  data-aos="slide-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="800"
                >
                  Digital Analytics
                </span>
              </div>
            </li>
            <li>
              <div className={Style.ani}>
                <span
                  data-aos="slide-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="800"
                >
                  Ecommerce Marketing
                </span>
              </div>
            </li>
            <li>
              <div className={Style.ani}>
                <span
                  data-aos="slide-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="800"
                >
                  Inbound Marketing
                </span>
              </div>
            </li>
            <li>
              <div className={Style.ani}>
                <span
                  data-aos="slide-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="800"
                >
                  Lead Generation
                </span>
              </div>
            </li>
            <li>
              <div className={Style.ani}>
                <span
                  data-aos="slide-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="800"
                >
                  Mobile App Marketing
                </span>
              </div>
            </li>
            <li>
              <div className={Style.ani}>
                <span
                  data-aos="slide-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="800"
                >
                  Search Engine Optimization (SEO)
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
