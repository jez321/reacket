import React from 'react';
import { shallow } from 'enzyme';
import TestUtil from '../../test/testUtil';
import Round from './Round.component';

const defaultProps = {
  matches: [
    {
      id: 6,
      round: 2,
      match: 2,
      players: [
        {
          id: 6,
          name: 'Mr. Black',
          seed: 6,
        },
        {
          id: 7,
          name: 'Mr. Red',
          seed: 7,
        },
      ],
      score: [
        0,
        1,
      ],
    },
    {
      id: 7,
      round: 3,
      match: 1,
      players: [
        {
          id: 4,
          name: 'Mr. Blue',
          seed: 4,
        },
        {
          id: 7,
          name: 'Mr. Red',
          seed: 7,
        },
      ],
      score: [
        0,
        1,
      ],
    },
  ],
  round: 1,
};
const setup = (props = {}, state = null) => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = shallow(<Round {...setupProps} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

test('renders without error', () => {
  const wrapper = setup();
  expect(wrapper).toBeTruthy();
});

test('does not throw warning with expected props', () => {
  TestUtil.checkProps(Round, defaultProps);
});
