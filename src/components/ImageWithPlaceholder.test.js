import { mount } from 'enzyme';
import React from 'react';

import ImageWithPlaceholder from './ImageWithPlaceholder';

it('mounts without crashing', () => {
  mount(<ImageWithPlaceholder src="/test.jpg" alt="test" />);
});
