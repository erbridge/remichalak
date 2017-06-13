import { mount, shallow } from 'enzyme';
import React from 'react';

import Body from './Body';

it('mounts without crashing', () => {
  mount(<Body />);
});

it('renders its children', () => {
  const child = <div>A test child!</div>;
  const wrapper = shallow(<Body>{child}</Body>);

  expect(wrapper).toContainReact(child);
});
