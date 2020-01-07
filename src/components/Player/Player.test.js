import React, * as ReactAll from 'react';
import { shallow } from 'enzyme';
import TestUtil from '../../test/testUtil';
import Player from './Player.component';

const defaultProps = {
  id: 1,
  name: 'Sample player',
  seed: 2,
  score: 1,
  winner: false,
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

test('calls setHighlightedPlayer with correct id when mouseEntered', (done) => {
  jest.spyOn(ReactAll, 'useContext').mockImplementation(() => ({
    highlightedPlayer: null,
    setHighlightedPlayer: (id) => {
      expect(id).toEqual(1);
      done();
    },
  }));
  const wrapper = setup();
  wrapper.find('.player').simulate('mouseEnter');
});

test('is not displayed as winner when winner is false', () => {
  const wrapper = setup();
  expect(wrapper.find('.winner').exists()).toBeFalsy();
});

test('is displayed as winner when winner is true', () => {
  const wrapper = setup({
    winner: true,
  });
  expect(wrapper.find('.winner').exists()).toBeTruthy();
});

test('does not throw warning with expected props', () => {
  TestUtil.checkProps(Player, defaultProps);
});
