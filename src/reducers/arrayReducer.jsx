import { ADD, EDIT, REMOVE } from '../hooks/useEduArray';

function arrayReducer(state, action) {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];

    case EDIT:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });

    case REMOVE:
      return state.filter((item) => item.id !== action.payload);

    default:
      throw new Error('Unsupported action type: ' + action.type);
  }
}

export default arrayReducer;
