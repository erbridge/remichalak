import { mount } from 'enzyme';
import React from 'react';

import App from './App';

it('mounts without crashing', () => {
  mount(<App />);
});
