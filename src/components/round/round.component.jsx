import React from 'react';
import './round.styles.scss';
import Match from '../match/match.component';
import Spacer from '../spacer/spacer.component';

const Round = ({ lastRound, firstRound, matches, round }) => {
  const matchElements = [];
  if (!firstRound && !lastRound) {
    matchElements.push(<Spacer key={`${round}-fs`} />);
  }
  matches.map((match, index) => {
    if (!firstRound && !lastRound && index > 0) {
      matchElements.push(<Spacer key={`${match.id}-s`} height="2" />);
    }
    matchElements.push(
      <Match key={match.id} seed={match.seed} score={match.score} id={match.id} players={match.players} />
    );
    return matchElements;
  });
  if (!firstRound && !lastRound) {
    matchElements.push(<Spacer key={`${round}-ls`} />);
  }
  return <div className="round">{matchElements}</div>;
};

export default Round;
