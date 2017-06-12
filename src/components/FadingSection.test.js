import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import FadingSection from './FadingSection';

it('mounts without crashing', () => {
  mount(<MemoryRouter><FadingSection /></MemoryRouter>);
});
