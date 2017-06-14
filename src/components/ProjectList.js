import PropTypes from 'prop-types';
import React, { Component } from 'react';

import ProjectThumbnail from './ProjectThumbnail';

import './ProjectList.css';

class ProjectList extends Component {
  static propTypes = {
    projects: PropTypes.arrayOf(
      PropTypes.shape({
        images: PropTypes.arrayOf(
          PropTypes.shape({
            alt: PropTypes.string.isRequired,
            caption: PropTypes.string.isRequired,
            src: PropTypes.string.isRequired,
          }),
        ),
        title: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  render() {
    const { projects } = this.props;

    return (
      <div className="ProjectList">
        {projects.map(({ images, path, title }, index) =>
          <ProjectThumbnail key={index} images={images || []} title={title} />,
        )}
      </div>
    );
  }
}

export default ProjectList;
