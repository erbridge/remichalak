import React from 'react';
import { mount } from 'enzyme';

import Header from './Header';

it('mounts without crashing', () => {
  mount(<Header />);
});
