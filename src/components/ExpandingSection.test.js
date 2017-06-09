import React from 'react';
import { mount } from 'enzyme';

import ExpandingSection from './ExpandingSection';

it('mounts without crashing', () => {
  mount(<ExpandingSection />);
});
