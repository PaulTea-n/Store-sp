import SelectViewContext from "./SelectViewContext";
import { useState } from "react";

const SelectViewContextProvider = ({ children }) => {
  const [currentView, setCurrentView] = useState("CARDS");

  return (
    <SelectViewContext.Provider value={{ currentView, setCurrentView }}>
      {children}
    </SelectViewContext.Provider>
  );
};

export default SelectViewContextProvider;
