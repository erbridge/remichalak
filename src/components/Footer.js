import React from 'react';

import ExternalLink from './ExternalLink';

import './Footer.css';

const Footer = () =>
  <div className="Footer">
    <div className="Footer__content">
      <div className="Footer__credit">
        built by{' '}
        <ExternalLink to="http://erbridge.co.uk/">erbridge</ExternalLink>
      </div>
    </div>
  </div>;

export default Footer;
