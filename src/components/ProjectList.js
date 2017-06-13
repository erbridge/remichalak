import PropTypes from 'prop-types';
import React, { Component } from 'react';

import ProjectThumbnail from './ProjectThumbnail';

import './ProjectList.css';

class ProjectList extends Component {
  static propTypes = {
    projects: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string),
      }),
    ),
  };

  render() {
    const { projects } = this.props;

    return (
      <div className="ProjectList">
        {projects.map(({ images, title }, index) =>
          <ProjectThumbnail key={index} title={title} images={images} />,
        )}
      </div>
    );
  }
}

export default ProjectList;
