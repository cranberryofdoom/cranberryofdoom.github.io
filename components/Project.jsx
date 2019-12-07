import React, { Component } from "react";
import classNames from "classnames";
import "./Project.scss";
import ProjectGallery from "./ProjectGallery";

export default class Project extends Component {
  handleScrollLeft() {
    console.log(this.scrollerNode.offsetWidth);
    console.log(this.fullLengthNode.offsetWidth);
  }

  handleScrollRight() {
    console.log(this.iterationNode.offsetWidth());
  }
  render() {
    const { project, onClickImage } = this.props;
    return (
      <div className="project-component">
        <div className="project-summary">
          <h2>{project.name}</h2>
          <div className="project-description">{project.description}</div>
          {project.links && (
            <div className="links">
              {project.links.map(link => (
                <a target="blank" href={link.url}>
                  {link.cta}
                </a>
              ))}
            </div>
          )}
        </div>
        {project.gallery && (
          <div
            className={classNames("project-galleries", {
              inline: project.inline
            })}
          >
            {project.gallery.map(group => (
              <ProjectGallery
                gallery={group}
                onClickImage={onClickImage.bind(this)}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}
