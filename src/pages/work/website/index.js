import React, { useRef } from "react";
import Workheader from "../../../components/websiteheader";
import Worktxtarea from "../../../components/worktxtarea";
import VideoSection from "../../../components/videosetion";
import AdaptSlider from "../../../components/adaptslider";
import Menu from "../../../components/menu";
import ScrollBar from "../../../components/scrollbar";
import Footer from "../../../components/footer";
import Planning from "../../../components/planning";
import Acquired from "../../../components/acquiredslider";
import MobileSlider from "../../../components/mobleslider";

export default function Website() {
  const scrolbar = useRef();
  return (
    <div className="App" ref={scrolbar}>
      <ScrollBar />
      <Menu />
      <Workheader />
      <Worktxtarea />
      <VideoSection />
      <AdaptSlider />
      <Planning
        head1="Advanced calculator for optimal"
        head2="payoff planning"
        para1="Because users care about finding the best tailored options, we
              provided a tool that"
        para2="gives clear insight of what they can gain. "
        st="#f9f9f9"
        plimg1="true"
      />
      <Planning
        head1="Complete account overview "
        // head2="payoff planning"
        para1="By logging into their account, users could now have full insight and control in "
        para2="managing all their transactions. "
        st="#ffffff"
        plimg2="true"
      />
      <Acquired />
      <MobileSlider />
      <Footer />
    </div>
  );
}
