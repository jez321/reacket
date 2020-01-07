import React from 'react';

const HighlightContext = React.createContext({
  highlightedPlayer: null,
  setHightlightedPlayer: () => { },
});

export default HighlightContext;
