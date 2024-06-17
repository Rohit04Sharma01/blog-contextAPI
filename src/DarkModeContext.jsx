import { createContext, useContext, useState } from "react";

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [isFakeDark, setIsFakeDark] = useState(false);
  return (
    <DarkModeContext.Provider value={{ isFakeDark, setIsFakeDark }}>
      {children}
    </DarkModeContext.Provider>
  );
};

const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("PostContext was used outside of the PostProvider");
  return context;
};

export { DarkModeProvider, useDarkMode };
