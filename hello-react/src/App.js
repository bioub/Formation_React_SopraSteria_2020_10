import React, { useState } from 'react';
import Clock from './Clock';
import Counter from './Counter';
import ExHelloWorld from './ExHelloWorld';
import ExMultiStateButton from './ExMultiStateButton';
import Hello from './Hello';
import Select from './Select';
import UserForm from './UserForm';
import ExTodoList from './ExTodoList';

// import logo from './logo.svg'
import './App.css';

import { ReactComponent as Logo } from './logo.svg'
import CounterContainer from './CounterContainer';

function App() {
  // state = {
  // selected: 'Orange',
  // showClock: true
  // }
  // const {selected} = this.state;
  // function setSelected(val) { this.setState({selected: value})}

  const [selected, setSelected] = useState('Orange'); // 1
  const [showClock, setShowClock] = useState(true); // 2

  return (
    <div className="App">
      {/* <img src={logo} alt="Logo CRA" /> */}
      <Logo />

      <Hello />
      <Hello name="Jean" age={35} />

      <button onClick={() => setShowClock(!showClock)}>{showClock ? 'Off' : 'On'}</button>
      {showClock && <Clock />}
      <Counter />
      <Counter />

      <CounterContainer />

      <UserForm />


      <ExHelloWorld />
      <ExMultiStateButton values={['Rouge', 'Orange', 'Bleu']} />

      {/* <Select /> */}
      <Select items={['Rouge', 'Orange', 'Bleu']} selected={selected} onSelected={setSelected} />
      <p>Vous avez choisi : {selected}</p>

      <ExTodoList />
    </div>
  );
}

export default App;
