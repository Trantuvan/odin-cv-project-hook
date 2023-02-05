function arrayReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'EDIT':
      break;

    case 'REMOVE':
      break;

    default:
      throw new Error('Unsupported action type: ' + action.type);
  }
}

export default arrayReducer;
