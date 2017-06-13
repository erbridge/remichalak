import { mount } from 'enzyme';
import React from 'react';

import ProjectPage from './ProjectPage';

it('mounts without crashing', () => {
  mount(<ProjectPage content="<p>Some HTML</p>" images={[]} title="test" />);
});
