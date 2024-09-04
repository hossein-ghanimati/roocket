import { OverlayContext } from "@/assets/contexts/site/overlay.context"
import { memo, useContext } from "react"


const Overlay = memo(() => {
  const overlaySetting = useContext(OverlayContext)

  return (
    <div id="overlay" onClick={() => overlaySetting?.hideOverlay()} className={`z-30 w-full  h-full fixed top-0 right-0 bg-opacity-30  backdrop-blur-sm bg-gray-500 ${overlaySetting?.isOpen ? "" : "hidden"}`}></div>
  )
})

export default Overlay