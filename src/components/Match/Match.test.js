import React from 'react';
import { shallow } from 'enzyme';
import TestUtil from '../../test/testUtil';
import Match from './Match.component';
import Player from '../Player/Player.component';

const defaultProps = {
  id: 1,
  players: [
    {
      id: 1,
      name: 'Player one',
      seed: 1,
    },
    {
      id: 2,
      name: 'Player two',
      seed: 2,
    },
  ],
  score: [1, 0],
};
const setup = (props = {}, state = null) => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = shallow(<Match {...setupProps} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

test('renders without error', () => {
  const wrapper = setup();
  expect(wrapper).toBeTruthy();
});

test('renders two players', () => {
  const wrapper = setup();
  expect(wrapper.find(Player).length).toEqual(2);
});

test('does not throw warning with expected props', () => {
  TestUtil.checkProps(Match, defaultProps);
});
