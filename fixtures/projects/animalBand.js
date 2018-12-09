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
    link: "https://github.com/cranberryofdoom/ChameLED",
    description: (
      <span>
        <p>
          Animal Band is a set of stuffed animals I've made that can play like
          musical instruments using sensors (primarily capacitive touch),
          Bluetooth, and MIDI.
        </p>
      </span>
    ),
    gallery: [
      {
        description: "Photoshoot",
        images: [AnimalBandGroupPhoto1, AnimalBandGroupPhoto2]
      },
      {
        description: "France24",
        images: [AnimalBandFrance24]
      },
      {
        description: "Make:Magazine Volume 62",
        images: [AnimalBandMakeMagazine]
      },
      {
        description: "MakerFaires",
        images: [
          AnimalBandMakerFaireRibbons,
          AnimalBandMakerFaire1,
          AnimalBandMakerFaire2
        ]
      }
    ]
  }
];

export default projects;
