import { memo } from "react"
import { OverlayContextProvider } from "./assets/contexts/site/overlay.context"
import ScrollToTop from "./ScrollToTop"
import Overlay from "./assets/components/site/share/modals/Overlay"
import Router from "./Router"
import { AuthContextProvider } from "./assets/contexts/share/auth.context"

const AppContent = memo(() => {
  return (
    <div
        id="app"
        className="font-iranyekanBakh overflow-x-hidden bg-custom-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 font-shabnam font-normal text-base select-none min-h-screen"
      >
        <ScrollToTop/>
        
        <OverlayContextProvider>
          <Overlay />

          <AuthContextProvider>
            <Router />
          </AuthContextProvider>
        </OverlayContextProvider>
      </div>
  )
})

export default AppContent