import React from 'react';

export const topRoutes = [
  {
    name: 'test-internal',
    link: 'Test Internal',
    path: '/test',
    exact: true,
    title: 'Test Internal Title',
    content: [() => <div>1</div>, [() => <div>2-1</div>, () => <div>2-2</div>]],
  },
  {
    name: 'test-external',
    link: 'Test External',
    path: 'http://example.com',
    external: true,
  },
];

export const mainRoutes = [];

export default [...topRoutes, ...mainRoutes];
