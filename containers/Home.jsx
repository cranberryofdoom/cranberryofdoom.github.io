import React, { Component } from "react";
import smoothScroll from "smoothscroll";
import Band from "./Band";
import "./Home.scss";
import Sprinkles from "../components/Sprinkles";
import diyProjects from "../fixtures/projects/diy";
import chameledProjects from "../fixtures/projects/chameled";
import animalBandProjects from "../fixtures/projects/animalBand";
import Navbar from "../components/Navbar";

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
        <Navbar onClick={this.handleScrollTo} />
        <div className="sections">
          <section className="full">
            <Sprinkles />
            <div className="section-content">
              <header>
                <h1 className="huge">Ashley Qian</h1>
                <div className="subheader huge">
                  <a
                    onClick={this.handleScrollTo.bind(this, "work")}
                    className="mint"
                    href="#work"
                  >
                    Software engineer
                  </a>{" "}
                  by day,{" "}
                  <a
                    onClick={this.handleScrollTo.bind(this, "make")}
                    className="mint"
                    href="#make"
                  >
                    artist
                  </a>{" "}
                  by night,{" "}
                  <a
                    className="mint"
                    onClick={this.handleScrollTo.bind(this, "play")}
                    href="#play"
                  >
                    kid
                  </a>{" "}
                  at heart.
                </div>
              </header>
            </div>
          </section>
          <section
            className="panel"
            ref={node => {
              this.workSection = node;
            }}
          >
            <div className="section-content full white">
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
              {diyProjects.map(project => (
                <div className="project">
                  <div className="project-summary">
                    <h2>{project.name}</h2>
                    <div className="project-description">
                      {project.description}
                    </div>
                    {project.link && (
                      <a target="blank" href={project.link}>
                        Visit Website →
                      </a>
                    )}
                  </div>
                  <div className="project-iterations">
                    {project.iterations.map(iteration => (
                      <article>
                        <div className="project-images">
                          {iteration.images.map(image => (
                            <div className="project-image">
                              <div className="project-date">
                                {iteration.date.format("YYYY")}{" "}
                                {image.description}
                              </div>
                              <img
                                onClick={this.handleClickImage.bind(
                                  this,
                                  image.src
                                )}
                                src={image.src}
                              />
                            </div>
                          ))}
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section
            ref={node => {
              this.makeSection = node;
            }}
            className="panel"
          >
            <div className="section-content full white">
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
                {chameledProjects.map(project => (
                  <div className="project">
                    <div className="project-summary">
                      <h2>{project.name}</h2>
                      <div className="project-description">
                        {project.description}
                      </div>
                      {project.link && (
                        <a target="blank" href={project.link}>
                          View Code →
                        </a>
                      )}
                    </div>
                    <div className="project-gallery">
                      {project.gallery.map(group => (
                        <article>
                          <div className="project-date">
                            {group.description}
                          </div>
                          <div className="project-images">
                            {group.images.map(image => (
                              <img
                                onClick={this.handleClickImage.bind(
                                  this,
                                  image
                                )}
                                src={image}
                              />
                            ))}
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                ))}
                {animalBandProjects.map(project => (
                  <div className="project">
                    <div className="project-summary">
                      <h2>{project.name}</h2>
                      <div className="project-description">
                        {project.description}
                      </div>
                      {project.link && (
                        <a target="blank" href={project.link}>
                          View Code →
                        </a>
                      )}
                    </div>
                    <div className="project-gallery">
                      {project.gallery.map(group => (
                        <article>
                          <div className="project-date">
                            {group.description}
                          </div>
                          <div className="project-images">
                            {group.images.map(image => (
                              <img
                                onClick={this.handleClickImage.bind(
                                  this,
                                  image
                                )}
                                src={image}
                              />
                            ))}
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section
            ref={node => {
              this.playSection = node;
            }}
            className="panel"
          >
            <div className="section-content full white">
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
