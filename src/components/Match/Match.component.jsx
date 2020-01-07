import React from 'react';
import PropTypes from 'prop-types';
import './Match.styles.scss';
import Player from '../Player/Player.component';

const Match = ({
  players, id, score,
}) => {
  const winnerIdx = score[0] > score[1] ? 0 : 1;
  return (
    <div className="match">
      <div className="match-id">
        {id}
      </div>
      <div className="players">
        {players.map(({ name, playerId = id, seed }, index) => (
          <Player
            key={playerId}
            id={playerId}
            name={name}
            seed={seed}
            score={score[index]}
            winner={index === winnerIdx}
          />
        ))}
      </div>
    </div>
  );
};

Match.propTypes = {
  id: PropTypes.number.isRequired,
  players: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number,
      name: PropTypes.string,
      seed: PropTypes.number,
    },
  )).isRequired,
  score: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Match;
