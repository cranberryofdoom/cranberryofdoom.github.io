import React, { Component } from "react";
import smoothScroll from "smoothscroll";
import Band from "./Band";
import "./Home.scss";
import diyProjects from "../fixtures/projects/diy";
import chameledProjects from "../fixtures/projects/chameled";
import animalBandProjects from "../fixtures/projects/animalBand";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import Project from "../components/Project";
import Modal from "../components/Modal";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedImgSrc: null
    };
  }

  handleClickImage(src) {
    this.setState({
      focusedImgSrc: src
    });
  }

  handleCloseImage() {
    this.setState({ focusedImgSrc: null });
  }

  handleScrollTo(link) {
    const workSection = this.workSection;
    const makeSection = this.makeSection;
    const playSection = this.playSection;
    switch (link) {
      case "work":
        if (workSection) {
          smoothScroll(workSection);
        }
        break;
      case "make":
        if (makeSection) {
          smoothScroll(makeSection);
        }
        break;
      case "play":
        if (playSection) {
          smoothScroll(playSection);
        }
        break;
      default:
        break;
    }
  }

  render() {
    const { focusedImgSrc } = this.state;
    return (
      <div className="home-container">
        <Modal
          show={Boolean(focusedImgSrc)}
          onClick={this.handleCloseImage.bind(this)}
        >
          <div
            className="enlarged-image"
            style={{ backgroundImage: `url(${focusedImgSrc})` }}
          />
        </Modal>
        <Navbar onClick={this.handleScrollTo.bind(this)} />
        <div className="sections">
          <Landing onClick={this.handleScrollTo.bind(this)} />
          <section
            ref={node => {
              this.workSection = node;
            }}
          >
            <div className="section-content full">
              <header>
                <h1>💻 Work</h1>
                <div className="links">
                  <a href="https://github.com/cranberryofdoom">Github</a>
                  <a href="https://www.linkedin.com/in/ashleyqian/">LinkedIn</a>
                  <a href="https://app.box.com/s/kb9fo3j7d3nawesy5dvc">
                    Resume
                  </a>
                </div>
              </header>
              <div className="projects">
                {diyProjects.map((project, index) => (
                  <Project
                    key={index}
                    project={project}
                    onClickImage={this.handleClickImage.bind(this)}
                  />
                ))}
              </div>
            </div>
          </section>
          <section
            ref={node => {
              this.makeSection = node;
            }}
          >
            <div className="section-content full">
              <header>
                <h1>🎨 Make</h1>
                <div className="links">
                  <a href="https://www.instagram.com/cranberryofdoom/">
                    Instagram
                  </a>
                  <a href="https://twitter.com/its_ashworks">Twitter</a>
                  <a href="https://medium.com/@its_ashworks">Medium</a>
                  <a href="https://www.youtube.com/user/ashleyqian0">Youtube</a>
                </div>
              </header>
              <div className="projects">
                {chameledProjects.map((project, index) => (
                  <Project
                    key={index}
                    project={project}
                    onClickImage={this.handleClickImage.bind(this)}
                  />
                ))}
                {animalBandProjects.map((project, index) => (
                  <Project
                    key={index}
                    project={project}
                    onClickImage={this.handleClickImage.bind(this)}
                  />
                ))}
              </div>
            </div>
          </section>
          <section
            ref={node => {
              this.playSection = node;
            }}
          >
            <div className="section-content full">
              <header>
                <h1>✨ Play</h1>
              </header>
              <Band />
            </div>
          </section>
        </div>
      </div>
    );
  }
}
