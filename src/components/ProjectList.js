import React from 'react';

import ProjectThumbnail from './ProjectThumbnail';

import './ProjectList.css';

const ProjectList = () =>
  <div className="ProjectList">
    {/* FIXME: Take an array as a property and generate this list. */}
    <ProjectThumbnail />
    <ProjectThumbnail />
    <ProjectThumbnail />
    <ProjectThumbnail />
  </div>;

export default ProjectList;
