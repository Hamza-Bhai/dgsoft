import React from "react";
import Header from "../../components/header";
import Menu from "../../components/menu";
import Menslide from "../../components/menslide";
import Story from "../../components/story";

export default function About() {
  const txt = (
    <p className="para">
      It's a trademark of all learners, and we believe there is no point in
      doing
      <br />
      anything without it.
    </p>
  );
  return (
    <div>
      <Header
        txt1="Making curiosity a"
        txt2="priority"
        para1={txt}
        txt3="true"
      />
      <Menslide />
      <Story />
      <Menu />
    </div>
  );
}
