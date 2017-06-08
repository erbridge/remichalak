import React from 'react';
import { mount } from 'enzyme';

import ProjectThumbnail from './ProjectThumbnail';

it('mounts without crashing', () => {
  mount(<ProjectThumbnail />);
});
