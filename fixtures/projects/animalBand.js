import React from "react";
const AnimalBandGroupPhoto1 = require("../../images/Animal-Band-Group-Photo-1.jpg");
const AnimalBandGroupPhoto2 = require("../../images/Animal-Band-Group-Photo-2.jpg");
const AnimalBandMakeMagazine = require("../../images/Animal-Band-MakeMagazine.jpg");
const AnimalBandFrance24 = require("../../images/Animal-Band-France24.jpg");
const AnimalBandMakerFaireWorld2017 = require("../../images/Animal-Band-MakerFaire-World-2017.jpg");
const AnimalBandMakerFaireBayArea2017 = require("../../images/Animal-Band-MakerFaire-Bay-Area-2017.jpg");
const AnimalBandMakerFaireBayArea20181 = require("../../images/Animal-Band-MakerFaire-Bay-Area-2018-1.jpg");
const AnimalBandMakerFaireBayArea20182 = require("../../images/Animal-Band-MakerFaire-Bay-Area-2018-2.jpg");
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
        description: "Photoshoot By Dani Grant",
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
        description: "Featured",
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
        description: "MakerFaire",
        images: [
          {
            caption: "Bay Area MakerFaire 2017",
            src: AnimalBandMakerFaireBayArea2017
          },
          {
            caption: "World MakerFaire 2017",
            src: AnimalBandMakerFaireWorld2017
          },
          {
            caption: "Bay Area MakerFaire 2018",
            src: AnimalBandMakerFaireBayArea20181
          },
          {
            caption: "Bay Area MakerFaire 2018",
            src: AnimalBandMakerFaireBayArea20182
          }
        ]
      }
    ]
  }
];

export default projects;
