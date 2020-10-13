import React from 'react';
import Item from './Item';

function List({ todos = [] }) {
  return (
    <div className="List">
      {todos.map((t) => <Item todo={t} key={t.id} />)}
    </div>
  );
}

export default List;
