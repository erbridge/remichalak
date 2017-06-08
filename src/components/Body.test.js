import React from 'react';
import { mount } from 'enzyme';

import Body from './Body';

it('mounts without crashing', () => {
  mount(<Body />);
});
