import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './ProjectThumbnail.css';

class ProjectThumbnail extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
  };

  renderPreview(src, index) {
    const { title } = this.props;

    return (
      <div key={index} className="ProjectThumbnail__preview">
        <img className="ProjectThumbnail__image" src={src} alt={title} />
      </div>
    );
  }

  render() {
    const { images: [mainImage, ...images] } = this.props;

    return (
      <div className="ProjectThumbnail">
        {this.renderPreview(mainImage)}
        <div className="ProjectThumbnail__previews">
          {images.map((src, index) => this.renderPreview(src, index))}
        </div>
      </div>
    );
  }
}

export default ProjectThumbnail;
