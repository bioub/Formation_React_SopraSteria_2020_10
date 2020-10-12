import React, { Component } from 'react';

class ExMultiStateButton extends Component {
  state = {
    index: 0,
  };
  handleClick = () => {
    const { values = ['On', 'Off'] } = this.props;
    this.setState({
      index: (this.state.index + 1) % values.length,
    });
  }
  render() {
    const { index } = this.state;
    const { values = ['On', 'Off'] } = this.props;

    const value = values[index];
    return (
      <button
        className="ExMultiStateButton"
        onClick={this.handleClick}
      >
        {value}
      </button>
    );
  }
}

export default ExMultiStateButton;
