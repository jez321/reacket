import React, { useContext } from 'react';
import './player.styles.scss';
import HighlightContext from '../../context/HighlightContext';

const Player = ({ id, name, seed, score, winner }) => {
  const { highlightedPlayer, setHighlightedPlayer } = useContext(HighlightContext);
  return (
    <div onMouseEnter={ () => setHighlightedPlayer(id) } onMouseLeave={ () => setHighlightedPlayer(null) }  title={`${name} ${winner ? '(W)' : '(L)'}`} className={`player ${ winner ? 'winner' : '' } ${ highlightedPlayer === id ? 'highlighted' : '' }`}>
      <div className="player-seed">{seed}</div>
      <div className="player-name">{name}</div> 
      <div className="player-score">{score}</div>
    </div>
  );
};

export default Player;
