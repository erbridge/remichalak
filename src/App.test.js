import { mount } from 'enzyme';
import React from 'react';
import App from './App';

jest.mock('./routes');

it('mounts without crashing', () => {
  mount(<App />);
});
