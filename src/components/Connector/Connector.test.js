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

test('does not throw warning with expected props', () => {
  TestUtil.checkProps(Connector, defaultProps);
});
