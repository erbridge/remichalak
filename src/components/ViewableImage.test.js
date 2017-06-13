import { mount } from 'enzyme';
import React from 'react';

import ViewableImage from './ViewableImage';

it('mounts without crashing', () => {
  mount(<ViewableImage src="/test.jpg" alt="test" />);
});
