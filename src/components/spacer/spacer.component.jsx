import React, { Fragment } from 'react';
import './spacer.styles.scss';

const Spacer = ({ line, height = 1 }) => {
  const spacers = [];
  for (let i = 0; i < height; i++) {
    spacers.push(
      <div key={i} className={`spacer ${line ? 'vertical-line' : ''}`}>
        &nbsp;
      </div>
    );
  }
  return <Fragment>{spacers}</Fragment>;
};

export default Spacer;
