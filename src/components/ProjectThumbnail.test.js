import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import ProjectThumbnail from './ProjectThumbnail';

it('mounts without crashing', () => {
  mount(
    <MemoryRouter>
      <ProjectThumbnail images={[]} linkTo="/test" title="test" />
    </MemoryRouter>,
  );
});
