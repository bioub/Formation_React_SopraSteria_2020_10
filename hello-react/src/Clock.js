import React, { Component } from 'react';

// stateless component => function component
// stateful component => class component

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      format: 'HH:mm:ss',
      now: new Date(),
    };
    setInterval(() => {
      // this.state.now = new Date();

      // mergeState / assignState
      // => Object.assign
      this.setState({
        now: new Date(),
      });
    }, 1000);
  }
  render() {
    const { now, format } = this.state;
    // this.props (pas via le param d'entrée)
    return (
      <div className="Clock Select">
        {now.toLocaleTimeString()} au format {format}
      </div>
    );
  }
}

export default Clock;
