import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class IndexPage extends Component {
  static propTypes = {
    routes: PropTypes.arrayOf(
      PropTypes.shape({
        exact: PropTypes.bool,
        path: PropTypes.string.isRequired,
        strict: PropTypes.bool,
        title: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  render() {
    const { routes } = this.props;

    return (
      <div className="IndexPage">
        {routes.map(({ exact, path, strict, title }, index) =>
          <div key={index} className="IndexPage__route">
            <NavLink to={path} exact={exact} strict={strict}>{title}</NavLink>
          </div>,
        )}
      </div>
    );
  }
}

export default IndexPage;
