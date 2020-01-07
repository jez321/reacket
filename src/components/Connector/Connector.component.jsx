import React from 'react';
import PropTypes from 'prop-types';
import './Connector.styles.scss';
import Spacer from '../Spacer/Spacer.component';
// round = first round = 1
const Connector = ({ round }) => {
  const rightLines = 2 ** (round - 1);
  const leftLines = 2 ** round;

  const rightElements = [];
  const leftElements = [];

  for (let i = 0; i < rightLines; i += 1) {
    if (i > 0) {
      rightElements.push(<Spacer key={`${round}-${i}-s`} height={2} />);
    }
    rightElements.push(<div key={`${round}-${i}-l`} className="horizontal-line" />);
  }

  for (let i = 0; i < leftLines; i += 1) {
    if (i % 2) {
      leftElements.push(<Spacer key={`${round}-${i}-s`} line height={2} />);
    } else if (i > 0) {
      leftElements.push(<Spacer key={`${round}-${i}-s`} height={2} />);
    }
    leftElements.push(<div key={`${i}-l`} className="horizontal-line" />);
  }

  return (
    <div className="connectors">
      <div className="connector">
        <Spacer key={`${round}-l-t`} />
        {leftElements}
        <Spacer key={`${round}-l-b`} />
      </div>
      <div className="connector">
        <Spacer key={`${round}-r-t`} />
        {rightElements}
        <Spacer key={`${round}-r-b`} />
      </div>
    </div>
  );
};

Connector.propTypes = {
  round: PropTypes.number.isRequired,
};

export default Connector;
