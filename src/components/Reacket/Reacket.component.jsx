import React, { useState } from 'react';
import './Reacket.styles.scss';
import PropTypes from 'prop-types';
import Round from '../Round/Round.component';
import Connector from '../Connector/Connector.component';
import RoundHeader from '../RoundHeader/RoundHeader.component';
import HighlightContext from '../../context/HighlightContext';

const Reacket = ({ matches }) => {
  const [highlightedPlayer, setHighlightedPlayer] = useState(null);
  const highlightContextValue = { highlightedPlayer, setHighlightedPlayer };
  const roundsObject = {};
  matches.forEach((match) => {
    const { round } = match;
    if (!roundsObject[round]) {
      roundsObject[round] = { round, matches: [] };
    }
    roundsObject[round].matches.push(match);
  });
  const rounds = Object.values(roundsObject).sort((a, b) => a.round - b.round);
  return (
    <div className="reacket">
      <div className="round-headers">
        {rounds.map((round) => {
          const jsx = [];
          jsx.push(
            <RoundHeader key={`${round}-header`} round={round.round} totalRounds={rounds.length} />,
          );
          return jsx;
        })}
      </div>
      <HighlightContext.Provider value={highlightContextValue}>
        <div className="rounds">
          {rounds.map((round, index) => {
            const jsx = [];
            const roundNumber = rounds.length - index;
            if (index > 0) {
              jsx.push(
                <Connector key={`${roundNumber}-c`} round={roundNumber} />,
              );
            }
            jsx.push(
              <Round
                key={`${roundNumber}-r`}
                firstRound={index === rounds.length - 1}
                lastRound={index === 0}
                matches={round.matches}
                round={round.round}
              />,
            );
            return jsx;
          })}
        </div>
      </HighlightContext.Provider>
    </div>
  );
};

Reacket.propTypes = {
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
};

export default Reacket;
