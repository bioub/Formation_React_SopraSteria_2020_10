import React, { Component } from 'react';

// class CounterControlled extends Component {
//   constructor(props) {
//     super();
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     this.props.onIncrement(this.props.count + 1);
//   }
//   render() {
//     console.log('render counter');
//     const { count } = this.props;
//     return (
//       <button className="Counter" onClick={this.handleClick}>
//         {count}
//       </button>
//     );
//   }
// }

function CounterControlled({ count, onIncrement }) {
  console.log('render counter');
  return (
    <button className="Counter" onClick={() => onIncrement()}>
      {count}
    </button>
  );
}

export default CounterControlled;

// addEventListener('click', () => {}, true);
// addEventListener('click', () => {}, {capture: true});
// removeEventListener()
