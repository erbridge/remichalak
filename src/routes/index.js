import about from '../pages/about.md';
import aboutColumn1 from '../pages/about-column-1.md';
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
    path: '/',
    exact: true,
    navExact: true,
    title: about.title,
    content: about.__content,
    columnContent: [aboutColumn1.__content],
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
