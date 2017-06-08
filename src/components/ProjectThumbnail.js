import React from 'react';

import './ProjectThumbnail.css';

const ProjectThumbnail = () =>
  <div className="ProjectThumbnail">
    <div className="ProjectThumbnail__preview">
      <img
        className="ProjectThumbnail__image"
        src="https://placebear.com/g/1920/1080"
      />
    </div>
    <div className="ProjectThumbnail__previews">
      <div className="ProjectThumbnail__preview">
        <img
          className="ProjectThumbnail__image"
          src="https://placebear.com/g/1920/1080"
        />
      </div>
      <div className="ProjectThumbnail__preview">
        <img
          className="ProjectThumbnail__image"
          src="https://placebear.com/g/1920/1080"
        />
      </div>
      <div className="ProjectThumbnail__preview">
        <img
          className="ProjectThumbnail__image"
          src="https://placebear.com/g/1920/1080"
        />
      </div>
    </div>
  </div>;

export default ProjectThumbnail;
