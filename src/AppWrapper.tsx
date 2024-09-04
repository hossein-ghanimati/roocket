
import React, { memo, useContext } from "react";

import "./assets/styles/tailwind/output.css";
import { ThemeContext } from "./assets/contexts/site/theme.context";
import AppContent from "./AppContent";

const AppWrapper: React.FC = memo((): JSX.Element => {
  const themeSetting = useContext(ThemeContext);
  
  return (
    <div 
      id="app-wrapper"
      className={`${themeSetting?.isDark ? "dark" : ""}`}
    >
      <AppContent/>
    </div>
  );
});

export default AppWrapper;
