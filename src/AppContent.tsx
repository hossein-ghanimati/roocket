import { memo } from "react"
import { OverlayContexProvider } from "./assets/contexes/site/overlay.contex"
import ScrollToTop from "./ScrollToTop"
import Overlay from "./assets/components/site/share/modals/Overlay"
import Router from "./Router"

const AppContent = memo(() => {
  return (
    <div
        id="app"
        className="font-iranyekanBakh overflow-x-hidden bg-custom-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 font-shabnam font-normal text-base select-none min-h-screen"
      >
        <OverlayContexProvider>
          <ScrollToTop/>
          <Overlay />
          <Router />
        </OverlayContexProvider>
      </div>
  )
})

export default AppContent