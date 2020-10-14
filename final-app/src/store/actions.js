import { createAction } from '@reduxjs/toolkit';

// export function todoChange(payload) {
//   return {
//     type: TODO_CHANGE,
//     payload,
//   };
// }

export const todoChange = createAction('TODO_CHANGE');

// export function todoAdd(title) {
//   return {
//     type: TODO_ADD,
//     payload: {
//       id: Math.random(),
//       title,
//       completed: false,
//     },
//   };
// }

export const todoAdd = createAction('TODO_ADD', (title) => ({
  payload: {
    id: Math.random(),
    title,
    completed: false,
  },
}));



export const usersFetchSuccess = createAction('USERS_FETCH_SUCCESS');
export const usersFetch = createAction('USERS_FETCH');

// thunk : une fonction qui retourne une fonction
export function usersFetchRequested() {
  return (dispatch, getState) => {
    const state = getState();

    // cache
    if (state.users.items.length) {
      return;
    }

    dispatch(usersFetch());
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => dispatch(usersFetchSuccess(data)));
  }
}
