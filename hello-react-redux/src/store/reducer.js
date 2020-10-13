export function reducer(state = { count: 0 }, action) {
  if (action.type === 'increment') {
    return {
      count: state.count + 1,
    };
  }

  return state;
}
