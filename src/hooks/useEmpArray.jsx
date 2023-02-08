import { createContext, useContext, useMemo, useReducer } from 'react';
import arrayReducer from '../reducers';

const ADD = 'ADD';
const REMOVE = 'REMOVE';
const EDIT = 'EDIT';
const EmpContext = createContext();

function EmpArrayProvider(props) {
  const [state, dispatch] = useReducer(arrayReducer, []);
  const value = useMemo(() => [state, dispatch], [state]);
  return <EmpContext.Provider value={value} {...props} />;
}

function useEmpArray() {
  const context = useContext(EmpContext);
  if (!context) {
    throw new Error('useEduItems must used within a EduContext');
  }
  const [state, dispatch] = context;

  return {
    state,
    dispatch,
  };
}

export { useEmpArray, EmpArrayProvider, ADD, REMOVE, EDIT };
