import React from "react";
const ChameLEDDemo = require("../../images/ChameLED-Demo.gif");
const ChameLEDPhotoshoot = require("../../images/ChameLED-Photoshoot.jpg");
const ChameLEDRunwayShow = require("../../images/ChameLED-MakeFashion-Runway.jpg");
const ChameLEDSketch1 = require("../../images/ChameLED-Sketch-1.jpg");
const ChameLEDSketch2 = require("../../images/ChameLED-Sketch-2.png");
const ChameLEDFinalSketch1 = require("../../images/ChameLED-Final-Sketch-1.jpg");
const ChameLEDFinalSketch2 = require("../../images/ChameLED-Final-Sketch-2.jpg");
const ChameLEDFinalSketch3 = require("../../images/ChameLED-Final-Sketch-3.jpg");
const ChameLEDFinalSketch4 = require("../../images/ChameLED-Final-Sketch-4.jpg");
const projects = [
  {
    name: "ChameLED",
    links: [
      {
        cta: "Source Code",
        url: "https://github.com/cranberryofdoom/ChameLED"
      }
    ],
    description: (
      <span>
        <p>
          ChameLED is a color changing dress made entirely from scratch with
          LEDs and color sensors.
        </p>
      </span>
    ),
    gallery: [
      {
        description: "2018 MakeFashion Runway Show",
        images: [
          {
            src: ChameLEDDemo
          },
          {
            src: ChameLEDPhotoshoot
          },
          {
            src: ChameLEDRunwayShow
          }
        ]
      },
      {
        description: "Sketches",
        images: [
          {
            src: ChameLEDSketch1
          },
          {
            src: ChameLEDSketch2
          },
          {
            src: ChameLEDFinalSketch1
          },
          {
            src: ChameLEDFinalSketch2
          },
          {
            src: ChameLEDFinalSketch3
          },
          {
            src: ChameLEDFinalSketch4
          }
        ]
      }
    ]
  }
];

export default projects;
