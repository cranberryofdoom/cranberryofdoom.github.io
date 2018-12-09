import React, { Component, Fragment } from "react";
import "./Band.scss";
import KeyDown from "../components/KeyDown";
import animals from "../fixtures/animals";

export default class Band extends Component {
  playAudio(button) {
    const audio = this[`audioNode${button}`];
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      audio.play();
    }
  }

  resetAudio(button) {
    const audio = this[`audioNode${button}`];
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  }

  handleClick(button) {
    this.playAudio(button);
  }

  handleKeyDown(event) {
    var keyCode = event.keyCode;
    if (event.repeat) {
      return;
    }
    let allKeys = [];
    animals.forEach(animal => (allKeys = allKeys.concat(animal.keys)));
    allKeys.map(key => {
      if (keyCode === key.keyCode) {
        this.playAudio(key.button);
      }
    });
  }

  render() {
    return (
      <div className="band-container">
        <KeyDown onKeyDown={this.handleKeyDown.bind(this)} />
        <img src={require("../images/band.png")} />
        <h1>Animal Band</h1>
        <p>Press respective keys to play.</p>
        <div className="animal-plushies">
          {animals.map(animal => (
            <div className="animal">
              <img className={animal.size} src={animal.image} />
              <h2 className="animal-name">{animal.name}</h2>
              <div className="keys">
                {animal.keys.map(key => (
                  <Fragment>
                    <button
                      onClick={this.handleClick.bind(this, key.button)}
                      id={`button${key.button}`}
                      className="key-press"
                    >
                      Press <span>{key.button}</span>
                    </button>
                    <audio
                      ref={node => {
                        this[`audioNode${key.button}`] = node;
                      }}
                      src={key.audio}
                    />
                  </Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
