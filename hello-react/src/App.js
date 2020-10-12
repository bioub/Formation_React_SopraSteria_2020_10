import React from 'react';
import Clock from './Clock';
import Counter from './Counter';
import Hello from './Hello';

function App() {
  return (
    <div className="App">
      <Hello />
      <Hello name="Jean" age={35} />

      <Clock />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
