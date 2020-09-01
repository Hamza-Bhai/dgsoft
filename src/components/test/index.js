import React, { Component } from "react";
import Carousel from "react-elastic-carousel";

export default class Test extends Component {
  render() {
    return (
      <div>
        <Carousel showArrows={false} itemsToShow={1}>
          <div>hamza1</div>
          <div>hamza2</div>
          <div>hamza3</div>
          <div>hamza4</div>
          <div>hamza5</div>
          <div>hamza6</div>
        </Carousel>
      </div>
    );
  }
}
