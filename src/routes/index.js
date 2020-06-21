import about_1 from '../pages/about/1.mdx';
import about_2_1 from '../pages/about/2-1.mdx';
import about_2_2 from '../pages/about/2-2.mdx';
import contact from '../pages/contact.mdx';

export const topRoutes = [
  {
    name: 'about',
    link: 'About',
    path: '/',
    exact: true,
    title: about_1.title,
    content: [about_1, [about_2_1, about_2_2]],
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
    content: contact,
  },
];

export const mainRoutes = [];

export default [...topRoutes, ...mainRoutes];
