import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './Player.styles.scss';
import HighlightContext from '../../context/HighlightContext';

const Player = ({
  id, name, seed, score, winner,
}) => {
  const { highlightedPlayer, setHighlightedPlayer } = useContext(HighlightContext);
  return (
    <div
      onMouseEnter={() => setHighlightedPlayer(id)}
      onMouseLeave={() => setHighlightedPlayer(null)}
      title={`${name} ${winner ? '(W)' : '(L)'}`}
      className={`player ${winner ? 'winner' : ''} ${highlightedPlayer === id ? 'highlighted' : ''}`}
    >
      <div className="player-seed">{seed}</div>
      <div className="player-name">{name}</div>
      <div className="player-score">{score}</div>
    </div>
  );
};

Player.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  seed: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  winner: PropTypes.bool.isRequired,
};

export default Player;
