import { useRoutes } from "react-router-dom";
import React, { memo, useContext } from "react";

import "./assets/styles/tailwind/output.css";
import routes from "./routes/routes";
import { OverlayContexProvider } from "./assets/contexes/site/overlay.contex";
import Overlay from "./assets/components/site/share/modals/Overlay";
import { ThemeContext } from "./assets/contexes/site/theme.context";

const App: React.FC = memo((): JSX.Element => {
  const router = useRoutes(routes);
  const themeSetting = useContext(ThemeContext);
  return (
    <div 
      id="app-wrapper"
      className={`${themeSetting?.isDark ? "dark" : ""}`}
    >
      <div
        id="app"
        className="font-iranyekanBakh overflow-x-hidden bg-custom-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 font-shabnam font-normal text-base select-none min-h-screen"
      >
        <OverlayContexProvider>
          <Overlay />
          {router}
        </OverlayContexProvider>
      </div>
    </div>
  );
});

export default App;
