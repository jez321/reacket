import React from 'react';
import './round-header.styles.scss';

const getRoundHeaderText = (round, totalRounds) => {
  if (round === totalRounds) {
    return 'Finals';
  } else if (round === totalRounds - 1) {
    return 'Semi-finals';
 } else {
   return `Round ${round}`;
 }
}
const RoundHeader = ({ round, totalRounds }) => {
  return <div className={`round-header ${ round === totalRounds ? 'last-round' : ''}`}>{getRoundHeaderText(round, totalRounds)}</div>;
};

export default RoundHeader;
