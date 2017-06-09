import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import ExpandingSection from './ExpandingSection';

it('mounts without crashing', () => {
  mount(<MemoryRouter><ExpandingSection /></MemoryRouter>);
});
