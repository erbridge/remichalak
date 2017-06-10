import { Parser } from 'html-to-react';
import React from 'react';

import rawAboutSection from '../pages/about.md';

const htmlParser = new Parser();

const aboutSection = htmlParser.parse(rawAboutSection.__content);

export const topRoutes = [
  {
    name: 'about',
    link: 'about',
    path: '/about',
    title: rawAboutSection.title,
    section: () => <div>{aboutSection}</div>,
  },
  {
    name: 'blog',
    link: 'blog',
    path: '/blog',
  },
  {
    name: 'home',
    link: 'home',
    path: '/',
    exact: true,
  },
  {
    name: 'shop',
    link: 'shop',
    path: 'https://society6.com/remichalak',
    external: true,
    newTab: true,
  },
  {
    name: 'contact',
    link: 'contact',
    path: '/contact',
    section: () => <div>contact</div>,
  },
];
