import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './Body.css';

export class Body extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;

    return (
      <div className="Body">
        <div className="Body__content">{children}</div>
      </div>
    );
  }
}

export default Body;
