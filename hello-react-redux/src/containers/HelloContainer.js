import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Hello from '../components/Hello';

function HelloContainer() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <Hello age={count} />
  );
}

export default HelloContainer;
