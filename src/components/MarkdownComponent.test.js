import React from 'react';
import { mount } from 'enzyme';

import MarkdownComponent from './MarkdownComponent';

it('mounts without crashing', () => {
  mount(<MarkdownComponent content="<p>Some HTML</p>" />);
});
