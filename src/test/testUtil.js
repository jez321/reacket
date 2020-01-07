
import checkPropTypes from 'check-prop-types';

class TestUtil {
  static findByDataTestAttrVal(wrapper, val) {
    return wrapper.find(`[data-test="${val}"]`);
  }

  static checkProps(component, props) {
    const propError = checkPropTypes(
      component.propTypes,
      props,
      'prop',
      component.name,
    );
    expect(propError).toBeUndefined();
  }
}

export default TestUtil;
