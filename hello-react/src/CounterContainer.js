import React, { Component } from 'react';
import Counter from './Counter';
import CounterControlled from './CounterControlled';
import Hello from './Hello';

class CounterContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      count: 10,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  handleChange(event) {
    this.setState({
      count: Number(event.target.value)
    });
  }
  handleIncrement(count) {
    this.setState({
      count /* count: count */
    });
  }
  render() {
    const { count } = this.state;
    return (
      <div className="CounterContainer" onClick={this.handleClick}>
        <Counter count={count} />
        <CounterControlled count={count} onIncrement={this.handleIncrement} />
        <Hello name="Romain" age={count} />
        <input type="number" value={count} onChange={this.handleChange} />
      </div>
    );
  }
}

export default CounterContainer;

// addEventListener('click', () => {}, true);
// addEventListener('click', () => {}, {capture: true});
// removeEventListener()
