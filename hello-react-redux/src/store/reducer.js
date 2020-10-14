const initialState = { count: 0 };

export function reducer(state = initialState, action) {
  if (action.type === 'increment') {
    return {
      ...state, // les valeurs précédentes
      count: state.count + 1,
    };
  }

  return state;
}
