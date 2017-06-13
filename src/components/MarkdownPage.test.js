import { mount } from 'enzyme';
import React from 'react';

import MarkdownPage from './MarkdownPage';

it('mounts without crashing', () => {
  mount(<MarkdownPage content="<p>Some HTML</p>" />);
});
