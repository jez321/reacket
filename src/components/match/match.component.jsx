import React from 'react';
import './match.styles.scss';
import Player from '../player/player.component';

const Match = ({ players, id, seed, score }) => {
  const winnerIdx = score[0] > score[1] ? 0 : 1;
  return (
    <div className="match">
      <div className="match-id">
        {id}
      </div>
      <div className="players">
          {players.map(({ name, id, seed }, index) => (
            <Player key={id} id={id} name={name} seed={seed} score={score[index]} winner={index === winnerIdx}></Player>
          ))}
      </div>
    </div>
  );
};

export default Match;
