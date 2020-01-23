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

test('renders correct rounder header for normal round', () => {
  const wrapper = setup({
    round: 2,
    totalRounds: 5,
  });
  expect(wrapper.find('.reacket-round-header').text()).toEqual('Round 2');
});

test('renders correct rounder header for semi-finals', () => {
  const wrapper = setup({
    round: 4,
    totalRounds: 5,
  });
  expect(wrapper.find('.reacket-round-header').text()).toEqual('Semi-finals');
});

test('renders correct rounder header for finals', () => {
  const wrapper = setup({
    round: 5,
    totalRounds: 5,
  });
  expect(wrapper.find('.reacket-round-header').text()).toEqual('Finals');
});

test('does not throw warning with expected props', () => {
  TestUtil.checkProps(RoundHeader, defaultProps);
});
