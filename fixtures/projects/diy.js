import React from "react";
import moment from "moment";
const DIYCampsCourseBrochure = require("../../images/DIY-Camps-Course-Brochure.png");
const DIYCampsRegistrationOfferSelectKid = require("../../images/DIY-Camps-Registration-Offer-Select-Kid.png");
const JAM10Chat = require("../../images/JAM-1.0-Chat-In-Progress.png");
const JAM15Chat = require("../../images/JAM-1.5-Chat.png");
const JAM20Cards = require("../../images/JAM-2.0-Cards.png");
const JAM20Packs = require("../../images/JAM-2.0-Packs.png");
const JAM30AccountManagment = require("../../images/JAM-3.0-Account-Management.png");
const JAM30Filmstrip = require("../../images/JAM-3.0-Drawing-Filmstrip.png");

const projects = [
  {
    name: "JAM",
    links: [
      {
        cta: "Website",
        url: "https://jam.com"
      },
      {
        cta: "Component Library",
        url: "https://diy.github.io/nimbus"
      },
      {
        cta: "Architectural Overview & Design Patterns",
        url:
          "https://paper.dropbox.com/doc/JAM-Frontend-Web-Overview--ASm9NJQHmAwbpFvVO3_MYQptAg-gSOdAxWwHo4s9Yu35i8G0"
      }
    ],
    description: (
      <span>
        <p>
          JAM is an online learning community where kids can be their most
          creative selves through online courses in subjects they can't get in
          school, like drawing, animation, cooking, and engineering.
        </p>
        <p>
          I've been the lead frontend engineer for our core revenue-earning
          product since its conception in 2016, overseeing not only
          mission-critical areas like our core learning features and
          registration flows, but our internal content moderation/course
          administration tools, subscription management tools, and marketing
          pages.
        </p>
      </span>
    ),
    iterations: [
      {
        date: moment("2018-01"),
        images: [
          {
            src: JAM30Filmstrip,
            description: "Course Playlist"
          },
          {
            src: JAM30AccountManagment,
            description: "Account Management"
          }
        ]
      },
      {
        date: moment("2017-01"),
        images: [
          {
            src: JAM20Packs,
            description: "Course Topics"
          },
          {
            src: JAM20Cards,
            description: "Card Learning Interface"
          }
        ]
      },
      {
        date: moment("2016-06"),
        images: [
          {
            src: JAM15Chat,
            description: "Chat Learning Interface Version 2"
          }
        ]
      },
      {
        date: moment("2016-01"),
        images: [
          {
            src: JAM10Chat,
            description: "Chat Learning Interface Version 1"
          }
        ]
      }
    ]
  },
  {
    name: "DIY Camps",
    description: (
      <span>
        <p>
          DIY Camps was the experimental precursor to JAM, where we offered
          real-time online camps for kids to attend during the summer. I built
          the camp brochure previews, registration flows and the account
          management pages for the product.
        </p>
      </span>
    ),
    iterations: [
      {
        date: moment("2015-01"),
        images: [
          {
            src: DIYCampsCourseBrochure,
            description: "Course Brochure"
          },
          {
            src: DIYCampsRegistrationOfferSelectKid,
            description: "Account Management"
          }
        ]
      }
    ]
  }
];

export default projects;
