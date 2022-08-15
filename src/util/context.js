import { createContext, useReducer,useContext } from "react";
import { intialState, reducer } from "./reducer";

const dataContext = createContext();

export const ContextWrapper = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, intialState);
  return (
    <dataContext.Provider value={{ data, dispatch }}>
      {children}
    </dataContext.Provider>
  );
};

export const useData = () => useContext(dataContext);
