import React, { Component } from 'react';
import styles from './Select.module.scss';

class Select extends Component {
  state = {
    open: false,
  };
  handleOpen = () => {
    this.setState({
      open: !this.state.open,
    })
  }
  handleClick = (item) => {
    this.props.onSelected(item);
    this.setState({
      open: false
    });
  };
  render() {
    const { items = ['A', 'B', 'C'], selected } = this.props;
    const { open } = this.state;

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
      <div className={styles.Select}>
        <div className="selected" onClick={this.handleOpen}>{selected}</div>
        {open && <div className="items">{jsx}</div>}
      </div>
    );
  }
}

export default Select;
