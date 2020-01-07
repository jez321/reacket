import React from 'react';
import './connector.styles.scss';
import Spacer from '../spacer/spacer.component';
// round = first round = 1
const Connector = ({ round }) => {
  const rightLines = Math.pow(2, round - 1);
  const leftLines = Math.pow(2, round);

  const rightElements = [];
  const leftElements = [];

  for (let i = 0; i < rightLines; i++) {
    if (i > 0) {
      rightElements.push(<Spacer key={`${i}-s`} height="2" />);
    }
    rightElements.push(<div key={`${i}-l`} className="horizontal-line"></div>);
  }

  for (let i = 0; i < leftLines; i++) {
    if (i % 2) {
      leftElements.push(<Spacer key={`${i}-s`} line height="2" />);
    } else if (i > 0) {
      leftElements.push(<Spacer key={`${i}-s`} height="2" />);
    }
    leftElements.push(<div key={`${i}-l`} className="horizontal-line"></div>);
  }

  return (
    <div className="connectors">
      <div className="connector">
        <Spacer />
        {leftElements}
        <Spacer />
      </div>
      <div className="connector">
        <Spacer />
        {rightElements}
        <Spacer />
      </div>
    </div>
  );
};

export default Connector;
