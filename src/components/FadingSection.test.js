import { mount } from 'enzyme';
import React from 'react';

import FadingSection from './FadingSection';

it('mounts without crashing', () => {
  mount(<FadingSection />);
});
