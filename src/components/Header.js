import classnames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { topRoutes } from '../routes';

import ExternalLink from './ExternalLink';

import './Header.css';

const Header = () =>
  <div className="Header">
    <div className="Header__content">
      <h1>remichalak</h1>
      <h2>artist</h2>
      <div className="Header__nav">
        {topRoutes.map(
          (
            { exact, external, link, name, navExact, newTab, path, strict },
            index,
          ) => {
            const LinkComponent = external ? ExternalLink : NavLink;

            const extraLinkProps = {};

            if (external) {
              extraLinkProps.newTab = newTab;
            } else {
              extraLinkProps.activeClassName =
                'Header__nav-link__anchor--active';
              extraLinkProps.exact = exact && navExact;
              extraLinkProps.strict = strict;
            }

            return (
              <div
                key={index}
                className={classnames(
                  'Header__nav-link',
                  `Header__nav-link--${name}`,
                )}
              >
                <LinkComponent
                  className="Header__nav-link__anchor"
                  to={path}
                  {...extraLinkProps}
                >
                  {link}
                </LinkComponent>
              </div>
            );
          },
        )}
      </div>
    </div>
  </div>;

export default Header;
