import React from 'react';

function Item({todo}) {
  return (
    <div className="Item">
      <input type="checkbox" defaultChecked={todo.completed} />
      <span>{todo.title}</span>
      <button>-</button>
    </div>
  );
}

export default Item;
