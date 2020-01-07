import React from 'react';
import './App.scss';
import Reacket from './components/Reacket/Reacket.component';

const matches = require('./data/testData.json');

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Tournament bracket</h1>
      </header>
      <main>
        <Reacket matches={matches} />
      </main>
    </div>
  );
}

export default App;
