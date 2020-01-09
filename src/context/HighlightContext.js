import React from 'react';

const HighlightContext = React.createContext({
  highlightedPlayer: null,
  setHighlightedPlayer: () => { },
});

export default HighlightContext;
