import React from "react";
import "./ProjectGallery.scss";

export default function ProjectGallery({ gallery, onClickImage }) {
  return (
    <article className="project-gallery-component">
      <h5>{gallery.description}</h5>
      <div className="project-images">
        <div className="project-images-wrapper">
          {gallery.images.map(image => (
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
      </div>
    </article>
  );
}
