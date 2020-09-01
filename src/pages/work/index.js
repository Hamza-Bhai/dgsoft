import React, { useEffect, useRef } from "react";
import WorkHeader from "../../components/workheader";
import Menu from "../../components/menu";
import ScrollBar from "../../components/scrollbar";
import Category from "../../components/work";
import Aboute from "../../components/aboute";
import Footer from "../../components/footer";

export default function Work() {
  const scrolbar = useRef();
  return (
    <div className="App" ref={scrolbar}>
      <ScrollBar />
      <Menu />
      <WorkHeader />
      <Category />
      <Aboute head="Services" para=" Learn about our exertise" />
      <Footer />
    </div>
  );
}
