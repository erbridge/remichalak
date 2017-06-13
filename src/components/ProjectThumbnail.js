import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './ProjectThumbnail.css';

class ProjectThumbnail extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.string),
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
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
    const { images: [mainImage, ...images], path } = this.props;

    return (
      <Link className="ProjectThumbnail" to={path}>
        {this.renderPreview(mainImage)}
        <div className="ProjectThumbnail__previews">
          {images.map((src, index) => this.renderPreview(src, index))}
        </div>
      </Link>
    );
  }
}

export default ProjectThumbnail;
