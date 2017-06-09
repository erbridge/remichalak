import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './ExpandingSection.css';

export class ExpandingSection extends Component {
  static propTypes = {
    children: PropTypes.node,
    expand: PropTypes.bool,
  };

  render() {
    const { children, expand } = this.props;

    return (
      <div
        className={classnames('ExpandingSection', {
          'ExpandingSection--expanded': expand,
        })}
      >
        {children}
      </div>
    );
  }
}

export default ExpandingSection;
