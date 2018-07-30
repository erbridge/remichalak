import about_1 from '../pages/about/1.md';
import about_2_1 from '../pages/about/2-1.md';
import about_2_2 from '../pages/about/2-2.md';
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
    title: about_1.title,
    content: [about_1.__content, [about_2_1.__content, about_2_2.__content]],
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
