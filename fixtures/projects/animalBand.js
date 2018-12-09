import React from "react";
const AnimalBandGroupPhoto1 = require("../../images/Animal-Band-Group-Photo-1.jpg");
const AnimalBandGroupPhoto2 = require("../../images/Animal-Band-Group-Photo-2.jpg");
const AnimalBandMakeMagazine = require("../../images/Animal-Band-MakeMagazine.jpg");
const AnimalBandFrance24 = require("../../images/Animal-Band-France24.jpg");
const AnimalBandMakerFaireRibbons = require("../../images/Animal-Band-MakerFaire-Ribbons.jpg");
const AnimalBandMakerFaire1 = require("../../images/Animal-Band-MakerFaire-1.jpg");
const AnimalBandMakerFaire2 = require("../../images/Animal-Band-MakerFaire-2.jpg");
const projects = [
  {
    name: "Animal Band",
    description: (
      <span>
        <p>
          Animal Band is a set of stuffed animals that can play like musical
          instruments using sensors (primarily capacitive touch), Bluetooth, and
          MIDI.
        </p>
      </span>
    ),
    gallery: [
      {
        description: "Photoshoot",
        images: [
          {
            src: AnimalBandGroupPhoto1
          },
          {
            src: AnimalBandGroupPhoto2
          }
        ]
      },
      {
        description: "Featured In",
        images: [
          {
            caption: "Make:Magazine Volume 62",
            src: AnimalBandMakeMagazine
          },
          {
            caption: "France24",
            src: AnimalBandFrance24
          }
        ]
      },
      {
        description: "MakerFaires",
        images: [
          {
            src: AnimalBandMakerFaireRibbons
          },
          {
            src: AnimalBandMakerFaire1
          },
          {
            src: AnimalBandMakerFaire2
          }
        ]
      }
    ]
  }
];

export default projects;
