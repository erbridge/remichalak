import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import ImageWithPlaceholder from './ImageWithPlaceholder';
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
    currentCarouselImageIndex: 0,
    carouselIsOpen: false,
  };

  openCarousel(index) {
    this.setState({ currentCarouselImageIndex: index, carouselIsOpen: true });
  }

  closeCarousel() {
    this.setState({ currentCarouselImageIndex: 0, carouselIsOpen: false });
  }

  goToNextCarouselImage() {
    const { images } = this.props;
    const { currentCarouselImageIndex, carouselIsOpen } = this.state;

    if (!carouselIsOpen) {
      return;
    }

    this.setState({
      currentCarouselImageIndex:
        (currentCarouselImageIndex + 1) % images.length,
    });
  }

  goToPreviousCarouselImage() {
    const { images } = this.props;
    const { currentCarouselImageIndex, carouselIsOpen } = this.state;

    if (!carouselIsOpen) {
      return;
    }

    this.setState({
      currentCarouselImageIndex:
        (images.length + currentCarouselImageIndex - 1) % images.length,
    });
  }

  goToCarouselImage(index) {
    const { carouselIsOpen } = this.state;

    if (!carouselIsOpen) {
      return;
    }

    this.setState({ currentCarouselImageIndex: index });
  }

  renderPreview({ alt, src }, index) {
    return (
      <div
        key={index}
        className={classnames('ProjectThumbnail__preview', {
          'ProjectThumbnail__preview--main': !index,
        })}
        onClick={() => this.openCarousel(index)}
      >
        <ImageWithPlaceholder
          className="ProjectThumbnail__image-container"
          src={src}
          alt={alt}
          extraImgProps={{ className: 'ProjectThumbnail__image' }}
          extraPlaceholderProps={{
            className: 'ProjectThumbnail__image-placeholder',
          }}
        />
      </div>
    );
  }

  renderImages() {
    const { images } = this.props;
    const { currentCarouselImageIndex, carouselIsOpen } = this.state;

    if (!images.length) {
      return null;
    }

    const [mainImage, ...otherImages] = images;

    return (
      <div className="ProjectThumbnail__preview-container">
        {this.renderPreview(mainImage, 0)}
        <div className="ProjectThumbnail__preview-row">
          {otherImages.map((image, index) =>
            this.renderPreview(image, index + 1),
          )}
        </div>
        <ModalGateway>
          {carouselIsOpen && (
            <Modal onClose={() => this.closeCarousel()}>
              <Carousel
                views={images}
                currentIndex={currentCarouselImageIndex}
              />
            </Modal>
          )}
        </ModalGateway>
      </div>
    );
  }

  render() {
    const { title } = this.props;

    return (
      <div className="ProjectThumbnail">
        {this.renderImages()}
        <h3 className="ProjectThumbnail__title">{title}</h3>
      </div>
    );
  }
}

export default ProjectThumbnail;
