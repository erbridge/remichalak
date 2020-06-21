import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './FadingSection.css';

export class FadingSection extends Component {
  static propTypes = {
    children: PropTypes.node,
    delayNextAnimation: PropTypes.bool,
    visible: PropTypes.bool,
  };

  state = {
    delayAnimation: false,
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.visible !== this.props.visible) {
      this.setState({ delayAnimation: this.props.delayNextAnimation });
    }
  }

  render() {
    const { children, visible } = this.props;
    const { delayAnimation } = this.state;

    return (
      <div
        className={classnames('FadingSection', {
          'FadingSection--visible': visible,
          'FadingSection--visible--delayed': visible && delayAnimation,
        })}
      >
        <div className="FadingSection__content">{children}</div>
      </div>
    );
  }
}

export default FadingSection;
