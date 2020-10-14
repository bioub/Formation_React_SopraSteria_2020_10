import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { todoAdd, todoChange, usersFetch, usersFetchSuccess } from './actions';

const initialState = {
  newTodo: 'Achet',
  todos: [
    {
      id: 1,
      title: 'Acheter du pain',
      completed: false,
    },
    {
      id: 2,
      title: 'Aller au sport',
      completed: true,
    },
    {
      id: 3,
      title: 'Utiliser Redux',
      completed: false,
    },
  ],
  users: {
    loading: false,
    items: [],
  }
};

// export function newTodoReducer(state = initialState.newTodo, action) {
//   switch (action.type) {
//     case todoChange.type:
//       return action.payload;
//     default:
//       return state;
//   }
// }

export const newTodoReducer = createReducer(initialState.newTodo, {
  [todoChange]: (state, action) => action.payload,
});

// export function todosReducer(state = initialState.todos, action) {
//   switch (action.type) {
//     case todoAdd.type:
//       return [
//         ...state,
//         action.payload,
//       ];
//     default:
//       return state;
//   }
// }

export const todosReducer = createReducer(initialState.todos, {
  [todoAdd]: (state, action) => [...state, action.payload],
});

// export function reducer(state = initialState, action) {
//   switch (action.type) {
//     case todoChange.type:
//       return {
//         ...state,
//         newTodo: newTodoReducer(state.newTodo, action),
//       };
//     case todoAdd.type:
//       return {
//         ...state,
//         todos: todosReducer(state.todos, action),
//       };
//     default:
//       return state;
//   }
// }

export const usersReducer = createReducer(initialState.users, {
  [usersFetch]: (state, action) => ({
    ...state,
    loading: true,
  }),
  [usersFetchSuccess]: (state, action) => ({
    ...state,
    loading: false,
    items: action.payload,
  }),
});


export const reducer = combineReducers({
  newTodo: newTodoReducer,
  todos: todosReducer,
  users: usersReducer,
});

// export const reducer = createReducer(initialState, {
//   [todoChange]: (state, action) => ({
//     ...state,
//     newTodo: action.payload,
//   }),
//   [todoAdd]: (state, action) => ({
//     ...state,
//     todos: [
//       ...state.todos,
//       action.payload,
//     ],
//   }),
// });
