import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer.js';
//Initial State
const initialState = {
  transactions: [],
};
// Create context

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  //Action
  function deleteTransaction(transaction) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: transaction,
    });
  }
  function addTransaction(id) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: id,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
