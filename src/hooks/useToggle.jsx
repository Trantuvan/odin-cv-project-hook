import React, { createContext, useContext, useMemo, useReducer } from 'react';

const ToggleContext = createContext();

function toggleReducer(state, action) {
  switch (action.type) {
    case 'SHOW_FORM_1':
      if (state.showForm1 === true) {
        return { showForm1: false, showForm2: false, showForm3: false };
      } else {
        return { showForm1: true, showForm2: false, showForm3: false };
      }

    case 'SHOW_FORM_2':
      if (state.showForm2 === true) {
        return { showForm1: false, showForm2: false, showForm3: false };
      } else {
        return { showForm1: false, showForm2: true, showForm3: false };
      }

    case 'SHOW_FORM_3':
      if (state.showForm3 === true) {
        return { showForm1: false, showForm2: false, showForm3: false };
      } else {
        return { showForm1: false, showForm2: false, showForm3: true };
      }

    default:
      throw new Error('Unsupported action type: ' + action.type);
  }
}

function ToggleProvider(props) {
  const [state, dispatch] = useReducer(toggleReducer, {
    showForm1: true,
    showForm2: false,
    showForm3: false,
  });
  const value = useMemo(() => [state, dispatch], [state]);
  return <ToggleContext.Provider value={value} {...props} />;
}

function useToggle() {
  const context = useContext(ToggleContext);

  if (!context) {
    throw new Error('useToggle must used within a toggleContext');
  }
  const [state, dispatch] = context;

  const toggleForm1 = () => dispatch({ type: 'SHOW_FORM_1' });
  const toggleForm2 = () => dispatch({ type: 'SHOW_FORM_2' });
  const toggleForm3 = () => dispatch({ type: 'SHOW_FORM_3' });

  return {
    state,
    toggleForm1,
    toggleForm2,
    toggleForm3,
  };
}

export { ToggleProvider, useToggle };
