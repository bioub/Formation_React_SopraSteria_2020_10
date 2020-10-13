import React from 'react';
import { useSelector } from 'react-redux';

function HelloContainer() {
  const count = useSelector((state) => state.count);

  return (
    <div className="Hello">
      Hello I have {count}
    </div>
  );
}

export default HelloContainer;
