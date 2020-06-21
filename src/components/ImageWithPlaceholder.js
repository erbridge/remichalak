import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ImageLoader from 'react-load-image';
import './ImageWithPlaceholder.css';

class ImageWithPlaceholder extends Component {
  static propTypes = {
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    extraImgProps: PropTypes.object,
    extraPlaceholderProps: PropTypes.object,
    onError: PropTypes.func,
    onLoad: PropTypes.func,
    src: PropTypes.string.isRequired,
  };

  renderPlaceholder() {
    const { extraPlaceholderProps } = this.props;
    const { className } = extraPlaceholderProps || {};

    return (
      <span
        {...extraPlaceholderProps}
        className={classnames('ImageWithPlaceholder__placeholder', className)}
      />
    );
  }

  render() {
    const { alt, className, extraImgProps, onError, onLoad, src } = this.props;

    return (
      <ImageLoader
        className={classnames('ImageWithPlaceholder', className)}
        src={src}
        onError={onError}
        onLoad={onLoad}
      >
        <img alt={alt} {...extraImgProps} />
        {this.renderPlaceholder()}
        {this.renderPlaceholder()}
      </ImageLoader>
    );
  }
}

export default ImageWithPlaceholder;
