import React from 'react';
import { mount } from 'enzyme';

import MarkdownPage from './MarkdownPage';

it('mounts without crashing', () => {
  mount(<MarkdownPage content="<p>Some HTML</p>" />);
});
