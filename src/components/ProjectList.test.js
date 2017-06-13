import { mount } from 'enzyme';
import React from 'react';

import ProjectList from './ProjectList';

it('mounts without crashing', () => {
  mount(<ProjectList projects={[]} />);
});
