import React, { Component } from 'react';

class Select extends Component {
  state = {
    open: false,
    selected: undefined,
  };
  handleOpen = () => {
    this.setState({
      open: !this.state.open,
    })
  }
  handleClick = (item) => {
    this.setState({
      selected: item,
      open: false
    });
  };
  render() {
    const { items = ['A', 'B', 'C'] } = this.props;
    const { open, selected = items[0] } = this.state;

    const jsx = items.map((it) => (
      <div className="item" key={it} onClick={(event) => this.handleClick(it)}>
        {it}
      </div>
    ));

    // let jsxItems;

    // if (open) {
    //   jsxItems = <div className="items">{jsx}</div>;
    // }

    return (
      <div className="Select">
        <div className="selected" onClick={this.handleOpen}>{selected}</div>
        {open && <div className="items">{jsx}</div>}
      </div>
    );
  }
}

export default Select;
