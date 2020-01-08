import React from 'react';
import { shallow } from 'enzyme';
import TestUtil from '../../test/testUtil';
import Connector from './Connector.component';

const defaultProps = {
  round: 2,
};
const setup = (props = {}, state = null) => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = shallow(<Connector {...setupProps} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

test('renders without error', () => {
  const wrapper = setup();
  expect(wrapper).toBeTruthy();
});

test('renders correct lines for finals', () => {
  const wrapper = setup({
    round: 1,
  });
  expect(TestUtil.findByDataTestAttrVal(wrapper, 'connector-left').find('.horizontal-line').length).toEqual(2);
  expect(TestUtil.findByDataTestAttrVal(wrapper, 'connector-right').find('.horizontal-line').length).toEqual(1);
});

test('renders correct lines for semi-finals', () => {
  const wrapper = setup({
    round: 2,
  });
  expect(TestUtil.findByDataTestAttrVal(wrapper, 'connector-left').find('.horizontal-line').length).toEqual(4);
  expect(TestUtil.findByDataTestAttrVal(wrapper, 'connector-right').find('.horizontal-line').length).toEqual(2);
});

test('renders correct lines for round 3', () => {
  const wrapper = setup({
    round: 3,
  });
  expect(TestUtil.findByDataTestAttrVal(wrapper, 'connector-left').find('.horizontal-line').length).toEqual(8);
  expect(TestUtil.findByDataTestAttrVal(wrapper, 'connector-right').find('.horizontal-line').length).toEqual(4);
});

test('does not throw warning with expected props', () => {
  TestUtil.checkProps(Connector, defaultProps);
});
