import React from 'react';

import erbridgeLogo from '../assets/misc/erbridge-logo.svg';

import ExternalLink from './ExternalLink';

import './Footer.css';

const Footer = () =>
  <div className="Footer">
    <div className="Footer__content">
      <div className="Footer__credit">
        built by{' '}
        <ExternalLink to="http://erbridge.co.uk/">
          <img
            className="Footer__credit-logo"
            src={erbridgeLogo}
            alt="erbridge"
          />
        </ExternalLink>
      </div>
    </div>
  </div>;

export default Footer;
