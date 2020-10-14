// import { createStore } from 'redux';
const { createStore } = require('redux');

// le store est un objet qui contient le state global de l'app

// Pure function
// - prédictive : appelée avec les mêmes params elle le même retour
// prédictive : sum(1, 2) === 3, non-prédictive: Math.random() === ???
// - elle n'a pas de side effect (console.log, requete ajax, localstorage)
// - ne modifie pas ses paramètres d'entrée
function reducer(state = { count: 0 }, action) {
  if (action.type === 'increment') {
    return {
      count: state.count + 1,
    };
  }

  return state;
}

/** @type {import('redux').Store} */
const store = createStore(reducer);

// équivalent à un addEventListener global
store.subscribe(() => {
  console.log('state', store.getState());
});

// équivalent à dispatchEvent
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'unknown' });
store.dispatch({ type: 'unknown' });
store.dispatch({ type: 'unknown' });
store.dispatch({ type: 'unknown' });
