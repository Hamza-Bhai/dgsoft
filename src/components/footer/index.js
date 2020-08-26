import React from "react";
import Style from "./Style.module.css";
export default function Footer() {
  return (
    <footer className={Style.footer}>
      <div className={Style.left_div}>
        <ul className={Style.social_div}>
          <a href="#">
            <li>Facebook.</li>
          </a>
          <a href="#">
            <li>Twiter.</li>
          </a>
          <a href="#">
            <li>Instagram.</li>
          </a>
          <a href="#">
            <li>Linkedin.</li>
          </a>
          <a href="#">
            <li>Dribbble.</li>
          </a>
        </ul>
        <div>
          <span className={Style.txt1}>
            <sup>&#169;</sup>2020 Degordian
          </span>
        </div>
        <ul className={Style.link}>
          <a href="#">
            <li>Privacy Policy</li>
          </a>
          <a href="#">
            <li>Legal</li>
          </a>
          <a href="#">
            <li>Terms & Conditions </li>
          </a>
        </ul>
      </div>
      <div className={Style.right_div}>
        <ul className={Style.list1}>
          <a className={Style.active} href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>About</li>
          </a>
          <a href="#">
            <li>Services</li>
          </a>
          <a href="#">
            <li>Work</li>
          </a>
          <a href="#">
            <li>Careers</li>
          </a>
          <a href="#">
            <li>Team</li>
          </a>
        </ul>
        <ul className={Style.ul2}>
          <div className={Style.left_div1}>
            <a className={Style.active} href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>Services</li>
            </a>
            <a href="#">
              <li>Careers</li>
            </a>
          </div>
          <div className={Style.right_div1}>
            <a href="#">
              <li>About</li>
            </a>
            <a href="#">
              <li>Work</li>
            </a>
            <a href="#">
              <li>Team</li>
            </a>
          </div>
        </ul>
        <div className={Style.news}>Newsletter</div>
        <div className={Style.mail}>e-mail</div>
      </div>
    </footer>
  );
}
