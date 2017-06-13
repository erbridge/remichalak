import about from '../pages/about.md';
import blog from '../pages/blog.md';
import contact from '../pages/contact.md';

import posts from '../posts';

export const blogRoutes = posts.map(({ __content, slug, title }) => ({
  path: `/blog/${encodeURI((slug || title).replace(/\s/g, '-'))}`,
  exact: true,
  title,
  content: __content,
}));

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
    exact: true,
    title: blog.title,
    content: blog.__content,
    routes: blogRoutes,
  },
  {
    name: 'home',
    link: 'home',
    path: '/',
    exact: true,
    navExact: true,
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
    title: contact.title,
    content: contact.__content,
  },
];

export const mainRoutes = blogRoutes;

export default [...topRoutes, ...mainRoutes];
