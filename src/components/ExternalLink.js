import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ExternalLink extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    newTab: PropTypes.bool,
    to: PropTypes.string.isRequired,
  };

  render() {
    const { children, className, newTab, to } = this.props;

    return (
      <a
        className={className}
        href={to}
        target={newTab && '_blank'}
        rel={newTab && 'noopener noreferrer'}
      >
        {children}
      </a>
    );
  }
}

export default ExternalLink;
