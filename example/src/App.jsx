import React from 'react';
import Reacket from 'reacket';
import './App.styles.css';
import './reacket.theme.css';

const matches = require('./data/testData.json');

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Reacket example tournament bracket</h1>
      </header>
      <main>
        <Reacket matches={matches} />
      </main>
    </div>
  );
}

export default App;
