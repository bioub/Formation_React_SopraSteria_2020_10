import React from 'react';
import Clock from './Clock';
import Counter from './Counter';
import ExHelloWorld from './ExHelloWorld';
import ExMultiStateButton from './ExMultiStateButton';
import Hello from './Hello';
import UserForm from './UserForm';

function App() {
  return (
    <div className="App">
      <Hello />
      <Hello name="Jean" age={35} />

      <Clock />
      <Counter />
      <Counter />
      <Counter />

      <UserForm />


      <ExHelloWorld />
      <ExMultiStateButton values={['Rouge', 'Orange', 'Bleu']} />
    </div>
  );
}

export default App;
