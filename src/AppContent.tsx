import { memo } from "react";
import { OverlayContextProvider } from "./assets/contexts/site/overlay.context";
import Overlay from "./assets/components/site/share/modals/Overlay";
import Router from "./Router";
import { AuthContextProvider } from "./assets/contexts/share/auth.context";
import { MobileMenuContextProvider } from "./assets/contexts/site/mobileMenu.context";

const AppContent = memo(() => {
  return (
    <div
      id="app"
      className="font-iranyekanBakh overflow-x-hidden bg-custom-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 font-shabnam font-normal text-base select-none min-h-screen"
    >
      
        <OverlayContextProvider>
          <Overlay />

          <AuthContextProvider>
            <MobileMenuContextProvider>
              <Router />
            </MobileMenuContextProvider>
          </AuthContextProvider>
        </OverlayContextProvider>
    </div>
  );
});

export default AppContent;
