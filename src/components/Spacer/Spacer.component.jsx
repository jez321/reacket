import React from 'react';
import PropTypes from 'prop-types';
import './Spacer.styles.scss';

const Spacer = ({ line, height }) => {
  const spacers = [];
  for (let i = 0; i < height; i += 1) {
    spacers.push(
      <div key={i} className={`spacer ${line ? 'vertical-line' : ''}`}>
        &nbsp;
      </div>,
    );
  }
  return <>{spacers}</>;
};

Spacer.propTypes = {
  line: PropTypes.bool,
  height: PropTypes.number,
};

Spacer.defaultProps = {
  line: false,
  height: 1,
};

export default Spacer;
