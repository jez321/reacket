import React, { useState } from 'react';
import './reacket.styles.scss';
import Round from '../round/round.component';
import Connector from '../connector/connector.component';
import RoundHeader from '../round-header/round-header.component';
import HighlightContext from '../../context/HighlightContext';

const Reacket = ({ data }) => {
  const [highlightedPlayer, setHighlightedPlayer] = useState(null);
  const highlightContextValue = { highlightedPlayer, setHighlightedPlayer };
  const roundsObject = {};
  data.match.forEach(match => {
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
            <RoundHeader round={round.round} totalRounds={rounds.length} />
          );
          return jsx;
        })}
      </div>
      <HighlightContext.Provider value={ highlightContextValue }>
        <div className="rounds">
          {rounds.map((round, index) => {
            const jsx = [];
            if (index > 0) {
              jsx.push(
                <Connector key={`${index}-c`} round={rounds.length - index} />
              );
            }
            jsx.push(
              <Round
                key={`${index}-r`}
                firstRound={index === rounds.length - 1}
                lastRound={index === 0}
                matches={round.matches}
                round={round.round}
              />
            );
            return jsx;
          })}
        </div>
      </HighlightContext.Provider>
    </div>
  );
};

export default Reacket;
