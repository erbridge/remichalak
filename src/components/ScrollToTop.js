import PropTypes from 'prop-types';
import { Component } from 'react';
import { withRouter } from 'react-router';

class ScrollToTop extends Component {
  static propTypes = {
    location: PropTypes.any.isRequired,
  };

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }
}

export default withRouter(ScrollToTop);
