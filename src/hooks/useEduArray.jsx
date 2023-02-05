import { createContext, useContext, useMemo, useReducer } from 'react';
import arrayReducer from '../reducers';

const ADD = 'ADD';
const REMOVE = 'REMOVE';
const EDIT = 'EDIT';
const EduContext = createContext();

function EduArrayProvider(props) {
  const [state, dispatch] = useReducer(arrayReducer, []);
  const value = useMemo(() => [state, dispatch], [state]);
  return <EduContext.Provider value={value} {...props} />;
}

function useEduArray() {
  const context = useContext(EduContext);
  if (!context) {
    throw new Error('useEduItems must used within a EduContext');
  }
  const [state, dispatch] = context;

  return {
    state,
    dispatch,
  };
}

export { useEduArray, EduArrayProvider, ADD, REMOVE, EDIT };
