import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usersFetchRequested } from '../store/actions';

function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  // equivalent à componentDidMount
  useEffect(() => {
    dispatch(usersFetchRequested())
  }, [dispatch]);

  const liJsx = users.items.map((u) => <li key={u.id}>{u.name}</li>);

  return (
    <div className="Users">
      {users.loading ? <div>Loading...</div> : <ul>{liJsx}</ul>}
    </div>
  );
}

export default Users;
