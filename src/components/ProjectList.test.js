import React from 'react';
import { mount } from 'enzyme';

import ProjectList from './ProjectList';

it('mounts without crashing', () => {
  mount(<ProjectList />);
});
