import React from 'react';
import './App.scss';
import Reacket from './components/reacket/reacket.component';
const data = require('./data/testData.json');

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Tournament bracket</h1>
      </header>
      <main>
        <Reacket data={data} />
      </main>
    </div>
  );
}

export default App;
