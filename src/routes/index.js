import React from 'react';

export const topRoutes = [
  {
    name: 'about',
    link: 'about',
    path: '/about',
    section: () => <div>about</div>,
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
