import PropTypes from 'prop-types';
import React, { Component } from 'react';

import ProjectThumbnail from './ProjectThumbnail';

import './ProjectList.css';

class ProjectList extends Component {
  static propTypes = {
    projects: PropTypes.arrayOf(
      PropTypes.shape({
        images: PropTypes.arrayOf(PropTypes.string),
        path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }),
    ),
  };

  render() {
    const { projects } = this.props;

    return (
      <div className="ProjectList">
        {projects.map(({ images, path, title }, index) =>
          <ProjectThumbnail
            key={index}
            images={images}
            path={path}
            title={title}
          />,
        )}
      </div>
    );
  }
}

export default ProjectList;
