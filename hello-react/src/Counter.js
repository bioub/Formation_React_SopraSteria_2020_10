import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    console.log('render counter');
    const { count } = this.state;
    return (
      <button className="Counter" onClick={this.handleClick}>
        {count}
      </button>
    );
  }
}

export default Counter;

// addEventListener('click', () => {}, true);
// addEventListener('click', () => {}, {capture: true});
// removeEventListener()
