import { mount } from 'enzyme';
import React from 'react';

import ProjectThumbnail from './ProjectThumbnail';

it('mounts without crashing', () => {
  mount(<ProjectThumbnail images={[]} linkTo="/test" title="test" />);
});
