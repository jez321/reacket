import React from 'react';
import { shallow } from 'enzyme';
import TestUtil from '../../test/testUtil';
import RoundHeader from './RoundHeader.component';

const defaultProps = {
  round: 1,
  totalRounds: 3,
};
const setup = (props = {}, state = null) => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = shallow(<RoundHeader {...setupProps} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

test('renders without error', () => {
  const wrapper = setup();
  expect(wrapper).toBeTruthy();
});

test('does not throw warning with expected props', () => {
  TestUtil.checkProps(RoundHeader, defaultProps);
});
