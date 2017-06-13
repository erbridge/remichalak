import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Lightbox from 'react-images';

import MarkdownPage from './MarkdownPage';

import './ProjectPage.css';

class ProjectPage extends Component {
  static propTypes = {
    content: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
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

  render() {
    const { content, images, title } = this.props;
    const { currentLightboxImageIndex, lightboxIsOpen } = this.state;

    return (
      <div className="ProjectPage">
        <div className="ProjectPage__images">
          {images.map((src, index) =>
            <img
              key={index}
              className="ProjectPage__image"
              src={src}
              alt={title}
              onClick={() => this.openLightbox(index)}
            />,
          )}
        </div>
        <MarkdownPage content={content} />
        <Lightbox
          images={images.map(src => ({ src }))}
          currentImage={currentLightboxImageIndex}
          isOpen={lightboxIsOpen}
          showThumbnails
          onClickNext={() => this.goToNextLightboxImage()}
          onClickPrev={() => this.goToPreviousLightboxImage()}
          onClickThumbnail={index => this.goToLightboxImage(index)}
          onClose={() => this.closeLightbox()}
        />
      </div>
    );
  }
}

export default ProjectPage;
