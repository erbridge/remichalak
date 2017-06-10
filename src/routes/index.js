import about from '../pages/about.md';

export const topRoutes = [
  {
    name: 'about',
    link: 'about',
    path: '/about',
    title: about.title,
    content: about.__content,
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
    content: '<div>contact</div>',
  },
];
