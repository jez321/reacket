import React from 'react';
import { shallow } from 'enzyme';
import TestUtil from '../../test/testUtil';
import Reacket from './Reacket.component';

const matches = require('../../data/testData.json');

const defaultProps = {
  matches,
};
const setup = (props = {}, state = null) => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = shallow(<Reacket {...setupProps} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

test('renders without error', () => {
  const wrapper = setup();
  expect(wrapper).toBeTruthy();
});

test('does not throw warning with expected props', () => {
  TestUtil.checkProps(Reacket, defaultProps);
});
