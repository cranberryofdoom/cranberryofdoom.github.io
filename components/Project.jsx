import React from "react";
import "./Project.scss";

export default function Project({ project, onClickImage }) {
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
      {project.iterations && (
        <div className="project-iterations">
          {project.iterations.map(iteration => (
            <article>
              <div className="project-images">
                {iteration.images.map(image => (
                  <div className="project-image">
                    <h5>
                      {iteration.date.format("YYYY")} {image.description}
                    </h5>
                    <img
                      onClick={onClickImage.bind(this, image.src)}
                      src={image.src}
                    />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      )}
      {project.gallery && (
        <div className="project-gallery">
          {project.gallery.map(group => (
            <article>
              <h5>{group.description}</h5>
              <div className="project-images">
                {group.images.map(image => (
                  <div className="project-image">
                    <img
                      onClick={onClickImage.bind(this, image.src)}
                      src={image.src}
                    />
                    {image.caption && (
                      <div className="project-caption">{image.caption}</div>
                    )}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
