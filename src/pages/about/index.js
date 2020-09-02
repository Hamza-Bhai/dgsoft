import React, { useEffect } from "react";
import Header from "../../components/header";
import Menu from "../../components/menu";
import Menslide from "../../components/menslide";
import Story from "../../components/story";
import Recognitions from "../../components/recognitions";
import Initiatives from "../../components/Initiatives";
import Relative from "../../components/relative";
import Work from "../../components/ourwork";
import Footer from "../../components/footer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ once: true });
  });
  const txt = (
    <p
      className="para"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      It's a trademark of all learners, and we believe there is no point in
      doing
      <br />
      anything without it.
    </p>
  );
  return (
    <div>
      <Menu />
      <Header
        txt1="Making curiosity a"
        txt2="priority"
        para1={txt}
        txt3="true"
      />
      <Menslide />
      <Story />
      <Recognitions />
      <Initiatives />
      <Relative />
      <Work />
      <Footer />
    </div>
  );
}
