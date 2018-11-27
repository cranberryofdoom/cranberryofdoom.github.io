import React, { Component } from "react";

const ashley = require("../images/ashley.png");

export default class Home extends Component {
  render() {
    return (
      <div className="window center">
        <img src={ashley} />
        <h1>Ashley Qian</h1>
        <p>Software engineer by day, artist by night, kid at heart.</p>
        <div className="link-catagories">
          <div className="link-catagory">
            <h2 className="catagory-title">💻 Work.</h2>
            <div className="links">
              <a href="https://diy.org/">diy.org</a>
              <a href="https://jam.com/">jam.com</a>
              <a href="/resume">Resume</a>
            </div>
          </div>
          <div className="link-catagory">
            <h2 className="catagory-title">🎨 Make.</h2>
            <div className="links">
              <a href="https://www.instagram.com/cranberryofdoom/">Instagram</a>
              <a href="https://medium.com/@its_ashworks">Medium</a>
              <a href="https://github.com/cranberryofdoom">Github</a>
              <a href="https://twitter.com/its_ashworks">Twitter</a>
              <a href="https://www.youtube.com/user/ashleyqian0">Youtube</a>
            </div>
          </div>
          <div className="link-catagory">
            <h2 className="catagory-title">✨ Play.</h2>
            <div className="links">
              <a href="/band">Animal Band</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
