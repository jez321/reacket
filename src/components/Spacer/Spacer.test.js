import React from 'react';
import { shallow } from 'enzyme';
import TestUtil from '../../test/testUtil';
import Spacer from './Spacer.component';

const defaultProps = {
  line: true,
  height: 2,
};
const setup = (props = {}, state = null) => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = shallow(<Spacer {...setupProps} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

test('renders without error', () => {
  const wrapper = setup();
  expect(wrapper).toBeTruthy();
});

test('renders correct number of spacers - 1', () => {
  const wrapper = setup({
    height: 1,
  });
  expect(wrapper.find('.reacket-spacer').length).toEqual(1);
});

test('renders correct number of spacers - 2', () => {
  const wrapper = setup({
    height: 2,
  });
  expect(wrapper.find('.reacket-spacer').length).toEqual(2);
});

test('renders correct number of spacers - 4', () => {
  const wrapper = setup({
    height: 4,
  });
  expect(wrapper.find('.reacket-spacer').length).toEqual(4);
});

test('does not throw warning with expected props', () => {
  TestUtil.checkProps(Spacer, defaultProps);
});
