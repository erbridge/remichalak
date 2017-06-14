import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Lightbox from 'react-images';

import './ProjectThumbnail.css';

class ProjectThumbnail extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        alt: PropTypes.string.isRequired,
        caption: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
      }),
    ).isRequired,
    title: PropTypes.string.isRequired,
  };

  state = {
    currentLightboxImageIndex: 0,
    lightboxIsOpen: false,
  };

  openLightbox(index) {
    this.setState({ currentLightboxImageIndex: index, lightboxIsOpen: true });
  }

  closeLightbox() {
    this.setState({ currentLightboxImageIndex: 0, lightboxIsOpen: false });
  }

  goToNextLightboxImage() {
    const { images } = this.props;
    const { currentLightboxImageIndex, lightboxIsOpen } = this.state;

    if (!lightboxIsOpen) {
      return;
    }

    this.setState({
      currentLightboxImageIndex:
        (currentLightboxImageIndex + 1) % images.length,
    });
  }

  goToPreviousLightboxImage() {
    const { images } = this.props;
    const { currentLightboxImageIndex, lightboxIsOpen } = this.state;

    if (!lightboxIsOpen) {
      return;
    }

    this.setState({
      currentLightboxImageIndex:
        (images.length + currentLightboxImageIndex - 1) % images.length,
    });
  }

  goToLightboxImage(index) {
    const { lightboxIsOpen } = this.state;

    if (!lightboxIsOpen) {
      return;
    }

    this.setState({ currentLightboxImageIndex: index });
  }

  renderPreview({ alt, src }, index) {
    return (
      <div
        key={index}
        className="ProjectThumbnail__preview"
        onClick={() => this.openLightbox(index)}
      >
        <img
          className="ProjectThumbnail__image"
          src={src}
          alt={alt}
        />
      </div>
    );
  }

  renderImages() {
    const { images } = this.props;
    const { currentLightboxImageIndex, lightboxIsOpen } = this.state;

    if (!images.length) {
      return null;
    }

    const [mainImage, ...otherImages] = images;

    return [
      this.renderPreview(mainImage, 0),
      <div key="previews" className="ProjectThumbnail__previews">
        {otherImages.map((image, index) =>
          this.renderPreview(image, index + 1),
        )}
      </div>,
      <Lightbox
        key="lightbox"
        images={images}
        currentImage={currentLightboxImageIndex}
        isOpen={lightboxIsOpen}
        showThumbnails={images.length > 1}
        showImageCount={images.length > 1}
        onClickNext={() => this.goToNextLightboxImage()}
        onClickPrev={() => this.goToPreviousLightboxImage()}
        onClickThumbnail={index => this.goToLightboxImage(index)}
        onClose={() => this.closeLightbox()}
      />,
    ];
  }

  render() {
    const { title } = this.props;

    return (
      <div className="ProjectThumbnail">
        {this.renderImages()}
        <div className="ProjectThumbnail__title">{title}</div>
      </div>
    );
  }
}

export default ProjectThumbnail;
