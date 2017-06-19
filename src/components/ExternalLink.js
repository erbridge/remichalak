import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ExternalLink extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    replaceCurrentTab: PropTypes.bool,
    to: PropTypes.string.isRequired,
  };

  render() {
    const { children, className, replaceCurrentTab, to } = this.props;

    return (
      <a
        className={className}
        href={to}
        target={!replaceCurrentTab && '_blank'}
        rel={!replaceCurrentTab && 'noopener noreferrer'}
      >
        {children}
      </a>
    );
  }
}

export default ExternalLink;
