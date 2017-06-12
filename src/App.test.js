import React from 'react';
import { mount } from 'enzyme';

import App from './App';

jest.mock('./posts');

it('mounts without crashing', () => {
  mount(<App />);
});
