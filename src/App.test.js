import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const setup = (state = null) => {
  const wrapper = shallow(<App />);
  if (state) wrapper.setState(state);
  return wrapper;
};

test('renders without error', () => {
  const wrapper = setup();
  expect(wrapper).toBeTruthy();
});
