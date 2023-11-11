import React from "react";
import { VisitorProvider } from "../modules/visitors/hooks";

const AppProvider: React.FC = ({ children }) => {
  return <VisitorProvider>{children}</VisitorProvider>;
};

export default AppProvider;
