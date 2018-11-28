import React, { Component } from "react";
import { sample, random } from "lodash";
import "./Sprinkles.scss";
import SVGInline from "react-svg-inline";
import pillSVG from "../images/sprinkle-pill.svg";
import triangleSVG from "../images/sprinkle-triangle.svg";
import squareSVG from "../images/sprinkle-square.svg";
import ellipseSVG from "../images/sprinkle-ellipse.svg";
import bigCircleSVG from "../images/sprinkle-big-circle.svg";
import smallCircleSVG from "../images/sprinkle-small-circle.svg";

const sprinkles = [
  pillSVG,
  triangleSVG,
  squareSVG,
  ellipseSVG,
  bigCircleSVG,
  smallCircleSVG
];

const palette = [
  "#80CCDA",
  "#FEE033",
  "#FEC0BD",
  "#FD8D55",
  "#DDB9D8",
  "#6EC6B1"
];

export default class Sprinkles extends Component {
  render() {
    const { width, height } = this.props;
    const baseSVGUnit = 24;
    const baseWrapperUnit = baseSVGUnit * 2;
    const wiggleRoom = (baseWrapperUnit - baseSVGUnit) / 2;
    const componentWidth = width || window.innerWidth;
    const componentHeight = height || window.innerHeight;
    const numAcross = componentWidth / baseWrapperUnit;
    const numDown = componentHeight / baseWrapperUnit;
    const totalNumSprinkles = numAcross * numDown;
    const frequency = 0.5;
    return (
      <div
        className="sprinkles-component"
        ref={node => (this.sprinklesNode = node)}
      >
        {totalNumSprinkles &&
          Array.from(Array(Math.round(numAcross * numDown))).map(() => {
            const shouldShow = Math.random() < frequency;
            return (
              <div
                className="sprinkle-wrapper"
                style={{ width: baseWrapperUnit, height: baseWrapperUnit }}
              >
                {shouldShow && (
                  <SVGInline
                    svg={sample(sprinkles)}
                    width={baseSVGUnit}
                    height={baseSVGUnit}
                    style={{
                      transform: `rotate(${random(
                        0,
                        360
                      )}deg) translateX(${random(
                        -wiggleRoom,
                        wiggleRoom
                      )}px) translateY(${random(-wiggleRoom, wiggleRoom)}px)`
                    }}
                    fill={sample(palette)}
                  />
                )}
              </div>
            );
          })}
      </div>
    );
  }
}
