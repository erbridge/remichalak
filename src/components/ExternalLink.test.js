import { mount } from 'enzyme';
import React from 'react';

import ExternalLink from './ExternalLink';

it('mounts without crashing', () => {
  mount(<ExternalLink to="http://example.com/" />);
});
