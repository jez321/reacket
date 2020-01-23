import React, { useState } from 'react';
import './index.styles.scss';
import PropTypes from 'prop-types';
import Round from './components/Round/Round.component';
import Connector from './components/Connector/Connector.component';
import RoundHeader from './components/RoundHeader/RoundHeader.component';
import HighlightContext from './context/HighlightContext';
import convertMatchesToRounds from './util/convertMatchesToRounds';

const Reacket = ({ matches }) => {
  const [highlightedPlayer, setHighlightedPlayer] = useState(null);
  const highlightContextValue = { highlightedPlayer, setHighlightedPlayer };
  const rounds = convertMatchesToRounds(matches);
  return (
    <div className="reacket">
      <div className="reacket-round-headers">
        {rounds.map((round) => {
          const jsx = [];
          jsx.push(
            <RoundHeader key={`${round}-header`} round={round.round} totalRounds={rounds.length} />,
          );
          return jsx;
        })}
      </div>
      <HighlightContext.Provider value={highlightContextValue}>
        <div className="reacket-rounds">
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
