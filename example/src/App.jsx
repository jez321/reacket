import React from 'react';
import './App.styles.css';
import Reacket from 'reacket';

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
