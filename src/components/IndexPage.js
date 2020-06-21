import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import routePropType from '../prop-types/routePropType';

class IndexPage extends Component {
  static propTypes = {
    routes: PropTypes.arrayOf(routePropType).isRequired,
  };

  render() {
    const { routes } = this.props;

    return (
      <div className="IndexPage">
        {routes.map(({ exact, path, title }, index) => (
          <div key={index} className="IndexPage__route">
            <NavLink to={path} exact={exact}>
              {title}
            </NavLink>
          </div>
        ))}
      </div>
    );
  }
}

export default IndexPage;
