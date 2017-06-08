import React from 'react';

import './Header.css';

const Header = () =>
  <div className="Header">
    <h1>remichalak</h1>
    <h2>artist</h2>
    <div className="Header__nav">
      <div className="Header__nav-link">about</div>
      <div className="Header__nav-link">blog</div>
      <div className="Header__nav-link--home">home</div>
      <div className="Header__nav-link">shop</div>
      <div className="Header__nav-link">contact</div>
    </div>
  </div>;

export default Header;
