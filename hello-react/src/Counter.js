import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    const { count } = this.state;
    return (
      <button
        className="Counter"
        onClick={() => this.setState({ count: this.state.count + 1 })}
      >
        {count}
      </button>
    );
  }
}

export default Counter;
