import { shallow } from 'enzyme';
import React from 'react';
import routes from '../routes';
import Head from './Head';

it('renders correctly', () => {
  expect(shallow(<Head routes={routes} />)).toMatchSnapshot();
});
