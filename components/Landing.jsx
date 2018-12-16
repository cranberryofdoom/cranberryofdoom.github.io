import React from "react";
import "./Landing.scss";
import Sprinkles from "./Sprinkles";
import PillSVG from "../images/sprinkle-pill.svg";
import TriangleSVG from "../images/sprinkle-triangle.svg";
import SquareSVG from "../images/sprinkle-square.svg";
import EllipseSVG from "../images/sprinkle-ellipse.svg";
import BigCircleSVG from "../images/sprinkle-big-circle.svg";
import SmallCircleSVG from "../images/sprinkle-small-circle.svg";
import "./Landing.scss";

const sampleSprinkles = [
  PillSVG,
  TriangleSVG,
  SquareSVG,
  EllipseSVG,
  BigCircleSVG,
  SmallCircleSVG
];

const samplePalette = [
  "#80CCDA",
  "#FEE033",
  "#FEC0BD",
  "#FD8D55",
  "#DDB9D8",
  "#6EC6B1"
];

export default function Landing({ onClick }) {
  return (
    <section className="landing-component full">
      <Sprinkles
        palette={samplePalette}
        sprinkles={sampleSprinkles}
        baseSVGUnit={24}
        sprinkleFrequency={0.6}
      />
      <header>
        <h1 className="huge">Ashley Qian</h1>
        <div className="subheader huge">
          <a onClick={onClick.bind(this, "work")} className="mint" href="#work">
            Software engineer
          </a>{" "}
          by day,{" "}
          <a onClick={onClick.bind(this, "make")} className="mint" href="#make">
            artist
          </a>{" "}
          by night,{" "}
          <a className="mint" onClick={onClick.bind(this, "play")} href="#play">
            kid
          </a>{" "}
          at heart.
        </div>
      </header>
    </section>
  );
}
