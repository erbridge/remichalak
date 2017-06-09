import classnames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import { topRoutes } from '../routes';

import './Header.css';

const Header = () =>
  <div className="Header">
    <h1>remichalak</h1>
    <h2>artist</h2>
    <div className="Header__nav">
      {topRoutes.map(({ external, link, name, path }, index) => {
        const linkWrapper = external
          ? <a className="Header__nav-link__anchor" href={path} target="_blank">
              {link}
            </a>
          : <Link className="Header__nav-link__anchor" to={path}>
              {link}
            </Link>;

        return (
          <div
            key={index}
            className={classnames(
              'Header__nav-link',
              `Header__nav-link--${name}`,
            )}
          >
            {linkWrapper}
          </div>
        );
      })}
    </div>
  </div>;

export default Header;
