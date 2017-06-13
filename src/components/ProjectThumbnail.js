import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './ProjectThumbnail.css';

class ProjectThumbnail extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    linkTo: PropTypes.string.isRequired,
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
    const { images, linkTo, title } = this.props;

    if (!images.length) {
      return <Link className="ProjectThumbnail" to={linkTo}>{title}</Link>;
    }

    const [mainImage, ...otherImages] = images;

    return (
      <Link className="ProjectThumbnail" to={linkTo}>
        {this.renderPreview(mainImage)}
        <div className="ProjectThumbnail__previews">
          {otherImages.map((src, index) => this.renderPreview(src, index))}
        </div>
      </Link>
    );
  }
}

export default ProjectThumbnail;
