import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import ExpandingSection from './ExpandingSection';

it('mounts without crashing', () => {
  mount(<MemoryRouter><ExpandingSection /></MemoryRouter>);
});
