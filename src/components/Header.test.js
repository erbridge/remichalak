import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import Header from './Header';

it('mounts without crashing', () => {
  mount(<MemoryRouter><Header /></MemoryRouter>);
});
