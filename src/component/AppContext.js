// AppContext.js
import React, { createContext, useState } from 'react';

// Create a context
const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    // Initial state
    // Define your initial state values here
    isUserLogin: false,
    userProfile: {},
    currentDiscussion:{}
  });

  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
