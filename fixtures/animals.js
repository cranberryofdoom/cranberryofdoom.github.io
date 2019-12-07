const animals = [
  {
    name: "Turtle Timpani",
    image: require("../images/turtle.png"),
    size: "small",
    keys: [
      {
        button: 1,
        keyCode: 49,
        audio: require("../audio/audio-1.wav")
      },
      {
        button: 2,
        keyCode: 50,
        audio: require("../audio/audio-2.wav")
      },
      {
        button: 3,
        keyCode: 51,
        audio: require("../audio/audio-3.wav")
      },
      {
        button: 4,
        keyCode: 52,
        audio: require("../audio/audio-4.wav")
      },
      {
        button: 5,
        keyCode: 53,
        audio: require("../audio/audio-5.wav")
      },
      {
        button: 6,
        keyCode: 54,
        audio: require("../audio/audio-6.wav")
      }
    ]
  },
  {
    name: "Corgi Keyboard",
    image: require("../images/corgi.png"),
    size: "small",
    keys: [
      {
        button: "left",
        keyCode: 37,
        audio: require("../audio/audio-left.wav")
      },
      {
        button: "up",
        keyCode: 38,
        audio: require("../audio/audio-up.wav")
      },
      {
        button: "right",
        keyCode: 39,
        audio: require("../audio/audio-right.wav")
      },
      {
        button: "down",
        keyCode: 40,
        audio: require("../audio/audio-down.wav")
      }
    ]
  },
  {
    name: "Momma Octo Ocarina",
    image: require("../images/momma-octopus.png"),
    size: "large",
    keys: [
      {
        button: "e",
        keyCode: 69,
        audio: require("../audio/audio-e.wav")
      },
      {
        button: "r",
        keyCode: 82,
        audio: require("../audio/audio-r.wav")
      },
      {
        button: "t",
        keyCode: 84,
        audio: require("../audio/audio-t.wav")
      },
      {
        button: "y",
        keyCode: 89,
        audio: require("../audio/audio-y.wav")
      },
      {
        button: "u",
        keyCode: 85,
        audio: require("../audio/audio-u.wav")
      },
      {
        button: "i",
        keyCode: 73,
        audio: require("../audio/audio-i.wav")
      },
      {
        button: "o",
        keyCode: 79,
        audio: require("../audio/audio-o.wav")
      },
      {
        button: "p",
        keyCode: 80,
        audio: require("../audio/audio-p.wav")
      }
    ]
  },
  {
    name: "Baby Octo Ocarina",
    image: require("../images/baby-octopus.png"),
    size: "small",
    keys: [
      {
        button: "w",
        keyCode: 87,
        audio: require("../audio/audio-w.wav")
      },
      {
        button: "a",
        keyCode: 65,
        audio: require("../audio/audio-a.wav")
      },
      {
        button: "s",
        keyCode: 83,
        audio: require("../audio/audio-s.wav")
      },
      {
        button: "d",
        keyCode: 68,
        audio: require("../audio/audio-d.wav")
      },
      {
        button: "f",
        keyCode: 70,
        audio: require("../audio/audio-f.wav")
      },
      {
        button: "g",
        keyCode: 71,
        audio: require("../audio/audio-g.wav")
      },
      {
        button: "h",
        keyCode: 72,
        audio: require("../audio/audio-h.wav")
      },
      {
        button: "j",
        keyCode: 74,
        audio: require("../audio/audio-j.wav")
      }
    ]
  },
  {
    name: "Giraffe Guitar",
    image: require("../images/giraffe.png"),
    size: "small",
    keys: [
      {
        button: "z",
        keyCode: 90,
        audio: require("../audio/audio-z.wav")
      },
      {
        button: "x",
        keyCode: 88,
        audio: require("../audio/audio-x.wav")
      },
      {
        button: "c",
        keyCode: 67,
        audio: require("../audio/audio-c.wav")
      },
      {
        button: "v",
        keyCode: 86,
        audio: require("../audio/audio-v.wav")
      }
    ]
  }
];

export default animals;
