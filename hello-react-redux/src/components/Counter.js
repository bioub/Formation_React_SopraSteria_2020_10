import React from 'react';

function Counter({ count, onIncrement }) {
  return (
    <button className="Counter" onClick={() => onIncrement(count + 1)}>
      {count}
    </button>
  );
}

export default Counter;