import React, { useState } from "react";

export const CtaContext = React.createContext();

const CtaProvider = ({ children }) => {
  const [currentFormData, setCurrentFormData] = useState({
    name: "",
    firstName: "",
    company: "",
    email: "",
    description: "",
  });
  const [currentCtaNumber, setCurrentCtaNumber] = useState(0);

  return (
    <CtaContext.Provider
      value={{
        currentCtaNumber,
        setCurrentCtaNumber,
        currentFormData,
        setCurrentFormData,
      }}
    >
      {children}
    </CtaContext.Provider>
  );
};

export default CtaProvider;
