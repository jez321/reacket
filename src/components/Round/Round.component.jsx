import React from 'react';
import PropTypes from 'prop-types';
import './Round.styles.scss';
import Match from '../Match/Match.component';
import Spacer from '../Spacer/Spacer.component';

const Round = ({
  lastRound, firstRound, matches, round,
}) => {
  const matchElements = [];
  if (!firstRound && !lastRound) {
    matchElements.push(<Spacer key={`${round}-fs`} />);
  }
  matches.map((match, index) => {
    if (!firstRound && !lastRound && index > 0) {
      matchElements.push(<Spacer key={`${match.id}-s`} height={2} />);
    }
    matchElements.push(
      <Match key={match.id} score={match.score} id={match.id} players={match.players} />,
    );
    return matchElements;
  });
  if (!firstRound && !lastRound) {
    matchElements.push(<Spacer key={`${round}-ls`} />);
  }
  return <div className="round">{matchElements}</div>;
};

Round.propTypes = {
  lastRound: PropTypes.bool,
  firstRound: PropTypes.bool,
  matches: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    round: PropTypes.number.isRequired,
    match: PropTypes.number.isRequired,
    players: PropTypes.arrayOf(PropTypes.shape(
      {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        seed: PropTypes.number.isRequired,
      },
    )),
    score: PropTypes.arrayOf(PropTypes.number.isRequired),
  })).isRequired,
  round: PropTypes.number.isRequired,
};

Round.defaultProps = {
  lastRound: false,
  firstRound: false,
};

export default Round;
