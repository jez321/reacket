import React from 'react';
import { shallow } from 'enzyme';
import TestUtil from '../../test/testUtil';
import Player from './Player.component';

const defaultProps = {
  id: 1,
  name: 'Sample player',
  seed: 2,
  score: 1,
  winner: true,
};
const setup = (props = {}, state = null) => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = shallow(<Player {...setupProps} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

test('renders without error', () => {
  const wrapper = setup();
  expect(wrapper).toBeTruthy();
});

test('does not throw warning with expected props', () => {
  TestUtil.checkProps(Player, defaultProps);
});
