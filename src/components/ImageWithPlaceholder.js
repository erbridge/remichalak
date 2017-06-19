import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ImageWithPlaceholderLoader from 'react-imageloader';

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
      <ImageWithPlaceholderLoader
        className={classnames('ImageWithPlaceholder', className)}
        src={src}
        imgProps={{ alt, ...extraImgProps }}
        preloader={() => this.renderPlaceholder()}
        onError={onError}
        onLoad={onLoad}
      >
        {this.renderPlaceholder()}
      </ImageWithPlaceholderLoader>
    );
  }
}

export default ImageWithPlaceholder;
