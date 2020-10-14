import React from 'react';

function Item({todo, onDelete}) {
  return (
    <div className="Item">
      <input type="checkbox" defaultChecked={todo.completed} />
      <span>{todo.title}</span>
      <button onClick={() => onDelete(todo)}>-</button>
    </div>
  );
}

export default Item;
