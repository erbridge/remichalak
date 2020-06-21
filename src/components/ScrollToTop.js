import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import ScrollToTopButton from 'react-scroll-up';

import arrow from '../assets/misc/arrow.png';

import './ScrollToTop.css';

class ScrollToTop extends Component {
  static propTypes = {
    location: PropTypes.any.isRequired,
  };

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      if (this.buttonNode && this.buttonNode.handleClick) {
        this.buttonNode.handleClick();
      } else {
        window.scrollTo(0, 0);
      }
    }
  }

  render() {
    return (
      <ScrollToTopButton
        ref={(node) => {
          this.buttonNode = node;
        }}
        showUnder={200}
        style={{
          position: 'fixed',
          bottom: 15,
          right: 15,
          cursor: 'pointer',
          transitionDuration: '250ms',
        }}
      >
        <img className="ScrollToTop" src={arrow} alt="Scroll to Top" />
      </ScrollToTopButton>
    );
  }
}

export default withRouter(ScrollToTop);
