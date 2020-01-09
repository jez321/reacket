import React from 'react';
import { shallow } from 'enzyme';
import TestUtil from './test/testUtil';
import Reacket from './index';
import Round from './components/Round/Round.component';
import RoundHeader from './components/RoundHeader/RoundHeader.component';

const matches = require('./data/testData.json');

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

test('render correct number of rounds and round headers', () => {
  const wrapper = setup();
  expect(wrapper.find(RoundHeader).length).toEqual(3);
  expect(wrapper.find(Round).length).toEqual(3);
});

test('does not throw warning with expected props', () => {
  TestUtil.checkProps(Reacket, defaultProps);
});
