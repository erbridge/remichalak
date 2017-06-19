import about from '../pages/about.md';
// import blog from '../pages/blog.md';
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
    link: 'About',
    path: '/about',
    title: about.title,
    content: about.__content,
  },
  // {
  //   name: 'blog',
  //   link: 'Blog',
  //   path: '/blog',
  //   exact: true,
  //   title: blog.title,
  //   content: blog.__content,
  //   routes: blogRoutes,
  // },
  {
    name: 'home',
    link: 'Home',
    path: '/',
    exact: true,
    navExact: true,
  },
  {
    name: 'shop',
    link: 'Shop',
    path: 'https://society6.com/remichalak',
    external: true,
  },
  {
    name: 'contact',
    link: 'Contact',
    path: '/contact',
    title: contact.title,
    content: contact.__content,
  },
];

export const mainRoutes = [...blogRoutes];

export default [...topRoutes, ...mainRoutes];
