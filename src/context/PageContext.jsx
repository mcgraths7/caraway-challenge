import React, {useState} from "react";

export const PageContext = React.createContext();

const PageProvider = ({ children }) => {
  const [activePage, setActivePage] = useState(0);

  return (
    <PageContext.Provider
      value={{
        activePage,
        setActivePage,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export default PageProvider;
