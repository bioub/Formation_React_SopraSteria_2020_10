import React from 'react';
import Item from './Item';

function List({ todos = [], onDelete }) {
  return (
    <div className="List">
      {todos.map((t) => <Item todo={t} key={t.id} onDelete={onDelete} />)}
    </div>
  );
}

export default List;
