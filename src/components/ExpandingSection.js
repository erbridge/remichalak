import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './ExpandingSection.css';

export class ExpandingSection extends Component {
  static propTypes = {
    children: PropTypes.node,
    delayNextAnimation: PropTypes.bool,
    expand: PropTypes.bool,
  };

  state = {
    delayAnimation: false,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.expand !== this.props.expand) {
      this.setState({ delayAnimation: this.props.delayNextAnimation });
    }
  }

  render() {
    const { children, expand } = this.props;
    const { delayAnimation } = this.state;

    return (
      <div
        className={classnames('ExpandingSection', {
          'ExpandingSection--expanded': expand,
          'ExpandingSection--expanded--delayed': expand && delayAnimation,
        })}
      >
        <div className="ExpandingSection__content">{children}</div>
      </div>
    );
  }
}

export default ExpandingSection;
