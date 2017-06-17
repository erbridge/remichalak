import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';

it('mounts without crashing', () => {
  mount(
    <MemoryRouter>
      <ScrollToTop />
    </MemoryRouter>,
  );
});
