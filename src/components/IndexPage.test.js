import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import IndexPage from './IndexPage';

it('mounts without crashing', () => {
  mount(
    <MemoryRouter>
      <IndexPage routes={[{ path: '/test', title: 'test' }]} />
    </MemoryRouter>,
  );
});
