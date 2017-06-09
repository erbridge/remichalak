import React from 'react';
import { mount } from 'enzyme';

import ExternalLink from './ExternalLink';

it('mounts without crashing', () => {
  mount(<ExternalLink to="http://example.com/" />);
});
