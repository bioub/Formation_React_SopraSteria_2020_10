// import { createStore } from 'redux';
const { createStore } = require('redux');

// le store est un objet qui contient le state global de l'app


// constants
const INCREMENT = 'INCREMENT';

// Pure function
// - prédictive : appelée avec les mêmes params elle le même retour
// prédictive : sum(1, 2) === 3, non-prédictive: Math.random() === ???
// - elle n'a pas de side effect (console.log, requete ajax, localstorage)
// - ne modifie pas ses paramètres d'entrée
function reducer(state = { count: 0 }, action) {
  if (action.type === INCREMENT) {
    return {
      count: state.count + 1,
    };
  }

  return state;
}

/** @type {import('redux').Store} */
const store = createStore(reducer);

function countSelector(state) {
  return state.cout;
}

// équivalent à un addEventListener global
store.subscribe(() => {
  console.log('state', store.getState());
  console.log('count', countSelector(store.getState()));
});

function increment() {
  return {
    type: INCREMENT
  }
}

// FSA : Flux Standard Action
// { type: '', payload: '' }
// { type: '', payload: new Error(), error: true }
// { type: '', payload: '', meta: 'todolist:1' }

// function todoAdd(title) {
//   return {
//     type: TODO_ADD,
//     payload: {
//       id: Math.random(),
//       title,
//       completed: false,
//     },
//   };
// }


// équivalent à dispatchEvent
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch({ type: 'unknown' });
store.dispatch({ type: 'unknown' });
store.dispatch({ type: 'unknown' });
store.dispatch({ type: 'unknown' });
