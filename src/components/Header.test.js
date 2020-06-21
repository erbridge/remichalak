import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

it('mounts without crashing', () => {
  mount(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );
});
