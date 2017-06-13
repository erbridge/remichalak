import PropTypes from 'prop-types';
import React, { Component } from 'react';

import MarkdownPage from './MarkdownPage';

import './ProjectPage.css';

class ProjectPage extends Component {
  static propTypes = {
    content: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {
    const { content, images, title } = this.props;

    return (
      <div className="ProjectPage">
        <div className="ProjectPage__images">
          {images.map((src, index) =>
            <img
              key={index}
              className="ProjectPage__image"
              src={src}
              alt={title}
            />,
          )}
        </div>
        <MarkdownPage content={content} />
      </div>
    );
  }
}

export default ProjectPage;
