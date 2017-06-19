import classnames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

import assets from '../assets';
import { topRoutes } from '../routes';

import ExternalLink from './ExternalLink';

import './Header.css';

const Header = () =>
  <div className="Header">
    <div className="Header__content">
      <h1 className="Header__title">
        <img src={assets['/assets/header/title.png']} alt="R. E. Michalak" />
      </h1>
      <div className="Header__nav">
        {topRoutes.map(
          (
            {
              exact,
              external,
              link,
              name,
              navExact,
              path,
              replaceCurrentTab,
              strict,
            },
            index,
          ) => {
            const LinkComponent = external ? ExternalLink : NavLink;

            const extraLinkProps = {};

            if (external) {
              extraLinkProps.replaceCurrentTab = replaceCurrentTab;
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
                  <img
                    className="Header__nav-link__anchor-image"
                    src={assets[`/assets/header/${name}.png`]}
                    alt={link}
                  />
                </LinkComponent>
              </div>
            );
          },
        )}
      </div>
    </div>
  </div>;

export default Header;
