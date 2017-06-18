import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import ScrollToTopButton from 'react-scroll-up';

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
        ref={node => {
          this.buttonNode = node;
        }}
        showUnder={200}
        style={{
          position: 'fixed',
          bottom: 10,
          right: '50%',
          cursor: 'pointer',
          transform: 'translateX(50%)',
          transitionDuration: '250ms',
        }}
      >
        <div className="ScrollToTop">↑</div>
      </ScrollToTopButton>
    );
  }
}

export default withRouter(ScrollToTop);
