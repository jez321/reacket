import React from 'react';
import PropTypes from 'prop-types';
import './RoundHeader.styles.scss';

const getRoundHeaderText = (round, totalRounds) => {
  if (round === totalRounds) {
    return 'Finals';
  } if (round === totalRounds - 1) {
    return 'Semi-finals';
  }
  return `Round ${round}`;
};
const RoundHeader = ({ round, totalRounds }) => (
  <div className={`reacket-round-header 
    ${round === totalRounds ? 'reacket-last-round' : ''}`}
  >
    {getRoundHeaderText(round, totalRounds)}
  </div>
);

RoundHeader.propTypes = {
  round: PropTypes.number.isRequired,
  totalRounds: PropTypes.number.isRequired,
};

export default RoundHeader;
