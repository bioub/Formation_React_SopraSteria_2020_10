import React, { useState } from 'react';
import CounterContainer from '../containers/CounterContainer';
import HelloContainer from '../containers/HelloContainer';
import Counter from './Counter';
import Hello from './Hello';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div>
        <h2>Discussion intercomposants en passant par la hiérarchie</h2>
        <Counter count={count} onIncrement={() => setCount(count + 1)} />
        <Counter count={count} onIncrement={() => setCount(count + 1)} />
        <Hello age={count} />
      </div>
      <div>
        <h2>Discussion intercomposants en passant par Redux (connect)</h2>
        <CounterContainer />
        <CounterContainer />
        <HelloContainer />
      </div>
    </div>
  );
}

export default App;
