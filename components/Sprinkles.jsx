import React, { Component } from "react";
import { sample, random } from "lodash";
import "./Sprinkles.scss";
import SVGInline from "react-svg-inline";
import ThrottledResize from "./ThrottledResize";

export default class Sprinkles extends Component {
  constructor(props) {
    super(props);
    this.createGrid();
  }

  createGrid() {
    const {
      width,
      height,
      sprinkleFrequency,
      baseSVGUnit,
      sprinkles,
      palette
    } = this.props;
    const baseWrapperUnit = baseSVGUnit * 2;
    const wiggleRoom = (baseWrapperUnit - baseSVGUnit) / 2;
    const componentWidth = width || window.innerWidth;
    const componentHeight = height || window.innerHeight;
    const numAcross = componentWidth / baseWrapperUnit;
    const numDown = componentHeight / baseWrapperUnit;
    this.totalNumSprinkles = numAcross * numDown;
    this.grid = Array.from(Array(Math.round(numAcross * numDown))).map(() => ({
      shouldShow: Math.random() < sprinkleFrequency,
      svg: sample(sprinkles),
      fill: sample(palette),
      rotate: random(0, 360),
      translateX: random(-wiggleRoom, wiggleRoom),
      translateY: random(-wiggleRoom, wiggleRoom),
      width: String(baseSVGUnit),
      height: String(baseSVGUnit),
      wrapperWidth: baseWrapperUnit,
      wrapperHeight: baseWrapperUnit
    }));
  }

  handleResize() {
    this.createGrid();
    this.forceUpdate();
  }

  render() {
    return (
      <ThrottledResize onThrottledResize={this.handleResize.bind(this)}>
        <div
          className="sprinkles-component"
          ref={node => (this.sprinklesNode = node)}
        >
          {this.totalNumSprinkles &&
            this.grid.map((cell, index) => {
              return (
                <div
                  key={index}
                  className="sprinkle-wrapper"
                  style={{
                    width: cell.wrapperWidth,
                    height: cell.wrapperHeight
                  }}
                >
                  {cell.shouldShow && (
                    <SVGInline
                      svg={cell.svg}
                      width={cell.width}
                      height={cell.height}
                      style={{
                        transform: `rotate(${cell.rotate}deg) translateX(${
                          cell.translateX
                        }px) translateY(${cell.translateY}px)`
                      }}
                      fill={cell.fill}
                    />
                  )}
                </div>
              );
            })}
        </div>
      </ThrottledResize>
    );
  }
}
